<script lang="ts">
	import Head from "$lib/components/Head.svelte";
	import { onMount } from "svelte";
	import io from "socket.io-client";
	import type { Socket } from "socket.io-client";
	import Navbar from "$lib/components/Navbar.svelte";

	interface ChatMessage {
		username: string;
		text: string;
	}

	let socket: Socket;
	let messages: ChatMessage[] = [];
	let newMessage = "";
	let username = "";
	let setusername = "";

	onMount(() => {
		socket = io(`https://aluben-assets.onrender.com/`);

		socket.on("chat message", (msg: ChatMessage) => {
			messages = [...messages, msg];
		});
	});

	function sendMessage(): void {
		if (newMessage.trim() && username.trim()) {
			socket.emit("chat message", { username, text: newMessage });
			newMessage = "";
		}
	}

	function handleKeyPress(event: KeyboardEvent): void {
		if (event.key === "Enter") {
			sendMessage();
		}
	}

	function handleUsername(): void {
		username = setusername;
	}
</script>

<Head />

<!-- body content -->

<Navbar />
<main>
	<h1>Aluben Chat</h1>
	<p>
		Welcome to Aluben Chat, the one place where you can help each other or
		wreck havoc. No moderation, no nothing.
	</p>
	{#if !username}
		<div>
			<input bind:value={setusername} placeholder="Enter your username" />
			<button on:click={handleUsername}>Join Chat</button>
		</div>
	{:else}
		<h1>Chatroom</h1>
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
			/>
			<button on:click={sendMessage}>Send</button>
		</div>
	{/if}
</main>

<style>
	.chat-container {
		height: 400px;
		overflow-y: auto;
		border: 1px solid #ccc;
		padding: 10px;
		margin-bottom: 10px;
	}
	.input-container {
		display: flex;
	}
	input {
		flex-grow: 1;
		margin-right: 10px;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		margin-bottom: 5px;
	}
</style>