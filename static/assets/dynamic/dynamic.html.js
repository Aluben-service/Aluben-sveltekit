"use strict";
(() => {
	var we = {
		encode(e, t) {
			return !e || !e.toString()
				? e
				: e
						.split(", ")
						.map((a) =>
							a
								.split(" ")
								.map((s, c) =>
									c == 0
										? t.url.encode(s, t.baseURL || t.meta)
										: s,
								)
								.join(" "),
						)
						.join(", ");
		},
		decode(e) {
			return e;
		},
	};
	var Y = class {
		constructor(t, a) {
			this.Original = null;
			this.Original = t;
			var s = this;
			(this.Original.attribs = new Proxy(this.Original.attribs || {}, {
				set: (c, T, l) => {
					var m = (c[T] = l);
					return (
						(s.Original.attrs = Object.keys(c).map((_) => ({
							name: _,
							value: c[_] + "",
						}))),
						m || m + " "
					);
				},
				deleteProperty: (c, T) => {
					var l = delete c[T];
					return (
						(s.Original.attrs = Object.keys(c).map((m) => ({
							name: m,
							value: c[m],
						}))),
						l
					);
				},
			})),
				(this.ctx = a);
		}
		getAttribute(t) {
			return this.Original.attribs
				? typeof this.Original.attribs[t] > "u"
					? null
					: this.Original.attribs[t].trim()
				: !1;
		}
		setAttribute(t, a) {
			return this.Original.attribs ? (this.Original.attribs[t] = a) : !1;
		}
		removeAttribute(t) {
			return this.Original.attribs ? delete this.Original.attribs[t] : !1;
		}
		hasAttribute(t) {
			return this.Original.attribs
				? this.Original.attribs.hasOwnProperty(t)
				: !1;
		}
	};
	function be(e, t, a, s, c = "", T = !1, l = "") {
		if (self.__dynamic$config)
			var m = self.__dynamic$config.mode == "development";
		else var m = !1;
		if (T) {
			var _ = [
				{
					nodeName: "script",
					tagName: "script",
					namespaceURI: "http://www.w3.org/1999/xhtml",
					childNodes: [],
					attrs: [
						{
							name: "src",
							value:
								e +
								(m
									? "?" +
										Math.floor(Math.random() * 89999 + 1e4)
									: ""),
						},
					],
				},
				{
					nodeName: "script",
					tagName: "script",
					namespaceURI: "http://www.w3.org/1999/xhtml",
					childNodes: [],
					attrs: [
						{
							name: "src",
							value:
								t +
								(m
									? "?" +
										Math.floor(Math.random() * 89999 + 1e4)
									: ""),
						},
					],
				},
			];
			return (
				this.ctx.config.assets.files.inject &&
					_.unshift({
						nodeName: "script",
						tagName: "script",
						namespaceURI: "http://www.w3.org/1999/xhtml",
						childNodes: [],
						attrs: [
							{
								name: "src",
								value:
									this.ctx.config.assets.files.inject +
									(m
										? "?" +
											Math.floor(
												Math.random() * 89999 + 1e4,
											)
										: ""),
							},
						],
					}),
				s &&
					_.unshift({
						nodeName: "script",
						tagName: "script",
						namespaceURI: "http://www.w3.org/1999/xhtml",
						childNodes: [],
						attrs: [
							{
								name: "src",
								value:
									"data:application/javascript;base64," +
									btoa(
										`self.__dynamic$cookies = atob("${btoa(s)}");document.currentScript?.remove();`,
									),
							},
						],
					}),
				c &&
					_.unshift({
						nodeName: "script",
						tagName: "script",
						namespaceURI: "http://www.w3.org/1999/xhtml",
						childNodes: [],
						attrs: [
							{
								name: "src",
								value:
									"data:application/javascript;base64," +
									btoa(
										c +
											";document.currentScript?.remove();",
									),
							},
						],
					}),
				l &&
					_.unshift({
						nodeName: "script",
						tagName: "script",
						namespaceURI: "http://www.w3.org/1999/xhtml",
						childNodes: [],
						attrs: [
							{
								name: "src",
								value:
									"data:application/javascript;base64," +
									btoa(
										l +
											";document.currentScript?.remove();",
									),
							},
						],
					}),
				_
			);
		} else {
			var f = [
				`<script src="${t + (m ? "?" + Math.floor(Math.random() * 89999 + 1e4) : "")}"><\/script>`,
				`<script src="${e + (m ? "?" + Math.floor(Math.random() * 89999 + 1e4) : "")}"><\/script>`,
			];
			return (
				this.ctx.config.assets.files.inject &&
					f.unshift(
						`<script src="${this.ctx.config.assets.files.inject + (m ? "?" + Math.floor(Math.random() * 89999 + 1e4) : "")}"><\/script>`,
					),
				s &&
					f.unshift(
						`<script src="${"data:application/javascript;base64," + btoa(`self.__dynamic$cookies = atob("${btoa(s)}");document.currentScript?.remove();`)}"><\/script>`,
					),
				c &&
					f.unshift(
						`<script src="${"data:application/javascript;base64," + btoa(c + ";document.currentScript?.remove();")}"><\/script>`,
					),
				l &&
					f.unshift(
						`<script src="${"data:application/javascript;base64," + btoa(l + ";document.currentScript?.remove();")}"><\/script>`,
					),
				f
			);
		}
	}
	var yt = new Set([
			65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143,
			327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287,
			589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431,
			851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575,
			1114110, 1114111,
		]),
		C = "\uFFFD",
		r;
	(function (e) {
		(e[(e.EOF = -1)] = "EOF"),
			(e[(e.NULL = 0)] = "NULL"),
			(e[(e.TABULATION = 9)] = "TABULATION"),
			(e[(e.CARRIAGE_RETURN = 13)] = "CARRIAGE_RETURN"),
			(e[(e.LINE_FEED = 10)] = "LINE_FEED"),
			(e[(e.FORM_FEED = 12)] = "FORM_FEED"),
			(e[(e.SPACE = 32)] = "SPACE"),
			(e[(e.EXCLAMATION_MARK = 33)] = "EXCLAMATION_MARK"),
			(e[(e.QUOTATION_MARK = 34)] = "QUOTATION_MARK"),
			(e[(e.NUMBER_SIGN = 35)] = "NUMBER_SIGN"),
			(e[(e.AMPERSAND = 38)] = "AMPERSAND"),
			(e[(e.APOSTROPHE = 39)] = "APOSTROPHE"),
			(e[(e.HYPHEN_MINUS = 45)] = "HYPHEN_MINUS"),
			(e[(e.SOLIDUS = 47)] = "SOLIDUS"),
			(e[(e.DIGIT_0 = 48)] = "DIGIT_0"),
			(e[(e.DIGIT_9 = 57)] = "DIGIT_9"),
			(e[(e.SEMICOLON = 59)] = "SEMICOLON"),
			(e[(e.LESS_THAN_SIGN = 60)] = "LESS_THAN_SIGN"),
			(e[(e.EQUALS_SIGN = 61)] = "EQUALS_SIGN"),
			(e[(e.GREATER_THAN_SIGN = 62)] = "GREATER_THAN_SIGN"),
			(e[(e.QUESTION_MARK = 63)] = "QUESTION_MARK"),
			(e[(e.LATIN_CAPITAL_A = 65)] = "LATIN_CAPITAL_A"),
			(e[(e.LATIN_CAPITAL_F = 70)] = "LATIN_CAPITAL_F"),
			(e[(e.LATIN_CAPITAL_X = 88)] = "LATIN_CAPITAL_X"),
			(e[(e.LATIN_CAPITAL_Z = 90)] = "LATIN_CAPITAL_Z"),
			(e[(e.RIGHT_SQUARE_BRACKET = 93)] = "RIGHT_SQUARE_BRACKET"),
			(e[(e.GRAVE_ACCENT = 96)] = "GRAVE_ACCENT"),
			(e[(e.LATIN_SMALL_A = 97)] = "LATIN_SMALL_A"),
			(e[(e.LATIN_SMALL_F = 102)] = "LATIN_SMALL_F"),
			(e[(e.LATIN_SMALL_X = 120)] = "LATIN_SMALL_X"),
			(e[(e.LATIN_SMALL_Z = 122)] = "LATIN_SMALL_Z"),
			(e[(e.REPLACEMENT_CHARACTER = 65533)] = "REPLACEMENT_CHARACTER");
	})((r = r || (r = {})));
	var g = {
		DASH_DASH: "--",
		CDATA_START: "[CDATA[",
		DOCTYPE: "doctype",
		SCRIPT: "script",
		PUBLIC: "public",
		SYSTEM: "system",
	};
	function te(e) {
		return e >= 55296 && e <= 57343;
	}
	function ve(e) {
		return e >= 56320 && e <= 57343;
	}
	function Ye(e, t) {
		return (e - 55296) * 1024 + 9216 + t;
	}
	function ue(e) {
		return (
			(e !== 32 &&
				e !== 10 &&
				e !== 13 &&
				e !== 9 &&
				e !== 12 &&
				e >= 1 &&
				e <= 31) ||
			(e >= 127 && e <= 159)
		);
	}
	function ae(e) {
		return (e >= 64976 && e <= 65007) || yt.has(e);
	}
	var d;
	(function (e) {
		(e.controlCharacterInInputStream = "control-character-in-input-stream"),
			(e.noncharacterInInputStream = "noncharacter-in-input-stream"),
			(e.surrogateInInputStream = "surrogate-in-input-stream"),
			(e.nonVoidHtmlElementStartTagWithTrailingSolidus =
				"non-void-html-element-start-tag-with-trailing-solidus"),
			(e.endTagWithAttributes = "end-tag-with-attributes"),
			(e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus"),
			(e.unexpectedSolidusInTag = "unexpected-solidus-in-tag"),
			(e.unexpectedNullCharacter = "unexpected-null-character"),
			(e.unexpectedQuestionMarkInsteadOfTagName =
				"unexpected-question-mark-instead-of-tag-name"),
			(e.invalidFirstCharacterOfTagName =
				"invalid-first-character-of-tag-name"),
			(e.unexpectedEqualsSignBeforeAttributeName =
				"unexpected-equals-sign-before-attribute-name"),
			(e.missingEndTagName = "missing-end-tag-name"),
			(e.unexpectedCharacterInAttributeName =
				"unexpected-character-in-attribute-name"),
			(e.unknownNamedCharacterReference =
				"unknown-named-character-reference"),
			(e.missingSemicolonAfterCharacterReference =
				"missing-semicolon-after-character-reference"),
			(e.unexpectedCharacterAfterDoctypeSystemIdentifier =
				"unexpected-character-after-doctype-system-identifier"),
			(e.unexpectedCharacterInUnquotedAttributeValue =
				"unexpected-character-in-unquoted-attribute-value"),
			(e.eofBeforeTagName = "eof-before-tag-name"),
			(e.eofInTag = "eof-in-tag"),
			(e.missingAttributeValue = "missing-attribute-value"),
			(e.missingWhitespaceBetweenAttributes =
				"missing-whitespace-between-attributes"),
			(e.missingWhitespaceAfterDoctypePublicKeyword =
				"missing-whitespace-after-doctype-public-keyword"),
			(e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers =
				"missing-whitespace-between-doctype-public-and-system-identifiers"),
			(e.missingWhitespaceAfterDoctypeSystemKeyword =
				"missing-whitespace-after-doctype-system-keyword"),
			(e.missingQuoteBeforeDoctypePublicIdentifier =
				"missing-quote-before-doctype-public-identifier"),
			(e.missingQuoteBeforeDoctypeSystemIdentifier =
				"missing-quote-before-doctype-system-identifier"),
			(e.missingDoctypePublicIdentifier =
				"missing-doctype-public-identifier"),
			(e.missingDoctypeSystemIdentifier =
				"missing-doctype-system-identifier"),
			(e.abruptDoctypePublicIdentifier =
				"abrupt-doctype-public-identifier"),
			(e.abruptDoctypeSystemIdentifier =
				"abrupt-doctype-system-identifier"),
			(e.cdataInHtmlContent = "cdata-in-html-content"),
			(e.incorrectlyOpenedComment = "incorrectly-opened-comment"),
			(e.eofInScriptHtmlCommentLikeText =
				"eof-in-script-html-comment-like-text"),
			(e.eofInDoctype = "eof-in-doctype"),
			(e.nestedComment = "nested-comment"),
			(e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment"),
			(e.eofInComment = "eof-in-comment"),
			(e.incorrectlyClosedComment = "incorrectly-closed-comment"),
			(e.eofInCdata = "eof-in-cdata"),
			(e.absenceOfDigitsInNumericCharacterReference =
				"absence-of-digits-in-numeric-character-reference"),
			(e.nullCharacterReference = "null-character-reference"),
			(e.surrogateCharacterReference = "surrogate-character-reference"),
			(e.characterReferenceOutsideUnicodeRange =
				"character-reference-outside-unicode-range"),
			(e.controlCharacterReference = "control-character-reference"),
			(e.noncharacterCharacterReference =
				"noncharacter-character-reference"),
			(e.missingWhitespaceBeforeDoctypeName =
				"missing-whitespace-before-doctype-name"),
			(e.missingDoctypeName = "missing-doctype-name"),
			(e.invalidCharacterSequenceAfterDoctypeName =
				"invalid-character-sequence-after-doctype-name"),
			(e.duplicateAttribute = "duplicate-attribute"),
			(e.nonConformingDoctype = "non-conforming-doctype"),
			(e.missingDoctype = "missing-doctype"),
			(e.misplacedDoctype = "misplaced-doctype"),
			(e.endTagWithoutMatchingOpenElement =
				"end-tag-without-matching-open-element"),
			(e.closingOfElementWithOpenChildElements =
				"closing-of-element-with-open-child-elements"),
			(e.disallowedContentInNoscriptInHead =
				"disallowed-content-in-noscript-in-head"),
			(e.openElementsLeftAfterEof = "open-elements-left-after-eof"),
			(e.abandonedHeadElementChild = "abandoned-head-element-child"),
			(e.misplacedStartTagForHeadElement =
				"misplaced-start-tag-for-head-element"),
			(e.nestedNoscriptInHead = "nested-noscript-in-head"),
			(e.eofInElementThatCanContainOnlyText =
				"eof-in-element-that-can-contain-only-text");
	})((d = d || (d = {})));
	var vt = 65536,
		se = class {
			constructor(t) {
				(this.handler = t),
					(this.html = ""),
					(this.pos = -1),
					(this.lastGapPos = -2),
					(this.gapStack = []),
					(this.skipNextNewLine = !1),
					(this.lastChunkWritten = !1),
					(this.endOfChunkHit = !1),
					(this.bufferWaterline = vt),
					(this.isEol = !1),
					(this.lineStartPos = 0),
					(this.droppedBufferSize = 0),
					(this.line = 1),
					(this.lastErrOffset = -1);
			}
			get col() {
				return (
					this.pos -
					this.lineStartPos +
					+(this.lastGapPos !== this.pos)
				);
			}
			get offset() {
				return this.droppedBufferSize + this.pos;
			}
			getError(t) {
				let { line: a, col: s, offset: c } = this;
				return {
					code: t,
					startLine: a,
					endLine: a,
					startCol: s,
					endCol: s,
					startOffset: c,
					endOffset: c,
				};
			}
			_err(t) {
				this.handler.onParseError &&
					this.lastErrOffset !== this.offset &&
					((this.lastErrOffset = this.offset),
					this.handler.onParseError(this.getError(t)));
			}
			_addGap() {
				this.gapStack.push(this.lastGapPos),
					(this.lastGapPos = this.pos);
			}
			_processSurrogate(t) {
				if (this.pos !== this.html.length - 1) {
					let a = this.html.charCodeAt(this.pos + 1);
					if (ve(a)) return this.pos++, this._addGap(), Ye(t, a);
				} else if (!this.lastChunkWritten)
					return (this.endOfChunkHit = !0), r.EOF;
				return this._err(d.surrogateInInputStream), t;
			}
			willDropParsedChunk() {
				return this.pos > this.bufferWaterline;
			}
			dropParsedChunk() {
				this.willDropParsedChunk() &&
					((this.html = this.html.substring(this.pos)),
					(this.lineStartPos -= this.pos),
					(this.droppedBufferSize += this.pos),
					(this.pos = 0),
					(this.lastGapPos = -2),
					(this.gapStack.length = 0));
			}
			write(t, a) {
				this.html.length > 0 ? (this.html += t) : (this.html = t),
					(this.endOfChunkHit = !1),
					(this.lastChunkWritten = a);
			}
			insertHtmlAtCurrentPos(t) {
				(this.html =
					this.html.substring(0, this.pos + 1) +
					t +
					this.html.substring(this.pos + 1)),
					(this.endOfChunkHit = !1);
			}
			startsWith(t, a) {
				if (this.pos + t.length > this.html.length)
					return (this.endOfChunkHit = !this.lastChunkWritten), !1;
				if (a) return this.html.startsWith(t, this.pos);
				for (let s = 0; s < t.length; s++)
					if (
						(this.html.charCodeAt(this.pos + s) | 32) !==
						t.charCodeAt(s)
					)
						return !1;
				return !0;
			}
			peek(t) {
				let a = this.pos + t;
				if (a >= this.html.length)
					return (this.endOfChunkHit = !this.lastChunkWritten), r.EOF;
				let s = this.html.charCodeAt(a);
				return s === r.CARRIAGE_RETURN ? r.LINE_FEED : s;
			}
			advance() {
				if (
					(this.pos++,
					this.isEol &&
						((this.isEol = !1),
						this.line++,
						(this.lineStartPos = this.pos)),
					this.pos >= this.html.length)
				)
					return (this.endOfChunkHit = !this.lastChunkWritten), r.EOF;
				let t = this.html.charCodeAt(this.pos);
				return t === r.CARRIAGE_RETURN
					? ((this.isEol = !0),
						(this.skipNextNewLine = !0),
						r.LINE_FEED)
					: t === r.LINE_FEED &&
						  ((this.isEol = !0), this.skipNextNewLine)
						? (this.line--,
							(this.skipNextNewLine = !1),
							this._addGap(),
							this.advance())
						: ((this.skipNextNewLine = !1),
							te(t) && (t = this._processSurrogate(t)),
							this.handler.onParseError === null ||
								(t > 31 && t < 127) ||
								t === r.LINE_FEED ||
								t === r.CARRIAGE_RETURN ||
								(t > 159 && t < 64976) ||
								this._checkForProblematicCharacters(t),
							t);
			}
			_checkForProblematicCharacters(t) {
				ue(t)
					? this._err(d.controlCharacterInInputStream)
					: ae(t) && this._err(d.noncharacterInInputStream);
			}
			retreat(t) {
				for (this.pos -= t; this.pos < this.lastGapPos; )
					(this.lastGapPos = this.gapStack.pop()), this.pos--;
				this.isEol = !1;
			}
		};
	var A;
	(function (e) {
		(e[(e.CHARACTER = 0)] = "CHARACTER"),
			(e[(e.NULL_CHARACTER = 1)] = "NULL_CHARACTER"),
			(e[(e.WHITESPACE_CHARACTER = 2)] = "WHITESPACE_CHARACTER"),
			(e[(e.START_TAG = 3)] = "START_TAG"),
			(e[(e.END_TAG = 4)] = "END_TAG"),
			(e[(e.COMMENT = 5)] = "COMMENT"),
			(e[(e.DOCTYPE = 6)] = "DOCTYPE"),
			(e[(e.EOF = 7)] = "EOF"),
			(e[(e.HIBERNATION = 8)] = "HIBERNATION");
	})((A = A || (A = {})));
	function re(e, t) {
		for (let a = e.attrs.length - 1; a >= 0; a--)
			if (e.attrs[a].name === t) return e.attrs[a].value;
		return null;
	}
	var x = new Uint16Array(
		'\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'
			.split("")
			.map((e) => e.charCodeAt(0)),
	);
	var Qe = new Uint16Array(
		"\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022"
			.split("")
			.map((e) => e.charCodeAt(0)),
	);
	var Ne,
		Qt = new Map([
			[0, 65533],
			[128, 8364],
			[130, 8218],
			[131, 402],
			[132, 8222],
			[133, 8230],
			[134, 8224],
			[135, 8225],
			[136, 710],
			[137, 8240],
			[138, 352],
			[139, 8249],
			[140, 338],
			[142, 381],
			[145, 8216],
			[146, 8217],
			[147, 8220],
			[148, 8221],
			[149, 8226],
			[150, 8211],
			[151, 8212],
			[152, 732],
			[153, 8482],
			[154, 353],
			[155, 8250],
			[156, 339],
			[158, 382],
			[159, 376],
		]),
		Ce =
			(Ne = String.fromCodePoint) !== null && Ne !== void 0
				? Ne
				: function (e) {
						let t = "";
						return (
							e > 65535 &&
								((e -= 65536),
								(t += String.fromCharCode(
									((e >>> 10) & 1023) | 55296,
								)),
								(e = 56320 | (e & 1023))),
							(t += String.fromCharCode(e)),
							t
						);
					};
	function Ie(e) {
		var t;
		return (e >= 55296 && e <= 57343) || e > 1114111
			? 65533
			: (t = Qt.get(e)) !== null && t !== void 0
				? t
				: e;
	}
	var R;
	(function (e) {
		(e[(e.NUM = 35)] = "NUM"),
			(e[(e.SEMI = 59)] = "SEMI"),
			(e[(e.EQUALS = 61)] = "EQUALS"),
			(e[(e.ZERO = 48)] = "ZERO"),
			(e[(e.NINE = 57)] = "NINE"),
			(e[(e.LOWER_A = 97)] = "LOWER_A"),
			(e[(e.LOWER_F = 102)] = "LOWER_F"),
			(e[(e.LOWER_X = 120)] = "LOWER_X"),
			(e[(e.LOWER_Z = 122)] = "LOWER_Z"),
			(e[(e.UPPER_A = 65)] = "UPPER_A"),
			(e[(e.UPPER_F = 70)] = "UPPER_F"),
			(e[(e.UPPER_Z = 90)] = "UPPER_Z");
	})(R || (R = {}));
	var Gt = 32,
		P;
	(function (e) {
		(e[(e.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
			(e[(e.BRANCH_LENGTH = 16256)] = "BRANCH_LENGTH"),
			(e[(e.JUMP_TABLE = 127)] = "JUMP_TABLE");
	})(P || (P = {}));
	function Re(e) {
		return e >= R.ZERO && e <= R.NINE;
	}
	function Xt(e) {
		return (
			(e >= R.UPPER_A && e <= R.UPPER_F) ||
			(e >= R.LOWER_A && e <= R.LOWER_F)
		);
	}
	function qt(e) {
		return (
			(e >= R.UPPER_A && e <= R.UPPER_Z) ||
			(e >= R.LOWER_A && e <= R.LOWER_Z) ||
			Re(e)
		);
	}
	function Wt(e) {
		return e === R.EQUALS || qt(e);
	}
	var I;
	(function (e) {
		(e[(e.EntityStart = 0)] = "EntityStart"),
			(e[(e.NumericStart = 1)] = "NumericStart"),
			(e[(e.NumericDecimal = 2)] = "NumericDecimal"),
			(e[(e.NumericHex = 3)] = "NumericHex"),
			(e[(e.NamedEntity = 4)] = "NamedEntity");
	})(I || (I = {}));
	var F;
	(function (e) {
		(e[(e.Legacy = 0)] = "Legacy"),
			(e[(e.Strict = 1)] = "Strict"),
			(e[(e.Attribute = 2)] = "Attribute");
	})(F || (F = {}));
	var Le = class {
		constructor(t, a, s) {
			(this.decodeTree = t),
				(this.emitCodePoint = a),
				(this.errors = s),
				(this.state = I.EntityStart),
				(this.consumed = 1),
				(this.result = 0),
				(this.treeIndex = 0),
				(this.excess = 1),
				(this.decodeMode = F.Strict);
		}
		startEntity(t) {
			(this.decodeMode = t),
				(this.state = I.EntityStart),
				(this.result = 0),
				(this.treeIndex = 0),
				(this.excess = 1),
				(this.consumed = 1);
		}
		write(t, a) {
			switch (this.state) {
				case I.EntityStart:
					return t.charCodeAt(a) === R.NUM
						? ((this.state = I.NumericStart),
							(this.consumed += 1),
							this.stateNumericStart(t, a + 1))
						: ((this.state = I.NamedEntity),
							this.stateNamedEntity(t, a));
				case I.NumericStart:
					return this.stateNumericStart(t, a);
				case I.NumericDecimal:
					return this.stateNumericDecimal(t, a);
				case I.NumericHex:
					return this.stateNumericHex(t, a);
				case I.NamedEntity:
					return this.stateNamedEntity(t, a);
			}
		}
		stateNumericStart(t, a) {
			return a >= t.length
				? -1
				: (t.charCodeAt(a) | Gt) === R.LOWER_X
					? ((this.state = I.NumericHex),
						(this.consumed += 1),
						this.stateNumericHex(t, a + 1))
					: ((this.state = I.NumericDecimal),
						this.stateNumericDecimal(t, a));
		}
		addToNumericResult(t, a, s, c) {
			if (a !== s) {
				let T = s - a;
				(this.result =
					this.result * Math.pow(c, T) + parseInt(t.substr(a, T), c)),
					(this.consumed += T);
			}
		}
		stateNumericHex(t, a) {
			let s = a;
			for (; a < t.length; ) {
				let c = t.charCodeAt(a);
				if (Re(c) || Xt(c)) a += 1;
				else
					return (
						this.addToNumericResult(t, s, a, 16),
						this.emitNumericEntity(c, 3)
					);
			}
			return this.addToNumericResult(t, s, a, 16), -1;
		}
		stateNumericDecimal(t, a) {
			let s = a;
			for (; a < t.length; ) {
				let c = t.charCodeAt(a);
				if (Re(c)) a += 1;
				else
					return (
						this.addToNumericResult(t, s, a, 10),
						this.emitNumericEntity(c, 2)
					);
			}
			return this.addToNumericResult(t, s, a, 10), -1;
		}
		emitNumericEntity(t, a) {
			var s;
			if (this.consumed <= a)
				return (
					(s = this.errors) === null ||
						s === void 0 ||
						s.absenceOfDigitsInNumericCharacterReference(
							this.consumed,
						),
					0
				);
			if (t === R.SEMI) this.consumed += 1;
			else if (this.decodeMode === F.Strict) return 0;
			return (
				this.emitCodePoint(Ie(this.result), this.consumed),
				this.errors &&
					(t !== R.SEMI &&
						this.errors.missingSemicolonAfterCharacterReference(),
					this.errors.validateNumericCharacterReference(this.result)),
				this.consumed
			);
		}
		stateNamedEntity(t, a) {
			let { decodeTree: s } = this,
				c = s[this.treeIndex],
				T = (c & P.VALUE_LENGTH) >> 14;
			for (; a < t.length; a++, this.excess++) {
				let l = t.charCodeAt(a);
				if (
					((this.treeIndex = pe(
						s,
						c,
						this.treeIndex + Math.max(1, T),
						l,
					)),
					this.treeIndex < 0)
				)
					return this.result === 0 ||
						(this.decodeMode === F.Attribute && (T === 0 || Wt(l)))
						? 0
						: this.emitNotTerminatedNamedEntity();
				if (
					((c = s[this.treeIndex]),
					(T = (c & P.VALUE_LENGTH) >> 14),
					T !== 0)
				) {
					if (l === R.SEMI)
						return this.emitNamedEntityData(
							this.treeIndex,
							T,
							this.consumed + this.excess,
						);
					this.decodeMode !== F.Strict &&
						((this.result = this.treeIndex),
						(this.consumed += this.excess),
						(this.excess = 0));
				}
			}
			return -1;
		}
		emitNotTerminatedNamedEntity() {
			var t;
			let { result: a, decodeTree: s } = this,
				c = (s[a] & P.VALUE_LENGTH) >> 14;
			return (
				this.emitNamedEntityData(a, c, this.consumed),
				(t = this.errors) === null ||
					t === void 0 ||
					t.missingSemicolonAfterCharacterReference(),
				this.consumed
			);
		}
		emitNamedEntityData(t, a, s) {
			let { decodeTree: c } = this;
			return (
				this.emitCodePoint(
					a === 1 ? c[t] & ~P.VALUE_LENGTH : c[t + 1],
					s,
				),
				a === 3 && this.emitCodePoint(c[t + 2], s),
				s
			);
		}
		end() {
			var t;
			switch (this.state) {
				case I.NamedEntity:
					return this.result !== 0 &&
						(this.decodeMode !== F.Attribute ||
							this.result === this.treeIndex)
						? this.emitNotTerminatedNamedEntity()
						: 0;
				case I.NumericDecimal:
					return this.emitNumericEntity(0, 2);
				case I.NumericHex:
					return this.emitNumericEntity(0, 3);
				case I.NumericStart:
					return (
						(t = this.errors) === null ||
							t === void 0 ||
							t.absenceOfDigitsInNumericCharacterReference(
								this.consumed,
							),
						0
					);
				case I.EntityStart:
					return 0;
			}
		}
	};
	function Ge(e) {
		let t = "",
			a = new Le(e, (s) => (t += Ce(s)));
		return function (c, T) {
			let l = 0,
				m = 0;
			for (; (m = c.indexOf("&", m)) >= 0; ) {
				(t += c.slice(l, m)), a.startEntity(T);
				let f = a.write(c, m + 1);
				if (f < 0) {
					l = m + a.end();
					break;
				}
				(l = m + f), (m = f === 0 ? l + 1 : l);
			}
			let _ = t + c.slice(l);
			return (t = ""), _;
		};
	}
	function pe(e, t, a, s) {
		let c = (t & P.BRANCH_LENGTH) >> 7,
			T = t & P.JUMP_TABLE;
		if (c === 0) return T !== 0 && s === T ? a : -1;
		if (T) {
			let _ = s - T;
			return _ < 0 || _ >= c ? -1 : e[a + _] - 1;
		}
		let l = a,
			m = l + c - 1;
		for (; l <= m; ) {
			let _ = (l + m) >>> 1,
				f = e[_];
			if (f < s) l = _ + 1;
			else if (f > s) m = _ - 1;
			else return e[_ + c];
		}
		return -1;
	}
	var ps = Ge(x),
		Os = Ge(Qe);
	var E;
	(function (e) {
		(e.HTML = "http://www.w3.org/1999/xhtml"),
			(e.MATHML = "http://www.w3.org/1998/Math/MathML"),
			(e.SVG = "http://www.w3.org/2000/svg"),
			(e.XLINK = "http://www.w3.org/1999/xlink"),
			(e.XML = "http://www.w3.org/XML/1998/namespace"),
			(e.XMLNS = "http://www.w3.org/2000/xmlns/");
	})((E = E || (E = {})));
	var B;
	(function (e) {
		(e.TYPE = "type"),
			(e.ACTION = "action"),
			(e.ENCODING = "encoding"),
			(e.PROMPT = "prompt"),
			(e.NAME = "name"),
			(e.COLOR = "color"),
			(e.FACE = "face"),
			(e.SIZE = "size");
	})((B = B || (B = {})));
	var p;
	(function (e) {
		(e.NO_QUIRKS = "no-quirks"),
			(e.QUIRKS = "quirks"),
			(e.LIMITED_QUIRKS = "limited-quirks");
	})((p = p || (p = {})));
	var o;
	(function (e) {
		(e.A = "a"),
			(e.ADDRESS = "address"),
			(e.ANNOTATION_XML = "annotation-xml"),
			(e.APPLET = "applet"),
			(e.AREA = "area"),
			(e.ARTICLE = "article"),
			(e.ASIDE = "aside"),
			(e.B = "b"),
			(e.BASE = "base"),
			(e.BASEFONT = "basefont"),
			(e.BGSOUND = "bgsound"),
			(e.BIG = "big"),
			(e.BLOCKQUOTE = "blockquote"),
			(e.BODY = "body"),
			(e.BR = "br"),
			(e.BUTTON = "button"),
			(e.CAPTION = "caption"),
			(e.CENTER = "center"),
			(e.CODE = "code"),
			(e.COL = "col"),
			(e.COLGROUP = "colgroup"),
			(e.DD = "dd"),
			(e.DESC = "desc"),
			(e.DETAILS = "details"),
			(e.DIALOG = "dialog"),
			(e.DIR = "dir"),
			(e.DIV = "div"),
			(e.DL = "dl"),
			(e.DT = "dt"),
			(e.EM = "em"),
			(e.EMBED = "embed"),
			(e.FIELDSET = "fieldset"),
			(e.FIGCAPTION = "figcaption"),
			(e.FIGURE = "figure"),
			(e.FONT = "font"),
			(e.FOOTER = "footer"),
			(e.FOREIGN_OBJECT = "foreignObject"),
			(e.FORM = "form"),
			(e.FRAME = "frame"),
			(e.FRAMESET = "frameset"),
			(e.H1 = "h1"),
			(e.H2 = "h2"),
			(e.H3 = "h3"),
			(e.H4 = "h4"),
			(e.H5 = "h5"),
			(e.H6 = "h6"),
			(e.HEAD = "head"),
			(e.HEADER = "header"),
			(e.HGROUP = "hgroup"),
			(e.HR = "hr"),
			(e.HTML = "html"),
			(e.I = "i"),
			(e.IMG = "img"),
			(e.IMAGE = "image"),
			(e.INPUT = "input"),
			(e.IFRAME = "iframe"),
			(e.KEYGEN = "keygen"),
			(e.LABEL = "label"),
			(e.LI = "li"),
			(e.LINK = "link"),
			(e.LISTING = "listing"),
			(e.MAIN = "main"),
			(e.MALIGNMARK = "malignmark"),
			(e.MARQUEE = "marquee"),
			(e.MATH = "math"),
			(e.MENU = "menu"),
			(e.META = "meta"),
			(e.MGLYPH = "mglyph"),
			(e.MI = "mi"),
			(e.MO = "mo"),
			(e.MN = "mn"),
			(e.MS = "ms"),
			(e.MTEXT = "mtext"),
			(e.NAV = "nav"),
			(e.NOBR = "nobr"),
			(e.NOFRAMES = "noframes"),
			(e.NOEMBED = "noembed"),
			(e.NOSCRIPT = "noscript"),
			(e.OBJECT = "object"),
			(e.OL = "ol"),
			(e.OPTGROUP = "optgroup"),
			(e.OPTION = "option"),
			(e.P = "p"),
			(e.PARAM = "param"),
			(e.PLAINTEXT = "plaintext"),
			(e.PRE = "pre"),
			(e.RB = "rb"),
			(e.RP = "rp"),
			(e.RT = "rt"),
			(e.RTC = "rtc"),
			(e.RUBY = "ruby"),
			(e.S = "s"),
			(e.SCRIPT = "script"),
			(e.SECTION = "section"),
			(e.SELECT = "select"),
			(e.SOURCE = "source"),
			(e.SMALL = "small"),
			(e.SPAN = "span"),
			(e.STRIKE = "strike"),
			(e.STRONG = "strong"),
			(e.STYLE = "style"),
			(e.SUB = "sub"),
			(e.SUMMARY = "summary"),
			(e.SUP = "sup"),
			(e.TABLE = "table"),
			(e.TBODY = "tbody"),
			(e.TEMPLATE = "template"),
			(e.TEXTAREA = "textarea"),
			(e.TFOOT = "tfoot"),
			(e.TD = "td"),
			(e.TH = "th"),
			(e.THEAD = "thead"),
			(e.TITLE = "title"),
			(e.TR = "tr"),
			(e.TRACK = "track"),
			(e.TT = "tt"),
			(e.U = "u"),
			(e.UL = "ul"),
			(e.SVG = "svg"),
			(e.VAR = "var"),
			(e.WBR = "wbr"),
			(e.XMP = "xmp");
	})((o = o || (o = {})));
	var u;
	(function (e) {
		(e[(e.UNKNOWN = 0)] = "UNKNOWN"),
			(e[(e.A = 1)] = "A"),
			(e[(e.ADDRESS = 2)] = "ADDRESS"),
			(e[(e.ANNOTATION_XML = 3)] = "ANNOTATION_XML"),
			(e[(e.APPLET = 4)] = "APPLET"),
			(e[(e.AREA = 5)] = "AREA"),
			(e[(e.ARTICLE = 6)] = "ARTICLE"),
			(e[(e.ASIDE = 7)] = "ASIDE"),
			(e[(e.B = 8)] = "B"),
			(e[(e.BASE = 9)] = "BASE"),
			(e[(e.BASEFONT = 10)] = "BASEFONT"),
			(e[(e.BGSOUND = 11)] = "BGSOUND"),
			(e[(e.BIG = 12)] = "BIG"),
			(e[(e.BLOCKQUOTE = 13)] = "BLOCKQUOTE"),
			(e[(e.BODY = 14)] = "BODY"),
			(e[(e.BR = 15)] = "BR"),
			(e[(e.BUTTON = 16)] = "BUTTON"),
			(e[(e.CAPTION = 17)] = "CAPTION"),
			(e[(e.CENTER = 18)] = "CENTER"),
			(e[(e.CODE = 19)] = "CODE"),
			(e[(e.COL = 20)] = "COL"),
			(e[(e.COLGROUP = 21)] = "COLGROUP"),
			(e[(e.DD = 22)] = "DD"),
			(e[(e.DESC = 23)] = "DESC"),
			(e[(e.DETAILS = 24)] = "DETAILS"),
			(e[(e.DIALOG = 25)] = "DIALOG"),
			(e[(e.DIR = 26)] = "DIR"),
			(e[(e.DIV = 27)] = "DIV"),
			(e[(e.DL = 28)] = "DL"),
			(e[(e.DT = 29)] = "DT"),
			(e[(e.EM = 30)] = "EM"),
			(e[(e.EMBED = 31)] = "EMBED"),
			(e[(e.FIELDSET = 32)] = "FIELDSET"),
			(e[(e.FIGCAPTION = 33)] = "FIGCAPTION"),
			(e[(e.FIGURE = 34)] = "FIGURE"),
			(e[(e.FONT = 35)] = "FONT"),
			(e[(e.FOOTER = 36)] = "FOOTER"),
			(e[(e.FOREIGN_OBJECT = 37)] = "FOREIGN_OBJECT"),
			(e[(e.FORM = 38)] = "FORM"),
			(e[(e.FRAME = 39)] = "FRAME"),
			(e[(e.FRAMESET = 40)] = "FRAMESET"),
			(e[(e.H1 = 41)] = "H1"),
			(e[(e.H2 = 42)] = "H2"),
			(e[(e.H3 = 43)] = "H3"),
			(e[(e.H4 = 44)] = "H4"),
			(e[(e.H5 = 45)] = "H5"),
			(e[(e.H6 = 46)] = "H6"),
			(e[(e.HEAD = 47)] = "HEAD"),
			(e[(e.HEADER = 48)] = "HEADER"),
			(e[(e.HGROUP = 49)] = "HGROUP"),
			(e[(e.HR = 50)] = "HR"),
			(e[(e.HTML = 51)] = "HTML"),
			(e[(e.I = 52)] = "I"),
			(e[(e.IMG = 53)] = "IMG"),
			(e[(e.IMAGE = 54)] = "IMAGE"),
			(e[(e.INPUT = 55)] = "INPUT"),
			(e[(e.IFRAME = 56)] = "IFRAME"),
			(e[(e.KEYGEN = 57)] = "KEYGEN"),
			(e[(e.LABEL = 58)] = "LABEL"),
			(e[(e.LI = 59)] = "LI"),
			(e[(e.LINK = 60)] = "LINK"),
			(e[(e.LISTING = 61)] = "LISTING"),
			(e[(e.MAIN = 62)] = "MAIN"),
			(e[(e.MALIGNMARK = 63)] = "MALIGNMARK"),
			(e[(e.MARQUEE = 64)] = "MARQUEE"),
			(e[(e.MATH = 65)] = "MATH"),
			(e[(e.MENU = 66)] = "MENU"),
			(e[(e.META = 67)] = "META"),
			(e[(e.MGLYPH = 68)] = "MGLYPH"),
			(e[(e.MI = 69)] = "MI"),
			(e[(e.MO = 70)] = "MO"),
			(e[(e.MN = 71)] = "MN"),
			(e[(e.MS = 72)] = "MS"),
			(e[(e.MTEXT = 73)] = "MTEXT"),
			(e[(e.NAV = 74)] = "NAV"),
			(e[(e.NOBR = 75)] = "NOBR"),
			(e[(e.NOFRAMES = 76)] = "NOFRAMES"),
			(e[(e.NOEMBED = 77)] = "NOEMBED"),
			(e[(e.NOSCRIPT = 78)] = "NOSCRIPT"),
			(e[(e.OBJECT = 79)] = "OBJECT"),
			(e[(e.OL = 80)] = "OL"),
			(e[(e.OPTGROUP = 81)] = "OPTGROUP"),
			(e[(e.OPTION = 82)] = "OPTION"),
			(e[(e.P = 83)] = "P"),
			(e[(e.PARAM = 84)] = "PARAM"),
			(e[(e.PLAINTEXT = 85)] = "PLAINTEXT"),
			(e[(e.PRE = 86)] = "PRE"),
			(e[(e.RB = 87)] = "RB"),
			(e[(e.RP = 88)] = "RP"),
			(e[(e.RT = 89)] = "RT"),
			(e[(e.RTC = 90)] = "RTC"),
			(e[(e.RUBY = 91)] = "RUBY"),
			(e[(e.S = 92)] = "S"),
			(e[(e.SCRIPT = 93)] = "SCRIPT"),
			(e[(e.SECTION = 94)] = "SECTION"),
			(e[(e.SELECT = 95)] = "SELECT"),
			(e[(e.SOURCE = 96)] = "SOURCE"),
			(e[(e.SMALL = 97)] = "SMALL"),
			(e[(e.SPAN = 98)] = "SPAN"),
			(e[(e.STRIKE = 99)] = "STRIKE"),
			(e[(e.STRONG = 100)] = "STRONG"),
			(e[(e.STYLE = 101)] = "STYLE"),
			(e[(e.SUB = 102)] = "SUB"),
			(e[(e.SUMMARY = 103)] = "SUMMARY"),
			(e[(e.SUP = 104)] = "SUP"),
			(e[(e.TABLE = 105)] = "TABLE"),
			(e[(e.TBODY = 106)] = "TBODY"),
			(e[(e.TEMPLATE = 107)] = "TEMPLATE"),
			(e[(e.TEXTAREA = 108)] = "TEXTAREA"),
			(e[(e.TFOOT = 109)] = "TFOOT"),
			(e[(e.TD = 110)] = "TD"),
			(e[(e.TH = 111)] = "TH"),
			(e[(e.THEAD = 112)] = "THEAD"),
			(e[(e.TITLE = 113)] = "TITLE"),
			(e[(e.TR = 114)] = "TR"),
			(e[(e.TRACK = 115)] = "TRACK"),
			(e[(e.TT = 116)] = "TT"),
			(e[(e.U = 117)] = "U"),
			(e[(e.UL = 118)] = "UL"),
			(e[(e.SVG = 119)] = "SVG"),
			(e[(e.VAR = 120)] = "VAR"),
			(e[(e.WBR = 121)] = "WBR"),
			(e[(e.XMP = 122)] = "XMP");
	})((u = u || (u = {})));
	var Kt = new Map([
		[o.A, u.A],
		[o.ADDRESS, u.ADDRESS],
		[o.ANNOTATION_XML, u.ANNOTATION_XML],
		[o.APPLET, u.APPLET],
		[o.AREA, u.AREA],
		[o.ARTICLE, u.ARTICLE],
		[o.ASIDE, u.ASIDE],
		[o.B, u.B],
		[o.BASE, u.BASE],
		[o.BASEFONT, u.BASEFONT],
		[o.BGSOUND, u.BGSOUND],
		[o.BIG, u.BIG],
		[o.BLOCKQUOTE, u.BLOCKQUOTE],
		[o.BODY, u.BODY],
		[o.BR, u.BR],
		[o.BUTTON, u.BUTTON],
		[o.CAPTION, u.CAPTION],
		[o.CENTER, u.CENTER],
		[o.CODE, u.CODE],
		[o.COL, u.COL],
		[o.COLGROUP, u.COLGROUP],
		[o.DD, u.DD],
		[o.DESC, u.DESC],
		[o.DETAILS, u.DETAILS],
		[o.DIALOG, u.DIALOG],
		[o.DIR, u.DIR],
		[o.DIV, u.DIV],
		[o.DL, u.DL],
		[o.DT, u.DT],
		[o.EM, u.EM],
		[o.EMBED, u.EMBED],
		[o.FIELDSET, u.FIELDSET],
		[o.FIGCAPTION, u.FIGCAPTION],
		[o.FIGURE, u.FIGURE],
		[o.FONT, u.FONT],
		[o.FOOTER, u.FOOTER],
		[o.FOREIGN_OBJECT, u.FOREIGN_OBJECT],
		[o.FORM, u.FORM],
		[o.FRAME, u.FRAME],
		[o.FRAMESET, u.FRAMESET],
		[o.H1, u.H1],
		[o.H2, u.H2],
		[o.H3, u.H3],
		[o.H4, u.H4],
		[o.H5, u.H5],
		[o.H6, u.H6],
		[o.HEAD, u.HEAD],
		[o.HEADER, u.HEADER],
		[o.HGROUP, u.HGROUP],
		[o.HR, u.HR],
		[o.HTML, u.HTML],
		[o.I, u.I],
		[o.IMG, u.IMG],
		[o.IMAGE, u.IMAGE],
		[o.INPUT, u.INPUT],
		[o.IFRAME, u.IFRAME],
		[o.KEYGEN, u.KEYGEN],
		[o.LABEL, u.LABEL],
		[o.LI, u.LI],
		[o.LINK, u.LINK],
		[o.LISTING, u.LISTING],
		[o.MAIN, u.MAIN],
		[o.MALIGNMARK, u.MALIGNMARK],
		[o.MARQUEE, u.MARQUEE],
		[o.MATH, u.MATH],
		[o.MENU, u.MENU],
		[o.META, u.META],
		[o.MGLYPH, u.MGLYPH],
		[o.MI, u.MI],
		[o.MO, u.MO],
		[o.MN, u.MN],
		[o.MS, u.MS],
		[o.MTEXT, u.MTEXT],
		[o.NAV, u.NAV],
		[o.NOBR, u.NOBR],
		[o.NOFRAMES, u.NOFRAMES],
		[o.NOEMBED, u.NOEMBED],
		[o.NOSCRIPT, u.NOSCRIPT],
		[o.OBJECT, u.OBJECT],
		[o.OL, u.OL],
		[o.OPTGROUP, u.OPTGROUP],
		[o.OPTION, u.OPTION],
		[o.P, u.P],
		[o.PARAM, u.PARAM],
		[o.PLAINTEXT, u.PLAINTEXT],
		[o.PRE, u.PRE],
		[o.RB, u.RB],
		[o.RP, u.RP],
		[o.RT, u.RT],
		[o.RTC, u.RTC],
		[o.RUBY, u.RUBY],
		[o.S, u.S],
		[o.SCRIPT, u.SCRIPT],
		[o.SECTION, u.SECTION],
		[o.SELECT, u.SELECT],
		[o.SOURCE, u.SOURCE],
		[o.SMALL, u.SMALL],
		[o.SPAN, u.SPAN],
		[o.STRIKE, u.STRIKE],
		[o.STRONG, u.STRONG],
		[o.STYLE, u.STYLE],
		[o.SUB, u.SUB],
		[o.SUMMARY, u.SUMMARY],
		[o.SUP, u.SUP],
		[o.TABLE, u.TABLE],
		[o.TBODY, u.TBODY],
		[o.TEMPLATE, u.TEMPLATE],
		[o.TEXTAREA, u.TEXTAREA],
		[o.TFOOT, u.TFOOT],
		[o.TD, u.TD],
		[o.TH, u.TH],
		[o.THEAD, u.THEAD],
		[o.TITLE, u.TITLE],
		[o.TR, u.TR],
		[o.TRACK, u.TRACK],
		[o.TT, u.TT],
		[o.U, u.U],
		[o.UL, u.UL],
		[o.SVG, u.SVG],
		[o.VAR, u.VAR],
		[o.WBR, u.WBR],
		[o.XMP, u.XMP],
	]);
	function k(e) {
		var t;
		return (t = Kt.get(e)) !== null && t !== void 0 ? t : u.UNKNOWN;
	}
	var h = u,
		Xe = {
			[E.HTML]: new Set([
				h.ADDRESS,
				h.APPLET,
				h.AREA,
				h.ARTICLE,
				h.ASIDE,
				h.BASE,
				h.BASEFONT,
				h.BGSOUND,
				h.BLOCKQUOTE,
				h.BODY,
				h.BR,
				h.BUTTON,
				h.CAPTION,
				h.CENTER,
				h.COL,
				h.COLGROUP,
				h.DD,
				h.DETAILS,
				h.DIR,
				h.DIV,
				h.DL,
				h.DT,
				h.EMBED,
				h.FIELDSET,
				h.FIGCAPTION,
				h.FIGURE,
				h.FOOTER,
				h.FORM,
				h.FRAME,
				h.FRAMESET,
				h.H1,
				h.H2,
				h.H3,
				h.H4,
				h.H5,
				h.H6,
				h.HEAD,
				h.HEADER,
				h.HGROUP,
				h.HR,
				h.HTML,
				h.IFRAME,
				h.IMG,
				h.INPUT,
				h.LI,
				h.LINK,
				h.LISTING,
				h.MAIN,
				h.MARQUEE,
				h.MENU,
				h.META,
				h.NAV,
				h.NOEMBED,
				h.NOFRAMES,
				h.NOSCRIPT,
				h.OBJECT,
				h.OL,
				h.P,
				h.PARAM,
				h.PLAINTEXT,
				h.PRE,
				h.SCRIPT,
				h.SECTION,
				h.SELECT,
				h.SOURCE,
				h.STYLE,
				h.SUMMARY,
				h.TABLE,
				h.TBODY,
				h.TD,
				h.TEMPLATE,
				h.TEXTAREA,
				h.TFOOT,
				h.TH,
				h.THEAD,
				h.TITLE,
				h.TR,
				h.TRACK,
				h.UL,
				h.WBR,
				h.XMP,
			]),
			[E.MATHML]: new Set([
				h.MI,
				h.MO,
				h.MN,
				h.MS,
				h.MTEXT,
				h.ANNOTATION_XML,
			]),
			[E.SVG]: new Set([h.TITLE, h.FOREIGN_OBJECT, h.DESC]),
			[E.XLINK]: new Set(),
			[E.XML]: new Set(),
			[E.XMLNS]: new Set(),
		};
	function ie(e) {
		return (
			e === h.H1 ||
			e === h.H2 ||
			e === h.H3 ||
			e === h.H4 ||
			e === h.H5 ||
			e === h.H6
		);
	}
	var Vt = new Set([
		o.STYLE,
		o.SCRIPT,
		o.XMP,
		o.IFRAME,
		o.NOEMBED,
		o.NOFRAMES,
		o.PLAINTEXT,
	]);
	function qe(e, t) {
		return Vt.has(e) || (t && e === o.NOSCRIPT);
	}
	var zt = new Map([
			[128, 8364],
			[130, 8218],
			[131, 402],
			[132, 8222],
			[133, 8230],
			[134, 8224],
			[135, 8225],
			[136, 710],
			[137, 8240],
			[138, 352],
			[139, 8249],
			[140, 338],
			[142, 381],
			[145, 8216],
			[146, 8217],
			[147, 8220],
			[148, 8221],
			[149, 8226],
			[150, 8211],
			[151, 8212],
			[152, 732],
			[153, 8482],
			[154, 353],
			[155, 8250],
			[156, 339],
			[158, 382],
			[159, 376],
		]),
		i;
	(function (e) {
		(e[(e.DATA = 0)] = "DATA"),
			(e[(e.RCDATA = 1)] = "RCDATA"),
			(e[(e.RAWTEXT = 2)] = "RAWTEXT"),
			(e[(e.SCRIPT_DATA = 3)] = "SCRIPT_DATA"),
			(e[(e.PLAINTEXT = 4)] = "PLAINTEXT"),
			(e[(e.TAG_OPEN = 5)] = "TAG_OPEN"),
			(e[(e.END_TAG_OPEN = 6)] = "END_TAG_OPEN"),
			(e[(e.TAG_NAME = 7)] = "TAG_NAME"),
			(e[(e.RCDATA_LESS_THAN_SIGN = 8)] = "RCDATA_LESS_THAN_SIGN"),
			(e[(e.RCDATA_END_TAG_OPEN = 9)] = "RCDATA_END_TAG_OPEN"),
			(e[(e.RCDATA_END_TAG_NAME = 10)] = "RCDATA_END_TAG_NAME"),
			(e[(e.RAWTEXT_LESS_THAN_SIGN = 11)] = "RAWTEXT_LESS_THAN_SIGN"),
			(e[(e.RAWTEXT_END_TAG_OPEN = 12)] = "RAWTEXT_END_TAG_OPEN"),
			(e[(e.RAWTEXT_END_TAG_NAME = 13)] = "RAWTEXT_END_TAG_NAME"),
			(e[(e.SCRIPT_DATA_LESS_THAN_SIGN = 14)] =
				"SCRIPT_DATA_LESS_THAN_SIGN"),
			(e[(e.SCRIPT_DATA_END_TAG_OPEN = 15)] = "SCRIPT_DATA_END_TAG_OPEN"),
			(e[(e.SCRIPT_DATA_END_TAG_NAME = 16)] = "SCRIPT_DATA_END_TAG_NAME"),
			(e[(e.SCRIPT_DATA_ESCAPE_START = 17)] = "SCRIPT_DATA_ESCAPE_START"),
			(e[(e.SCRIPT_DATA_ESCAPE_START_DASH = 18)] =
				"SCRIPT_DATA_ESCAPE_START_DASH"),
			(e[(e.SCRIPT_DATA_ESCAPED = 19)] = "SCRIPT_DATA_ESCAPED"),
			(e[(e.SCRIPT_DATA_ESCAPED_DASH = 20)] = "SCRIPT_DATA_ESCAPED_DASH"),
			(e[(e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21)] =
				"SCRIPT_DATA_ESCAPED_DASH_DASH"),
			(e[(e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22)] =
				"SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"),
			(e[(e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23)] =
				"SCRIPT_DATA_ESCAPED_END_TAG_OPEN"),
			(e[(e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24)] =
				"SCRIPT_DATA_ESCAPED_END_TAG_NAME"),
			(e[(e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25)] =
				"SCRIPT_DATA_DOUBLE_ESCAPE_START"),
			(e[(e.SCRIPT_DATA_DOUBLE_ESCAPED = 26)] =
				"SCRIPT_DATA_DOUBLE_ESCAPED"),
			(e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27)] =
				"SCRIPT_DATA_DOUBLE_ESCAPED_DASH"),
			(e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28)] =
				"SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"),
			(e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29)] =
				"SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"),
			(e[(e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30)] =
				"SCRIPT_DATA_DOUBLE_ESCAPE_END"),
			(e[(e.BEFORE_ATTRIBUTE_NAME = 31)] = "BEFORE_ATTRIBUTE_NAME"),
			(e[(e.ATTRIBUTE_NAME = 32)] = "ATTRIBUTE_NAME"),
			(e[(e.AFTER_ATTRIBUTE_NAME = 33)] = "AFTER_ATTRIBUTE_NAME"),
			(e[(e.BEFORE_ATTRIBUTE_VALUE = 34)] = "BEFORE_ATTRIBUTE_VALUE"),
			(e[(e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35)] =
				"ATTRIBUTE_VALUE_DOUBLE_QUOTED"),
			(e[(e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36)] =
				"ATTRIBUTE_VALUE_SINGLE_QUOTED"),
			(e[(e.ATTRIBUTE_VALUE_UNQUOTED = 37)] = "ATTRIBUTE_VALUE_UNQUOTED"),
			(e[(e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38)] =
				"AFTER_ATTRIBUTE_VALUE_QUOTED"),
			(e[(e.SELF_CLOSING_START_TAG = 39)] = "SELF_CLOSING_START_TAG"),
			(e[(e.BOGUS_COMMENT = 40)] = "BOGUS_COMMENT"),
			(e[(e.MARKUP_DECLARATION_OPEN = 41)] = "MARKUP_DECLARATION_OPEN"),
			(e[(e.COMMENT_START = 42)] = "COMMENT_START"),
			(e[(e.COMMENT_START_DASH = 43)] = "COMMENT_START_DASH"),
			(e[(e.COMMENT = 44)] = "COMMENT"),
			(e[(e.COMMENT_LESS_THAN_SIGN = 45)] = "COMMENT_LESS_THAN_SIGN"),
			(e[(e.COMMENT_LESS_THAN_SIGN_BANG = 46)] =
				"COMMENT_LESS_THAN_SIGN_BANG"),
			(e[(e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47)] =
				"COMMENT_LESS_THAN_SIGN_BANG_DASH"),
			(e[(e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48)] =
				"COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"),
			(e[(e.COMMENT_END_DASH = 49)] = "COMMENT_END_DASH"),
			(e[(e.COMMENT_END = 50)] = "COMMENT_END"),
			(e[(e.COMMENT_END_BANG = 51)] = "COMMENT_END_BANG"),
			(e[(e.DOCTYPE = 52)] = "DOCTYPE"),
			(e[(e.BEFORE_DOCTYPE_NAME = 53)] = "BEFORE_DOCTYPE_NAME"),
			(e[(e.DOCTYPE_NAME = 54)] = "DOCTYPE_NAME"),
			(e[(e.AFTER_DOCTYPE_NAME = 55)] = "AFTER_DOCTYPE_NAME"),
			(e[(e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56)] =
				"AFTER_DOCTYPE_PUBLIC_KEYWORD"),
			(e[(e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57)] =
				"BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"),
			(e[(e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58)] =
				"DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"),
			(e[(e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59)] =
				"DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"),
			(e[(e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60)] =
				"AFTER_DOCTYPE_PUBLIC_IDENTIFIER"),
			(e[(e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61)] =
				"BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"),
			(e[(e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62)] =
				"AFTER_DOCTYPE_SYSTEM_KEYWORD"),
			(e[(e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63)] =
				"BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"),
			(e[(e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64)] =
				"DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"),
			(e[(e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65)] =
				"DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"),
			(e[(e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66)] =
				"AFTER_DOCTYPE_SYSTEM_IDENTIFIER"),
			(e[(e.BOGUS_DOCTYPE = 67)] = "BOGUS_DOCTYPE"),
			(e[(e.CDATA_SECTION = 68)] = "CDATA_SECTION"),
			(e[(e.CDATA_SECTION_BRACKET = 69)] = "CDATA_SECTION_BRACKET"),
			(e[(e.CDATA_SECTION_END = 70)] = "CDATA_SECTION_END"),
			(e[(e.CHARACTER_REFERENCE = 71)] = "CHARACTER_REFERENCE"),
			(e[(e.NAMED_CHARACTER_REFERENCE = 72)] =
				"NAMED_CHARACTER_REFERENCE"),
			(e[(e.AMBIGUOUS_AMPERSAND = 73)] = "AMBIGUOUS_AMPERSAND"),
			(e[(e.NUMERIC_CHARACTER_REFERENCE = 74)] =
				"NUMERIC_CHARACTER_REFERENCE"),
			(e[(e.HEXADEMICAL_CHARACTER_REFERENCE_START = 75)] =
				"HEXADEMICAL_CHARACTER_REFERENCE_START"),
			(e[(e.HEXADEMICAL_CHARACTER_REFERENCE = 76)] =
				"HEXADEMICAL_CHARACTER_REFERENCE"),
			(e[(e.DECIMAL_CHARACTER_REFERENCE = 77)] =
				"DECIMAL_CHARACTER_REFERENCE"),
			(e[(e.NUMERIC_CHARACTER_REFERENCE_END = 78)] =
				"NUMERIC_CHARACTER_REFERENCE_END");
	})(i || (i = {}));
	var O = {
		DATA: i.DATA,
		RCDATA: i.RCDATA,
		RAWTEXT: i.RAWTEXT,
		SCRIPT_DATA: i.SCRIPT_DATA,
		PLAINTEXT: i.PLAINTEXT,
		CDATA_SECTION: i.CDATA_SECTION,
	};
	function G(e) {
		return e >= r.DIGIT_0 && e <= r.DIGIT_9;
	}
	function Q(e) {
		return e >= r.LATIN_CAPITAL_A && e <= r.LATIN_CAPITAL_Z;
	}
	function $t(e) {
		return e >= r.LATIN_SMALL_A && e <= r.LATIN_SMALL_Z;
	}
	function U(e) {
		return $t(e) || Q(e);
	}
	function Oe(e) {
		return U(e) || G(e);
	}
	function Ke(e) {
		return e >= r.LATIN_CAPITAL_A && e <= r.LATIN_CAPITAL_F;
	}
	function Ve(e) {
		return e >= r.LATIN_SMALL_A && e <= r.LATIN_SMALL_F;
	}
	function Jt(e) {
		return G(e) || Ke(e) || Ve(e);
	}
	function ne(e) {
		return e + 32;
	}
	function je(e) {
		return (
			e === r.SPACE ||
			e === r.LINE_FEED ||
			e === r.TABULATION ||
			e === r.FORM_FEED
		);
	}
	function Zt(e) {
		return e === r.EQUALS_SIGN || Oe(e);
	}
	function We(e) {
		return je(e) || e === r.SOLIDUS || e === r.GREATER_THAN_SIGN;
	}
	var X = class {
		constructor(t, a) {
			(this.options = t),
				(this.handler = a),
				(this.paused = !1),
				(this.inLoop = !1),
				(this.inForeignNode = !1),
				(this.lastStartTagName = ""),
				(this.active = !1),
				(this.state = i.DATA),
				(this.returnState = i.DATA),
				(this.charRefCode = -1),
				(this.consumedAfterSnapshot = -1),
				(this.currentCharacterToken = null),
				(this.currentToken = null),
				(this.currentAttr = { name: "", value: "" }),
				(this.preprocessor = new se(a)),
				(this.currentLocation = this.getCurrentLocation(-1));
		}
		_err(t) {
			var a, s;
			(s = (a = this.handler).onParseError) === null ||
				s === void 0 ||
				s.call(a, this.preprocessor.getError(t));
		}
		getCurrentLocation(t) {
			return this.options.sourceCodeLocationInfo
				? {
						startLine: this.preprocessor.line,
						startCol: this.preprocessor.col - t,
						startOffset: this.preprocessor.offset - t,
						endLine: -1,
						endCol: -1,
						endOffset: -1,
					}
				: null;
		}
		_runParsingLoop() {
			if (!this.inLoop) {
				for (this.inLoop = !0; this.active && !this.paused; ) {
					this.consumedAfterSnapshot = 0;
					let t = this._consume();
					this._ensureHibernation() || this._callState(t);
				}
				this.inLoop = !1;
			}
		}
		pause() {
			this.paused = !0;
		}
		resume(t) {
			if (!this.paused) throw new Error("Parser was already resumed");
			(this.paused = !1),
				!this.inLoop && (this._runParsingLoop(), this.paused || t?.());
		}
		write(t, a, s) {
			(this.active = !0),
				this.preprocessor.write(t, a),
				this._runParsingLoop(),
				this.paused || s?.();
		}
		insertHtmlAtCurrentPos(t) {
			(this.active = !0),
				this.preprocessor.insertHtmlAtCurrentPos(t),
				this._runParsingLoop();
		}
		_ensureHibernation() {
			return this.preprocessor.endOfChunkHit
				? (this._unconsume(this.consumedAfterSnapshot),
					(this.active = !1),
					!0)
				: !1;
		}
		_consume() {
			return this.consumedAfterSnapshot++, this.preprocessor.advance();
		}
		_unconsume(t) {
			(this.consumedAfterSnapshot -= t), this.preprocessor.retreat(t);
		}
		_reconsumeInState(t, a) {
			(this.state = t), this._callState(a);
		}
		_advanceBy(t) {
			this.consumedAfterSnapshot += t;
			for (let a = 0; a < t; a++) this.preprocessor.advance();
		}
		_consumeSequenceIfMatch(t, a) {
			return this.preprocessor.startsWith(t, a)
				? (this._advanceBy(t.length - 1), !0)
				: !1;
		}
		_createStartTagToken() {
			this.currentToken = {
				type: A.START_TAG,
				tagName: "",
				tagID: u.UNKNOWN,
				selfClosing: !1,
				ackSelfClosing: !1,
				attrs: [],
				location: this.getCurrentLocation(1),
			};
		}
		_createEndTagToken() {
			this.currentToken = {
				type: A.END_TAG,
				tagName: "",
				tagID: u.UNKNOWN,
				selfClosing: !1,
				ackSelfClosing: !1,
				attrs: [],
				location: this.getCurrentLocation(2),
			};
		}
		_createCommentToken(t) {
			this.currentToken = {
				type: A.COMMENT,
				data: "",
				location: this.getCurrentLocation(t),
			};
		}
		_createDoctypeToken(t) {
			this.currentToken = {
				type: A.DOCTYPE,
				name: t,
				forceQuirks: !1,
				publicId: null,
				systemId: null,
				location: this.currentLocation,
			};
		}
		_createCharacterToken(t, a) {
			this.currentCharacterToken = {
				type: t,
				chars: a,
				location: this.currentLocation,
			};
		}
		_createAttr(t) {
			(this.currentAttr = { name: t, value: "" }),
				(this.currentLocation = this.getCurrentLocation(0));
		}
		_leaveAttrName() {
			var t, a;
			let s = this.currentToken;
			if (re(s, this.currentAttr.name) === null) {
				if (
					(s.attrs.push(this.currentAttr),
					s.location && this.currentLocation)
				) {
					let c =
						(t = (a = s.location).attrs) !== null && t !== void 0
							? t
							: (a.attrs = Object.create(null));
					(c[this.currentAttr.name] = this.currentLocation),
						this._leaveAttrValue();
				}
			} else this._err(d.duplicateAttribute);
		}
		_leaveAttrValue() {
			this.currentLocation &&
				((this.currentLocation.endLine = this.preprocessor.line),
				(this.currentLocation.endCol = this.preprocessor.col),
				(this.currentLocation.endOffset = this.preprocessor.offset));
		}
		prepareToken(t) {
			this._emitCurrentCharacterToken(t.location),
				(this.currentToken = null),
				t.location &&
					((t.location.endLine = this.preprocessor.line),
					(t.location.endCol = this.preprocessor.col + 1),
					(t.location.endOffset = this.preprocessor.offset + 1)),
				(this.currentLocation = this.getCurrentLocation(-1));
		}
		emitCurrentTagToken() {
			let t = this.currentToken;
			this.prepareToken(t),
				(t.tagID = k(t.tagName)),
				t.type === A.START_TAG
					? ((this.lastStartTagName = t.tagName),
						this.handler.onStartTag(t))
					: (t.attrs.length > 0 && this._err(d.endTagWithAttributes),
						t.selfClosing && this._err(d.endTagWithTrailingSolidus),
						this.handler.onEndTag(t)),
				this.preprocessor.dropParsedChunk();
		}
		emitCurrentComment(t) {
			this.prepareToken(t),
				this.handler.onComment(t),
				this.preprocessor.dropParsedChunk();
		}
		emitCurrentDoctype(t) {
			this.prepareToken(t),
				this.handler.onDoctype(t),
				this.preprocessor.dropParsedChunk();
		}
		_emitCurrentCharacterToken(t) {
			if (this.currentCharacterToken) {
				switch (
					(t &&
						this.currentCharacterToken.location &&
						((this.currentCharacterToken.location.endLine =
							t.startLine),
						(this.currentCharacterToken.location.endCol =
							t.startCol),
						(this.currentCharacterToken.location.endOffset =
							t.startOffset)),
					this.currentCharacterToken.type)
				) {
					case A.CHARACTER: {
						this.handler.onCharacter(this.currentCharacterToken);
						break;
					}
					case A.NULL_CHARACTER: {
						this.handler.onNullCharacter(
							this.currentCharacterToken,
						);
						break;
					}
					case A.WHITESPACE_CHARACTER: {
						this.handler.onWhitespaceCharacter(
							this.currentCharacterToken,
						);
						break;
					}
				}
				this.currentCharacterToken = null;
			}
		}
		_emitEOFToken() {
			let t = this.getCurrentLocation(0);
			t &&
				((t.endLine = t.startLine),
				(t.endCol = t.startCol),
				(t.endOffset = t.startOffset)),
				this._emitCurrentCharacterToken(t),
				this.handler.onEof({ type: A.EOF, location: t }),
				(this.active = !1);
		}
		_appendCharToCurrentCharacterToken(t, a) {
			if (this.currentCharacterToken)
				if (this.currentCharacterToken.type !== t)
					(this.currentLocation = this.getCurrentLocation(0)),
						this._emitCurrentCharacterToken(this.currentLocation),
						this.preprocessor.dropParsedChunk();
				else {
					this.currentCharacterToken.chars += a;
					return;
				}
			this._createCharacterToken(t, a);
		}
		_emitCodePoint(t) {
			let a = je(t)
				? A.WHITESPACE_CHARACTER
				: t === r.NULL
					? A.NULL_CHARACTER
					: A.CHARACTER;
			this._appendCharToCurrentCharacterToken(a, String.fromCodePoint(t));
		}
		_emitChars(t) {
			this._appendCharToCurrentCharacterToken(A.CHARACTER, t);
		}
		_matchNamedCharacterReference(t) {
			let a = null,
				s = 0,
				c = !1;
			for (
				let T = 0, l = x[0];
				T >= 0 && ((T = pe(x, l, T + 1, t)), !(T < 0));
				t = this._consume()
			) {
				(s += 1), (l = x[T]);
				let m = l & P.VALUE_LENGTH;
				if (m) {
					let _ = (m >> 14) - 1;
					if (
						(t !== r.SEMICOLON &&
						this._isCharacterReferenceInAttribute() &&
						Zt(this.preprocessor.peek(1))
							? ((a = [r.AMPERSAND]), (T += _))
							: ((a =
									_ === 0
										? [x[T] & ~P.VALUE_LENGTH]
										: _ === 1
											? [x[++T]]
											: [x[++T], x[++T]]),
								(s = 0),
								(c = t !== r.SEMICOLON)),
						_ === 0)
					) {
						this._consume();
						break;
					}
				}
			}
			return (
				this._unconsume(s),
				c &&
					!this.preprocessor.endOfChunkHit &&
					this._err(d.missingSemicolonAfterCharacterReference),
				this._unconsume(1),
				a
			);
		}
		_isCharacterReferenceInAttribute() {
			return (
				this.returnState === i.ATTRIBUTE_VALUE_DOUBLE_QUOTED ||
				this.returnState === i.ATTRIBUTE_VALUE_SINGLE_QUOTED ||
				this.returnState === i.ATTRIBUTE_VALUE_UNQUOTED
			);
		}
		_flushCodePointConsumedAsCharacterReference(t) {
			this._isCharacterReferenceInAttribute()
				? (this.currentAttr.value += String.fromCodePoint(t))
				: this._emitCodePoint(t);
		}
		_callState(t) {
			switch (this.state) {
				case i.DATA: {
					this._stateData(t);
					break;
				}
				case i.RCDATA: {
					this._stateRcdata(t);
					break;
				}
				case i.RAWTEXT: {
					this._stateRawtext(t);
					break;
				}
				case i.SCRIPT_DATA: {
					this._stateScriptData(t);
					break;
				}
				case i.PLAINTEXT: {
					this._statePlaintext(t);
					break;
				}
				case i.TAG_OPEN: {
					this._stateTagOpen(t);
					break;
				}
				case i.END_TAG_OPEN: {
					this._stateEndTagOpen(t);
					break;
				}
				case i.TAG_NAME: {
					this._stateTagName(t);
					break;
				}
				case i.RCDATA_LESS_THAN_SIGN: {
					this._stateRcdataLessThanSign(t);
					break;
				}
				case i.RCDATA_END_TAG_OPEN: {
					this._stateRcdataEndTagOpen(t);
					break;
				}
				case i.RCDATA_END_TAG_NAME: {
					this._stateRcdataEndTagName(t);
					break;
				}
				case i.RAWTEXT_LESS_THAN_SIGN: {
					this._stateRawtextLessThanSign(t);
					break;
				}
				case i.RAWTEXT_END_TAG_OPEN: {
					this._stateRawtextEndTagOpen(t);
					break;
				}
				case i.RAWTEXT_END_TAG_NAME: {
					this._stateRawtextEndTagName(t);
					break;
				}
				case i.SCRIPT_DATA_LESS_THAN_SIGN: {
					this._stateScriptDataLessThanSign(t);
					break;
				}
				case i.SCRIPT_DATA_END_TAG_OPEN: {
					this._stateScriptDataEndTagOpen(t);
					break;
				}
				case i.SCRIPT_DATA_END_TAG_NAME: {
					this._stateScriptDataEndTagName(t);
					break;
				}
				case i.SCRIPT_DATA_ESCAPE_START: {
					this._stateScriptDataEscapeStart(t);
					break;
				}
				case i.SCRIPT_DATA_ESCAPE_START_DASH: {
					this._stateScriptDataEscapeStartDash(t);
					break;
				}
				case i.SCRIPT_DATA_ESCAPED: {
					this._stateScriptDataEscaped(t);
					break;
				}
				case i.SCRIPT_DATA_ESCAPED_DASH: {
					this._stateScriptDataEscapedDash(t);
					break;
				}
				case i.SCRIPT_DATA_ESCAPED_DASH_DASH: {
					this._stateScriptDataEscapedDashDash(t);
					break;
				}
				case i.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
					this._stateScriptDataEscapedLessThanSign(t);
					break;
				}
				case i.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
					this._stateScriptDataEscapedEndTagOpen(t);
					break;
				}
				case i.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
					this._stateScriptDataEscapedEndTagName(t);
					break;
				}
				case i.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
					this._stateScriptDataDoubleEscapeStart(t);
					break;
				}
				case i.SCRIPT_DATA_DOUBLE_ESCAPED: {
					this._stateScriptDataDoubleEscaped(t);
					break;
				}
				case i.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
					this._stateScriptDataDoubleEscapedDash(t);
					break;
				}
				case i.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
					this._stateScriptDataDoubleEscapedDashDash(t);
					break;
				}
				case i.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
					this._stateScriptDataDoubleEscapedLessThanSign(t);
					break;
				}
				case i.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
					this._stateScriptDataDoubleEscapeEnd(t);
					break;
				}
				case i.BEFORE_ATTRIBUTE_NAME: {
					this._stateBeforeAttributeName(t);
					break;
				}
				case i.ATTRIBUTE_NAME: {
					this._stateAttributeName(t);
					break;
				}
				case i.AFTER_ATTRIBUTE_NAME: {
					this._stateAfterAttributeName(t);
					break;
				}
				case i.BEFORE_ATTRIBUTE_VALUE: {
					this._stateBeforeAttributeValue(t);
					break;
				}
				case i.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
					this._stateAttributeValueDoubleQuoted(t);
					break;
				}
				case i.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
					this._stateAttributeValueSingleQuoted(t);
					break;
				}
				case i.ATTRIBUTE_VALUE_UNQUOTED: {
					this._stateAttributeValueUnquoted(t);
					break;
				}
				case i.AFTER_ATTRIBUTE_VALUE_QUOTED: {
					this._stateAfterAttributeValueQuoted(t);
					break;
				}
				case i.SELF_CLOSING_START_TAG: {
					this._stateSelfClosingStartTag(t);
					break;
				}
				case i.BOGUS_COMMENT: {
					this._stateBogusComment(t);
					break;
				}
				case i.MARKUP_DECLARATION_OPEN: {
					this._stateMarkupDeclarationOpen(t);
					break;
				}
				case i.COMMENT_START: {
					this._stateCommentStart(t);
					break;
				}
				case i.COMMENT_START_DASH: {
					this._stateCommentStartDash(t);
					break;
				}
				case i.COMMENT: {
					this._stateComment(t);
					break;
				}
				case i.COMMENT_LESS_THAN_SIGN: {
					this._stateCommentLessThanSign(t);
					break;
				}
				case i.COMMENT_LESS_THAN_SIGN_BANG: {
					this._stateCommentLessThanSignBang(t);
					break;
				}
				case i.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
					this._stateCommentLessThanSignBangDash(t);
					break;
				}
				case i.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
					this._stateCommentLessThanSignBangDashDash(t);
					break;
				}
				case i.COMMENT_END_DASH: {
					this._stateCommentEndDash(t);
					break;
				}
				case i.COMMENT_END: {
					this._stateCommentEnd(t);
					break;
				}
				case i.COMMENT_END_BANG: {
					this._stateCommentEndBang(t);
					break;
				}
				case i.DOCTYPE: {
					this._stateDoctype(t);
					break;
				}
				case i.BEFORE_DOCTYPE_NAME: {
					this._stateBeforeDoctypeName(t);
					break;
				}
				case i.DOCTYPE_NAME: {
					this._stateDoctypeName(t);
					break;
				}
				case i.AFTER_DOCTYPE_NAME: {
					this._stateAfterDoctypeName(t);
					break;
				}
				case i.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
					this._stateAfterDoctypePublicKeyword(t);
					break;
				}
				case i.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
					this._stateBeforeDoctypePublicIdentifier(t);
					break;
				}
				case i.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
					this._stateDoctypePublicIdentifierDoubleQuoted(t);
					break;
				}
				case i.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
					this._stateDoctypePublicIdentifierSingleQuoted(t);
					break;
				}
				case i.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
					this._stateAfterDoctypePublicIdentifier(t);
					break;
				}
				case i.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
					this._stateBetweenDoctypePublicAndSystemIdentifiers(t);
					break;
				}
				case i.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
					this._stateAfterDoctypeSystemKeyword(t);
					break;
				}
				case i.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
					this._stateBeforeDoctypeSystemIdentifier(t);
					break;
				}
				case i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
					this._stateDoctypeSystemIdentifierDoubleQuoted(t);
					break;
				}
				case i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
					this._stateDoctypeSystemIdentifierSingleQuoted(t);
					break;
				}
				case i.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
					this._stateAfterDoctypeSystemIdentifier(t);
					break;
				}
				case i.BOGUS_DOCTYPE: {
					this._stateBogusDoctype(t);
					break;
				}
				case i.CDATA_SECTION: {
					this._stateCdataSection(t);
					break;
				}
				case i.CDATA_SECTION_BRACKET: {
					this._stateCdataSectionBracket(t);
					break;
				}
				case i.CDATA_SECTION_END: {
					this._stateCdataSectionEnd(t);
					break;
				}
				case i.CHARACTER_REFERENCE: {
					this._stateCharacterReference(t);
					break;
				}
				case i.NAMED_CHARACTER_REFERENCE: {
					this._stateNamedCharacterReference(t);
					break;
				}
				case i.AMBIGUOUS_AMPERSAND: {
					this._stateAmbiguousAmpersand(t);
					break;
				}
				case i.NUMERIC_CHARACTER_REFERENCE: {
					this._stateNumericCharacterReference(t);
					break;
				}
				case i.HEXADEMICAL_CHARACTER_REFERENCE_START: {
					this._stateHexademicalCharacterReferenceStart(t);
					break;
				}
				case i.HEXADEMICAL_CHARACTER_REFERENCE: {
					this._stateHexademicalCharacterReference(t);
					break;
				}
				case i.DECIMAL_CHARACTER_REFERENCE: {
					this._stateDecimalCharacterReference(t);
					break;
				}
				case i.NUMERIC_CHARACTER_REFERENCE_END: {
					this._stateNumericCharacterReferenceEnd(t);
					break;
				}
				default:
					throw new Error("Unknown state");
			}
		}
		_stateData(t) {
			switch (t) {
				case r.LESS_THAN_SIGN: {
					this.state = i.TAG_OPEN;
					break;
				}
				case r.AMPERSAND: {
					(this.returnState = i.DATA),
						(this.state = i.CHARACTER_REFERENCE);
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter),
						this._emitCodePoint(t);
					break;
				}
				case r.EOF: {
					this._emitEOFToken();
					break;
				}
				default:
					this._emitCodePoint(t);
			}
		}
		_stateRcdata(t) {
			switch (t) {
				case r.AMPERSAND: {
					(this.returnState = i.RCDATA),
						(this.state = i.CHARACTER_REFERENCE);
					break;
				}
				case r.LESS_THAN_SIGN: {
					this.state = i.RCDATA_LESS_THAN_SIGN;
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter), this._emitChars(C);
					break;
				}
				case r.EOF: {
					this._emitEOFToken();
					break;
				}
				default:
					this._emitCodePoint(t);
			}
		}
		_stateRawtext(t) {
			switch (t) {
				case r.LESS_THAN_SIGN: {
					this.state = i.RAWTEXT_LESS_THAN_SIGN;
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter), this._emitChars(C);
					break;
				}
				case r.EOF: {
					this._emitEOFToken();
					break;
				}
				default:
					this._emitCodePoint(t);
			}
		}
		_stateScriptData(t) {
			switch (t) {
				case r.LESS_THAN_SIGN: {
					this.state = i.SCRIPT_DATA_LESS_THAN_SIGN;
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter), this._emitChars(C);
					break;
				}
				case r.EOF: {
					this._emitEOFToken();
					break;
				}
				default:
					this._emitCodePoint(t);
			}
		}
		_statePlaintext(t) {
			switch (t) {
				case r.NULL: {
					this._err(d.unexpectedNullCharacter), this._emitChars(C);
					break;
				}
				case r.EOF: {
					this._emitEOFToken();
					break;
				}
				default:
					this._emitCodePoint(t);
			}
		}
		_stateTagOpen(t) {
			if (U(t))
				this._createStartTagToken(),
					(this.state = i.TAG_NAME),
					this._stateTagName(t);
			else
				switch (t) {
					case r.EXCLAMATION_MARK: {
						this.state = i.MARKUP_DECLARATION_OPEN;
						break;
					}
					case r.SOLIDUS: {
						this.state = i.END_TAG_OPEN;
						break;
					}
					case r.QUESTION_MARK: {
						this._err(d.unexpectedQuestionMarkInsteadOfTagName),
							this._createCommentToken(1),
							(this.state = i.BOGUS_COMMENT),
							this._stateBogusComment(t);
						break;
					}
					case r.EOF: {
						this._err(d.eofBeforeTagName),
							this._emitChars("<"),
							this._emitEOFToken();
						break;
					}
					default:
						this._err(d.invalidFirstCharacterOfTagName),
							this._emitChars("<"),
							(this.state = i.DATA),
							this._stateData(t);
				}
		}
		_stateEndTagOpen(t) {
			if (U(t))
				this._createEndTagToken(),
					(this.state = i.TAG_NAME),
					this._stateTagName(t);
			else
				switch (t) {
					case r.GREATER_THAN_SIGN: {
						this._err(d.missingEndTagName), (this.state = i.DATA);
						break;
					}
					case r.EOF: {
						this._err(d.eofBeforeTagName),
							this._emitChars("</"),
							this._emitEOFToken();
						break;
					}
					default:
						this._err(d.invalidFirstCharacterOfTagName),
							this._createCommentToken(2),
							(this.state = i.BOGUS_COMMENT),
							this._stateBogusComment(t);
				}
		}
		_stateTagName(t) {
			let a = this.currentToken;
			switch (t) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED: {
					this.state = i.BEFORE_ATTRIBUTE_NAME;
					break;
				}
				case r.SOLIDUS: {
					this.state = i.SELF_CLOSING_START_TAG;
					break;
				}
				case r.GREATER_THAN_SIGN: {
					(this.state = i.DATA), this.emitCurrentTagToken();
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter), (a.tagName += C);
					break;
				}
				case r.EOF: {
					this._err(d.eofInTag), this._emitEOFToken();
					break;
				}
				default:
					a.tagName += String.fromCodePoint(Q(t) ? ne(t) : t);
			}
		}
		_stateRcdataLessThanSign(t) {
			t === r.SOLIDUS
				? (this.state = i.RCDATA_END_TAG_OPEN)
				: (this._emitChars("<"),
					(this.state = i.RCDATA),
					this._stateRcdata(t));
		}
		_stateRcdataEndTagOpen(t) {
			U(t)
				? ((this.state = i.RCDATA_END_TAG_NAME),
					this._stateRcdataEndTagName(t))
				: (this._emitChars("</"),
					(this.state = i.RCDATA),
					this._stateRcdata(t));
		}
		handleSpecialEndTag(t) {
			if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
				return !this._ensureHibernation();
			this._createEndTagToken();
			let a = this.currentToken;
			switch (
				((a.tagName = this.lastStartTagName),
				this.preprocessor.peek(this.lastStartTagName.length))
			) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED:
					return (
						this._advanceBy(this.lastStartTagName.length),
						(this.state = i.BEFORE_ATTRIBUTE_NAME),
						!1
					);
				case r.SOLIDUS:
					return (
						this._advanceBy(this.lastStartTagName.length),
						(this.state = i.SELF_CLOSING_START_TAG),
						!1
					);
				case r.GREATER_THAN_SIGN:
					return (
						this._advanceBy(this.lastStartTagName.length),
						this.emitCurrentTagToken(),
						(this.state = i.DATA),
						!1
					);
				default:
					return !this._ensureHibernation();
			}
		}
		_stateRcdataEndTagName(t) {
			this.handleSpecialEndTag(t) &&
				(this._emitChars("</"),
				(this.state = i.RCDATA),
				this._stateRcdata(t));
		}
		_stateRawtextLessThanSign(t) {
			t === r.SOLIDUS
				? (this.state = i.RAWTEXT_END_TAG_OPEN)
				: (this._emitChars("<"),
					(this.state = i.RAWTEXT),
					this._stateRawtext(t));
		}
		_stateRawtextEndTagOpen(t) {
			U(t)
				? ((this.state = i.RAWTEXT_END_TAG_NAME),
					this._stateRawtextEndTagName(t))
				: (this._emitChars("</"),
					(this.state = i.RAWTEXT),
					this._stateRawtext(t));
		}
		_stateRawtextEndTagName(t) {
			this.handleSpecialEndTag(t) &&
				(this._emitChars("</"),
				(this.state = i.RAWTEXT),
				this._stateRawtext(t));
		}
		_stateScriptDataLessThanSign(t) {
			switch (t) {
				case r.SOLIDUS: {
					this.state = i.SCRIPT_DATA_END_TAG_OPEN;
					break;
				}
				case r.EXCLAMATION_MARK: {
					(this.state = i.SCRIPT_DATA_ESCAPE_START),
						this._emitChars("<!");
					break;
				}
				default:
					this._emitChars("<"),
						(this.state = i.SCRIPT_DATA),
						this._stateScriptData(t);
			}
		}
		_stateScriptDataEndTagOpen(t) {
			U(t)
				? ((this.state = i.SCRIPT_DATA_END_TAG_NAME),
					this._stateScriptDataEndTagName(t))
				: (this._emitChars("</"),
					(this.state = i.SCRIPT_DATA),
					this._stateScriptData(t));
		}
		_stateScriptDataEndTagName(t) {
			this.handleSpecialEndTag(t) &&
				(this._emitChars("</"),
				(this.state = i.SCRIPT_DATA),
				this._stateScriptData(t));
		}
		_stateScriptDataEscapeStart(t) {
			t === r.HYPHEN_MINUS
				? ((this.state = i.SCRIPT_DATA_ESCAPE_START_DASH),
					this._emitChars("-"))
				: ((this.state = i.SCRIPT_DATA), this._stateScriptData(t));
		}
		_stateScriptDataEscapeStartDash(t) {
			t === r.HYPHEN_MINUS
				? ((this.state = i.SCRIPT_DATA_ESCAPED_DASH_DASH),
					this._emitChars("-"))
				: ((this.state = i.SCRIPT_DATA), this._stateScriptData(t));
		}
		_stateScriptDataEscaped(t) {
			switch (t) {
				case r.HYPHEN_MINUS: {
					(this.state = i.SCRIPT_DATA_ESCAPED_DASH),
						this._emitChars("-");
					break;
				}
				case r.LESS_THAN_SIGN: {
					this.state = i.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter), this._emitChars(C);
					break;
				}
				case r.EOF: {
					this._err(d.eofInScriptHtmlCommentLikeText),
						this._emitEOFToken();
					break;
				}
				default:
					this._emitCodePoint(t);
			}
		}
		_stateScriptDataEscapedDash(t) {
			switch (t) {
				case r.HYPHEN_MINUS: {
					(this.state = i.SCRIPT_DATA_ESCAPED_DASH_DASH),
						this._emitChars("-");
					break;
				}
				case r.LESS_THAN_SIGN: {
					this.state = i.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter),
						(this.state = i.SCRIPT_DATA_ESCAPED),
						this._emitChars(C);
					break;
				}
				case r.EOF: {
					this._err(d.eofInScriptHtmlCommentLikeText),
						this._emitEOFToken();
					break;
				}
				default:
					(this.state = i.SCRIPT_DATA_ESCAPED),
						this._emitCodePoint(t);
			}
		}
		_stateScriptDataEscapedDashDash(t) {
			switch (t) {
				case r.HYPHEN_MINUS: {
					this._emitChars("-");
					break;
				}
				case r.LESS_THAN_SIGN: {
					this.state = i.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
					break;
				}
				case r.GREATER_THAN_SIGN: {
					(this.state = i.SCRIPT_DATA), this._emitChars(">");
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter),
						(this.state = i.SCRIPT_DATA_ESCAPED),
						this._emitChars(C);
					break;
				}
				case r.EOF: {
					this._err(d.eofInScriptHtmlCommentLikeText),
						this._emitEOFToken();
					break;
				}
				default:
					(this.state = i.SCRIPT_DATA_ESCAPED),
						this._emitCodePoint(t);
			}
		}
		_stateScriptDataEscapedLessThanSign(t) {
			t === r.SOLIDUS
				? (this.state = i.SCRIPT_DATA_ESCAPED_END_TAG_OPEN)
				: U(t)
					? (this._emitChars("<"),
						(this.state = i.SCRIPT_DATA_DOUBLE_ESCAPE_START),
						this._stateScriptDataDoubleEscapeStart(t))
					: (this._emitChars("<"),
						(this.state = i.SCRIPT_DATA_ESCAPED),
						this._stateScriptDataEscaped(t));
		}
		_stateScriptDataEscapedEndTagOpen(t) {
			U(t)
				? ((this.state = i.SCRIPT_DATA_ESCAPED_END_TAG_NAME),
					this._stateScriptDataEscapedEndTagName(t))
				: (this._emitChars("</"),
					(this.state = i.SCRIPT_DATA_ESCAPED),
					this._stateScriptDataEscaped(t));
		}
		_stateScriptDataEscapedEndTagName(t) {
			this.handleSpecialEndTag(t) &&
				(this._emitChars("</"),
				(this.state = i.SCRIPT_DATA_ESCAPED),
				this._stateScriptDataEscaped(t));
		}
		_stateScriptDataDoubleEscapeStart(t) {
			if (
				this.preprocessor.startsWith(g.SCRIPT, !1) &&
				We(this.preprocessor.peek(g.SCRIPT.length))
			) {
				this._emitCodePoint(t);
				for (let a = 0; a < g.SCRIPT.length; a++)
					this._emitCodePoint(this._consume());
				this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED;
			} else
				this._ensureHibernation() ||
					((this.state = i.SCRIPT_DATA_ESCAPED),
					this._stateScriptDataEscaped(t));
		}
		_stateScriptDataDoubleEscaped(t) {
			switch (t) {
				case r.HYPHEN_MINUS: {
					(this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED_DASH),
						this._emitChars("-");
					break;
				}
				case r.LESS_THAN_SIGN: {
					(this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
						this._emitChars("<");
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter), this._emitChars(C);
					break;
				}
				case r.EOF: {
					this._err(d.eofInScriptHtmlCommentLikeText),
						this._emitEOFToken();
					break;
				}
				default:
					this._emitCodePoint(t);
			}
		}
		_stateScriptDataDoubleEscapedDash(t) {
			switch (t) {
				case r.HYPHEN_MINUS: {
					(this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH),
						this._emitChars("-");
					break;
				}
				case r.LESS_THAN_SIGN: {
					(this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
						this._emitChars("<");
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter),
						(this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED),
						this._emitChars(C);
					break;
				}
				case r.EOF: {
					this._err(d.eofInScriptHtmlCommentLikeText),
						this._emitEOFToken();
					break;
				}
				default:
					(this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED),
						this._emitCodePoint(t);
			}
		}
		_stateScriptDataDoubleEscapedDashDash(t) {
			switch (t) {
				case r.HYPHEN_MINUS: {
					this._emitChars("-");
					break;
				}
				case r.LESS_THAN_SIGN: {
					(this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
						this._emitChars("<");
					break;
				}
				case r.GREATER_THAN_SIGN: {
					(this.state = i.SCRIPT_DATA), this._emitChars(">");
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter),
						(this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED),
						this._emitChars(C);
					break;
				}
				case r.EOF: {
					this._err(d.eofInScriptHtmlCommentLikeText),
						this._emitEOFToken();
					break;
				}
				default:
					(this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED),
						this._emitCodePoint(t);
			}
		}
		_stateScriptDataDoubleEscapedLessThanSign(t) {
			t === r.SOLIDUS
				? ((this.state = i.SCRIPT_DATA_DOUBLE_ESCAPE_END),
					this._emitChars("/"))
				: ((this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED),
					this._stateScriptDataDoubleEscaped(t));
		}
		_stateScriptDataDoubleEscapeEnd(t) {
			if (
				this.preprocessor.startsWith(g.SCRIPT, !1) &&
				We(this.preprocessor.peek(g.SCRIPT.length))
			) {
				this._emitCodePoint(t);
				for (let a = 0; a < g.SCRIPT.length; a++)
					this._emitCodePoint(this._consume());
				this.state = i.SCRIPT_DATA_ESCAPED;
			} else
				this._ensureHibernation() ||
					((this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED),
					this._stateScriptDataDoubleEscaped(t));
		}
		_stateBeforeAttributeName(t) {
			switch (t) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED:
					break;
				case r.SOLIDUS:
				case r.GREATER_THAN_SIGN:
				case r.EOF: {
					(this.state = i.AFTER_ATTRIBUTE_NAME),
						this._stateAfterAttributeName(t);
					break;
				}
				case r.EQUALS_SIGN: {
					this._err(d.unexpectedEqualsSignBeforeAttributeName),
						this._createAttr("="),
						(this.state = i.ATTRIBUTE_NAME);
					break;
				}
				default:
					this._createAttr(""),
						(this.state = i.ATTRIBUTE_NAME),
						this._stateAttributeName(t);
			}
		}
		_stateAttributeName(t) {
			switch (t) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED:
				case r.SOLIDUS:
				case r.GREATER_THAN_SIGN:
				case r.EOF: {
					this._leaveAttrName(),
						(this.state = i.AFTER_ATTRIBUTE_NAME),
						this._stateAfterAttributeName(t);
					break;
				}
				case r.EQUALS_SIGN: {
					this._leaveAttrName(),
						(this.state = i.BEFORE_ATTRIBUTE_VALUE);
					break;
				}
				case r.QUOTATION_MARK:
				case r.APOSTROPHE:
				case r.LESS_THAN_SIGN: {
					this._err(d.unexpectedCharacterInAttributeName),
						(this.currentAttr.name += String.fromCodePoint(t));
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter),
						(this.currentAttr.name += C);
					break;
				}
				default:
					this.currentAttr.name += String.fromCodePoint(
						Q(t) ? ne(t) : t,
					);
			}
		}
		_stateAfterAttributeName(t) {
			switch (t) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED:
					break;
				case r.SOLIDUS: {
					this.state = i.SELF_CLOSING_START_TAG;
					break;
				}
				case r.EQUALS_SIGN: {
					this.state = i.BEFORE_ATTRIBUTE_VALUE;
					break;
				}
				case r.GREATER_THAN_SIGN: {
					(this.state = i.DATA), this.emitCurrentTagToken();
					break;
				}
				case r.EOF: {
					this._err(d.eofInTag), this._emitEOFToken();
					break;
				}
				default:
					this._createAttr(""),
						(this.state = i.ATTRIBUTE_NAME),
						this._stateAttributeName(t);
			}
		}
		_stateBeforeAttributeValue(t) {
			switch (t) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED:
					break;
				case r.QUOTATION_MARK: {
					this.state = i.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
					break;
				}
				case r.APOSTROPHE: {
					this.state = i.ATTRIBUTE_VALUE_SINGLE_QUOTED;
					break;
				}
				case r.GREATER_THAN_SIGN: {
					this._err(d.missingAttributeValue),
						(this.state = i.DATA),
						this.emitCurrentTagToken();
					break;
				}
				default:
					(this.state = i.ATTRIBUTE_VALUE_UNQUOTED),
						this._stateAttributeValueUnquoted(t);
			}
		}
		_stateAttributeValueDoubleQuoted(t) {
			switch (t) {
				case r.QUOTATION_MARK: {
					this.state = i.AFTER_ATTRIBUTE_VALUE_QUOTED;
					break;
				}
				case r.AMPERSAND: {
					(this.returnState = i.ATTRIBUTE_VALUE_DOUBLE_QUOTED),
						(this.state = i.CHARACTER_REFERENCE);
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter),
						(this.currentAttr.value += C);
					break;
				}
				case r.EOF: {
					this._err(d.eofInTag), this._emitEOFToken();
					break;
				}
				default:
					this.currentAttr.value += String.fromCodePoint(t);
			}
		}
		_stateAttributeValueSingleQuoted(t) {
			switch (t) {
				case r.APOSTROPHE: {
					this.state = i.AFTER_ATTRIBUTE_VALUE_QUOTED;
					break;
				}
				case r.AMPERSAND: {
					(this.returnState = i.ATTRIBUTE_VALUE_SINGLE_QUOTED),
						(this.state = i.CHARACTER_REFERENCE);
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter),
						(this.currentAttr.value += C);
					break;
				}
				case r.EOF: {
					this._err(d.eofInTag), this._emitEOFToken();
					break;
				}
				default:
					this.currentAttr.value += String.fromCodePoint(t);
			}
		}
		_stateAttributeValueUnquoted(t) {
			switch (t) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED: {
					this._leaveAttrValue(),
						(this.state = i.BEFORE_ATTRIBUTE_NAME);
					break;
				}
				case r.AMPERSAND: {
					(this.returnState = i.ATTRIBUTE_VALUE_UNQUOTED),
						(this.state = i.CHARACTER_REFERENCE);
					break;
				}
				case r.GREATER_THAN_SIGN: {
					this._leaveAttrValue(),
						(this.state = i.DATA),
						this.emitCurrentTagToken();
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter),
						(this.currentAttr.value += C);
					break;
				}
				case r.QUOTATION_MARK:
				case r.APOSTROPHE:
				case r.LESS_THAN_SIGN:
				case r.EQUALS_SIGN:
				case r.GRAVE_ACCENT: {
					this._err(d.unexpectedCharacterInUnquotedAttributeValue),
						(this.currentAttr.value += String.fromCodePoint(t));
					break;
				}
				case r.EOF: {
					this._err(d.eofInTag), this._emitEOFToken();
					break;
				}
				default:
					this.currentAttr.value += String.fromCodePoint(t);
			}
		}
		_stateAfterAttributeValueQuoted(t) {
			switch (t) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED: {
					this._leaveAttrValue(),
						(this.state = i.BEFORE_ATTRIBUTE_NAME);
					break;
				}
				case r.SOLIDUS: {
					this._leaveAttrValue(),
						(this.state = i.SELF_CLOSING_START_TAG);
					break;
				}
				case r.GREATER_THAN_SIGN: {
					this._leaveAttrValue(),
						(this.state = i.DATA),
						this.emitCurrentTagToken();
					break;
				}
				case r.EOF: {
					this._err(d.eofInTag), this._emitEOFToken();
					break;
				}
				default:
					this._err(d.missingWhitespaceBetweenAttributes),
						(this.state = i.BEFORE_ATTRIBUTE_NAME),
						this._stateBeforeAttributeName(t);
			}
		}
		_stateSelfClosingStartTag(t) {
			switch (t) {
				case r.GREATER_THAN_SIGN: {
					let a = this.currentToken;
					(a.selfClosing = !0),
						(this.state = i.DATA),
						this.emitCurrentTagToken();
					break;
				}
				case r.EOF: {
					this._err(d.eofInTag), this._emitEOFToken();
					break;
				}
				default:
					this._err(d.unexpectedSolidusInTag),
						(this.state = i.BEFORE_ATTRIBUTE_NAME),
						this._stateBeforeAttributeName(t);
			}
		}
		_stateBogusComment(t) {
			let a = this.currentToken;
			switch (t) {
				case r.GREATER_THAN_SIGN: {
					(this.state = i.DATA), this.emitCurrentComment(a);
					break;
				}
				case r.EOF: {
					this.emitCurrentComment(a), this._emitEOFToken();
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter), (a.data += C);
					break;
				}
				default:
					a.data += String.fromCodePoint(t);
			}
		}
		_stateMarkupDeclarationOpen(t) {
			this._consumeSequenceIfMatch(g.DASH_DASH, !0)
				? (this._createCommentToken(g.DASH_DASH.length + 1),
					(this.state = i.COMMENT_START))
				: this._consumeSequenceIfMatch(g.DOCTYPE, !1)
					? ((this.currentLocation = this.getCurrentLocation(
							g.DOCTYPE.length + 1,
						)),
						(this.state = i.DOCTYPE))
					: this._consumeSequenceIfMatch(g.CDATA_START, !0)
						? this.inForeignNode
							? (this.state = i.CDATA_SECTION)
							: (this._err(d.cdataInHtmlContent),
								this._createCommentToken(
									g.CDATA_START.length + 1,
								),
								(this.currentToken.data = "[CDATA["),
								(this.state = i.BOGUS_COMMENT))
						: this._ensureHibernation() ||
							(this._err(d.incorrectlyOpenedComment),
							this._createCommentToken(2),
							(this.state = i.BOGUS_COMMENT),
							this._stateBogusComment(t));
		}
		_stateCommentStart(t) {
			switch (t) {
				case r.HYPHEN_MINUS: {
					this.state = i.COMMENT_START_DASH;
					break;
				}
				case r.GREATER_THAN_SIGN: {
					this._err(d.abruptClosingOfEmptyComment),
						(this.state = i.DATA);
					let a = this.currentToken;
					this.emitCurrentComment(a);
					break;
				}
				default:
					(this.state = i.COMMENT), this._stateComment(t);
			}
		}
		_stateCommentStartDash(t) {
			let a = this.currentToken;
			switch (t) {
				case r.HYPHEN_MINUS: {
					this.state = i.COMMENT_END;
					break;
				}
				case r.GREATER_THAN_SIGN: {
					this._err(d.abruptClosingOfEmptyComment),
						(this.state = i.DATA),
						this.emitCurrentComment(a);
					break;
				}
				case r.EOF: {
					this._err(d.eofInComment),
						this.emitCurrentComment(a),
						this._emitEOFToken();
					break;
				}
				default:
					(a.data += "-"),
						(this.state = i.COMMENT),
						this._stateComment(t);
			}
		}
		_stateComment(t) {
			let a = this.currentToken;
			switch (t) {
				case r.HYPHEN_MINUS: {
					this.state = i.COMMENT_END_DASH;
					break;
				}
				case r.LESS_THAN_SIGN: {
					(a.data += "<"), (this.state = i.COMMENT_LESS_THAN_SIGN);
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter), (a.data += C);
					break;
				}
				case r.EOF: {
					this._err(d.eofInComment),
						this.emitCurrentComment(a),
						this._emitEOFToken();
					break;
				}
				default:
					a.data += String.fromCodePoint(t);
			}
		}
		_stateCommentLessThanSign(t) {
			let a = this.currentToken;
			switch (t) {
				case r.EXCLAMATION_MARK: {
					(a.data += "!"),
						(this.state = i.COMMENT_LESS_THAN_SIGN_BANG);
					break;
				}
				case r.LESS_THAN_SIGN: {
					a.data += "<";
					break;
				}
				default:
					(this.state = i.COMMENT), this._stateComment(t);
			}
		}
		_stateCommentLessThanSignBang(t) {
			t === r.HYPHEN_MINUS
				? (this.state = i.COMMENT_LESS_THAN_SIGN_BANG_DASH)
				: ((this.state = i.COMMENT), this._stateComment(t));
		}
		_stateCommentLessThanSignBangDash(t) {
			t === r.HYPHEN_MINUS
				? (this.state = i.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH)
				: ((this.state = i.COMMENT_END_DASH),
					this._stateCommentEndDash(t));
		}
		_stateCommentLessThanSignBangDashDash(t) {
			t !== r.GREATER_THAN_SIGN &&
				t !== r.EOF &&
				this._err(d.nestedComment),
				(this.state = i.COMMENT_END),
				this._stateCommentEnd(t);
		}
		_stateCommentEndDash(t) {
			let a = this.currentToken;
			switch (t) {
				case r.HYPHEN_MINUS: {
					this.state = i.COMMENT_END;
					break;
				}
				case r.EOF: {
					this._err(d.eofInComment),
						this.emitCurrentComment(a),
						this._emitEOFToken();
					break;
				}
				default:
					(a.data += "-"),
						(this.state = i.COMMENT),
						this._stateComment(t);
			}
		}
		_stateCommentEnd(t) {
			let a = this.currentToken;
			switch (t) {
				case r.GREATER_THAN_SIGN: {
					(this.state = i.DATA), this.emitCurrentComment(a);
					break;
				}
				case r.EXCLAMATION_MARK: {
					this.state = i.COMMENT_END_BANG;
					break;
				}
				case r.HYPHEN_MINUS: {
					a.data += "-";
					break;
				}
				case r.EOF: {
					this._err(d.eofInComment),
						this.emitCurrentComment(a),
						this._emitEOFToken();
					break;
				}
				default:
					(a.data += "--"),
						(this.state = i.COMMENT),
						this._stateComment(t);
			}
		}
		_stateCommentEndBang(t) {
			let a = this.currentToken;
			switch (t) {
				case r.HYPHEN_MINUS: {
					(a.data += "--!"), (this.state = i.COMMENT_END_DASH);
					break;
				}
				case r.GREATER_THAN_SIGN: {
					this._err(d.incorrectlyClosedComment),
						(this.state = i.DATA),
						this.emitCurrentComment(a);
					break;
				}
				case r.EOF: {
					this._err(d.eofInComment),
						this.emitCurrentComment(a),
						this._emitEOFToken();
					break;
				}
				default:
					(a.data += "--!"),
						(this.state = i.COMMENT),
						this._stateComment(t);
			}
		}
		_stateDoctype(t) {
			switch (t) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED: {
					this.state = i.BEFORE_DOCTYPE_NAME;
					break;
				}
				case r.GREATER_THAN_SIGN: {
					(this.state = i.BEFORE_DOCTYPE_NAME),
						this._stateBeforeDoctypeName(t);
					break;
				}
				case r.EOF: {
					this._err(d.eofInDoctype), this._createDoctypeToken(null);
					let a = this.currentToken;
					(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						this._emitEOFToken();
					break;
				}
				default:
					this._err(d.missingWhitespaceBeforeDoctypeName),
						(this.state = i.BEFORE_DOCTYPE_NAME),
						this._stateBeforeDoctypeName(t);
			}
		}
		_stateBeforeDoctypeName(t) {
			if (Q(t))
				this._createDoctypeToken(String.fromCharCode(ne(t))),
					(this.state = i.DOCTYPE_NAME);
			else
				switch (t) {
					case r.SPACE:
					case r.LINE_FEED:
					case r.TABULATION:
					case r.FORM_FEED:
						break;
					case r.NULL: {
						this._err(d.unexpectedNullCharacter),
							this._createDoctypeToken(C),
							(this.state = i.DOCTYPE_NAME);
						break;
					}
					case r.GREATER_THAN_SIGN: {
						this._err(d.missingDoctypeName),
							this._createDoctypeToken(null);
						let a = this.currentToken;
						(a.forceQuirks = !0),
							this.emitCurrentDoctype(a),
							(this.state = i.DATA);
						break;
					}
					case r.EOF: {
						this._err(d.eofInDoctype),
							this._createDoctypeToken(null);
						let a = this.currentToken;
						(a.forceQuirks = !0),
							this.emitCurrentDoctype(a),
							this._emitEOFToken();
						break;
					}
					default:
						this._createDoctypeToken(String.fromCodePoint(t)),
							(this.state = i.DOCTYPE_NAME);
				}
		}
		_stateDoctypeName(t) {
			let a = this.currentToken;
			switch (t) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED: {
					this.state = i.AFTER_DOCTYPE_NAME;
					break;
				}
				case r.GREATER_THAN_SIGN: {
					(this.state = i.DATA), this.emitCurrentDoctype(a);
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter), (a.name += C);
					break;
				}
				case r.EOF: {
					this._err(d.eofInDoctype),
						(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						this._emitEOFToken();
					break;
				}
				default:
					a.name += String.fromCodePoint(Q(t) ? ne(t) : t);
			}
		}
		_stateAfterDoctypeName(t) {
			let a = this.currentToken;
			switch (t) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED:
					break;
				case r.GREATER_THAN_SIGN: {
					(this.state = i.DATA), this.emitCurrentDoctype(a);
					break;
				}
				case r.EOF: {
					this._err(d.eofInDoctype),
						(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						this._emitEOFToken();
					break;
				}
				default:
					this._consumeSequenceIfMatch(g.PUBLIC, !1)
						? (this.state = i.AFTER_DOCTYPE_PUBLIC_KEYWORD)
						: this._consumeSequenceIfMatch(g.SYSTEM, !1)
							? (this.state = i.AFTER_DOCTYPE_SYSTEM_KEYWORD)
							: this._ensureHibernation() ||
								(this._err(
									d.invalidCharacterSequenceAfterDoctypeName,
								),
								(a.forceQuirks = !0),
								(this.state = i.BOGUS_DOCTYPE),
								this._stateBogusDoctype(t));
			}
		}
		_stateAfterDoctypePublicKeyword(t) {
			let a = this.currentToken;
			switch (t) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED: {
					this.state = i.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
					break;
				}
				case r.QUOTATION_MARK: {
					this._err(d.missingWhitespaceAfterDoctypePublicKeyword),
						(a.publicId = ""),
						(this.state =
							i.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
					break;
				}
				case r.APOSTROPHE: {
					this._err(d.missingWhitespaceAfterDoctypePublicKeyword),
						(a.publicId = ""),
						(this.state =
							i.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
					break;
				}
				case r.GREATER_THAN_SIGN: {
					this._err(d.missingDoctypePublicIdentifier),
						(a.forceQuirks = !0),
						(this.state = i.DATA),
						this.emitCurrentDoctype(a);
					break;
				}
				case r.EOF: {
					this._err(d.eofInDoctype),
						(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						this._emitEOFToken();
					break;
				}
				default:
					this._err(d.missingQuoteBeforeDoctypePublicIdentifier),
						(a.forceQuirks = !0),
						(this.state = i.BOGUS_DOCTYPE),
						this._stateBogusDoctype(t);
			}
		}
		_stateBeforeDoctypePublicIdentifier(t) {
			let a = this.currentToken;
			switch (t) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED:
					break;
				case r.QUOTATION_MARK: {
					(a.publicId = ""),
						(this.state =
							i.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
					break;
				}
				case r.APOSTROPHE: {
					(a.publicId = ""),
						(this.state =
							i.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
					break;
				}
				case r.GREATER_THAN_SIGN: {
					this._err(d.missingDoctypePublicIdentifier),
						(a.forceQuirks = !0),
						(this.state = i.DATA),
						this.emitCurrentDoctype(a);
					break;
				}
				case r.EOF: {
					this._err(d.eofInDoctype),
						(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						this._emitEOFToken();
					break;
				}
				default:
					this._err(d.missingQuoteBeforeDoctypePublicIdentifier),
						(a.forceQuirks = !0),
						(this.state = i.BOGUS_DOCTYPE),
						this._stateBogusDoctype(t);
			}
		}
		_stateDoctypePublicIdentifierDoubleQuoted(t) {
			let a = this.currentToken;
			switch (t) {
				case r.QUOTATION_MARK: {
					this.state = i.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter), (a.publicId += C);
					break;
				}
				case r.GREATER_THAN_SIGN: {
					this._err(d.abruptDoctypePublicIdentifier),
						(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						(this.state = i.DATA);
					break;
				}
				case r.EOF: {
					this._err(d.eofInDoctype),
						(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						this._emitEOFToken();
					break;
				}
				default:
					a.publicId += String.fromCodePoint(t);
			}
		}
		_stateDoctypePublicIdentifierSingleQuoted(t) {
			let a = this.currentToken;
			switch (t) {
				case r.APOSTROPHE: {
					this.state = i.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter), (a.publicId += C);
					break;
				}
				case r.GREATER_THAN_SIGN: {
					this._err(d.abruptDoctypePublicIdentifier),
						(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						(this.state = i.DATA);
					break;
				}
				case r.EOF: {
					this._err(d.eofInDoctype),
						(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						this._emitEOFToken();
					break;
				}
				default:
					a.publicId += String.fromCodePoint(t);
			}
		}
		_stateAfterDoctypePublicIdentifier(t) {
			let a = this.currentToken;
			switch (t) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED: {
					this.state =
						i.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
					break;
				}
				case r.GREATER_THAN_SIGN: {
					(this.state = i.DATA), this.emitCurrentDoctype(a);
					break;
				}
				case r.QUOTATION_MARK: {
					this._err(
						d.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers,
					),
						(a.systemId = ""),
						(this.state =
							i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
					break;
				}
				case r.APOSTROPHE: {
					this._err(
						d.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers,
					),
						(a.systemId = ""),
						(this.state =
							i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
					break;
				}
				case r.EOF: {
					this._err(d.eofInDoctype),
						(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						this._emitEOFToken();
					break;
				}
				default:
					this._err(d.missingQuoteBeforeDoctypeSystemIdentifier),
						(a.forceQuirks = !0),
						(this.state = i.BOGUS_DOCTYPE),
						this._stateBogusDoctype(t);
			}
		}
		_stateBetweenDoctypePublicAndSystemIdentifiers(t) {
			let a = this.currentToken;
			switch (t) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED:
					break;
				case r.GREATER_THAN_SIGN: {
					this.emitCurrentDoctype(a), (this.state = i.DATA);
					break;
				}
				case r.QUOTATION_MARK: {
					(a.systemId = ""),
						(this.state =
							i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
					break;
				}
				case r.APOSTROPHE: {
					(a.systemId = ""),
						(this.state =
							i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
					break;
				}
				case r.EOF: {
					this._err(d.eofInDoctype),
						(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						this._emitEOFToken();
					break;
				}
				default:
					this._err(d.missingQuoteBeforeDoctypeSystemIdentifier),
						(a.forceQuirks = !0),
						(this.state = i.BOGUS_DOCTYPE),
						this._stateBogusDoctype(t);
			}
		}
		_stateAfterDoctypeSystemKeyword(t) {
			let a = this.currentToken;
			switch (t) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED: {
					this.state = i.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
					break;
				}
				case r.QUOTATION_MARK: {
					this._err(d.missingWhitespaceAfterDoctypeSystemKeyword),
						(a.systemId = ""),
						(this.state =
							i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
					break;
				}
				case r.APOSTROPHE: {
					this._err(d.missingWhitespaceAfterDoctypeSystemKeyword),
						(a.systemId = ""),
						(this.state =
							i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
					break;
				}
				case r.GREATER_THAN_SIGN: {
					this._err(d.missingDoctypeSystemIdentifier),
						(a.forceQuirks = !0),
						(this.state = i.DATA),
						this.emitCurrentDoctype(a);
					break;
				}
				case r.EOF: {
					this._err(d.eofInDoctype),
						(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						this._emitEOFToken();
					break;
				}
				default:
					this._err(d.missingQuoteBeforeDoctypeSystemIdentifier),
						(a.forceQuirks = !0),
						(this.state = i.BOGUS_DOCTYPE),
						this._stateBogusDoctype(t);
			}
		}
		_stateBeforeDoctypeSystemIdentifier(t) {
			let a = this.currentToken;
			switch (t) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED:
					break;
				case r.QUOTATION_MARK: {
					(a.systemId = ""),
						(this.state =
							i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
					break;
				}
				case r.APOSTROPHE: {
					(a.systemId = ""),
						(this.state =
							i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
					break;
				}
				case r.GREATER_THAN_SIGN: {
					this._err(d.missingDoctypeSystemIdentifier),
						(a.forceQuirks = !0),
						(this.state = i.DATA),
						this.emitCurrentDoctype(a);
					break;
				}
				case r.EOF: {
					this._err(d.eofInDoctype),
						(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						this._emitEOFToken();
					break;
				}
				default:
					this._err(d.missingQuoteBeforeDoctypeSystemIdentifier),
						(a.forceQuirks = !0),
						(this.state = i.BOGUS_DOCTYPE),
						this._stateBogusDoctype(t);
			}
		}
		_stateDoctypeSystemIdentifierDoubleQuoted(t) {
			let a = this.currentToken;
			switch (t) {
				case r.QUOTATION_MARK: {
					this.state = i.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter), (a.systemId += C);
					break;
				}
				case r.GREATER_THAN_SIGN: {
					this._err(d.abruptDoctypeSystemIdentifier),
						(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						(this.state = i.DATA);
					break;
				}
				case r.EOF: {
					this._err(d.eofInDoctype),
						(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						this._emitEOFToken();
					break;
				}
				default:
					a.systemId += String.fromCodePoint(t);
			}
		}
		_stateDoctypeSystemIdentifierSingleQuoted(t) {
			let a = this.currentToken;
			switch (t) {
				case r.APOSTROPHE: {
					this.state = i.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter), (a.systemId += C);
					break;
				}
				case r.GREATER_THAN_SIGN: {
					this._err(d.abruptDoctypeSystemIdentifier),
						(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						(this.state = i.DATA);
					break;
				}
				case r.EOF: {
					this._err(d.eofInDoctype),
						(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						this._emitEOFToken();
					break;
				}
				default:
					a.systemId += String.fromCodePoint(t);
			}
		}
		_stateAfterDoctypeSystemIdentifier(t) {
			let a = this.currentToken;
			switch (t) {
				case r.SPACE:
				case r.LINE_FEED:
				case r.TABULATION:
				case r.FORM_FEED:
					break;
				case r.GREATER_THAN_SIGN: {
					this.emitCurrentDoctype(a), (this.state = i.DATA);
					break;
				}
				case r.EOF: {
					this._err(d.eofInDoctype),
						(a.forceQuirks = !0),
						this.emitCurrentDoctype(a),
						this._emitEOFToken();
					break;
				}
				default:
					this._err(
						d.unexpectedCharacterAfterDoctypeSystemIdentifier,
					),
						(this.state = i.BOGUS_DOCTYPE),
						this._stateBogusDoctype(t);
			}
		}
		_stateBogusDoctype(t) {
			let a = this.currentToken;
			switch (t) {
				case r.GREATER_THAN_SIGN: {
					this.emitCurrentDoctype(a), (this.state = i.DATA);
					break;
				}
				case r.NULL: {
					this._err(d.unexpectedNullCharacter);
					break;
				}
				case r.EOF: {
					this.emitCurrentDoctype(a), this._emitEOFToken();
					break;
				}
				default:
			}
		}
		_stateCdataSection(t) {
			switch (t) {
				case r.RIGHT_SQUARE_BRACKET: {
					this.state = i.CDATA_SECTION_BRACKET;
					break;
				}
				case r.EOF: {
					this._err(d.eofInCdata), this._emitEOFToken();
					break;
				}
				default:
					this._emitCodePoint(t);
			}
		}
		_stateCdataSectionBracket(t) {
			t === r.RIGHT_SQUARE_BRACKET
				? (this.state = i.CDATA_SECTION_END)
				: (this._emitChars("]"),
					(this.state = i.CDATA_SECTION),
					this._stateCdataSection(t));
		}
		_stateCdataSectionEnd(t) {
			switch (t) {
				case r.GREATER_THAN_SIGN: {
					this.state = i.DATA;
					break;
				}
				case r.RIGHT_SQUARE_BRACKET: {
					this._emitChars("]");
					break;
				}
				default:
					this._emitChars("]]"),
						(this.state = i.CDATA_SECTION),
						this._stateCdataSection(t);
			}
		}
		_stateCharacterReference(t) {
			t === r.NUMBER_SIGN
				? (this.state = i.NUMERIC_CHARACTER_REFERENCE)
				: Oe(t)
					? ((this.state = i.NAMED_CHARACTER_REFERENCE),
						this._stateNamedCharacterReference(t))
					: (this._flushCodePointConsumedAsCharacterReference(
							r.AMPERSAND,
						),
						this._reconsumeInState(this.returnState, t));
		}
		_stateNamedCharacterReference(t) {
			let a = this._matchNamedCharacterReference(t);
			if (!this._ensureHibernation())
				if (a) {
					for (let s = 0; s < a.length; s++)
						this._flushCodePointConsumedAsCharacterReference(a[s]);
					this.state = this.returnState;
				} else
					this._flushCodePointConsumedAsCharacterReference(
						r.AMPERSAND,
					),
						(this.state = i.AMBIGUOUS_AMPERSAND);
		}
		_stateAmbiguousAmpersand(t) {
			Oe(t)
				? this._flushCodePointConsumedAsCharacterReference(t)
				: (t === r.SEMICOLON &&
						this._err(d.unknownNamedCharacterReference),
					this._reconsumeInState(this.returnState, t));
		}
		_stateNumericCharacterReference(t) {
			(this.charRefCode = 0),
				t === r.LATIN_SMALL_X || t === r.LATIN_CAPITAL_X
					? (this.state = i.HEXADEMICAL_CHARACTER_REFERENCE_START)
					: G(t)
						? ((this.state = i.DECIMAL_CHARACTER_REFERENCE),
							this._stateDecimalCharacterReference(t))
						: (this._err(
								d.absenceOfDigitsInNumericCharacterReference,
							),
							this._flushCodePointConsumedAsCharacterReference(
								r.AMPERSAND,
							),
							this._flushCodePointConsumedAsCharacterReference(
								r.NUMBER_SIGN,
							),
							this._reconsumeInState(this.returnState, t));
		}
		_stateHexademicalCharacterReferenceStart(t) {
			Jt(t)
				? ((this.state = i.HEXADEMICAL_CHARACTER_REFERENCE),
					this._stateHexademicalCharacterReference(t))
				: (this._err(d.absenceOfDigitsInNumericCharacterReference),
					this._flushCodePointConsumedAsCharacterReference(
						r.AMPERSAND,
					),
					this._flushCodePointConsumedAsCharacterReference(
						r.NUMBER_SIGN,
					),
					this._unconsume(2),
					(this.state = this.returnState));
		}
		_stateHexademicalCharacterReference(t) {
			Ke(t)
				? (this.charRefCode = this.charRefCode * 16 + t - 55)
				: Ve(t)
					? (this.charRefCode = this.charRefCode * 16 + t - 87)
					: G(t)
						? (this.charRefCode = this.charRefCode * 16 + t - 48)
						: t === r.SEMICOLON
							? (this.state = i.NUMERIC_CHARACTER_REFERENCE_END)
							: (this._err(
									d.missingSemicolonAfterCharacterReference,
								),
								(this.state =
									i.NUMERIC_CHARACTER_REFERENCE_END),
								this._stateNumericCharacterReferenceEnd(t));
		}
		_stateDecimalCharacterReference(t) {
			G(t)
				? (this.charRefCode = this.charRefCode * 10 + t - 48)
				: t === r.SEMICOLON
					? (this.state = i.NUMERIC_CHARACTER_REFERENCE_END)
					: (this._err(d.missingSemicolonAfterCharacterReference),
						(this.state = i.NUMERIC_CHARACTER_REFERENCE_END),
						this._stateNumericCharacterReferenceEnd(t));
		}
		_stateNumericCharacterReferenceEnd(t) {
			if (this.charRefCode === r.NULL)
				this._err(d.nullCharacterReference),
					(this.charRefCode = r.REPLACEMENT_CHARACTER);
			else if (this.charRefCode > 1114111)
				this._err(d.characterReferenceOutsideUnicodeRange),
					(this.charRefCode = r.REPLACEMENT_CHARACTER);
			else if (te(this.charRefCode))
				this._err(d.surrogateCharacterReference),
					(this.charRefCode = r.REPLACEMENT_CHARACTER);
			else if (ae(this.charRefCode))
				this._err(d.noncharacterCharacterReference);
			else if (
				ue(this.charRefCode) ||
				this.charRefCode === r.CARRIAGE_RETURN
			) {
				this._err(d.controlCharacterReference);
				let a = zt.get(this.charRefCode);
				a !== void 0 && (this.charRefCode = a);
			}
			this._flushCodePointConsumedAsCharacterReference(this.charRefCode),
				this._reconsumeInState(this.returnState, t);
		}
	};
	var $e = new Set([
			u.DD,
			u.DT,
			u.LI,
			u.OPTGROUP,
			u.OPTION,
			u.P,
			u.RB,
			u.RP,
			u.RT,
			u.RTC,
		]),
		ze = new Set([
			...$e,
			u.CAPTION,
			u.COLGROUP,
			u.TBODY,
			u.TD,
			u.TFOOT,
			u.TH,
			u.THEAD,
			u.TR,
		]),
		ce = new Map([
			[u.APPLET, E.HTML],
			[u.CAPTION, E.HTML],
			[u.HTML, E.HTML],
			[u.MARQUEE, E.HTML],
			[u.OBJECT, E.HTML],
			[u.TABLE, E.HTML],
			[u.TD, E.HTML],
			[u.TEMPLATE, E.HTML],
			[u.TH, E.HTML],
			[u.ANNOTATION_XML, E.MATHML],
			[u.MI, E.MATHML],
			[u.MN, E.MATHML],
			[u.MO, E.MATHML],
			[u.MS, E.MATHML],
			[u.MTEXT, E.MATHML],
			[u.DESC, E.SVG],
			[u.FOREIGN_OBJECT, E.SVG],
			[u.TITLE, E.SVG],
		]),
		eu = [u.H1, u.H2, u.H3, u.H4, u.H5, u.H6],
		tu = [u.TR, u.TEMPLATE, u.HTML],
		uu = [u.TBODY, u.TFOOT, u.THEAD, u.TEMPLATE, u.HTML],
		au = [u.TABLE, u.TEMPLATE, u.HTML],
		su = [u.TD, u.TH],
		oe = class {
			get currentTmplContentOrNode() {
				return this._isInTemplate()
					? this.treeAdapter.getTemplateContent(this.current)
					: this.current;
			}
			constructor(t, a, s) {
				(this.treeAdapter = a),
					(this.handler = s),
					(this.items = []),
					(this.tagIDs = []),
					(this.stackTop = -1),
					(this.tmplCount = 0),
					(this.currentTagId = u.UNKNOWN),
					(this.current = t);
			}
			_indexOf(t) {
				return this.items.lastIndexOf(t, this.stackTop);
			}
			_isInTemplate() {
				return (
					this.currentTagId === u.TEMPLATE &&
					this.treeAdapter.getNamespaceURI(this.current) === E.HTML
				);
			}
			_updateCurrentElement() {
				(this.current = this.items[this.stackTop]),
					(this.currentTagId = this.tagIDs[this.stackTop]);
			}
			push(t, a) {
				this.stackTop++,
					(this.items[this.stackTop] = t),
					(this.current = t),
					(this.tagIDs[this.stackTop] = a),
					(this.currentTagId = a),
					this._isInTemplate() && this.tmplCount++,
					this.handler.onItemPush(t, a, !0);
			}
			pop() {
				let t = this.current;
				this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--,
					this.stackTop--,
					this._updateCurrentElement(),
					this.handler.onItemPop(t, !0);
			}
			replace(t, a) {
				let s = this._indexOf(t);
				(this.items[s] = a), s === this.stackTop && (this.current = a);
			}
			insertAfter(t, a, s) {
				let c = this._indexOf(t) + 1;
				this.items.splice(c, 0, a),
					this.tagIDs.splice(c, 0, s),
					this.stackTop++,
					c === this.stackTop && this._updateCurrentElement(),
					this.handler.onItemPush(
						this.current,
						this.currentTagId,
						c === this.stackTop,
					);
			}
			popUntilTagNamePopped(t) {
				let a = this.stackTop + 1;
				do a = this.tagIDs.lastIndexOf(t, a - 1);
				while (
					a > 0 &&
					this.treeAdapter.getNamespaceURI(this.items[a]) !== E.HTML
				);
				this.shortenToLength(a < 0 ? 0 : a);
			}
			shortenToLength(t) {
				for (; this.stackTop >= t; ) {
					let a = this.current;
					this.tmplCount > 0 &&
						this._isInTemplate() &&
						(this.tmplCount -= 1),
						this.stackTop--,
						this._updateCurrentElement(),
						this.handler.onItemPop(a, this.stackTop < t);
				}
			}
			popUntilElementPopped(t) {
				let a = this._indexOf(t);
				this.shortenToLength(a < 0 ? 0 : a);
			}
			popUntilPopped(t, a) {
				let s = this._indexOfTagNames(t, a);
				this.shortenToLength(s < 0 ? 0 : s);
			}
			popUntilNumberedHeaderPopped() {
				this.popUntilPopped(eu, E.HTML);
			}
			popUntilTableCellPopped() {
				this.popUntilPopped(su, E.HTML);
			}
			popAllUpToHtmlElement() {
				(this.tmplCount = 0), this.shortenToLength(1);
			}
			_indexOfTagNames(t, a) {
				for (let s = this.stackTop; s >= 0; s--)
					if (
						t.includes(this.tagIDs[s]) &&
						this.treeAdapter.getNamespaceURI(this.items[s]) === a
					)
						return s;
				return -1;
			}
			clearBackTo(t, a) {
				let s = this._indexOfTagNames(t, a);
				this.shortenToLength(s + 1);
			}
			clearBackToTableContext() {
				this.clearBackTo(au, E.HTML);
			}
			clearBackToTableBodyContext() {
				this.clearBackTo(uu, E.HTML);
			}
			clearBackToTableRowContext() {
				this.clearBackTo(tu, E.HTML);
			}
			remove(t) {
				let a = this._indexOf(t);
				a >= 0 &&
					(a === this.stackTop
						? this.pop()
						: (this.items.splice(a, 1),
							this.tagIDs.splice(a, 1),
							this.stackTop--,
							this._updateCurrentElement(),
							this.handler.onItemPop(t, !1)));
			}
			tryPeekProperlyNestedBodyElement() {
				return this.stackTop >= 1 && this.tagIDs[1] === u.BODY
					? this.items[1]
					: null;
			}
			contains(t) {
				return this._indexOf(t) > -1;
			}
			getCommonAncestor(t) {
				let a = this._indexOf(t) - 1;
				return a >= 0 ? this.items[a] : null;
			}
			isRootHtmlElementCurrent() {
				return this.stackTop === 0 && this.tagIDs[0] === u.HTML;
			}
			hasInScope(t) {
				for (let a = this.stackTop; a >= 0; a--) {
					let s = this.tagIDs[a],
						c = this.treeAdapter.getNamespaceURI(this.items[a]);
					if (s === t && c === E.HTML) return !0;
					if (ce.get(s) === c) return !1;
				}
				return !0;
			}
			hasNumberedHeaderInScope() {
				for (let t = this.stackTop; t >= 0; t--) {
					let a = this.tagIDs[t],
						s = this.treeAdapter.getNamespaceURI(this.items[t]);
					if (ie(a) && s === E.HTML) return !0;
					if (ce.get(a) === s) return !1;
				}
				return !0;
			}
			hasInListItemScope(t) {
				for (let a = this.stackTop; a >= 0; a--) {
					let s = this.tagIDs[a],
						c = this.treeAdapter.getNamespaceURI(this.items[a]);
					if (s === t && c === E.HTML) return !0;
					if (
						((s === u.UL || s === u.OL) && c === E.HTML) ||
						ce.get(s) === c
					)
						return !1;
				}
				return !0;
			}
			hasInButtonScope(t) {
				for (let a = this.stackTop; a >= 0; a--) {
					let s = this.tagIDs[a],
						c = this.treeAdapter.getNamespaceURI(this.items[a]);
					if (s === t && c === E.HTML) return !0;
					if ((s === u.BUTTON && c === E.HTML) || ce.get(s) === c)
						return !1;
				}
				return !0;
			}
			hasInTableScope(t) {
				for (let a = this.stackTop; a >= 0; a--) {
					let s = this.tagIDs[a];
					if (
						this.treeAdapter.getNamespaceURI(this.items[a]) ===
						E.HTML
					) {
						if (s === t) return !0;
						if (s === u.TABLE || s === u.TEMPLATE || s === u.HTML)
							return !1;
					}
				}
				return !0;
			}
			hasTableBodyContextInTableScope() {
				for (let t = this.stackTop; t >= 0; t--) {
					let a = this.tagIDs[t];
					if (
						this.treeAdapter.getNamespaceURI(this.items[t]) ===
						E.HTML
					) {
						if (a === u.TBODY || a === u.THEAD || a === u.TFOOT)
							return !0;
						if (a === u.TABLE || a === u.HTML) return !1;
					}
				}
				return !0;
			}
			hasInSelectScope(t) {
				for (let a = this.stackTop; a >= 0; a--) {
					let s = this.tagIDs[a];
					if (
						this.treeAdapter.getNamespaceURI(this.items[a]) ===
						E.HTML
					) {
						if (s === t) return !0;
						if (s !== u.OPTION && s !== u.OPTGROUP) return !1;
					}
				}
				return !0;
			}
			generateImpliedEndTags() {
				for (; $e.has(this.currentTagId); ) this.pop();
			}
			generateImpliedEndTagsThoroughly() {
				for (; ze.has(this.currentTagId); ) this.pop();
			}
			generateImpliedEndTagsWithExclusion(t) {
				for (; this.currentTagId !== t && ze.has(this.currentTagId); )
					this.pop();
			}
		};
	var D;
	(function (e) {
		(e[(e.Marker = 0)] = "Marker"), (e[(e.Element = 1)] = "Element");
	})((D = D || (D = {})));
	var Je = { type: D.Marker },
		de = class {
			constructor(t) {
				(this.treeAdapter = t),
					(this.entries = []),
					(this.bookmark = null);
			}
			_getNoahArkConditionCandidates(t, a) {
				let s = [],
					c = a.length,
					T = this.treeAdapter.getTagName(t),
					l = this.treeAdapter.getNamespaceURI(t);
				for (let m = 0; m < this.entries.length; m++) {
					let _ = this.entries[m];
					if (_.type === D.Marker) break;
					let { element: f } = _;
					if (
						this.treeAdapter.getTagName(f) === T &&
						this.treeAdapter.getNamespaceURI(f) === l
					) {
						let L = this.treeAdapter.getAttrList(f);
						L.length === c && s.push({ idx: m, attrs: L });
					}
				}
				return s;
			}
			_ensureNoahArkCondition(t) {
				if (this.entries.length < 3) return;
				let a = this.treeAdapter.getAttrList(t),
					s = this._getNoahArkConditionCandidates(t, a);
				if (s.length < 3) return;
				let c = new Map(a.map((l) => [l.name, l.value])),
					T = 0;
				for (let l = 0; l < s.length; l++) {
					let m = s[l];
					m.attrs.every((_) => c.get(_.name) === _.value) &&
						((T += 1), T >= 3 && this.entries.splice(m.idx, 1));
				}
			}
			insertMarker() {
				this.entries.unshift(Je);
			}
			pushElement(t, a) {
				this._ensureNoahArkCondition(t),
					this.entries.unshift({
						type: D.Element,
						element: t,
						token: a,
					});
			}
			insertElementAfterBookmark(t, a) {
				let s = this.entries.indexOf(this.bookmark);
				this.entries.splice(s, 0, {
					type: D.Element,
					element: t,
					token: a,
				});
			}
			removeEntry(t) {
				let a = this.entries.indexOf(t);
				a >= 0 && this.entries.splice(a, 1);
			}
			clearToLastMarker() {
				let t = this.entries.indexOf(Je);
				t >= 0
					? this.entries.splice(0, t + 1)
					: (this.entries.length = 0);
			}
			getElementEntryInScopeWithTagName(t) {
				let a = this.entries.find(
					(s) =>
						s.type === D.Marker ||
						this.treeAdapter.getTagName(s.element) === t,
				);
				return a && a.type === D.Element ? a : null;
			}
			getElementEntry(t) {
				return this.entries.find(
					(a) => a.type === D.Element && a.element === t,
				);
			}
		};
	function Ze(e) {
		return { nodeName: "#text", value: e, parentNode: null };
	}
	var H = {
		createDocument() {
			return { nodeName: "#document", mode: p.NO_QUIRKS, childNodes: [] };
		},
		createDocumentFragment() {
			return { nodeName: "#document-fragment", childNodes: [] };
		},
		createElement(e, t, a) {
			return {
				nodeName: e,
				tagName: e,
				attrs: a,
				namespaceURI: t,
				childNodes: [],
				parentNode: null,
			};
		},
		createCommentNode(e) {
			return { nodeName: "#comment", data: e, parentNode: null };
		},
		appendChild(e, t) {
			e.childNodes.push(t), (t.parentNode = e);
		},
		insertBefore(e, t, a) {
			let s = e.childNodes.indexOf(a);
			e.childNodes.splice(s, 0, t), (t.parentNode = e);
		},
		setTemplateContent(e, t) {
			e.content = t;
		},
		getTemplateContent(e) {
			return e.content;
		},
		setDocumentType(e, t, a, s) {
			let c = e.childNodes.find((T) => T.nodeName === "#documentType");
			if (c) (c.name = t), (c.publicId = a), (c.systemId = s);
			else {
				let T = {
					nodeName: "#documentType",
					name: t,
					publicId: a,
					systemId: s,
					parentNode: null,
				};
				H.appendChild(e, T);
			}
		},
		setDocumentMode(e, t) {
			e.mode = t;
		},
		getDocumentMode(e) {
			return e.mode;
		},
		detachNode(e) {
			if (e.parentNode) {
				let t = e.parentNode.childNodes.indexOf(e);
				e.parentNode.childNodes.splice(t, 1), (e.parentNode = null);
			}
		},
		insertText(e, t) {
			if (e.childNodes.length > 0) {
				let a = e.childNodes[e.childNodes.length - 1];
				if (H.isTextNode(a)) {
					a.value += t;
					return;
				}
			}
			H.appendChild(e, Ze(t));
		},
		insertTextBefore(e, t, a) {
			let s = e.childNodes[e.childNodes.indexOf(a) - 1];
			s && H.isTextNode(s) ? (s.value += t) : H.insertBefore(e, Ze(t), a);
		},
		adoptAttributes(e, t) {
			let a = new Set(e.attrs.map((s) => s.name));
			for (let s = 0; s < t.length; s++)
				a.has(t[s].name) || e.attrs.push(t[s]);
		},
		getFirstChild(e) {
			return e.childNodes[0];
		},
		getChildNodes(e) {
			return e.childNodes;
		},
		getParentNode(e) {
			return e.parentNode;
		},
		getAttrList(e) {
			return e.attrs;
		},
		getTagName(e) {
			return e.tagName;
		},
		getNamespaceURI(e) {
			return e.namespaceURI;
		},
		getTextNodeContent(e) {
			return e.value;
		},
		getCommentNodeContent(e) {
			return e.data;
		},
		getDocumentTypeNodeName(e) {
			return e.name;
		},
		getDocumentTypeNodePublicId(e) {
			return e.publicId;
		},
		getDocumentTypeNodeSystemId(e) {
			return e.systemId;
		},
		isTextNode(e) {
			return e.nodeName === "#text";
		},
		isCommentNode(e) {
			return e.nodeName === "#comment";
		},
		isDocumentTypeNode(e) {
			return e.nodeName === "#documentType";
		},
		isElementNode(e) {
			return Object.prototype.hasOwnProperty.call(e, "tagName");
		},
		setNodeSourceCodeLocation(e, t) {
			e.sourceCodeLocation = t;
		},
		getNodeSourceCodeLocation(e) {
			return e.sourceCodeLocation;
		},
		updateNodeSourceCodeLocation(e, t) {
			e.sourceCodeLocation = { ...e.sourceCodeLocation, ...t };
		},
	};
	var tt = "html",
		ru = "about:legacy-compat",
		iu = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",
		ut = [
			"+//silmaril//dtd html pro v0r11 19970101//",
			"-//as//dtd html 3.0 aswedit + extensions//",
			"-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
			"-//ietf//dtd html 2.0 level 1//",
			"-//ietf//dtd html 2.0 level 2//",
			"-//ietf//dtd html 2.0 strict level 1//",
			"-//ietf//dtd html 2.0 strict level 2//",
			"-//ietf//dtd html 2.0 strict//",
			"-//ietf//dtd html 2.0//",
			"-//ietf//dtd html 2.1e//",
			"-//ietf//dtd html 3.0//",
			"-//ietf//dtd html 3.2 final//",
			"-//ietf//dtd html 3.2//",
			"-//ietf//dtd html 3//",
			"-//ietf//dtd html level 0//",
			"-//ietf//dtd html level 1//",
			"-//ietf//dtd html level 2//",
			"-//ietf//dtd html level 3//",
			"-//ietf//dtd html strict level 0//",
			"-//ietf//dtd html strict level 1//",
			"-//ietf//dtd html strict level 2//",
			"-//ietf//dtd html strict level 3//",
			"-//ietf//dtd html strict//",
			"-//ietf//dtd html//",
			"-//metrius//dtd metrius presentational//",
			"-//microsoft//dtd internet explorer 2.0 html strict//",
			"-//microsoft//dtd internet explorer 2.0 html//",
			"-//microsoft//dtd internet explorer 2.0 tables//",
			"-//microsoft//dtd internet explorer 3.0 html strict//",
			"-//microsoft//dtd internet explorer 3.0 html//",
			"-//microsoft//dtd internet explorer 3.0 tables//",
			"-//netscape comm. corp.//dtd html//",
			"-//netscape comm. corp.//dtd strict html//",
			"-//o'reilly and associates//dtd html 2.0//",
			"-//o'reilly and associates//dtd html extended 1.0//",
			"-//o'reilly and associates//dtd html extended relaxed 1.0//",
			"-//sq//dtd html 2.0 hotmetal + extensions//",
			"-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
			"-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
			"-//spyglass//dtd html 2.0 extended//",
			"-//sun microsystems corp.//dtd hotjava html//",
			"-//sun microsystems corp.//dtd hotjava strict html//",
			"-//w3c//dtd html 3 1995-03-24//",
			"-//w3c//dtd html 3.2 draft//",
			"-//w3c//dtd html 3.2 final//",
			"-//w3c//dtd html 3.2//",
			"-//w3c//dtd html 3.2s draft//",
			"-//w3c//dtd html 4.0 frameset//",
			"-//w3c//dtd html 4.0 transitional//",
			"-//w3c//dtd html experimental 19960712//",
			"-//w3c//dtd html experimental 970421//",
			"-//w3c//dtd w3 html//",
			"-//w3o//dtd w3 html 3.0//",
			"-//webtechs//dtd mozilla html 2.0//",
			"-//webtechs//dtd mozilla html//",
		],
		nu = [
			...ut,
			"-//w3c//dtd html 4.01 frameset//",
			"-//w3c//dtd html 4.01 transitional//",
		],
		cu = new Set([
			"-//w3o//dtd w3 html strict 3.0//en//",
			"-/w3c/dtd html 4.0 transitional/en",
			"html",
		]),
		at = [
			"-//w3c//dtd xhtml 1.0 frameset//",
			"-//w3c//dtd xhtml 1.0 transitional//",
		],
		ou = [
			...at,
			"-//w3c//dtd html 4.01 frameset//",
			"-//w3c//dtd html 4.01 transitional//",
		];
	function et(e, t) {
		return t.some((a) => e.startsWith(a));
	}
	function st(e) {
		return (
			e.name === tt &&
			e.publicId === null &&
			(e.systemId === null || e.systemId === ru)
		);
	}
	function rt(e) {
		if (e.name !== tt) return p.QUIRKS;
		let { systemId: t } = e;
		if (t && t.toLowerCase() === iu) return p.QUIRKS;
		let { publicId: a } = e;
		if (a !== null) {
			if (((a = a.toLowerCase()), cu.has(a))) return p.QUIRKS;
			let s = t === null ? nu : ut;
			if (et(a, s)) return p.QUIRKS;
			if (((s = t === null ? at : ou), et(a, s))) return p.LIMITED_QUIRKS;
		}
		return p.NO_QUIRKS;
	}
	var it = {
			TEXT_HTML: "text/html",
			APPLICATION_XML: "application/xhtml+xml",
		},
		Eu = "definitionurl",
		Tu = "definitionURL",
		hu = new Map(
			[
				"attributeName",
				"attributeType",
				"baseFrequency",
				"baseProfile",
				"calcMode",
				"clipPathUnits",
				"diffuseConstant",
				"edgeMode",
				"filterUnits",
				"glyphRef",
				"gradientTransform",
				"gradientUnits",
				"kernelMatrix",
				"kernelUnitLength",
				"keyPoints",
				"keySplines",
				"keyTimes",
				"lengthAdjust",
				"limitingConeAngle",
				"markerHeight",
				"markerUnits",
				"markerWidth",
				"maskContentUnits",
				"maskUnits",
				"numOctaves",
				"pathLength",
				"patternContentUnits",
				"patternTransform",
				"patternUnits",
				"pointsAtX",
				"pointsAtY",
				"pointsAtZ",
				"preserveAlpha",
				"preserveAspectRatio",
				"primitiveUnits",
				"refX",
				"refY",
				"repeatCount",
				"repeatDur",
				"requiredExtensions",
				"requiredFeatures",
				"specularConstant",
				"specularExponent",
				"spreadMethod",
				"startOffset",
				"stdDeviation",
				"stitchTiles",
				"surfaceScale",
				"systemLanguage",
				"tableValues",
				"targetX",
				"targetY",
				"textLength",
				"viewBox",
				"viewTarget",
				"xChannelSelector",
				"yChannelSelector",
				"zoomAndPan",
			].map((e) => [e.toLowerCase(), e]),
		),
		lu = new Map([
			[
				"xlink:actuate",
				{ prefix: "xlink", name: "actuate", namespace: E.XLINK },
			],
			[
				"xlink:arcrole",
				{ prefix: "xlink", name: "arcrole", namespace: E.XLINK },
			],
			[
				"xlink:href",
				{ prefix: "xlink", name: "href", namespace: E.XLINK },
			],
			[
				"xlink:role",
				{ prefix: "xlink", name: "role", namespace: E.XLINK },
			],
			[
				"xlink:show",
				{ prefix: "xlink", name: "show", namespace: E.XLINK },
			],
			[
				"xlink:title",
				{ prefix: "xlink", name: "title", namespace: E.XLINK },
			],
			[
				"xlink:type",
				{ prefix: "xlink", name: "type", namespace: E.XLINK },
			],
			["xml:base", { prefix: "xml", name: "base", namespace: E.XML }],
			["xml:lang", { prefix: "xml", name: "lang", namespace: E.XML }],
			["xml:space", { prefix: "xml", name: "space", namespace: E.XML }],
			["xmlns", { prefix: "", name: "xmlns", namespace: E.XMLNS }],
			[
				"xmlns:xlink",
				{ prefix: "xmlns", name: "xlink", namespace: E.XMLNS },
			],
		]),
		fu = new Map(
			[
				"altGlyph",
				"altGlyphDef",
				"altGlyphItem",
				"animateColor",
				"animateMotion",
				"animateTransform",
				"clipPath",
				"feBlend",
				"feColorMatrix",
				"feComponentTransfer",
				"feComposite",
				"feConvolveMatrix",
				"feDiffuseLighting",
				"feDisplacementMap",
				"feDistantLight",
				"feFlood",
				"feFuncA",
				"feFuncB",
				"feFuncG",
				"feFuncR",
				"feGaussianBlur",
				"feImage",
				"feMerge",
				"feMergeNode",
				"feMorphology",
				"feOffset",
				"fePointLight",
				"feSpecularLighting",
				"feSpotLight",
				"feTile",
				"feTurbulence",
				"foreignObject",
				"glyphRef",
				"linearGradient",
				"radialGradient",
				"textPath",
			].map((e) => [e.toLowerCase(), e]),
		),
		mu = new Set([
			u.B,
			u.BIG,
			u.BLOCKQUOTE,
			u.BODY,
			u.BR,
			u.CENTER,
			u.CODE,
			u.DD,
			u.DIV,
			u.DL,
			u.DT,
			u.EM,
			u.EMBED,
			u.H1,
			u.H2,
			u.H3,
			u.H4,
			u.H5,
			u.H6,
			u.HEAD,
			u.HR,
			u.I,
			u.IMG,
			u.LI,
			u.LISTING,
			u.MENU,
			u.META,
			u.NOBR,
			u.OL,
			u.P,
			u.PRE,
			u.RUBY,
			u.S,
			u.SMALL,
			u.SPAN,
			u.STRONG,
			u.STRIKE,
			u.SUB,
			u.SUP,
			u.TABLE,
			u.TT,
			u.U,
			u.UL,
			u.VAR,
		]);
	function nt(e) {
		let t = e.tagID;
		return (
			(t === u.FONT &&
				e.attrs.some(
					({ name: s }) =>
						s === B.COLOR || s === B.SIZE || s === B.FACE,
				)) ||
			mu.has(t)
		);
	}
	function Se(e) {
		for (let t = 0; t < e.attrs.length; t++)
			if (e.attrs[t].name === Eu) {
				e.attrs[t].name = Tu;
				break;
			}
	}
	function ge(e) {
		for (let t = 0; t < e.attrs.length; t++) {
			let a = hu.get(e.attrs[t].name);
			a != null && (e.attrs[t].name = a);
		}
	}
	function Ee(e) {
		for (let t = 0; t < e.attrs.length; t++) {
			let a = lu.get(e.attrs[t].name);
			a &&
				((e.attrs[t].prefix = a.prefix),
				(e.attrs[t].name = a.name),
				(e.attrs[t].namespace = a.namespace));
		}
	}
	function ct(e) {
		let t = fu.get(e.tagName);
		t != null && ((e.tagName = t), (e.tagID = k(e.tagName)));
	}
	function _u(e, t) {
		return (
			t === E.MATHML &&
			(e === u.MI ||
				e === u.MO ||
				e === u.MN ||
				e === u.MS ||
				e === u.MTEXT)
		);
	}
	function Au(e, t, a) {
		if (t === E.MATHML && e === u.ANNOTATION_XML) {
			for (let s = 0; s < a.length; s++)
				if (a[s].name === B.ENCODING) {
					let c = a[s].value.toLowerCase();
					return c === it.TEXT_HTML || c === it.APPLICATION_XML;
				}
		}
		return (
			t === E.SVG &&
			(e === u.FOREIGN_OBJECT || e === u.DESC || e === u.TITLE)
		);
	}
	function ot(e, t, a, s) {
		return (
			((!s || s === E.HTML) && Au(e, t, a)) ||
			((!s || s === E.MATHML) && _u(e, t))
		);
	}
	var bu = "hidden",
		Nu = 8,
		Cu = 3,
		n;
	(function (e) {
		(e[(e.INITIAL = 0)] = "INITIAL"),
			(e[(e.BEFORE_HTML = 1)] = "BEFORE_HTML"),
			(e[(e.BEFORE_HEAD = 2)] = "BEFORE_HEAD"),
			(e[(e.IN_HEAD = 3)] = "IN_HEAD"),
			(e[(e.IN_HEAD_NO_SCRIPT = 4)] = "IN_HEAD_NO_SCRIPT"),
			(e[(e.AFTER_HEAD = 5)] = "AFTER_HEAD"),
			(e[(e.IN_BODY = 6)] = "IN_BODY"),
			(e[(e.TEXT = 7)] = "TEXT"),
			(e[(e.IN_TABLE = 8)] = "IN_TABLE"),
			(e[(e.IN_TABLE_TEXT = 9)] = "IN_TABLE_TEXT"),
			(e[(e.IN_CAPTION = 10)] = "IN_CAPTION"),
			(e[(e.IN_COLUMN_GROUP = 11)] = "IN_COLUMN_GROUP"),
			(e[(e.IN_TABLE_BODY = 12)] = "IN_TABLE_BODY"),
			(e[(e.IN_ROW = 13)] = "IN_ROW"),
			(e[(e.IN_CELL = 14)] = "IN_CELL"),
			(e[(e.IN_SELECT = 15)] = "IN_SELECT"),
			(e[(e.IN_SELECT_IN_TABLE = 16)] = "IN_SELECT_IN_TABLE"),
			(e[(e.IN_TEMPLATE = 17)] = "IN_TEMPLATE"),
			(e[(e.AFTER_BODY = 18)] = "AFTER_BODY"),
			(e[(e.IN_FRAMESET = 19)] = "IN_FRAMESET"),
			(e[(e.AFTER_FRAMESET = 20)] = "AFTER_FRAMESET"),
			(e[(e.AFTER_AFTER_BODY = 21)] = "AFTER_AFTER_BODY"),
			(e[(e.AFTER_AFTER_FRAMESET = 22)] = "AFTER_AFTER_FRAMESET");
	})(n || (n = {}));
	var Iu = {
			startLine: -1,
			startCol: -1,
			startOffset: -1,
			endLine: -1,
			endCol: -1,
			endOffset: -1,
		},
		lt = new Set([u.TABLE, u.TBODY, u.TFOOT, u.THEAD, u.TR]),
		Et = {
			scriptingEnabled: !0,
			sourceCodeLocationInfo: !1,
			treeAdapter: H,
			onParseError: null,
		},
		J = class {
			constructor(t, a, s = null, c = null) {
				(this.fragmentContext = s),
					(this.scriptHandler = c),
					(this.currentToken = null),
					(this.stopped = !1),
					(this.insertionMode = n.INITIAL),
					(this.originalInsertionMode = n.INITIAL),
					(this.headElement = null),
					(this.formElement = null),
					(this.currentNotInHTML = !1),
					(this.tmplInsertionModeStack = []),
					(this.pendingCharacterTokens = []),
					(this.hasNonWhitespacePendingCharacterToken = !1),
					(this.framesetOk = !0),
					(this.skipNextNewLine = !1),
					(this.fosterParentingEnabled = !1),
					(this.options = { ...Et, ...t }),
					(this.treeAdapter = this.options.treeAdapter),
					(this.onParseError = this.options.onParseError),
					this.onParseError &&
						(this.options.sourceCodeLocationInfo = !0),
					(this.document = a ?? this.treeAdapter.createDocument()),
					(this.tokenizer = new X(this.options, this)),
					(this.activeFormattingElements = new de(this.treeAdapter)),
					(this.fragmentContextID = s
						? k(this.treeAdapter.getTagName(s))
						: u.UNKNOWN),
					this._setContextModes(
						s ?? this.document,
						this.fragmentContextID,
					),
					(this.openElements = new oe(
						this.document,
						this.treeAdapter,
						this,
					));
			}
			static parse(t, a) {
				let s = new this(a);
				return s.tokenizer.write(t, !0), s.document;
			}
			static getFragmentParser(t, a) {
				let s = { ...Et, ...a };
				t ?? (t = s.treeAdapter.createElement(o.TEMPLATE, E.HTML, []));
				let c = s.treeAdapter.createElement("documentmock", E.HTML, []),
					T = new this(s, c, t);
				return (
					T.fragmentContextID === u.TEMPLATE &&
						T.tmplInsertionModeStack.unshift(n.IN_TEMPLATE),
					T._initTokenizerForFragmentParsing(),
					T._insertFakeRootElement(),
					T._resetInsertionMode(),
					T._findFormInFragmentContext(),
					T
				);
			}
			getFragment() {
				let t = this.treeAdapter.getFirstChild(this.document),
					a = this.treeAdapter.createDocumentFragment();
				return this._adoptNodes(t, a), a;
			}
			_err(t, a, s) {
				var c;
				if (!this.onParseError) return;
				let T = (c = t.location) !== null && c !== void 0 ? c : Iu,
					l = {
						code: a,
						startLine: T.startLine,
						startCol: T.startCol,
						startOffset: T.startOffset,
						endLine: s ? T.startLine : T.endLine,
						endCol: s ? T.startCol : T.endCol,
						endOffset: s ? T.startOffset : T.endOffset,
					};
				this.onParseError(l);
			}
			onItemPush(t, a, s) {
				var c, T;
				(T = (c = this.treeAdapter).onItemPush) === null ||
					T === void 0 ||
					T.call(c, t),
					s &&
						this.openElements.stackTop > 0 &&
						this._setContextModes(t, a);
			}
			onItemPop(t, a) {
				var s, c;
				if (
					(this.options.sourceCodeLocationInfo &&
						this._setEndLocation(t, this.currentToken),
					(c = (s = this.treeAdapter).onItemPop) === null ||
						c === void 0 ||
						c.call(s, t, this.openElements.current),
					a)
				) {
					let T, l;
					this.openElements.stackTop === 0 && this.fragmentContext
						? ((T = this.fragmentContext),
							(l = this.fragmentContextID))
						: ({ current: T, currentTagId: l } = this.openElements),
						this._setContextModes(T, l);
				}
			}
			_setContextModes(t, a) {
				let s =
					t === this.document ||
					this.treeAdapter.getNamespaceURI(t) === E.HTML;
				(this.currentNotInHTML = !s),
					(this.tokenizer.inForeignNode =
						!s && !this._isIntegrationPoint(a, t));
			}
			_switchToTextParsing(t, a) {
				this._insertElement(t, E.HTML),
					(this.tokenizer.state = a),
					(this.originalInsertionMode = this.insertionMode),
					(this.insertionMode = n.TEXT);
			}
			switchToPlaintextParsing() {
				(this.insertionMode = n.TEXT),
					(this.originalInsertionMode = n.IN_BODY),
					(this.tokenizer.state = O.PLAINTEXT);
			}
			_getAdjustedCurrentElement() {
				return this.openElements.stackTop === 0 && this.fragmentContext
					? this.fragmentContext
					: this.openElements.current;
			}
			_findFormInFragmentContext() {
				let t = this.fragmentContext;
				for (; t; ) {
					if (this.treeAdapter.getTagName(t) === o.FORM) {
						this.formElement = t;
						break;
					}
					t = this.treeAdapter.getParentNode(t);
				}
			}
			_initTokenizerForFragmentParsing() {
				if (
					!(
						!this.fragmentContext ||
						this.treeAdapter.getNamespaceURI(
							this.fragmentContext,
						) !== E.HTML
					)
				)
					switch (this.fragmentContextID) {
						case u.TITLE:
						case u.TEXTAREA: {
							this.tokenizer.state = O.RCDATA;
							break;
						}
						case u.STYLE:
						case u.XMP:
						case u.IFRAME:
						case u.NOEMBED:
						case u.NOFRAMES:
						case u.NOSCRIPT: {
							this.tokenizer.state = O.RAWTEXT;
							break;
						}
						case u.SCRIPT: {
							this.tokenizer.state = O.SCRIPT_DATA;
							break;
						}
						case u.PLAINTEXT: {
							this.tokenizer.state = O.PLAINTEXT;
							break;
						}
						default:
					}
			}
			_setDocumentType(t) {
				let a = t.name || "",
					s = t.publicId || "",
					c = t.systemId || "";
				if (
					(this.treeAdapter.setDocumentType(this.document, a, s, c),
					t.location)
				) {
					let l = this.treeAdapter
						.getChildNodes(this.document)
						.find((m) => this.treeAdapter.isDocumentTypeNode(m));
					l &&
						this.treeAdapter.setNodeSourceCodeLocation(
							l,
							t.location,
						);
				}
			}
			_attachElementToTree(t, a) {
				if (this.options.sourceCodeLocationInfo) {
					let s = a && { ...a, startTag: a };
					this.treeAdapter.setNodeSourceCodeLocation(t, s);
				}
				if (this._shouldFosterParentOnInsertion())
					this._fosterParentElement(t);
				else {
					let s = this.openElements.currentTmplContentOrNode;
					this.treeAdapter.appendChild(s, t);
				}
			}
			_appendElement(t, a) {
				let s = this.treeAdapter.createElement(t.tagName, a, t.attrs);
				this._attachElementToTree(s, t.location);
			}
			_insertElement(t, a) {
				let s = this.treeAdapter.createElement(t.tagName, a, t.attrs);
				this._attachElementToTree(s, t.location),
					this.openElements.push(s, t.tagID);
			}
			_insertFakeElement(t, a) {
				let s = this.treeAdapter.createElement(t, E.HTML, []);
				this._attachElementToTree(s, null),
					this.openElements.push(s, a);
			}
			_insertTemplate(t) {
				let a = this.treeAdapter.createElement(
						t.tagName,
						E.HTML,
						t.attrs,
					),
					s = this.treeAdapter.createDocumentFragment();
				this.treeAdapter.setTemplateContent(a, s),
					this._attachElementToTree(a, t.location),
					this.openElements.push(a, t.tagID),
					this.options.sourceCodeLocationInfo &&
						this.treeAdapter.setNodeSourceCodeLocation(s, null);
			}
			_insertFakeRootElement() {
				let t = this.treeAdapter.createElement(o.HTML, E.HTML, []);
				this.options.sourceCodeLocationInfo &&
					this.treeAdapter.setNodeSourceCodeLocation(t, null),
					this.treeAdapter.appendChild(this.openElements.current, t),
					this.openElements.push(t, u.HTML);
			}
			_appendCommentNode(t, a) {
				let s = this.treeAdapter.createCommentNode(t.data);
				this.treeAdapter.appendChild(a, s),
					this.options.sourceCodeLocationInfo &&
						this.treeAdapter.setNodeSourceCodeLocation(
							s,
							t.location,
						);
			}
			_insertCharacters(t) {
				let a, s;
				if (
					(this._shouldFosterParentOnInsertion()
						? (({ parent: a, beforeElement: s } =
								this._findFosterParentingLocation()),
							s
								? this.treeAdapter.insertTextBefore(
										a,
										t.chars,
										s,
									)
								: this.treeAdapter.insertText(a, t.chars))
						: ((a = this.openElements.currentTmplContentOrNode),
							this.treeAdapter.insertText(a, t.chars)),
					!t.location)
				)
					return;
				let c = this.treeAdapter.getChildNodes(a),
					T = s ? c.lastIndexOf(s) : c.length,
					l = c[T - 1];
				if (this.treeAdapter.getNodeSourceCodeLocation(l)) {
					let { endLine: _, endCol: f, endOffset: L } = t.location;
					this.treeAdapter.updateNodeSourceCodeLocation(l, {
						endLine: _,
						endCol: f,
						endOffset: L,
					});
				} else
					this.options.sourceCodeLocationInfo &&
						this.treeAdapter.setNodeSourceCodeLocation(
							l,
							t.location,
						);
			}
			_adoptNodes(t, a) {
				for (
					let s = this.treeAdapter.getFirstChild(t);
					s;
					s = this.treeAdapter.getFirstChild(t)
				)
					this.treeAdapter.detachNode(s),
						this.treeAdapter.appendChild(a, s);
			}
			_setEndLocation(t, a) {
				if (
					this.treeAdapter.getNodeSourceCodeLocation(t) &&
					a.location
				) {
					let s = a.location,
						c = this.treeAdapter.getTagName(t),
						T =
							a.type === A.END_TAG && c === a.tagName
								? {
										endTag: { ...s },
										endLine: s.endLine,
										endCol: s.endCol,
										endOffset: s.endOffset,
									}
								: {
										endLine: s.startLine,
										endCol: s.startCol,
										endOffset: s.startOffset,
									};
					this.treeAdapter.updateNodeSourceCodeLocation(t, T);
				}
			}
			shouldProcessStartTagTokenInForeignContent(t) {
				if (!this.currentNotInHTML) return !1;
				let a, s;
				return (
					this.openElements.stackTop === 0 && this.fragmentContext
						? ((a = this.fragmentContext),
							(s = this.fragmentContextID))
						: ({ current: a, currentTagId: s } = this.openElements),
					t.tagID === u.SVG &&
					this.treeAdapter.getTagName(a) === o.ANNOTATION_XML &&
					this.treeAdapter.getNamespaceURI(a) === E.MATHML
						? !1
						: this.tokenizer.inForeignNode ||
							((t.tagID === u.MGLYPH ||
								t.tagID === u.MALIGNMARK) &&
								!this._isIntegrationPoint(s, a, E.HTML))
				);
			}
			_processToken(t) {
				switch (t.type) {
					case A.CHARACTER: {
						this.onCharacter(t);
						break;
					}
					case A.NULL_CHARACTER: {
						this.onNullCharacter(t);
						break;
					}
					case A.COMMENT: {
						this.onComment(t);
						break;
					}
					case A.DOCTYPE: {
						this.onDoctype(t);
						break;
					}
					case A.START_TAG: {
						this._processStartTag(t);
						break;
					}
					case A.END_TAG: {
						this.onEndTag(t);
						break;
					}
					case A.EOF: {
						this.onEof(t);
						break;
					}
					case A.WHITESPACE_CHARACTER: {
						this.onWhitespaceCharacter(t);
						break;
					}
				}
			}
			_isIntegrationPoint(t, a, s) {
				let c = this.treeAdapter.getNamespaceURI(a),
					T = this.treeAdapter.getAttrList(a);
				return ot(t, c, T, s);
			}
			_reconstructActiveFormattingElements() {
				let t = this.activeFormattingElements.entries.length;
				if (t) {
					let a = this.activeFormattingElements.entries.findIndex(
							(c) =>
								c.type === D.Marker ||
								this.openElements.contains(c.element),
						),
						s = a < 0 ? t - 1 : a - 1;
					for (let c = s; c >= 0; c--) {
						let T = this.activeFormattingElements.entries[c];
						this._insertElement(
							T.token,
							this.treeAdapter.getNamespaceURI(T.element),
						),
							(T.element = this.openElements.current);
					}
				}
			}
			_closeTableCell() {
				this.openElements.generateImpliedEndTags(),
					this.openElements.popUntilTableCellPopped(),
					this.activeFormattingElements.clearToLastMarker(),
					(this.insertionMode = n.IN_ROW);
			}
			_closePElement() {
				this.openElements.generateImpliedEndTagsWithExclusion(u.P),
					this.openElements.popUntilTagNamePopped(u.P);
			}
			_resetInsertionMode() {
				for (let t = this.openElements.stackTop; t >= 0; t--)
					switch (
						t === 0 && this.fragmentContext
							? this.fragmentContextID
							: this.openElements.tagIDs[t]
					) {
						case u.TR: {
							this.insertionMode = n.IN_ROW;
							return;
						}
						case u.TBODY:
						case u.THEAD:
						case u.TFOOT: {
							this.insertionMode = n.IN_TABLE_BODY;
							return;
						}
						case u.CAPTION: {
							this.insertionMode = n.IN_CAPTION;
							return;
						}
						case u.COLGROUP: {
							this.insertionMode = n.IN_COLUMN_GROUP;
							return;
						}
						case u.TABLE: {
							this.insertionMode = n.IN_TABLE;
							return;
						}
						case u.BODY: {
							this.insertionMode = n.IN_BODY;
							return;
						}
						case u.FRAMESET: {
							this.insertionMode = n.IN_FRAMESET;
							return;
						}
						case u.SELECT: {
							this._resetInsertionModeForSelect(t);
							return;
						}
						case u.TEMPLATE: {
							this.insertionMode = this.tmplInsertionModeStack[0];
							return;
						}
						case u.HTML: {
							this.insertionMode = this.headElement
								? n.AFTER_HEAD
								: n.BEFORE_HEAD;
							return;
						}
						case u.TD:
						case u.TH: {
							if (t > 0) {
								this.insertionMode = n.IN_CELL;
								return;
							}
							break;
						}
						case u.HEAD: {
							if (t > 0) {
								this.insertionMode = n.IN_HEAD;
								return;
							}
							break;
						}
					}
				this.insertionMode = n.IN_BODY;
			}
			_resetInsertionModeForSelect(t) {
				if (t > 0)
					for (let a = t - 1; a > 0; a--) {
						let s = this.openElements.tagIDs[a];
						if (s === u.TEMPLATE) break;
						if (s === u.TABLE) {
							this.insertionMode = n.IN_SELECT_IN_TABLE;
							return;
						}
					}
				this.insertionMode = n.IN_SELECT;
			}
			_isElementCausesFosterParenting(t) {
				return lt.has(t);
			}
			_shouldFosterParentOnInsertion() {
				return (
					this.fosterParentingEnabled &&
					this._isElementCausesFosterParenting(
						this.openElements.currentTagId,
					)
				);
			}
			_findFosterParentingLocation() {
				for (let t = this.openElements.stackTop; t >= 0; t--) {
					let a = this.openElements.items[t];
					switch (this.openElements.tagIDs[t]) {
						case u.TEMPLATE: {
							if (this.treeAdapter.getNamespaceURI(a) === E.HTML)
								return {
									parent: this.treeAdapter.getTemplateContent(
										a,
									),
									beforeElement: null,
								};
							break;
						}
						case u.TABLE: {
							let s = this.treeAdapter.getParentNode(a);
							return s
								? { parent: s, beforeElement: a }
								: {
										parent: this.openElements.items[t - 1],
										beforeElement: null,
									};
						}
						default:
					}
				}
				return {
					parent: this.openElements.items[0],
					beforeElement: null,
				};
			}
			_fosterParentElement(t) {
				let a = this._findFosterParentingLocation();
				a.beforeElement
					? this.treeAdapter.insertBefore(
							a.parent,
							t,
							a.beforeElement,
						)
					: this.treeAdapter.appendChild(a.parent, t);
			}
			_isSpecialElement(t, a) {
				let s = this.treeAdapter.getNamespaceURI(t);
				return Xe[s].has(a);
			}
			onCharacter(t) {
				if (
					((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)
				) {
					Ja(this, t);
					return;
				}
				switch (this.insertionMode) {
					case n.INITIAL: {
						q(this, t);
						break;
					}
					case n.BEFORE_HTML: {
						K(this, t);
						break;
					}
					case n.BEFORE_HEAD: {
						V(this, t);
						break;
					}
					case n.IN_HEAD: {
						j(this, t);
						break;
					}
					case n.IN_HEAD_NO_SCRIPT: {
						z(this, t);
						break;
					}
					case n.AFTER_HEAD: {
						$(this, t);
						break;
					}
					case n.IN_BODY:
					case n.IN_CAPTION:
					case n.IN_CELL:
					case n.IN_TEMPLATE: {
						mt(this, t);
						break;
					}
					case n.TEXT:
					case n.IN_SELECT:
					case n.IN_SELECT_IN_TABLE: {
						this._insertCharacters(t);
						break;
					}
					case n.IN_TABLE:
					case n.IN_TABLE_BODY:
					case n.IN_ROW: {
						De(this, t);
						break;
					}
					case n.IN_TABLE_TEXT: {
						It(this, t);
						break;
					}
					case n.IN_COLUMN_GROUP: {
						he(this, t);
						break;
					}
					case n.AFTER_BODY: {
						le(this, t);
						break;
					}
					case n.AFTER_AFTER_BODY: {
						Te(this, t);
						break;
					}
					default:
				}
			}
			onNullCharacter(t) {
				if (
					((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)
				) {
					$a(this, t);
					return;
				}
				switch (this.insertionMode) {
					case n.INITIAL: {
						q(this, t);
						break;
					}
					case n.BEFORE_HTML: {
						K(this, t);
						break;
					}
					case n.BEFORE_HEAD: {
						V(this, t);
						break;
					}
					case n.IN_HEAD: {
						j(this, t);
						break;
					}
					case n.IN_HEAD_NO_SCRIPT: {
						z(this, t);
						break;
					}
					case n.AFTER_HEAD: {
						$(this, t);
						break;
					}
					case n.TEXT: {
						this._insertCharacters(t);
						break;
					}
					case n.IN_TABLE:
					case n.IN_TABLE_BODY:
					case n.IN_ROW: {
						De(this, t);
						break;
					}
					case n.IN_COLUMN_GROUP: {
						he(this, t);
						break;
					}
					case n.AFTER_BODY: {
						le(this, t);
						break;
					}
					case n.AFTER_AFTER_BODY: {
						Te(this, t);
						break;
					}
					default:
				}
			}
			onComment(t) {
				if (((this.skipNextNewLine = !1), this.currentNotInHTML)) {
					Pe(this, t);
					return;
				}
				switch (this.insertionMode) {
					case n.INITIAL:
					case n.BEFORE_HTML:
					case n.BEFORE_HEAD:
					case n.IN_HEAD:
					case n.IN_HEAD_NO_SCRIPT:
					case n.AFTER_HEAD:
					case n.IN_BODY:
					case n.IN_TABLE:
					case n.IN_CAPTION:
					case n.IN_COLUMN_GROUP:
					case n.IN_TABLE_BODY:
					case n.IN_ROW:
					case n.IN_CELL:
					case n.IN_SELECT:
					case n.IN_SELECT_IN_TABLE:
					case n.IN_TEMPLATE:
					case n.IN_FRAMESET:
					case n.AFTER_FRAMESET: {
						Pe(this, t);
						break;
					}
					case n.IN_TABLE_TEXT: {
						W(this, t);
						break;
					}
					case n.AFTER_BODY: {
						Du(this, t);
						break;
					}
					case n.AFTER_AFTER_BODY:
					case n.AFTER_AFTER_FRAMESET: {
						Pu(this, t);
						break;
					}
					default:
				}
			}
			onDoctype(t) {
				switch (((this.skipNextNewLine = !1), this.insertionMode)) {
					case n.INITIAL: {
						Mu(this, t);
						break;
					}
					case n.BEFORE_HEAD:
					case n.IN_HEAD:
					case n.IN_HEAD_NO_SCRIPT:
					case n.AFTER_HEAD: {
						this._err(t, d.misplacedDoctype);
						break;
					}
					case n.IN_TABLE_TEXT: {
						W(this, t);
						break;
					}
					default:
				}
			}
			onStartTag(t) {
				(this.skipNextNewLine = !1),
					(this.currentToken = t),
					this._processStartTag(t),
					t.selfClosing &&
						!t.ackSelfClosing &&
						this._err(
							t,
							d.nonVoidHtmlElementStartTagWithTrailingSolidus,
						);
			}
			_processStartTag(t) {
				this.shouldProcessStartTagTokenInForeignContent(t)
					? Za(this, t)
					: this._startTagOutsideForeignContent(t);
			}
			_startTagOutsideForeignContent(t) {
				switch (this.insertionMode) {
					case n.INITIAL: {
						q(this, t);
						break;
					}
					case n.BEFORE_HTML: {
						xu(this, t);
						break;
					}
					case n.BEFORE_HEAD: {
						Hu(this, t);
						break;
					}
					case n.IN_HEAD: {
						M(this, t);
						break;
					}
					case n.IN_HEAD_NO_SCRIPT: {
						ku(this, t);
						break;
					}
					case n.AFTER_HEAD: {
						wu(this, t);
						break;
					}
					case n.IN_BODY: {
						S(this, t);
						break;
					}
					case n.IN_TABLE: {
						v(this, t);
						break;
					}
					case n.IN_TABLE_TEXT: {
						W(this, t);
						break;
					}
					case n.IN_CAPTION: {
						Ua(this, t);
						break;
					}
					case n.IN_COLUMN_GROUP: {
						He(this, t);
						break;
					}
					case n.IN_TABLE_BODY: {
						_e(this, t);
						break;
					}
					case n.IN_ROW: {
						Ae(this, t);
						break;
					}
					case n.IN_CELL: {
						ya(this, t);
						break;
					}
					case n.IN_SELECT: {
						pt(this, t);
						break;
					}
					case n.IN_SELECT_IN_TABLE: {
						va(this, t);
						break;
					}
					case n.IN_TEMPLATE: {
						Qa(this, t);
						break;
					}
					case n.AFTER_BODY: {
						Xa(this, t);
						break;
					}
					case n.IN_FRAMESET: {
						qa(this, t);
						break;
					}
					case n.AFTER_FRAMESET: {
						Ka(this, t);
						break;
					}
					case n.AFTER_AFTER_BODY: {
						ja(this, t);
						break;
					}
					case n.AFTER_AFTER_FRAMESET: {
						za(this, t);
						break;
					}
					default:
				}
			}
			onEndTag(t) {
				(this.skipNextNewLine = !1),
					(this.currentToken = t),
					this.currentNotInHTML
						? es(this, t)
						: this._endTagOutsideForeignContent(t);
			}
			_endTagOutsideForeignContent(t) {
				switch (this.insertionMode) {
					case n.INITIAL: {
						q(this, t);
						break;
					}
					case n.BEFORE_HTML: {
						Bu(this, t);
						break;
					}
					case n.BEFORE_HEAD: {
						Uu(this, t);
						break;
					}
					case n.IN_HEAD: {
						Fu(this, t);
						break;
					}
					case n.IN_HEAD_NO_SCRIPT: {
						yu(this, t);
						break;
					}
					case n.AFTER_HEAD: {
						vu(this, t);
						break;
					}
					case n.IN_BODY: {
						me(this, t);
						break;
					}
					case n.TEXT: {
						pa(this, t);
						break;
					}
					case n.IN_TABLE: {
						Z(this, t);
						break;
					}
					case n.IN_TABLE_TEXT: {
						W(this, t);
						break;
					}
					case n.IN_CAPTION: {
						Fa(this, t);
						break;
					}
					case n.IN_COLUMN_GROUP: {
						ka(this, t);
						break;
					}
					case n.IN_TABLE_BODY: {
						Me(this, t);
						break;
					}
					case n.IN_ROW: {
						Lt(this, t);
						break;
					}
					case n.IN_CELL: {
						wa(this, t);
						break;
					}
					case n.IN_SELECT: {
						Ot(this, t);
						break;
					}
					case n.IN_SELECT_IN_TABLE: {
						Ya(this, t);
						break;
					}
					case n.IN_TEMPLATE: {
						Ga(this, t);
						break;
					}
					case n.AFTER_BODY: {
						gt(this, t);
						break;
					}
					case n.IN_FRAMESET: {
						Wa(this, t);
						break;
					}
					case n.AFTER_FRAMESET: {
						Va(this, t);
						break;
					}
					case n.AFTER_AFTER_BODY: {
						Te(this, t);
						break;
					}
					default:
				}
			}
			onEof(t) {
				switch (this.insertionMode) {
					case n.INITIAL: {
						q(this, t);
						break;
					}
					case n.BEFORE_HTML: {
						K(this, t);
						break;
					}
					case n.BEFORE_HEAD: {
						V(this, t);
						break;
					}
					case n.IN_HEAD: {
						j(this, t);
						break;
					}
					case n.IN_HEAD_NO_SCRIPT: {
						z(this, t);
						break;
					}
					case n.AFTER_HEAD: {
						$(this, t);
						break;
					}
					case n.IN_BODY:
					case n.IN_TABLE:
					case n.IN_CAPTION:
					case n.IN_COLUMN_GROUP:
					case n.IN_TABLE_BODY:
					case n.IN_ROW:
					case n.IN_CELL:
					case n.IN_SELECT:
					case n.IN_SELECT_IN_TABLE: {
						Nt(this, t);
						break;
					}
					case n.TEXT: {
						Oa(this, t);
						break;
					}
					case n.IN_TABLE_TEXT: {
						W(this, t);
						break;
					}
					case n.IN_TEMPLATE: {
						St(this, t);
						break;
					}
					case n.AFTER_BODY:
					case n.IN_FRAMESET:
					case n.AFTER_FRAMESET:
					case n.AFTER_AFTER_BODY:
					case n.AFTER_AFTER_FRAMESET: {
						Be(this, t);
						break;
					}
					default:
				}
			}
			onWhitespaceCharacter(t) {
				if (
					this.skipNextNewLine &&
					((this.skipNextNewLine = !1),
					t.chars.charCodeAt(0) === r.LINE_FEED)
				) {
					if (t.chars.length === 1) return;
					t.chars = t.chars.substr(1);
				}
				if (this.tokenizer.inForeignNode) {
					this._insertCharacters(t);
					return;
				}
				switch (this.insertionMode) {
					case n.IN_HEAD:
					case n.IN_HEAD_NO_SCRIPT:
					case n.AFTER_HEAD:
					case n.TEXT:
					case n.IN_COLUMN_GROUP:
					case n.IN_SELECT:
					case n.IN_SELECT_IN_TABLE:
					case n.IN_FRAMESET:
					case n.AFTER_FRAMESET: {
						this._insertCharacters(t);
						break;
					}
					case n.IN_BODY:
					case n.IN_CAPTION:
					case n.IN_CELL:
					case n.IN_TEMPLATE:
					case n.AFTER_BODY:
					case n.AFTER_AFTER_BODY:
					case n.AFTER_AFTER_FRAMESET: {
						ft(this, t);
						break;
					}
					case n.IN_TABLE:
					case n.IN_TABLE_BODY:
					case n.IN_ROW: {
						De(this, t);
						break;
					}
					case n.IN_TABLE_TEXT: {
						Ct(this, t);
						break;
					}
					default:
				}
			}
		};
	function Ru(e, t) {
		let a = e.activeFormattingElements.getElementEntryInScopeWithTagName(
			t.tagName,
		);
		return (
			a
				? e.openElements.contains(a.element)
					? e.openElements.hasInScope(t.tagID) || (a = null)
					: (e.activeFormattingElements.removeEntry(a), (a = null))
				: bt(e, t),
			a
		);
	}
	function Lu(e, t) {
		let a = null,
			s = e.openElements.stackTop;
		for (; s >= 0; s--) {
			let c = e.openElements.items[s];
			if (c === t.element) break;
			e._isSpecialElement(c, e.openElements.tagIDs[s]) && (a = c);
		}
		return (
			a ||
				(e.openElements.shortenToLength(s < 0 ? 0 : s),
				e.activeFormattingElements.removeEntry(t)),
			a
		);
	}
	function pu(e, t, a) {
		let s = t,
			c = e.openElements.getCommonAncestor(t);
		for (let T = 0, l = c; l !== a; T++, l = c) {
			c = e.openElements.getCommonAncestor(l);
			let m = e.activeFormattingElements.getElementEntry(l),
				_ = m && T >= Cu;
			!m || _
				? (_ && e.activeFormattingElements.removeEntry(m),
					e.openElements.remove(l))
				: ((l = Ou(e, m)),
					s === t && (e.activeFormattingElements.bookmark = m),
					e.treeAdapter.detachNode(s),
					e.treeAdapter.appendChild(l, s),
					(s = l));
		}
		return s;
	}
	function Ou(e, t) {
		let a = e.treeAdapter.getNamespaceURI(t.element),
			s = e.treeAdapter.createElement(t.token.tagName, a, t.token.attrs);
		return e.openElements.replace(t.element, s), (t.element = s), s;
	}
	function Su(e, t, a) {
		let s = e.treeAdapter.getTagName(t),
			c = k(s);
		if (e._isElementCausesFosterParenting(c)) e._fosterParentElement(a);
		else {
			let T = e.treeAdapter.getNamespaceURI(t);
			c === u.TEMPLATE &&
				T === E.HTML &&
				(t = e.treeAdapter.getTemplateContent(t)),
				e.treeAdapter.appendChild(t, a);
		}
	}
	function gu(e, t, a) {
		let s = e.treeAdapter.getNamespaceURI(a.element),
			{ token: c } = a,
			T = e.treeAdapter.createElement(c.tagName, s, c.attrs);
		e._adoptNodes(t, T),
			e.treeAdapter.appendChild(t, T),
			e.activeFormattingElements.insertElementAfterBookmark(T, c),
			e.activeFormattingElements.removeEntry(a),
			e.openElements.remove(a.element),
			e.openElements.insertAfter(t, T, c.tagID);
	}
	function xe(e, t) {
		for (let a = 0; a < Nu; a++) {
			let s = Ru(e, t);
			if (!s) break;
			let c = Lu(e, s);
			if (!c) break;
			e.activeFormattingElements.bookmark = s;
			let T = pu(e, c, s.element),
				l = e.openElements.getCommonAncestor(s.element);
			e.treeAdapter.detachNode(T), l && Su(e, l, T), gu(e, c, s);
		}
	}
	function Pe(e, t) {
		e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
	}
	function Du(e, t) {
		e._appendCommentNode(t, e.openElements.items[0]);
	}
	function Pu(e, t) {
		e._appendCommentNode(t, e.document);
	}
	function Be(e, t) {
		if (((e.stopped = !0), t.location)) {
			let a = e.fragmentContext ? 0 : 2;
			for (let s = e.openElements.stackTop; s >= a; s--)
				e._setEndLocation(e.openElements.items[s], t);
			if (!e.fragmentContext && e.openElements.stackTop >= 0) {
				let s = e.openElements.items[0],
					c = e.treeAdapter.getNodeSourceCodeLocation(s);
				if (
					c &&
					!c.endTag &&
					(e._setEndLocation(s, t), e.openElements.stackTop >= 1)
				) {
					let T = e.openElements.items[1],
						l = e.treeAdapter.getNodeSourceCodeLocation(T);
					l && !l.endTag && e._setEndLocation(T, t);
				}
			}
		}
	}
	function Mu(e, t) {
		e._setDocumentType(t);
		let a = t.forceQuirks ? p.QUIRKS : rt(t);
		st(t) || e._err(t, d.nonConformingDoctype),
			e.treeAdapter.setDocumentMode(e.document, a),
			(e.insertionMode = n.BEFORE_HTML);
	}
	function q(e, t) {
		e._err(t, d.missingDoctype, !0),
			e.treeAdapter.setDocumentMode(e.document, p.QUIRKS),
			(e.insertionMode = n.BEFORE_HTML),
			e._processToken(t);
	}
	function xu(e, t) {
		t.tagID === u.HTML
			? (e._insertElement(t, E.HTML), (e.insertionMode = n.BEFORE_HEAD))
			: K(e, t);
	}
	function Bu(e, t) {
		let a = t.tagID;
		(a === u.HTML || a === u.HEAD || a === u.BODY || a === u.BR) && K(e, t);
	}
	function K(e, t) {
		e._insertFakeRootElement(),
			(e.insertionMode = n.BEFORE_HEAD),
			e._processToken(t);
	}
	function Hu(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				S(e, t);
				break;
			}
			case u.HEAD: {
				e._insertElement(t, E.HTML),
					(e.headElement = e.openElements.current),
					(e.insertionMode = n.IN_HEAD);
				break;
			}
			default:
				V(e, t);
		}
	}
	function Uu(e, t) {
		let a = t.tagID;
		a === u.HEAD || a === u.BODY || a === u.HTML || a === u.BR
			? V(e, t)
			: e._err(t, d.endTagWithoutMatchingOpenElement);
	}
	function V(e, t) {
		e._insertFakeElement(o.HEAD, u.HEAD),
			(e.headElement = e.openElements.current),
			(e.insertionMode = n.IN_HEAD),
			e._processToken(t);
	}
	function M(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				S(e, t);
				break;
			}
			case u.BASE:
			case u.BASEFONT:
			case u.BGSOUND:
			case u.LINK:
			case u.META: {
				e._appendElement(t, E.HTML), (t.ackSelfClosing = !0);
				break;
			}
			case u.TITLE: {
				e._switchToTextParsing(t, O.RCDATA);
				break;
			}
			case u.NOSCRIPT: {
				e.options.scriptingEnabled
					? e._switchToTextParsing(t, O.RAWTEXT)
					: (e._insertElement(t, E.HTML),
						(e.insertionMode = n.IN_HEAD_NO_SCRIPT));
				break;
			}
			case u.NOFRAMES:
			case u.STYLE: {
				e._switchToTextParsing(t, O.RAWTEXT);
				break;
			}
			case u.SCRIPT: {
				e._switchToTextParsing(t, O.SCRIPT_DATA);
				break;
			}
			case u.TEMPLATE: {
				e._insertTemplate(t),
					e.activeFormattingElements.insertMarker(),
					(e.framesetOk = !1),
					(e.insertionMode = n.IN_TEMPLATE),
					e.tmplInsertionModeStack.unshift(n.IN_TEMPLATE);
				break;
			}
			case u.HEAD: {
				e._err(t, d.misplacedStartTagForHeadElement);
				break;
			}
			default:
				j(e, t);
		}
	}
	function Fu(e, t) {
		switch (t.tagID) {
			case u.HEAD: {
				e.openElements.pop(), (e.insertionMode = n.AFTER_HEAD);
				break;
			}
			case u.BODY:
			case u.BR:
			case u.HTML: {
				j(e, t);
				break;
			}
			case u.TEMPLATE: {
				y(e, t);
				break;
			}
			default:
				e._err(t, d.endTagWithoutMatchingOpenElement);
		}
	}
	function y(e, t) {
		e.openElements.tmplCount > 0
			? (e.openElements.generateImpliedEndTagsThoroughly(),
				e.openElements.currentTagId !== u.TEMPLATE &&
					e._err(t, d.closingOfElementWithOpenChildElements),
				e.openElements.popUntilTagNamePopped(u.TEMPLATE),
				e.activeFormattingElements.clearToLastMarker(),
				e.tmplInsertionModeStack.shift(),
				e._resetInsertionMode())
			: e._err(t, d.endTagWithoutMatchingOpenElement);
	}
	function j(e, t) {
		e.openElements.pop(),
			(e.insertionMode = n.AFTER_HEAD),
			e._processToken(t);
	}
	function ku(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				S(e, t);
				break;
			}
			case u.BASEFONT:
			case u.BGSOUND:
			case u.HEAD:
			case u.LINK:
			case u.META:
			case u.NOFRAMES:
			case u.STYLE: {
				M(e, t);
				break;
			}
			case u.NOSCRIPT: {
				e._err(t, d.nestedNoscriptInHead);
				break;
			}
			default:
				z(e, t);
		}
	}
	function yu(e, t) {
		switch (t.tagID) {
			case u.NOSCRIPT: {
				e.openElements.pop(), (e.insertionMode = n.IN_HEAD);
				break;
			}
			case u.BR: {
				z(e, t);
				break;
			}
			default:
				e._err(t, d.endTagWithoutMatchingOpenElement);
		}
	}
	function z(e, t) {
		let a =
			t.type === A.EOF
				? d.openElementsLeftAfterEof
				: d.disallowedContentInNoscriptInHead;
		e._err(t, a),
			e.openElements.pop(),
			(e.insertionMode = n.IN_HEAD),
			e._processToken(t);
	}
	function wu(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				S(e, t);
				break;
			}
			case u.BODY: {
				e._insertElement(t, E.HTML),
					(e.framesetOk = !1),
					(e.insertionMode = n.IN_BODY);
				break;
			}
			case u.FRAMESET: {
				e._insertElement(t, E.HTML), (e.insertionMode = n.IN_FRAMESET);
				break;
			}
			case u.BASE:
			case u.BASEFONT:
			case u.BGSOUND:
			case u.LINK:
			case u.META:
			case u.NOFRAMES:
			case u.SCRIPT:
			case u.STYLE:
			case u.TEMPLATE:
			case u.TITLE: {
				e._err(t, d.abandonedHeadElementChild),
					e.openElements.push(e.headElement, u.HEAD),
					M(e, t),
					e.openElements.remove(e.headElement);
				break;
			}
			case u.HEAD: {
				e._err(t, d.misplacedStartTagForHeadElement);
				break;
			}
			default:
				$(e, t);
		}
	}
	function vu(e, t) {
		switch (t.tagID) {
			case u.BODY:
			case u.HTML:
			case u.BR: {
				$(e, t);
				break;
			}
			case u.TEMPLATE: {
				y(e, t);
				break;
			}
			default:
				e._err(t, d.endTagWithoutMatchingOpenElement);
		}
	}
	function $(e, t) {
		e._insertFakeElement(o.BODY, u.BODY),
			(e.insertionMode = n.IN_BODY),
			fe(e, t);
	}
	function fe(e, t) {
		switch (t.type) {
			case A.CHARACTER: {
				mt(e, t);
				break;
			}
			case A.WHITESPACE_CHARACTER: {
				ft(e, t);
				break;
			}
			case A.COMMENT: {
				Pe(e, t);
				break;
			}
			case A.START_TAG: {
				S(e, t);
				break;
			}
			case A.END_TAG: {
				me(e, t);
				break;
			}
			case A.EOF: {
				Nt(e, t);
				break;
			}
			default:
		}
	}
	function ft(e, t) {
		e._reconstructActiveFormattingElements(), e._insertCharacters(t);
	}
	function mt(e, t) {
		e._reconstructActiveFormattingElements(),
			e._insertCharacters(t),
			(e.framesetOk = !1);
	}
	function Yu(e, t) {
		e.openElements.tmplCount === 0 &&
			e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
	}
	function Qu(e, t) {
		let a = e.openElements.tryPeekProperlyNestedBodyElement();
		a &&
			e.openElements.tmplCount === 0 &&
			((e.framesetOk = !1), e.treeAdapter.adoptAttributes(a, t.attrs));
	}
	function Gu(e, t) {
		let a = e.openElements.tryPeekProperlyNestedBodyElement();
		e.framesetOk &&
			a &&
			(e.treeAdapter.detachNode(a),
			e.openElements.popAllUpToHtmlElement(),
			e._insertElement(t, E.HTML),
			(e.insertionMode = n.IN_FRAMESET));
	}
	function Xu(e, t) {
		e.openElements.hasInButtonScope(u.P) && e._closePElement(),
			e._insertElement(t, E.HTML);
	}
	function qu(e, t) {
		e.openElements.hasInButtonScope(u.P) && e._closePElement(),
			ie(e.openElements.currentTagId) && e.openElements.pop(),
			e._insertElement(t, E.HTML);
	}
	function Wu(e, t) {
		e.openElements.hasInButtonScope(u.P) && e._closePElement(),
			e._insertElement(t, E.HTML),
			(e.skipNextNewLine = !0),
			(e.framesetOk = !1);
	}
	function Ku(e, t) {
		let a = e.openElements.tmplCount > 0;
		(!e.formElement || a) &&
			(e.openElements.hasInButtonScope(u.P) && e._closePElement(),
			e._insertElement(t, E.HTML),
			a || (e.formElement = e.openElements.current));
	}
	function Vu(e, t) {
		e.framesetOk = !1;
		let a = t.tagID;
		for (let s = e.openElements.stackTop; s >= 0; s--) {
			let c = e.openElements.tagIDs[s];
			if (
				(a === u.LI && c === u.LI) ||
				((a === u.DD || a === u.DT) && (c === u.DD || c === u.DT))
			) {
				e.openElements.generateImpliedEndTagsWithExclusion(c),
					e.openElements.popUntilTagNamePopped(c);
				break;
			}
			if (
				c !== u.ADDRESS &&
				c !== u.DIV &&
				c !== u.P &&
				e._isSpecialElement(e.openElements.items[s], c)
			)
				break;
		}
		e.openElements.hasInButtonScope(u.P) && e._closePElement(),
			e._insertElement(t, E.HTML);
	}
	function ju(e, t) {
		e.openElements.hasInButtonScope(u.P) && e._closePElement(),
			e._insertElement(t, E.HTML),
			(e.tokenizer.state = O.PLAINTEXT);
	}
	function zu(e, t) {
		e.openElements.hasInScope(u.BUTTON) &&
			(e.openElements.generateImpliedEndTags(),
			e.openElements.popUntilTagNamePopped(u.BUTTON)),
			e._reconstructActiveFormattingElements(),
			e._insertElement(t, E.HTML),
			(e.framesetOk = !1);
	}
	function $u(e, t) {
		let a = e.activeFormattingElements.getElementEntryInScopeWithTagName(
			o.A,
		);
		a &&
			(xe(e, t),
			e.openElements.remove(a.element),
			e.activeFormattingElements.removeEntry(a)),
			e._reconstructActiveFormattingElements(),
			e._insertElement(t, E.HTML),
			e.activeFormattingElements.pushElement(e.openElements.current, t);
	}
	function Ju(e, t) {
		e._reconstructActiveFormattingElements(),
			e._insertElement(t, E.HTML),
			e.activeFormattingElements.pushElement(e.openElements.current, t);
	}
	function Zu(e, t) {
		e._reconstructActiveFormattingElements(),
			e.openElements.hasInScope(u.NOBR) &&
				(xe(e, t), e._reconstructActiveFormattingElements()),
			e._insertElement(t, E.HTML),
			e.activeFormattingElements.pushElement(e.openElements.current, t);
	}
	function ea(e, t) {
		e._reconstructActiveFormattingElements(),
			e._insertElement(t, E.HTML),
			e.activeFormattingElements.insertMarker(),
			(e.framesetOk = !1);
	}
	function ta(e, t) {
		e.treeAdapter.getDocumentMode(e.document) !== p.QUIRKS &&
			e.openElements.hasInButtonScope(u.P) &&
			e._closePElement(),
			e._insertElement(t, E.HTML),
			(e.framesetOk = !1),
			(e.insertionMode = n.IN_TABLE);
	}
	function _t(e, t) {
		e._reconstructActiveFormattingElements(),
			e._appendElement(t, E.HTML),
			(e.framesetOk = !1),
			(t.ackSelfClosing = !0);
	}
	function At(e) {
		let t = re(e, B.TYPE);
		return t != null && t.toLowerCase() === bu;
	}
	function ua(e, t) {
		e._reconstructActiveFormattingElements(),
			e._appendElement(t, E.HTML),
			At(t) || (e.framesetOk = !1),
			(t.ackSelfClosing = !0);
	}
	function aa(e, t) {
		e._appendElement(t, E.HTML), (t.ackSelfClosing = !0);
	}
	function sa(e, t) {
		e.openElements.hasInButtonScope(u.P) && e._closePElement(),
			e._appendElement(t, E.HTML),
			(e.framesetOk = !1),
			(t.ackSelfClosing = !0);
	}
	function ra(e, t) {
		(t.tagName = o.IMG), (t.tagID = u.IMG), _t(e, t);
	}
	function ia(e, t) {
		e._insertElement(t, E.HTML),
			(e.skipNextNewLine = !0),
			(e.tokenizer.state = O.RCDATA),
			(e.originalInsertionMode = e.insertionMode),
			(e.framesetOk = !1),
			(e.insertionMode = n.TEXT);
	}
	function na(e, t) {
		e.openElements.hasInButtonScope(u.P) && e._closePElement(),
			e._reconstructActiveFormattingElements(),
			(e.framesetOk = !1),
			e._switchToTextParsing(t, O.RAWTEXT);
	}
	function ca(e, t) {
		(e.framesetOk = !1), e._switchToTextParsing(t, O.RAWTEXT);
	}
	function Tt(e, t) {
		e._switchToTextParsing(t, O.RAWTEXT);
	}
	function oa(e, t) {
		e._reconstructActiveFormattingElements(),
			e._insertElement(t, E.HTML),
			(e.framesetOk = !1),
			(e.insertionMode =
				e.insertionMode === n.IN_TABLE ||
				e.insertionMode === n.IN_CAPTION ||
				e.insertionMode === n.IN_TABLE_BODY ||
				e.insertionMode === n.IN_ROW ||
				e.insertionMode === n.IN_CELL
					? n.IN_SELECT_IN_TABLE
					: n.IN_SELECT);
	}
	function da(e, t) {
		e.openElements.currentTagId === u.OPTION && e.openElements.pop(),
			e._reconstructActiveFormattingElements(),
			e._insertElement(t, E.HTML);
	}
	function Ea(e, t) {
		e.openElements.hasInScope(u.RUBY) &&
			e.openElements.generateImpliedEndTags(),
			e._insertElement(t, E.HTML);
	}
	function Ta(e, t) {
		e.openElements.hasInScope(u.RUBY) &&
			e.openElements.generateImpliedEndTagsWithExclusion(u.RTC),
			e._insertElement(t, E.HTML);
	}
	function ha(e, t) {
		e._reconstructActiveFormattingElements(),
			Se(t),
			Ee(t),
			t.selfClosing
				? e._appendElement(t, E.MATHML)
				: e._insertElement(t, E.MATHML),
			(t.ackSelfClosing = !0);
	}
	function la(e, t) {
		e._reconstructActiveFormattingElements(),
			ge(t),
			Ee(t),
			t.selfClosing
				? e._appendElement(t, E.SVG)
				: e._insertElement(t, E.SVG),
			(t.ackSelfClosing = !0);
	}
	function ht(e, t) {
		e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML);
	}
	function S(e, t) {
		switch (t.tagID) {
			case u.I:
			case u.S:
			case u.B:
			case u.U:
			case u.EM:
			case u.TT:
			case u.BIG:
			case u.CODE:
			case u.FONT:
			case u.SMALL:
			case u.STRIKE:
			case u.STRONG: {
				Ju(e, t);
				break;
			}
			case u.A: {
				$u(e, t);
				break;
			}
			case u.H1:
			case u.H2:
			case u.H3:
			case u.H4:
			case u.H5:
			case u.H6: {
				qu(e, t);
				break;
			}
			case u.P:
			case u.DL:
			case u.OL:
			case u.UL:
			case u.DIV:
			case u.DIR:
			case u.NAV:
			case u.MAIN:
			case u.MENU:
			case u.ASIDE:
			case u.CENTER:
			case u.FIGURE:
			case u.FOOTER:
			case u.HEADER:
			case u.HGROUP:
			case u.DIALOG:
			case u.DETAILS:
			case u.ADDRESS:
			case u.ARTICLE:
			case u.SECTION:
			case u.SUMMARY:
			case u.FIELDSET:
			case u.BLOCKQUOTE:
			case u.FIGCAPTION: {
				Xu(e, t);
				break;
			}
			case u.LI:
			case u.DD:
			case u.DT: {
				Vu(e, t);
				break;
			}
			case u.BR:
			case u.IMG:
			case u.WBR:
			case u.AREA:
			case u.EMBED:
			case u.KEYGEN: {
				_t(e, t);
				break;
			}
			case u.HR: {
				sa(e, t);
				break;
			}
			case u.RB:
			case u.RTC: {
				Ea(e, t);
				break;
			}
			case u.RT:
			case u.RP: {
				Ta(e, t);
				break;
			}
			case u.PRE:
			case u.LISTING: {
				Wu(e, t);
				break;
			}
			case u.XMP: {
				na(e, t);
				break;
			}
			case u.SVG: {
				la(e, t);
				break;
			}
			case u.HTML: {
				Yu(e, t);
				break;
			}
			case u.BASE:
			case u.LINK:
			case u.META:
			case u.STYLE:
			case u.TITLE:
			case u.SCRIPT:
			case u.BGSOUND:
			case u.BASEFONT:
			case u.TEMPLATE: {
				M(e, t);
				break;
			}
			case u.BODY: {
				Qu(e, t);
				break;
			}
			case u.FORM: {
				Ku(e, t);
				break;
			}
			case u.NOBR: {
				Zu(e, t);
				break;
			}
			case u.MATH: {
				ha(e, t);
				break;
			}
			case u.TABLE: {
				ta(e, t);
				break;
			}
			case u.INPUT: {
				ua(e, t);
				break;
			}
			case u.PARAM:
			case u.TRACK:
			case u.SOURCE: {
				aa(e, t);
				break;
			}
			case u.IMAGE: {
				ra(e, t);
				break;
			}
			case u.BUTTON: {
				zu(e, t);
				break;
			}
			case u.APPLET:
			case u.OBJECT:
			case u.MARQUEE: {
				ea(e, t);
				break;
			}
			case u.IFRAME: {
				ca(e, t);
				break;
			}
			case u.SELECT: {
				oa(e, t);
				break;
			}
			case u.OPTION:
			case u.OPTGROUP: {
				da(e, t);
				break;
			}
			case u.NOEMBED: {
				Tt(e, t);
				break;
			}
			case u.FRAMESET: {
				Gu(e, t);
				break;
			}
			case u.TEXTAREA: {
				ia(e, t);
				break;
			}
			case u.NOSCRIPT: {
				e.options.scriptingEnabled ? Tt(e, t) : ht(e, t);
				break;
			}
			case u.PLAINTEXT: {
				ju(e, t);
				break;
			}
			case u.COL:
			case u.TH:
			case u.TD:
			case u.TR:
			case u.HEAD:
			case u.FRAME:
			case u.TBODY:
			case u.TFOOT:
			case u.THEAD:
			case u.CAPTION:
			case u.COLGROUP:
				break;
			default:
				ht(e, t);
		}
	}
	function fa(e, t) {
		if (
			e.openElements.hasInScope(u.BODY) &&
			((e.insertionMode = n.AFTER_BODY), e.options.sourceCodeLocationInfo)
		) {
			let a = e.openElements.tryPeekProperlyNestedBodyElement();
			a && e._setEndLocation(a, t);
		}
	}
	function ma(e, t) {
		e.openElements.hasInScope(u.BODY) &&
			((e.insertionMode = n.AFTER_BODY), gt(e, t));
	}
	function _a(e, t) {
		let a = t.tagID;
		e.openElements.hasInScope(a) &&
			(e.openElements.generateImpliedEndTags(),
			e.openElements.popUntilTagNamePopped(a));
	}
	function Aa(e) {
		let t = e.openElements.tmplCount > 0,
			{ formElement: a } = e;
		t || (e.formElement = null),
			(a || t) &&
				e.openElements.hasInScope(u.FORM) &&
				(e.openElements.generateImpliedEndTags(),
				t
					? e.openElements.popUntilTagNamePopped(u.FORM)
					: a && e.openElements.remove(a));
	}
	function ba(e) {
		e.openElements.hasInButtonScope(u.P) || e._insertFakeElement(o.P, u.P),
			e._closePElement();
	}
	function Na(e) {
		e.openElements.hasInListItemScope(u.LI) &&
			(e.openElements.generateImpliedEndTagsWithExclusion(u.LI),
			e.openElements.popUntilTagNamePopped(u.LI));
	}
	function Ca(e, t) {
		let a = t.tagID;
		e.openElements.hasInScope(a) &&
			(e.openElements.generateImpliedEndTagsWithExclusion(a),
			e.openElements.popUntilTagNamePopped(a));
	}
	function Ia(e) {
		e.openElements.hasNumberedHeaderInScope() &&
			(e.openElements.generateImpliedEndTags(),
			e.openElements.popUntilNumberedHeaderPopped());
	}
	function Ra(e, t) {
		let a = t.tagID;
		e.openElements.hasInScope(a) &&
			(e.openElements.generateImpliedEndTags(),
			e.openElements.popUntilTagNamePopped(a),
			e.activeFormattingElements.clearToLastMarker());
	}
	function La(e) {
		e._reconstructActiveFormattingElements(),
			e._insertFakeElement(o.BR, u.BR),
			e.openElements.pop(),
			(e.framesetOk = !1);
	}
	function bt(e, t) {
		let a = t.tagName,
			s = t.tagID;
		for (let c = e.openElements.stackTop; c > 0; c--) {
			let T = e.openElements.items[c],
				l = e.openElements.tagIDs[c];
			if (
				s === l &&
				(s !== u.UNKNOWN || e.treeAdapter.getTagName(T) === a)
			) {
				e.openElements.generateImpliedEndTagsWithExclusion(s),
					e.openElements.stackTop >= c &&
						e.openElements.shortenToLength(c);
				break;
			}
			if (e._isSpecialElement(T, l)) break;
		}
	}
	function me(e, t) {
		switch (t.tagID) {
			case u.A:
			case u.B:
			case u.I:
			case u.S:
			case u.U:
			case u.EM:
			case u.TT:
			case u.BIG:
			case u.CODE:
			case u.FONT:
			case u.NOBR:
			case u.SMALL:
			case u.STRIKE:
			case u.STRONG: {
				xe(e, t);
				break;
			}
			case u.P: {
				ba(e);
				break;
			}
			case u.DL:
			case u.UL:
			case u.OL:
			case u.DIR:
			case u.DIV:
			case u.NAV:
			case u.PRE:
			case u.MAIN:
			case u.MENU:
			case u.ASIDE:
			case u.BUTTON:
			case u.CENTER:
			case u.FIGURE:
			case u.FOOTER:
			case u.HEADER:
			case u.HGROUP:
			case u.DIALOG:
			case u.ADDRESS:
			case u.ARTICLE:
			case u.DETAILS:
			case u.SECTION:
			case u.SUMMARY:
			case u.LISTING:
			case u.FIELDSET:
			case u.BLOCKQUOTE:
			case u.FIGCAPTION: {
				_a(e, t);
				break;
			}
			case u.LI: {
				Na(e);
				break;
			}
			case u.DD:
			case u.DT: {
				Ca(e, t);
				break;
			}
			case u.H1:
			case u.H2:
			case u.H3:
			case u.H4:
			case u.H5:
			case u.H6: {
				Ia(e);
				break;
			}
			case u.BR: {
				La(e);
				break;
			}
			case u.BODY: {
				fa(e, t);
				break;
			}
			case u.HTML: {
				ma(e, t);
				break;
			}
			case u.FORM: {
				Aa(e);
				break;
			}
			case u.APPLET:
			case u.OBJECT:
			case u.MARQUEE: {
				Ra(e, t);
				break;
			}
			case u.TEMPLATE: {
				y(e, t);
				break;
			}
			default:
				bt(e, t);
		}
	}
	function Nt(e, t) {
		e.tmplInsertionModeStack.length > 0 ? St(e, t) : Be(e, t);
	}
	function pa(e, t) {
		var a;
		t.tagID === u.SCRIPT &&
			((a = e.scriptHandler) === null ||
				a === void 0 ||
				a.call(e, e.openElements.current)),
			e.openElements.pop(),
			(e.insertionMode = e.originalInsertionMode);
	}
	function Oa(e, t) {
		e._err(t, d.eofInElementThatCanContainOnlyText),
			e.openElements.pop(),
			(e.insertionMode = e.originalInsertionMode),
			e.onEof(t);
	}
	function De(e, t) {
		if (lt.has(e.openElements.currentTagId))
			switch (
				((e.pendingCharacterTokens.length = 0),
				(e.hasNonWhitespacePendingCharacterToken = !1),
				(e.originalInsertionMode = e.insertionMode),
				(e.insertionMode = n.IN_TABLE_TEXT),
				t.type)
			) {
				case A.CHARACTER: {
					It(e, t);
					break;
				}
				case A.WHITESPACE_CHARACTER: {
					Ct(e, t);
					break;
				}
			}
		else ee(e, t);
	}
	function Sa(e, t) {
		e.openElements.clearBackToTableContext(),
			e.activeFormattingElements.insertMarker(),
			e._insertElement(t, E.HTML),
			(e.insertionMode = n.IN_CAPTION);
	}
	function ga(e, t) {
		e.openElements.clearBackToTableContext(),
			e._insertElement(t, E.HTML),
			(e.insertionMode = n.IN_COLUMN_GROUP);
	}
	function Da(e, t) {
		e.openElements.clearBackToTableContext(),
			e._insertFakeElement(o.COLGROUP, u.COLGROUP),
			(e.insertionMode = n.IN_COLUMN_GROUP),
			He(e, t);
	}
	function Pa(e, t) {
		e.openElements.clearBackToTableContext(),
			e._insertElement(t, E.HTML),
			(e.insertionMode = n.IN_TABLE_BODY);
	}
	function Ma(e, t) {
		e.openElements.clearBackToTableContext(),
			e._insertFakeElement(o.TBODY, u.TBODY),
			(e.insertionMode = n.IN_TABLE_BODY),
			_e(e, t);
	}
	function xa(e, t) {
		e.openElements.hasInTableScope(u.TABLE) &&
			(e.openElements.popUntilTagNamePopped(u.TABLE),
			e._resetInsertionMode(),
			e._processStartTag(t));
	}
	function Ba(e, t) {
		At(t) ? e._appendElement(t, E.HTML) : ee(e, t), (t.ackSelfClosing = !0);
	}
	function Ha(e, t) {
		!e.formElement &&
			e.openElements.tmplCount === 0 &&
			(e._insertElement(t, E.HTML),
			(e.formElement = e.openElements.current),
			e.openElements.pop());
	}
	function v(e, t) {
		switch (t.tagID) {
			case u.TD:
			case u.TH:
			case u.TR: {
				Ma(e, t);
				break;
			}
			case u.STYLE:
			case u.SCRIPT:
			case u.TEMPLATE: {
				M(e, t);
				break;
			}
			case u.COL: {
				Da(e, t);
				break;
			}
			case u.FORM: {
				Ha(e, t);
				break;
			}
			case u.TABLE: {
				xa(e, t);
				break;
			}
			case u.TBODY:
			case u.TFOOT:
			case u.THEAD: {
				Pa(e, t);
				break;
			}
			case u.INPUT: {
				Ba(e, t);
				break;
			}
			case u.CAPTION: {
				Sa(e, t);
				break;
			}
			case u.COLGROUP: {
				ga(e, t);
				break;
			}
			default:
				ee(e, t);
		}
	}
	function Z(e, t) {
		switch (t.tagID) {
			case u.TABLE: {
				e.openElements.hasInTableScope(u.TABLE) &&
					(e.openElements.popUntilTagNamePopped(u.TABLE),
					e._resetInsertionMode());
				break;
			}
			case u.TEMPLATE: {
				y(e, t);
				break;
			}
			case u.BODY:
			case u.CAPTION:
			case u.COL:
			case u.COLGROUP:
			case u.HTML:
			case u.TBODY:
			case u.TD:
			case u.TFOOT:
			case u.TH:
			case u.THEAD:
			case u.TR:
				break;
			default:
				ee(e, t);
		}
	}
	function ee(e, t) {
		let a = e.fosterParentingEnabled;
		(e.fosterParentingEnabled = !0),
			fe(e, t),
			(e.fosterParentingEnabled = a);
	}
	function Ct(e, t) {
		e.pendingCharacterTokens.push(t);
	}
	function It(e, t) {
		e.pendingCharacterTokens.push(t),
			(e.hasNonWhitespacePendingCharacterToken = !0);
	}
	function W(e, t) {
		let a = 0;
		if (e.hasNonWhitespacePendingCharacterToken)
			for (; a < e.pendingCharacterTokens.length; a++)
				ee(e, e.pendingCharacterTokens[a]);
		else
			for (; a < e.pendingCharacterTokens.length; a++)
				e._insertCharacters(e.pendingCharacterTokens[a]);
		(e.insertionMode = e.originalInsertionMode), e._processToken(t);
	}
	var Rt = new Set([
		u.CAPTION,
		u.COL,
		u.COLGROUP,
		u.TBODY,
		u.TD,
		u.TFOOT,
		u.TH,
		u.THEAD,
		u.TR,
	]);
	function Ua(e, t) {
		let a = t.tagID;
		Rt.has(a)
			? e.openElements.hasInTableScope(u.CAPTION) &&
				(e.openElements.generateImpliedEndTags(),
				e.openElements.popUntilTagNamePopped(u.CAPTION),
				e.activeFormattingElements.clearToLastMarker(),
				(e.insertionMode = n.IN_TABLE),
				v(e, t))
			: S(e, t);
	}
	function Fa(e, t) {
		let a = t.tagID;
		switch (a) {
			case u.CAPTION:
			case u.TABLE: {
				e.openElements.hasInTableScope(u.CAPTION) &&
					(e.openElements.generateImpliedEndTags(),
					e.openElements.popUntilTagNamePopped(u.CAPTION),
					e.activeFormattingElements.clearToLastMarker(),
					(e.insertionMode = n.IN_TABLE),
					a === u.TABLE && Z(e, t));
				break;
			}
			case u.BODY:
			case u.COL:
			case u.COLGROUP:
			case u.HTML:
			case u.TBODY:
			case u.TD:
			case u.TFOOT:
			case u.TH:
			case u.THEAD:
			case u.TR:
				break;
			default:
				me(e, t);
		}
	}
	function He(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				S(e, t);
				break;
			}
			case u.COL: {
				e._appendElement(t, E.HTML), (t.ackSelfClosing = !0);
				break;
			}
			case u.TEMPLATE: {
				M(e, t);
				break;
			}
			default:
				he(e, t);
		}
	}
	function ka(e, t) {
		switch (t.tagID) {
			case u.COLGROUP: {
				e.openElements.currentTagId === u.COLGROUP &&
					(e.openElements.pop(), (e.insertionMode = n.IN_TABLE));
				break;
			}
			case u.TEMPLATE: {
				y(e, t);
				break;
			}
			case u.COL:
				break;
			default:
				he(e, t);
		}
	}
	function he(e, t) {
		e.openElements.currentTagId === u.COLGROUP &&
			(e.openElements.pop(),
			(e.insertionMode = n.IN_TABLE),
			e._processToken(t));
	}
	function _e(e, t) {
		switch (t.tagID) {
			case u.TR: {
				e.openElements.clearBackToTableBodyContext(),
					e._insertElement(t, E.HTML),
					(e.insertionMode = n.IN_ROW);
				break;
			}
			case u.TH:
			case u.TD: {
				e.openElements.clearBackToTableBodyContext(),
					e._insertFakeElement(o.TR, u.TR),
					(e.insertionMode = n.IN_ROW),
					Ae(e, t);
				break;
			}
			case u.CAPTION:
			case u.COL:
			case u.COLGROUP:
			case u.TBODY:
			case u.TFOOT:
			case u.THEAD: {
				e.openElements.hasTableBodyContextInTableScope() &&
					(e.openElements.clearBackToTableBodyContext(),
					e.openElements.pop(),
					(e.insertionMode = n.IN_TABLE),
					v(e, t));
				break;
			}
			default:
				v(e, t);
		}
	}
	function Me(e, t) {
		let a = t.tagID;
		switch (t.tagID) {
			case u.TBODY:
			case u.TFOOT:
			case u.THEAD: {
				e.openElements.hasInTableScope(a) &&
					(e.openElements.clearBackToTableBodyContext(),
					e.openElements.pop(),
					(e.insertionMode = n.IN_TABLE));
				break;
			}
			case u.TABLE: {
				e.openElements.hasTableBodyContextInTableScope() &&
					(e.openElements.clearBackToTableBodyContext(),
					e.openElements.pop(),
					(e.insertionMode = n.IN_TABLE),
					Z(e, t));
				break;
			}
			case u.BODY:
			case u.CAPTION:
			case u.COL:
			case u.COLGROUP:
			case u.HTML:
			case u.TD:
			case u.TH:
			case u.TR:
				break;
			default:
				Z(e, t);
		}
	}
	function Ae(e, t) {
		switch (t.tagID) {
			case u.TH:
			case u.TD: {
				e.openElements.clearBackToTableRowContext(),
					e._insertElement(t, E.HTML),
					(e.insertionMode = n.IN_CELL),
					e.activeFormattingElements.insertMarker();
				break;
			}
			case u.CAPTION:
			case u.COL:
			case u.COLGROUP:
			case u.TBODY:
			case u.TFOOT:
			case u.THEAD:
			case u.TR: {
				e.openElements.hasInTableScope(u.TR) &&
					(e.openElements.clearBackToTableRowContext(),
					e.openElements.pop(),
					(e.insertionMode = n.IN_TABLE_BODY),
					_e(e, t));
				break;
			}
			default:
				v(e, t);
		}
	}
	function Lt(e, t) {
		switch (t.tagID) {
			case u.TR: {
				e.openElements.hasInTableScope(u.TR) &&
					(e.openElements.clearBackToTableRowContext(),
					e.openElements.pop(),
					(e.insertionMode = n.IN_TABLE_BODY));
				break;
			}
			case u.TABLE: {
				e.openElements.hasInTableScope(u.TR) &&
					(e.openElements.clearBackToTableRowContext(),
					e.openElements.pop(),
					(e.insertionMode = n.IN_TABLE_BODY),
					Me(e, t));
				break;
			}
			case u.TBODY:
			case u.TFOOT:
			case u.THEAD: {
				(e.openElements.hasInTableScope(t.tagID) ||
					e.openElements.hasInTableScope(u.TR)) &&
					(e.openElements.clearBackToTableRowContext(),
					e.openElements.pop(),
					(e.insertionMode = n.IN_TABLE_BODY),
					Me(e, t));
				break;
			}
			case u.BODY:
			case u.CAPTION:
			case u.COL:
			case u.COLGROUP:
			case u.HTML:
			case u.TD:
			case u.TH:
				break;
			default:
				Z(e, t);
		}
	}
	function ya(e, t) {
		let a = t.tagID;
		Rt.has(a)
			? (e.openElements.hasInTableScope(u.TD) ||
					e.openElements.hasInTableScope(u.TH)) &&
				(e._closeTableCell(), Ae(e, t))
			: S(e, t);
	}
	function wa(e, t) {
		let a = t.tagID;
		switch (a) {
			case u.TD:
			case u.TH: {
				e.openElements.hasInTableScope(a) &&
					(e.openElements.generateImpliedEndTags(),
					e.openElements.popUntilTagNamePopped(a),
					e.activeFormattingElements.clearToLastMarker(),
					(e.insertionMode = n.IN_ROW));
				break;
			}
			case u.TABLE:
			case u.TBODY:
			case u.TFOOT:
			case u.THEAD:
			case u.TR: {
				e.openElements.hasInTableScope(a) &&
					(e._closeTableCell(), Lt(e, t));
				break;
			}
			case u.BODY:
			case u.CAPTION:
			case u.COL:
			case u.COLGROUP:
			case u.HTML:
				break;
			default:
				me(e, t);
		}
	}
	function pt(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				S(e, t);
				break;
			}
			case u.OPTION: {
				e.openElements.currentTagId === u.OPTION &&
					e.openElements.pop(),
					e._insertElement(t, E.HTML);
				break;
			}
			case u.OPTGROUP: {
				e.openElements.currentTagId === u.OPTION &&
					e.openElements.pop(),
					e.openElements.currentTagId === u.OPTGROUP &&
						e.openElements.pop(),
					e._insertElement(t, E.HTML);
				break;
			}
			case u.INPUT:
			case u.KEYGEN:
			case u.TEXTAREA:
			case u.SELECT: {
				e.openElements.hasInSelectScope(u.SELECT) &&
					(e.openElements.popUntilTagNamePopped(u.SELECT),
					e._resetInsertionMode(),
					t.tagID !== u.SELECT && e._processStartTag(t));
				break;
			}
			case u.SCRIPT:
			case u.TEMPLATE: {
				M(e, t);
				break;
			}
			default:
		}
	}
	function Ot(e, t) {
		switch (t.tagID) {
			case u.OPTGROUP: {
				e.openElements.stackTop > 0 &&
					e.openElements.currentTagId === u.OPTION &&
					e.openElements.tagIDs[e.openElements.stackTop - 1] ===
						u.OPTGROUP &&
					e.openElements.pop(),
					e.openElements.currentTagId === u.OPTGROUP &&
						e.openElements.pop();
				break;
			}
			case u.OPTION: {
				e.openElements.currentTagId === u.OPTION &&
					e.openElements.pop();
				break;
			}
			case u.SELECT: {
				e.openElements.hasInSelectScope(u.SELECT) &&
					(e.openElements.popUntilTagNamePopped(u.SELECT),
					e._resetInsertionMode());
				break;
			}
			case u.TEMPLATE: {
				y(e, t);
				break;
			}
			default:
		}
	}
	function va(e, t) {
		let a = t.tagID;
		a === u.CAPTION ||
		a === u.TABLE ||
		a === u.TBODY ||
		a === u.TFOOT ||
		a === u.THEAD ||
		a === u.TR ||
		a === u.TD ||
		a === u.TH
			? (e.openElements.popUntilTagNamePopped(u.SELECT),
				e._resetInsertionMode(),
				e._processStartTag(t))
			: pt(e, t);
	}
	function Ya(e, t) {
		let a = t.tagID;
		a === u.CAPTION ||
		a === u.TABLE ||
		a === u.TBODY ||
		a === u.TFOOT ||
		a === u.THEAD ||
		a === u.TR ||
		a === u.TD ||
		a === u.TH
			? e.openElements.hasInTableScope(a) &&
				(e.openElements.popUntilTagNamePopped(u.SELECT),
				e._resetInsertionMode(),
				e.onEndTag(t))
			: Ot(e, t);
	}
	function Qa(e, t) {
		switch (t.tagID) {
			case u.BASE:
			case u.BASEFONT:
			case u.BGSOUND:
			case u.LINK:
			case u.META:
			case u.NOFRAMES:
			case u.SCRIPT:
			case u.STYLE:
			case u.TEMPLATE:
			case u.TITLE: {
				M(e, t);
				break;
			}
			case u.CAPTION:
			case u.COLGROUP:
			case u.TBODY:
			case u.TFOOT:
			case u.THEAD: {
				(e.tmplInsertionModeStack[0] = n.IN_TABLE),
					(e.insertionMode = n.IN_TABLE),
					v(e, t);
				break;
			}
			case u.COL: {
				(e.tmplInsertionModeStack[0] = n.IN_COLUMN_GROUP),
					(e.insertionMode = n.IN_COLUMN_GROUP),
					He(e, t);
				break;
			}
			case u.TR: {
				(e.tmplInsertionModeStack[0] = n.IN_TABLE_BODY),
					(e.insertionMode = n.IN_TABLE_BODY),
					_e(e, t);
				break;
			}
			case u.TD:
			case u.TH: {
				(e.tmplInsertionModeStack[0] = n.IN_ROW),
					(e.insertionMode = n.IN_ROW),
					Ae(e, t);
				break;
			}
			default:
				(e.tmplInsertionModeStack[0] = n.IN_BODY),
					(e.insertionMode = n.IN_BODY),
					S(e, t);
		}
	}
	function Ga(e, t) {
		t.tagID === u.TEMPLATE && y(e, t);
	}
	function St(e, t) {
		e.openElements.tmplCount > 0
			? (e.openElements.popUntilTagNamePopped(u.TEMPLATE),
				e.activeFormattingElements.clearToLastMarker(),
				e.tmplInsertionModeStack.shift(),
				e._resetInsertionMode(),
				e.onEof(t))
			: Be(e, t);
	}
	function Xa(e, t) {
		t.tagID === u.HTML ? S(e, t) : le(e, t);
	}
	function gt(e, t) {
		var a;
		if (t.tagID === u.HTML) {
			if (
				(e.fragmentContext || (e.insertionMode = n.AFTER_AFTER_BODY),
				e.options.sourceCodeLocationInfo &&
					e.openElements.tagIDs[0] === u.HTML)
			) {
				e._setEndLocation(e.openElements.items[0], t);
				let s = e.openElements.items[1];
				s &&
					!(
						!(
							(a = e.treeAdapter.getNodeSourceCodeLocation(s)) ===
								null || a === void 0
						) && a.endTag
					) &&
					e._setEndLocation(s, t);
			}
		} else le(e, t);
	}
	function le(e, t) {
		(e.insertionMode = n.IN_BODY), fe(e, t);
	}
	function qa(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				S(e, t);
				break;
			}
			case u.FRAMESET: {
				e._insertElement(t, E.HTML);
				break;
			}
			case u.FRAME: {
				e._appendElement(t, E.HTML), (t.ackSelfClosing = !0);
				break;
			}
			case u.NOFRAMES: {
				M(e, t);
				break;
			}
			default:
		}
	}
	function Wa(e, t) {
		t.tagID === u.FRAMESET &&
			!e.openElements.isRootHtmlElementCurrent() &&
			(e.openElements.pop(),
			!e.fragmentContext &&
				e.openElements.currentTagId !== u.FRAMESET &&
				(e.insertionMode = n.AFTER_FRAMESET));
	}
	function Ka(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				S(e, t);
				break;
			}
			case u.NOFRAMES: {
				M(e, t);
				break;
			}
			default:
		}
	}
	function Va(e, t) {
		t.tagID === u.HTML && (e.insertionMode = n.AFTER_AFTER_FRAMESET);
	}
	function ja(e, t) {
		t.tagID === u.HTML ? S(e, t) : Te(e, t);
	}
	function Te(e, t) {
		(e.insertionMode = n.IN_BODY), fe(e, t);
	}
	function za(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				S(e, t);
				break;
			}
			case u.NOFRAMES: {
				M(e, t);
				break;
			}
			default:
		}
	}
	function $a(e, t) {
		(t.chars = C), e._insertCharacters(t);
	}
	function Ja(e, t) {
		e._insertCharacters(t), (e.framesetOk = !1);
	}
	function Dt(e) {
		for (
			;
			e.treeAdapter.getNamespaceURI(e.openElements.current) !== E.HTML &&
			!e._isIntegrationPoint(
				e.openElements.currentTagId,
				e.openElements.current,
			);

		)
			e.openElements.pop();
	}
	function Za(e, t) {
		if (nt(t)) Dt(e), e._startTagOutsideForeignContent(t);
		else {
			let a = e._getAdjustedCurrentElement(),
				s = e.treeAdapter.getNamespaceURI(a);
			s === E.MATHML ? Se(t) : s === E.SVG && (ct(t), ge(t)),
				Ee(t),
				t.selfClosing ? e._appendElement(t, s) : e._insertElement(t, s),
				(t.ackSelfClosing = !0);
		}
	}
	function es(e, t) {
		if (t.tagID === u.P || t.tagID === u.BR) {
			Dt(e), e._endTagOutsideForeignContent(t);
			return;
		}
		for (let a = e.openElements.stackTop; a > 0; a--) {
			let s = e.openElements.items[a];
			if (e.treeAdapter.getNamespaceURI(s) === E.HTML) {
				e._endTagOutsideForeignContent(t);
				break;
			}
			let c = e.treeAdapter.getTagName(s);
			if (c.toLowerCase() === t.tagName) {
				(t.tagName = c), e.openElements.shortenToLength(a);
				break;
			}
		}
	}
	var ts = new Map([
			[34, "&quot;"],
			[38, "&amp;"],
			[39, "&apos;"],
			[60, "&lt;"],
			[62, "&gt;"],
		]),
		$s =
			String.prototype.codePointAt != null
				? (e, t) => e.codePointAt(t)
				: (e, t) =>
						(e.charCodeAt(t) & 64512) === 55296
							? (e.charCodeAt(t) - 55296) * 1024 +
								e.charCodeAt(t + 1) -
								56320 +
								65536
							: e.charCodeAt(t);
	function Ue(e, t) {
		return function (s) {
			let c,
				T = 0,
				l = "";
			for (; (c = e.exec(s)); )
				T !== c.index && (l += s.substring(T, c.index)),
					(l += t.get(c[0].charCodeAt(0))),
					(T = c.index + 1);
			return l + s.substring(T);
		};
	}
	var Js = Ue(/[&<>'"]/g, ts),
		Pt = Ue(
			/["&\u00A0]/g,
			new Map([
				[34, "&quot;"],
				[38, "&amp;"],
				[160, "&nbsp;"],
			]),
		),
		Mt = Ue(
			/[&<>\u00A0]/g,
			new Map([
				[38, "&amp;"],
				[60, "&lt;"],
				[62, "&gt;"],
				[160, "&nbsp;"],
			]),
		);
	var us = new Set([
		o.AREA,
		o.BASE,
		o.BASEFONT,
		o.BGSOUND,
		o.BR,
		o.COL,
		o.EMBED,
		o.FRAME,
		o.HR,
		o.IMG,
		o.INPUT,
		o.KEYGEN,
		o.LINK,
		o.META,
		o.PARAM,
		o.SOURCE,
		o.TRACK,
		o.WBR,
	]);
	function xt(e, t) {
		return (
			t.treeAdapter.isElementNode(e) &&
			t.treeAdapter.getNamespaceURI(e) === E.HTML &&
			us.has(t.treeAdapter.getTagName(e))
		);
	}
	var as = { treeAdapter: H, scriptingEnabled: !0 };
	function Fe(e, t) {
		let a = { ...as, ...t };
		return xt(e, a) ? "" : Bt(e, a);
	}
	function Bt(e, t) {
		let a = "",
			s =
				t.treeAdapter.isElementNode(e) &&
				t.treeAdapter.getTagName(e) === o.TEMPLATE &&
				t.treeAdapter.getNamespaceURI(e) === E.HTML
					? t.treeAdapter.getTemplateContent(e)
					: e,
			c = t.treeAdapter.getChildNodes(s);
		if (c) for (let T of c) a += ss(T, t);
		return a;
	}
	function ss(e, t) {
		return t.treeAdapter.isElementNode(e)
			? rs(e, t)
			: t.treeAdapter.isTextNode(e)
				? ns(e, t)
				: t.treeAdapter.isCommentNode(e)
					? cs(e, t)
					: t.treeAdapter.isDocumentTypeNode(e)
						? os(e, t)
						: "";
	}
	function rs(e, t) {
		let a = t.treeAdapter.getTagName(e);
		return `<${a}${is(e, t)}>${xt(e, t) ? "" : `${Bt(e, t)}</${a}>`}`;
	}
	function is(e, { treeAdapter: t }) {
		let a = "";
		for (let s of t.getAttrList(e)) {
			if (((a += " "), !s.namespace)) a += s.name;
			else
				switch (s.namespace) {
					case E.XML: {
						a += `xml:${s.name}`;
						break;
					}
					case E.XMLNS: {
						s.name !== "xmlns" && (a += "xmlns:"), (a += s.name);
						break;
					}
					case E.XLINK: {
						a += `xlink:${s.name}`;
						break;
					}
					default:
						a += `${s.prefix}:${s.name}`;
				}
			a += `="${Pt(s.value)}"`;
		}
		return a;
	}
	function ns(e, t) {
		let { treeAdapter: a } = t,
			s = a.getTextNodeContent(e),
			c = a.getParentNode(e),
			T = c && a.isElementNode(c) && a.getTagName(c);
		return T && a.getNamespaceURI(c) === E.HTML && qe(T, t.scriptingEnabled)
			? s
			: Mt(s);
	}
	function cs(e, { treeAdapter: t }) {
		return `<!--${t.getCommentNodeContent(e)}-->`;
	}
	function os(e, { treeAdapter: t }) {
		return `<!DOCTYPE ${t.getDocumentTypeNodeName(e)}>`;
	}
	function Ht(e, t) {
		return J.parse(e, t);
	}
	self.html = class {
		constructor(t) {
			this.generateHead = be;
			this.config = [
				{ elements: "all", tags: ["style"], action: "css" },
				{
					elements: [
						"script",
						"iframe",
						"embed",
						"input",
						"track",
						"media",
						"source",
						"img",
					],
					tags: ["src"],
					action: "url",
				},
				{
					elements: ["source", "img"],
					tags: ["srcset"],
					action: "srcset",
				},
				{
					elements: ["a", "link", "area"],
					tags: ["href"],
					action: "url",
				},
				{ elements: ["form"], tags: ["action"], action: "url" },
				{ elements: ["object"], tags: ["data"], action: "url" },
				{
					elements: ["script", "link"],
					tags: ["integrity"],
					action: "rewrite",
					new: "nointegrity",
				},
				{
					elements: ["script", "link"],
					tags: ["nonce"],
					action: "rewrite",
					new: "nononce",
				},
				{
					elements: ["meta"],
					tags: ["http-equiv"],
					action: "http-equiv",
				},
				{ elements: ["iframe"], tags: ["srcdoc"], action: "html" },
				{ elements: ["link"], tags: ["imagesrcset"], action: "srcset" },
				{ elements: "all", tags: ["onclick"], action: "js" },
			];
			this.ctx = t.ctx;
		}
		generateRedirect(t) {
			return `
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="${t}">here</A>.
</BODY></HTML>
    `;
		}
		iterate(t, a) {
			function s(c = t) {
				for (var T = 0; T < c.childNodes.length; T++)
					a(c.childNodes[T]),
						c.childNodes[T].childNodes &&
							c.childNodes[T].childNodes.length &&
							s(c.childNodes[T]);
			}
			s(t);
		}
		rewrite(t, a, s = []) {
			let c = this;
			if (
				(Array.isArray(t) && (t = t[0]),
				!t ||
					((t = t.toString()),
					!t.match(/<(html|script|style)[^>]*>/g) &&
						t.match(/<\!DOCTYPE[^>]*>/gi)))
			)
				return t;
			var T = Ht(t, {}),
				l = [];
			if (
				(this.iterate(T, (N) => l.push(N)),
				(l = l.map(
					(N) => (
						(N.attribs = {}),
						N.attrs &&
							N.attrs.map(
								({ name: ye, value: kt }) =>
									(N.attribs[ye] = kt),
							),
						N
					),
				)),
				l.find((N) => N.nodeName == "base"))
			)
				var m = new URL(
					l.find((N) => N.nodeName == "base").attribs.href,
					new URL(a.href),
				).href;
			else var m = a.href;
			m = new URL(m);
			for (var _ of l) {
				var f = new Y(_, c.ctx);
				_.nodeName == "base" &&
					(f.setAttribute(
						"data-dynamic_href",
						f.getAttribute("href"),
					),
					f.setAttribute(
						"href",
						this.ctx.url.encode(f.getAttribute("href"), a),
					)),
					_.nodeName == "script" &&
						(a.href == "about:blank" && (_.attribs.defer = "true"),
						!f.getAttribute("src") &&
							f.getAttribute("type") !== "application/json" &&
							_.childNodes.forEach((N) => {
								if (N.nodeName !== "#text") return N;
								if (
									f.getAttribute("type") &&
									f.getAttribute("type") !==
										"application/javascript" &&
									f.getAttribute("type") !==
										"text/javascript" &&
									f.getAttribute("type") !== "module"
								)
									return w;
								N.value = c.ctx.rewrite.js.rewrite(
									N.value,
									{ type: "script" },
									!1,
									c.ctx,
								);
							})),
					_.nodeName == "style" &&
						_.childNodes.forEach((N) => {
							if (N.nodeName !== "#text") return w;
							N.value = c.ctx.rewrite.css.rewrite(N.value, m);
						});
				for (var L of c.config)
					if (
						L.elements === "all" ||
						L.elements.indexOf(_.nodeName) > -1
					) {
						for (var b of L.tags)
							if (!(!f.hasAttribute(b) || !f.getAttribute(b))) {
								if (
									_.tagName == "link" &&
									(f.getAttribute("rel") == "icon" ||
										f.getAttribute("rel") ==
											"shortcut icon") &&
									this.ctx.config.tab?.icon
								) {
									f.setAttribute(
										`data-dynamic_${b}`,
										f.getAttribute(b),
									),
										f.setAttribute(
											"href",
											this.ctx.url.encode(
												this.ctx.config.tab.icon,
												m,
											),
										);
									continue;
								}
								if (L.action === "url") {
									if (
										(f.setAttribute(
											`data-dynamic_${b}`,
											f.getAttribute(b),
										),
										!f
											.getAttribute(b)
											.match(c.ctx.regex.ProtocolRegex) &&
											f
												.getAttribute(b)
												.match(
													/^([a-zA-Z0-9\-]+)\:\/\//g,
												))
									)
										continue;
									f.setAttribute(
										b,
										c.ctx.url.encode(f.getAttribute(b), m),
									);
								} else if (L.action === "srcset")
									f.setAttribute(
										`data-dynamic_${b}`,
										f.getAttribute(b),
									),
										f.setAttribute(
											b,
											we.encode(f.getAttribute(b), c.ctx),
										);
								else if (L.action === "rewrite")
									f.setAttribute(L.new, f.getAttribute(b)),
										f.removeAttribute(b);
								else if (L.action === "html") {
									f.setAttribute(
										`data-dynamic_${b}`,
										f.getAttribute(b),
									),
										f.removeAttribute(b);
									let N = new Blob(
										[
											c.ctx.rewrite.html.rewrite(
												f.getAttribute(b),
												m,
											),
										],
										{ type: "text/html" },
									);
									f.setAttribute(
										"src",
										URL.createObjectURL(N),
									);
								} else if (L.action === "http-equiv") {
									let N = f.getAttribute("content");
									switch (
										f
											.getAttribute("http-equiv")
											.toLowerCase()
									) {
										case "refresh":
											var Ut =
													N.split("url=")[0].split(
														";",
													)[0],
												Ft = N.split("url=")[1];
											f.setAttribute(
												"content",
												`${Ut};url=${c.ctx.url.encode(Ft, m)}`,
											);
											break;
										case "content-security-policy":
											f.removeAttribute("content"),
												f.removeAttribute("http-equiv");
											break;
										default:
											break;
									}
								} else
									L.action === "css"
										? (f.setAttribute(
												`data-dynamic_${b}`,
												f.getAttribute(b),
											),
											f.setAttribute(
												b,
												c.ctx.rewrite.css.rewrite(
													f.getAttribute(b),
													m,
												),
											))
										: L.action === "delete"
											? f.removeAttribute(b)
											: L.action === "js" &&
												f.setAttribute(
													b,
													c.ctx.rewrite.js.rewrite(
														f.getAttribute(b),
														{ type: "script" },
														!1,
														c.ctx,
													),
												);
							}
					}
			}
			if (s && T.childNodes.length && s.length)
				for (
					var ke = T.childNodes.find((N) => N.nodeName == "html"),
						w = 0;
					w < s.length;
					w++
				) {
					if (ke) {
						ke.childNodes.unshift(s[w]);
						continue;
					}
					T.childNodes.unshift(s[w]);
				}
			return (t = Fe(T)), t;
		}
	};
})();
//# sourceMappingURL=dynamic.html.js.map
