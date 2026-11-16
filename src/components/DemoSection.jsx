/**
 * ACT 03 — THE EVIDENCE, continued
 * The walkthrough reel, the endpoint ledger, and the in-page tutor
 * simulator — try the product without leaving the story.
 */
import { useState } from "react";
import { DEMO_DATA, BRAND } from "../data/contentData";
import { Reveal, ChapterMark } from "./ui/primitives";
import { ExternalLink, FileText, Copy, Check, Send, UserCheck } from "lucide-react";

export default function DemoSection() {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [simpleMode, setSimpleMode] = useState(false);
  const [activeLang, setActiveLang] = useState("en");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "assistant",
      text: "Hello! I am Inklu, your learning assistant. Ask me anything about this course, or choose a question below.",
      citation: null,
      date: "Nov 15, 2026",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isEscalated, setIsEscalated] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(null);

  const handleSelectSample = (idx) => {
    setSelectedPromptIndex(idx);
    const sample = DEMO_DATA.samplePrompts[idx];
    setInputVal(sample.question);
    setActiveLang(sample.lang);
  };

  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (!inputVal.trim()) return;

    const currentQuestion = inputVal;
    const sampleMatch = DEMO_DATA.samplePrompts.find(
      (p) => p.question.toLowerCase() === currentQuestion.toLowerCase()
    ) || DEMO_DATA.samplePrompts[selectedPromptIndex];

    const userMsg = {
      sender: "user",
      text: currentQuestion,
      citation: null,
      date: new Date().toLocaleTimeString(),
    };

    let replyText = sampleMatch.previewAnswer;
    if (simpleMode) {
      replyText = `[Simple Mode Summary]: ${replyText.split(".")[0]}. Key takeaway: focus on learning and practical application.`;
    }

    const assistantMsg = {
      sender: "assistant",
      text: replyText,
      citation: {
        title: sampleMatch.citationTitle,
        url: sampleMatch.expectedCitation,
      },
      date: "15 Nov 2026 • ህዳር 5 ቀን 2018 ዓ.ም.",
    };

    setChatMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInputVal("");
  };

  const handleEscalate = () => {
    setIsEscalated(true);
    const ticketId = `ESC-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setChatMessages((prev) => [
      ...prev,
      {
        sender: "system",
        text: `Human help requested — ticket #${ticketId} dispatched to the Telegram operator queue. A human advocate has been notified with your lesson context.`,
        citation: null,
        date: new Date().toLocaleTimeString(),
      },
    ]);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedUrl(text);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  return (
    <section id="demo" aria-label="Live verification" className="border-t border-rule bg-paper-dim/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
        <ChapterMark
          numeral="03"
          act="Act 03 — The Evidence, continued"
          title="Try the tutor without leaving this page."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* The simulator — the star of the act */}
          <Reveal className="lg:col-span-7">
            <div className="border border-rule bg-paper-raised h-[620px] flex flex-col">
              <div className="px-5 py-3 border-b border-rule flex items-center justify-between gap-3">
                <span className="annotation text-forest">Inklu Assistant — simulator</span>
                <div className="flex items-center gap-2">
                  <select
                    value={activeLang}
                    onChange={(e) => setActiveLang(e.target.value)}
                    className="font-mono text-[11px] bg-paper border border-rule text-forest px-2 py-1.5 cursor-pointer"
                    aria-label="Simulator language"
                  >
                    <option value="en">EN · English</option>
                    <option value="am">AM · አማርኛ</option>
                    <option value="om">OM · Oromoo</option>
                  </select>
                  <button
                    type="button"
                    onClick={() => setSimpleMode(!simpleMode)}
                    aria-pressed={simpleMode}
                    title="Toggle Simple Mode — plain language"
                    className={`font-mono text-[11px] px-2.5 py-1.5 border cursor-pointer transition-colors ${
                      simpleMode
                        ? "bg-forest text-paper border-forest"
                        : "border-rule text-muted hover:text-forest hover:border-forest"
                    }`}
                  >
                    Aa
                  </button>
                </div>
              </div>

              {/* Sample prompts */}
              <div className="px-4 py-2.5 border-b border-rule flex items-center gap-2 overflow-x-auto">
                <span className="annotation text-muted shrink-0">Try:</span>
                {DEMO_DATA.samplePrompts.map((p, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelectSample(i)}
                    aria-pressed={selectedPromptIndex === i}
                    className={`font-mono text-[11px] px-2.5 py-1.5 border whitespace-nowrap cursor-pointer transition-colors ${
                      selectedPromptIndex === i
                        ? "border-forest bg-forest text-paper"
                        : "border-rule text-body hover:border-forest"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              {/* Messages */}
              <div
                className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4"
                aria-live="polite"
                aria-label="Simulated conversation"
              >
                {chatMessages.map((msg, i) =>
                  msg.sender === "system" ? (
                    <div
                      key={i}
                      className="mx-auto max-w-md border border-gold-deep/50 bg-gold/15 px-4 py-3 text-xs text-body text-center"
                    >
                      {msg.text}
                    </div>
                  ) : (
                    <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : ""}`}>
                      <div
                        className={`max-w-[85%] border px-4 py-3.5 text-sm space-y-2.5 ${
                          msg.sender === "user"
                            ? "bg-ink text-paper border-ink"
                            : "bg-paper text-body border-rule"
                        }`}
                      >
                        <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                        {msg.citation && (
                          <div className="pt-2.5 border-t border-rule/70 font-mono text-[11px] text-forest flex items-start gap-1.5">
                            <FileText className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gold-deep" />
                            <span>
                              {msg.citation.title}
                              <span className="block text-muted text-[10px] truncate">
                                {msg.citation.url}
                              </span>
                            </span>
                          </div>
                        )}
                        <div className="font-mono text-[10px] text-muted text-right">{msg.date}</div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Input */}
              <div className="border-t border-rule p-3.5 space-y-2.5">
                <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Ask a question about the course…"
                    aria-label="Ask a question about the course"
                    className="flex-1 px-4 py-2.5 text-sm bg-paper border border-rule text-body placeholder:text-muted/70 focus:outline-none focus:border-forest"
                  />
                  <button
                    type="submit"
                    className="bg-forest text-paper px-4 py-2.5 text-xs font-semibold hover:bg-ink transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    Send
                    <Send className="w-3.5 h-3.5 text-gold" />
                  </button>
                </form>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <button
                    type="button"
                    onClick={handleEscalate}
                    disabled={isEscalated}
                    className={`inline-flex items-center gap-2 font-mono text-[11px] px-3 py-1.5 border transition-colors ${
                      isEscalated
                        ? "border-rule text-muted cursor-not-allowed"
                        : "border-forest text-forest hover:bg-forest hover:text-paper cursor-pointer"
                    }`}
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    {isEscalated ? "Escalation dispatched" : "Get human help"}
                  </button>
                  <span className="font-mono text-[10px] text-muted">
                    simulated from the /api/v1/ask contract
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Walkthrough reel + endpoint ledger */}
          <div className="lg:col-span-5 space-y-10">
            <Reveal delay={120}>
              <div className="border border-rule bg-paper-raised">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-rule">
                  <span className="annotation text-forest">Reel 01</span>
                  <span className="annotation text-muted">Recorded walkthrough</span>
                </div>
                <video
                  controls
                  preload="metadata"
                  className="w-full aspect-video object-contain bg-ink"
                  poster="/assets/screenshots/Screenshot (412).png"
                >
                  <source src="/assets/videos/vid1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="px-4 py-3 text-xs leading-relaxed text-muted border-t border-rule">
                  Real-time voice question in Amharic, automated section citations,
                  switch navigation, and live operator escalation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex items-center justify-between">
                <span className="annotation text-forest">Verification endpoints</span>
                <a
                  href={BRAND.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 py-2 -my-2 text-sm font-semibold text-forest border-b border-forest/40 hover:border-forest transition-colors"
                >
                  Launch live MVP
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <ul className="mt-4 divide-y divide-rule border-y border-rule">
                {DEMO_DATA.submittedUrls.map((item, idx) => (
                  <li key={idx} className="py-3.5 group">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-sm font-semibold text-ink">{item.name}</span>
                      <span className="font-mono text-[10px] text-muted shrink-0 uppercase">
                        {item.badge}
                      </span>
                    </div>
                    <div className="mt-1.5 flex items-center justify-between gap-3">
                      <p className="text-xs text-muted leading-relaxed flex-1">
                        {item.description}
                      </p>
                      <button
                        type="button"
                        onClick={() => handleCopy(item.url)}
                        className="p-1.5 text-muted hover:text-forest cursor-pointer shrink-0"
                        title="Copy URL"
                        aria-label={`Copy URL for ${item.name}`}
                      >
                        {copiedUrl === item.url ? (
                          <Check className="w-3.5 h-3.5 text-forest-bright" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
