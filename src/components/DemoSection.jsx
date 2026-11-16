import { useState } from "react";
import { DEMO_DATA, BRAND } from "../data/contentData";
import { 
  ExternalLink, 
  Send, 
  FileText, 
  Video, 
  Copy, 
  Check,
  UserCheck
} from "lucide-react";

const Github = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

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
        text: `✓ Human Help Requested — Ticket #${ticketId} dispatched to Telegram operator queue. A human advocate has been notified with your lesson context.`,
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
    <section id="demo" className="py-20 lg:py-28 bg-[#F8F9F4] border-b border-[#D9DFD6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183E34]/10 text-[#183E34] text-xs font-semibold tracking-wider uppercase">
            <span>06 • Interactive Demo &amp; Verification</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#18362E] tracking-tight leading-tight">
            Experience Inklu: live walkthrough, verified URLs, and interactive simulation.
          </h2>
          <p className="text-base sm:text-lg text-[#334D44] leading-relaxed">
            Verify our submitted hackathon implementation through four independent avenues: launch the live Cloud Run MVP, watch the recorded walkthrough video, inspect the submitted GitHub repository, or test the in-page learner simulation widget below.
          </p>
        </div>

        {/* Live Cloud Run MVP & GitHub Spotlight Banner */}
        <div className="mb-14 rounded-2xl bg-[#122822] border-2 border-[#F2C675] p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#091713] border border-[#245246] text-[#F2C675] font-mono text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Live Google Cloud Run Deployment</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Launch the Live Savanna Course Demo
              </h3>
              <p className="text-xs sm:text-sm text-[#D9DFD6] leading-relaxed">
                Deployed live on Google Cloud Run directly from submitted branch <code className="font-mono text-[#F2C675] bg-[#091713] px-1.5 py-0.5 rounded border border-[#183E34]">ermi</code>.
                Interact with the live course page, ask questions in Amharic or English, inspect citations, and test the embedded accessibility assistant.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
              <a
                href={BRAND.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F2C675] text-[#18362E] font-bold text-sm hover:bg-[#E5B860] shadow-md transition-all cursor-pointer"
              >
                <span>Launch Live MVP Demo</span>
                <ExternalLink className="w-4 h-4 text-[#18362E]" />
              </a>

              <a
                href={BRAND.branchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#091713] hover:bg-[#183E34] text-white font-mono text-xs font-bold border border-[#245246] shadow-xs transition-all"
              >
                <Github className="w-4 h-4 text-[#F2C675]" />
                <span>GitHub (ermi)</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#A3B8B0]" />
              </a>
            </div>
          </div>
        </div>

        {/* Video Walkthrough Player */}
        <div className="mb-20 rounded-2xl bg-[#18362E] border border-[#245246] p-4 sm:p-6 shadow-xl text-white">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#245246]">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-[#F2C675]" />
              <h3 className="font-heading font-bold text-lg sm:text-xl">
                Product Walkthrough Demonstration
              </h3>
            </div>
            <span className="text-xs font-semibold bg-[#122822] text-[#F2C675] px-3 py-1 rounded-full border border-[#245246]">
              Live Assistant Recording
            </span>
          </div>

          <div className="relative rounded-xl overflow-hidden bg-black aspect-video max-h-[540px] flex items-center justify-center">
            <video
              controls
              preload="metadata"
              className="w-full h-full object-contain"
              poster="/assets/screenshots/Screenshot (412).png"
            >
              <source src="/assets/videos/vid1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="text-xs text-[#D9DFD6] mt-3">
            <strong>Walkthrough highlights:</strong> Demonstrates real-time voice question in Amharic, automated section citations, switch navigation toolbar, and live operator escalation.
          </p>
        </div>

        {/* Submitted Deployment Endpoints Directory */}
        <div className="mb-20">
          <div className="max-w-2xl mb-6">
            <h3 className="font-heading font-bold text-2xl text-[#18362E]">
              Verified Cloud &amp; Local Endpoints
            </h3>
            <p className="text-xs text-[#4B635B] mt-1">
              Test directly on Google Cloud Run or launch locally via Docker Compose (<code className="font-mono text-[#183E34]">docker compose up -d</code>):
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DEMO_DATA.submittedUrls.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#D9DFD6] hover:border-[#183E34] transition-all shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-heading font-bold text-sm text-[#18362E]">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 shrink-0">
                      {item.badge || "Verified"}
                    </span>
                  </div>
                  <p className="text-xs text-[#4B635B] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D9DFD6] flex items-center justify-between">
                  <code className="text-[11px] font-mono text-[#183E34] truncate max-w-[170px]" title={item.url}>
                    {item.url}
                  </code>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCopy(item.url)}
                      className="p-1 text-[#4B635B] hover:text-[#18362E]"
                      title="Copy URL"
                    >
                      {copiedUrl === item.url ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#183E34] hover:underline"
                    >
                      Open <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Learner Interaction Sequence & In-Page Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Suggested Evaluation Walkthrough */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4A54B]">
                Judge &amp; Evaluator Script
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#18362E]">
                Suggested Interaction Flow
              </h3>
              <p className="text-xs sm:text-sm text-[#4B635B] mt-1 leading-relaxed">
                Follow this sequential sequence to evaluate the core promise of Track 3:
              </p>
            </div>

            <ol className="space-y-4 text-xs sm:text-sm text-[#334D44]">
              <li className="flex items-start gap-3 p-3 rounded-lg bg-white border border-[#D9DFD6]">
                <span className="w-6 h-6 rounded-full bg-[#183E34] text-[#F2C675] flex items-center justify-center font-bold text-xs shrink-0">
                  1
                </span>
                <div>
                  <strong className="text-[#18362E] block">Open Course Host</strong>
                  <span>Visit concept-with-navigation.html or blank.html to observe instant trigger mounting.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg bg-white border border-[#D9DFD6]">
                <span className="w-6 h-6 rounded-full bg-[#183E34] text-[#F2C675] flex items-center justify-center font-bold text-xs shrink-0">
                  2
                </span>
                <div>
                  <strong className="text-[#18362E] block">Select Language Preference</strong>
                  <span>Switch between English and Amharic; note instant DOM heading updates.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg bg-white border border-[#D9DFD6]">
                <span className="w-6 h-6 rounded-full bg-[#183E34] text-[#F2C675] flex items-center justify-center font-bold text-xs shrink-0">
                  3
                </span>
                <div>
                  <strong className="text-[#18362E] block">Ask a Course Question</strong>
                  <span>Inquire about graduation threshold or VA tasks; observe grounded section citations.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg bg-white border border-[#D9DFD6]">
                <span className="w-6 h-6 rounded-full bg-[#183E34] text-[#F2C675] flex items-center justify-center font-bold text-xs shrink-0">
                  4
                </span>
                <div>
                  <strong className="text-[#18362E] block">Test Cognitive Simple Mode</strong>
                  <span>Click [Aa] to request simplified plain-language explanation of complex paragraphs.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg bg-white border border-[#D9DFD6]">
                <span className="w-6 h-6 rounded-full bg-[#183E34] text-[#F2C675] flex items-center justify-center font-bold text-xs shrink-0">
                  5
                </span>
                <div>
                  <strong className="text-[#18362E] block">Escalate to Live Operator</strong>
                  <span>Click "Get human help" and view ticket in /operator/index.html.</span>
                </div>
              </li>
            </ol>
          </div>

          {/* Right: Hands-on In-Page Learner Interaction Simulator */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#D9DFD6] shadow-xl overflow-hidden flex flex-col h-[640px]">
            {/* Simulator Header */}
            <div className="px-5 py-3.5 bg-[#183E34] text-white flex items-center justify-between border-b border-[#245246]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#245246] text-[#F2C675] flex items-center justify-center font-bold text-xs">
                  IN
                </div>
                <div>
                  <span className="font-heading font-bold text-sm block leading-none">
                    Inklu Assistant Simulator
                  </span>
                  <span className="text-[10px] text-[#A3B8B0]">Grounded RAG &amp; Citation Engine</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                {/* Language Select */}
                <select
                  value={activeLang}
                  onChange={(e) => setActiveLang(e.target.value)}
                  className="bg-[#122822] text-xs text-white border border-[#245246] rounded px-2 py-1 focus:outline-none"
                  aria-label="Simulator Language"
                >
                  <option value="en">EN • English</option>
                  <option value="am">AM • አማርኛ</option>
                  <option value="om">OM • Oromoo</option>
                </select>

                {/* Simple Mode Toggle */}
                <button
                  type="button"
                  onClick={() => setSimpleMode(!simpleMode)}
                  className={`px-2 py-1 rounded text-xs font-bold border transition-colors ${
                    simpleMode
                      ? "bg-[#F2C675] text-[#183E34] border-[#F2C675]"
                      : "bg-[#122822] text-[#D9DFD6] border-[#245246]"
                  }`}
                  title="Toggle Simple Mode (Plain language)"
                  aria-pressed={simpleMode}
                >
                  Aa
                </button>
              </div>
            </div>

            {/* Prompt Quick Selection Pills */}
            <div className="px-4 py-2 bg-[#F8F9F4] border-b border-[#D9DFD6] flex items-center gap-2 overflow-x-auto text-xs">
              <span className="font-semibold text-[#4B635B] shrink-0">Sample Prompts:</span>
              {DEMO_DATA.samplePrompts.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSelectSample(i)}
                  className={`px-2.5 py-1 rounded-full shrink-0 transition-colors border ${
                    selectedPromptIndex === i
                      ? "bg-[#183E34] text-white border-[#183E34]"
                      : "bg-white text-[#18362E] border-[#D9DFD6] hover:bg-[#EAEFE8]"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F8F9F4]/40">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${
                    msg.sender === "user"
                      ? "items-end"
                      : msg.sender === "system"
                      ? "items-center"
                      : "items-start"
                  }`}
                >
                  {msg.sender === "system" ? (
                    <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 text-xs text-center max-w-md">
                      {msg.text}
                    </div>
                  ) : (
                    <div
                      className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm space-y-2 shadow-2xs ${
                        msg.sender === "user"
                          ? "bg-[#183E34] text-white rounded-tr-none"
                          : "bg-white text-[#18362E] border border-[#D9DFD6] rounded-tl-none"
                      }`}
                    >
                      <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                      
                      {msg.citation && (
                        <div className="pt-2 border-t border-[#D9DFD6]/60 text-[11px] text-[#183E34] font-medium flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-[#D4A54B]" />
                          <span>Source: <strong>{msg.citation.title}</strong></span>
                          <span className="font-mono text-[10px] text-[#4B635B]">
                            ({msg.citation.url})
                          </span>
                        </div>
                      )}

                      <div className="text-[10px] text-[#4B635B]/80 text-right">
                        {msg.date}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer Input & Action Area */}
            <div className="p-3 bg-white border-t border-[#D9DFD6] space-y-2">
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask a question about the course..."
                  className="flex-1 px-4 py-2 text-xs sm:text-sm border border-[#D9DFD6] rounded-xl focus:outline-[#183E34] bg-[#F8F9F4]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#183E34] text-white text-xs font-bold rounded-xl hover:bg-[#123028] transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <span>Send</span>
                  <Send className="w-3.5 h-3.5 text-[#F2C675]" />
                </button>
              </form>

              <div className="flex items-center justify-between text-xs pt-1">
                <button
                  type="button"
                  onClick={handleEscalate}
                  disabled={isEscalated}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs transition-colors ${
                    isEscalated
                      ? "bg-purple-100 text-purple-700 cursor-not-allowed"
                      : "bg-[#7E57C2] text-white hover:bg-[#6A45B0]"
                  }`}
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>{isEscalated ? "Escalation Dispatched" : "Get Human Help"}</span>
                </button>

                <span className="text-[11px] text-[#4B635B]">
                  Simulated from Ermi’s <code className="font-mono">/api/v1/ask</code> contract
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
