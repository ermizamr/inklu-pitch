import { useState } from "react";
import { TECHNICAL_ARCHITECTURE } from "../data/contentData";
import { 
  Server, 
  Cpu, 
  Database, 
  Boxes, 
  Network, 
  ArrowRight, 
  Radio, 
  Bot, 
  CheckCircle2
} from "lucide-react";

export default function Architecture() {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);

  const layerIcons = [
    <Boxes className="w-5 h-5 text-[#183E34]" key="boxes" />,
    <Network className="w-5 h-5 text-[#183E34]" key="network" />,
    <Server className="w-5 h-5 text-[#183E34]" key="server" />,
    <Database className="w-5 h-5 text-[#183E34]" key="database" />,
    <Cpu className="w-5 h-5 text-[#183E34]" key="cpu" />,
    <Radio className="w-5 h-5 text-[#183E34]" key="radio" />,
    <Bot className="w-5 h-5 text-[#183E34]" key="bot" />,
  ];

  return (
    <section id="architecture" className="py-20 lg:py-28 bg-[#F8F9F4] border-b border-[#D9DFD6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183E34]/10 text-[#183E34] text-xs font-semibold tracking-wider uppercase">
            <span>04 • Technical Architecture</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#18362E] tracking-tight leading-tight">
            Engineered for zero friction: modular, low-cost, and resilient.
          </h2>
          <p className="text-base sm:text-lg text-[#334D44] leading-relaxed">
            Derived directly from Ermi’s submitted Docker Compose multi-container stack.
            The architecture isolates the client widget to 14.2 KB of plain JavaScript while delivering resilient semantic retrieval, multilingual LLM batching, and omnichannel escalation.
          </p>
        </div>

        {/* Accessible Interactive SVG/HTML Architecture Diagram */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-white border border-[#D9DFD6] shadow-md overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-8 border-b border-[#D9DFD6] pb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4A54B]">
                Docker Compose Architecture Diagram
              </span>
              <h3 className="font-heading font-bold text-xl text-[#18362E]">
                Ermi’s Production Topology &amp; Service Isolation
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#4B635B]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>5 Isolated Containers (Nginx, FastAPI, Redis, Telegram, Worker)</span>
            </div>
          </div>

          {/* Visual Architecture Grid */}
          <div className="space-y-6">
            
            {/* Layer 1: Client Host & Widget */}
            <div className="p-5 rounded-xl bg-[#F8F9F4] border-2 border-dashed border-[#183E34]/30 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold uppercase text-[#183E34] tracking-wide">
                  Tier 1: Client Host Environment (Any LMS / Savanna / Canvas / Moodle)
                </span>
                <span className="font-mono text-[11px] bg-white px-2 py-0.5 rounded border border-[#D9DFD6]">
                  14.2 KB Bundle
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-white border border-[#D9DFD6] text-xs space-y-1">
                  <div className="font-bold text-[#18362E] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F2C675]"></span>
                    &lt;db-assistant&gt; Web Component
                  </div>
                  <p className="text-[11px] text-[#4B635B]">
                    Injected via widget.js; registers custom DOM element.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#D9DFD6] text-xs space-y-1">
                  <div className="font-bold text-[#18362E] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#183E34]"></span>
                    Pluggable a11y-engine.js
                  </div>
                  <p className="text-[11px] text-[#4B635B]">
                    474-entry live DOM translation &amp; switch scanning (S).
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#D9DFD6] text-xs space-y-1">
                  <div className="font-bold text-[#18362E] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    Sandboxed iframe.html
                  </div>
                  <p className="text-[11px] text-[#4B635B]">
                    WCAG 2.2 AA compliant UI shell, postMessage bridge.
                  </p>
                </div>
              </div>
            </div>

            {/* Connecting Flow Arrow */}
            <div className="flex justify-center -my-2">
              <div className="px-3 py-1 rounded-full bg-[#183E34] text-white text-[11px] font-mono flex items-center gap-1.5 shadow-xs">
                <span>HTTP / JSON / postMessage</span>
                <ArrowRight className="w-3 h-3 text-[#F2C675]" />
              </div>
            </div>

            {/* Layer 2: Gateway & Application Cluster */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              
              {/* Nginx Container */}
              <div className="md:col-span-4 p-5 rounded-xl bg-white border border-[#D9DFD6] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[#183E34]">Container: nginx:1.27-alpine</span>
                  <span className="text-[10px] bg-[#EAEFE8] px-1.5 py-0.5 rounded text-[#183E34]">Port 80</span>
                </div>
                <p className="text-xs text-[#334D44] leading-relaxed">
                  Reverse proxy routing /api requests to Uvicorn, serving static widget assets, course HTML, and human operator UI.
                </p>
                <div className="text-[11px] font-mono text-[#4B635B] pt-1">
                  nginx/nginx.conf
                </div>
              </div>

              {/* FastAPI Container */}
              <div className="md:col-span-8 p-5 rounded-xl bg-[#18362E] text-white border border-[#245246] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[#F2C675]">Container: api (FastAPI + Uvicorn)</span>
                  <span className="text-[10px] bg-[#122822] px-2 py-0.5 rounded border border-[#245246] text-[#D9DFD6]">
                    Python 3.11 • Port 8000
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-[#D9DFD6]">
                  <div className="p-2 rounded bg-[#122822] border border-[#245246]">
                    /api/v1/ask
                    <span className="block text-[9px] text-[#A3B8B0]">Course RAG</span>
                  </div>
                  <div className="p-2 rounded bg-[#122822] border border-[#245246]">
                    /api/v1/content
                    <span className="block text-[9px] text-[#A3B8B0]">Host Indexing</span>
                  </div>
                  <div className="p-2 rounded bg-[#122822] border border-[#245246]">
                    /translate
                    <span className="block text-[9px] text-[#A3B8B0]">Batch LLM</span>
                  </div>
                  <div className="p-2 rounded bg-[#122822] border border-[#245246]">
                    /lti/*
                    <span className="block text-[9px] text-[#A3B8B0]">LTI 1.3 Canvas</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Connecting Flow Arrow */}
            <div className="flex justify-center -my-2">
              <div className="px-3 py-1 rounded-full bg-[#183E34] text-white text-[11px] font-mono flex items-center gap-1.5 shadow-xs">
                <span>Redis Protocol / Async HTTP / Long-Polling</span>
                <ArrowRight className="w-3 h-3 text-[#F2C675]" />
              </div>
            </div>

            {/* Layer 3: Datastores, Channels & AI Inference */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* RAG & Search Box */}
              <div className="p-5 rounded-xl bg-white border border-[#D9DFD6] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[#18362E]">Okapi BM25 &amp; Vector RAG</span>
                  <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                    Dual Engine
                  </span>
                </div>
                <p className="text-xs text-[#334D44] leading-relaxed">
                  Pure-Python BM25 in-memory engine auto-detects low-memory (&lt;=512MB) environments to prevent OOM. Chroma vector DB used when RAM allows.
                </p>
                <div className="text-[11px] font-mono text-[#4B635B] pt-1">
                  api/rag/retriever.py
                </div>
              </div>

              {/* Pluggable AI Engine */}
              <div className="p-5 rounded-xl bg-white border border-[#D9DFD6] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[#18362E]">Pluggable AI &amp; Speech</span>
                  <span className="text-[10px] font-mono bg-[#EAEFE8] text-[#183E34] px-1.5 py-0.5 rounded">
                    Gemini / Ollama / Offline
                  </span>
                </div>
                <p className="text-xs text-[#334D44] leading-relaxed">
                  Toggles between Google Gemini 3.5 Flash-Lite, local Ollama, Edge-TTS, and pure offline FAQ. Zero vendor lock-in.
                </p>
                <div className="text-[11px] font-mono text-[#4B635B] pt-1">
                  api/ai/factory.py
                </div>
              </div>

              {/* Redis & Channels */}
              <div className="p-5 rounded-xl bg-white border border-[#D9DFD6] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[#183E34]">Redis 7 + Telegram Bot</span>
                  <span className="text-[10px] font-mono bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded">
                    Omnichannel
                  </span>
                </div>
                <p className="text-xs text-[#334D44] leading-relaxed">
                  Redis manages ticket queues and session caches with 72h TTL. Long-polling Telegram bot alerts human tutors on mobile.
                </p>
                <div className="text-[11px] font-mono text-[#4B635B] pt-1">
                  api/channels/telegram_bot.py
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Detailed Architectural Layers Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Layer Selector Tabs */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4B635B] block mb-2">
              Select Architectural Layer
            </span>
            {TECHNICAL_ARCHITECTURE.layers.map((layer, idx) => (
              <button
                key={layer.name}
                type="button"
                onClick={() => setSelectedLayerIndex(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                  selectedLayerIndex === idx
                    ? "bg-[#183E34] text-white border-[#183E34] shadow-sm"
                    : "bg-white text-[#18362E] border-[#D9DFD6] hover:bg-[#EAEFE8]"
                }`}
                aria-pressed={selectedLayerIndex === idx}
              >
                <div className={`p-2 rounded-lg ${selectedLayerIndex === idx ? "bg-[#123028] text-[#F2C675]" : "bg-[#F8F9F4] text-[#183E34]"}`}>
                  {layerIcons[idx]}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm leading-tight">
                    {layer.name}
                  </h4>
                  <span className={`text-[11px] ${selectedLayerIndex === idx ? "text-[#D9DFD6]" : "text-[#4B635B]"}`}>
                    {layer.tech.split(",")[0]}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Layer Specification */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-[#D9DFD6] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9DFD6] pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#D4A54B]">
                  Layer 0{selectedLayerIndex + 1}
                </span>
                <h3 className="font-heading font-bold text-2xl text-[#18362E]">
                  {TECHNICAL_ARCHITECTURE.layers[selectedLayerIndex].name}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#EAEFE8] text-[#183E34] text-xs font-mono font-semibold border border-[#D9DFD6]">
                {TECHNICAL_ARCHITECTURE.layers[selectedLayerIndex].tech}
              </span>
            </div>

            {/* Implementation Files */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4B635B] block">
                Source Files in origin/ermi
              </span>
              <div className="flex flex-wrap gap-2">
                {TECHNICAL_ARCHITECTURE.layers[selectedLayerIndex].files.map((file, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-[#F8F9F4] border border-[#D9DFD6] text-xs font-mono text-[#183E34]">
                    {file}
                  </span>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#183E34] block">
                Key Technical Responsibilities
              </span>
              <ul className="space-y-2">
                {TECHNICAL_ARCHITECTURE.layers[selectedLayerIndex].responsibilities.map((resp, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#334D44] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Chosen Rational */}
            <div className="p-4 rounded-xl bg-[#F0F3EC] border-l-4 border-l-[#183E34] border-[#D9DFD6] space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#183E34] block">
                Why This Stack Choice Was Made
              </span>
              <p className="text-xs sm:text-sm text-[#18362E] leading-relaxed">
                {TECHNICAL_ARCHITECTURE.layers[selectedLayerIndex].whyChosen}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
