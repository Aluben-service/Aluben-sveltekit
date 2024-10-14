<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import io from "socket.io-client";
	import type { Socket } from "socket.io-client";

	let socket: Socket;
	let messages: { username: string; text: string }[] = [];
	let newMessage = "";
	let username = "";
	let setUsername = ""; // Changed to camelCase for consistency
	let isConnected = false;

	onMount(async () => {
		socket = io("https://aluben-assets.onrender.com/");

		socket.on("connect", () => {
			isConnected = true;
		});

		socket.on("disconnect", () => {
			isConnected = false;
		});

		socket.on("chat message", (msg: { username: string; text: string }) => {
			messages = [...messages, msg];
			// Auto-scroll to bottom when new message arrives
			setTimeout(() => {
				const chatContainer = document.querySelector(".chat-container");
				if (chatContainer) {
					chatContainer.scrollTop = chatContainer.scrollHeight;
				}
			}, 0);
		});
	});
	if (!isConnected) fetch("https://aluben-assets.onrender.com/");
	onDestroy(() => {
		if (socket) {
			socket.disconnect();
		}
	});

	function joinChat() {
		if (setUsername.trim()) {
			username = setUsername.trim();
		}
	}

	function sendMessage() {
		if (newMessage.trim() && username.trim() && isConnected) {
			socket.emit("chat message", { username, text: newMessage.trim() });
			newMessage = "";
		}
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === "Enter") {
			if (!username) {
				joinChat();
			} else {
				sendMessage();
			}
		}
	}
</script>

<main>
	<h1>Aluben Chat</h1>
	<p>
		Welcome to Aluben Chat, the one place where you can help each other or
		wreak havoc. No moderation, no nothing.
	</p>
	{#if !username}
		<div class="input-container">
			<input
				bind:value={setUsername}
				placeholder="Enter your username"
				on:keypress={handleKeyPress}
			/>
			<button on:click={joinChat}>Join Chat</button>
		</div>
	{:else}
		<h2>Chatroom</h2>
		{#if !isConnected}
			<p class="error">
				Disconnected from server. Trying to reconnect...
			</p>
		{/if}
		<div class="chat-container">
			<ul>
				{#each messages as msg}
					<li><strong>{msg.username}:</strong> {msg.text}</li>
				{/each}
			</ul>
		</div>
		<div class="input-container">
			<input
				bind:value={newMessage}
				on:keypress={handleKeyPress}
				placeholder="Type a message..."
				disabled={!isConnected}
			/>
			<button on:click={sendMessage} disabled={!isConnected}>Send</button>
		</div>
	{/if}
</main>

<style>
	@import url("/assets/css/chat.scss");
</style>
