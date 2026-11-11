"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Sparkles,
  RotateCcw,
  User,
  ArrowRight,
  Minimize2,
  Maximize2,
  Copy,
  Check
} from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_PROMPTS = [
  "Tell me about Rahul & his role at Zynetechs",
  "What projects has Rahul architected?",
  "What is Rahul's core tech stack?",
  "How can I hire Rahul or collaborate?"
];

const AIChatIcon = () => (
  <svg
    viewBox="0 0 28 28"
    className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-105 transition-transform"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Chat Bubble Silhouette with Tail */}
    <path
      d="M14 4C8.477 4 4 8.029 4 13c0 2.088.786 4.01 2.11 5.545-.25 1.384-.952 2.66-1.855 3.606a.45.45 0 0 0 .35.758c1.908-.1 3.748-.788 5.14-1.694A11.12 11.12 0 0 0 14 22c5.523 0 10-4.029 10-9s-4.477-9-10-9Z"
      fill="#FFFFFF"
    />
    {/* Sleek AI Robot Visor */}
    <rect x="8.25" y="9.75" width="11.5" height="6.5" rx="3.25" fill="#0F172A" />
    {/* Glowing AI Eyes */}
    <circle cx="11.6" cy="12.9" r="1.15" fill="#38BDF8" />
    <circle cx="16.4" cy="12.9" r="1.15" fill="#38BDF8" />
    {/* Subtle Friendly AI Smile */}
    <path
      d="M12.6 14.85c.45.35 2.35.35 2.8 0"
      stroke="#7DD3FC"
      strokeWidth="1.15"
      strokeLinecap="round"
    />
    {/* AI Magic 4-Point Sparkle */}
    <path
      d="M23.2 2.2l.65 1.85 1.85.65-1.85.65-.65 1.85-.65-1.85-1.85-.65 1.85-.65.65-1.85Z"
      fill="#FDE047"
    />
  </svg>
);

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! 👋 I'm **Rahul's AI Assistant** powered by Gemini. Ask me anything about Rahul's work, his role as CTO at Zynetechs, projects, or tech architecture!"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isOpen]);

  const copyMessage = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || loading) return;

    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      const data = await res.json();

      if (data.status === "success" && data.reply) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply }
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              data.message ||
              "Sorry, I encountered an issue. Please try again or reach out directly on WhatsApp!"
          }
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Connection error. Please check your internet connection and try again."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Chat reset! What else would you like to know about Rahul Jangir?"
      }
    ]);
  };

  return (
    <>
      {/* Floating Toggle Button (Bottom-Right) */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[120]">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-primary-600 via-primary-500 to-accent-500 text-white flex items-center justify-center shadow-[0_0_25px_rgba(14,165,233,0.5)] border border-white/20 group focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          aria-label="Toggle AI Assistant"
        >
          {/* Active Ping Glow */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-25" />

          {isOpen ? (
            <X size={24} className="transition-transform group-hover:rotate-90" />
          ) : (
            <AIChatIcon />
          )}

          {/* Floating Pill Badge when closed */}
          {!isOpen && (
            <div className="hidden lg:flex items-center gap-1.5 absolute right-full mr-3 bg-slate-900/95 text-slate-200 border border-primary-500/40 text-xs px-3 py-1.5 rounded-full shadow-xl backdrop-blur-md whitespace-nowrap pointer-events-none group-hover:border-primary-400 transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-slate-100">Ask Rahul AI</span>
            </div>
          )}
        </motion.button>
      </div>

      {/* Dimmed backdrop for high focus on mobile and outside click */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[125] lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`fixed bottom-20 right-4 sm:right-6 md:bottom-24 z-[130] flex flex-col rounded-3xl overflow-hidden border border-primary-500/30 bg-[#090e1a] shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_50px_rgba(14,165,233,0.18)] transition-all duration-300 ${
              isExpanded
                ? "w-[calc(100vw-2rem)] sm:w-[620px] h-[640px] max-h-[calc(100vh-6rem)]"
                : "w-[calc(100vw-2rem)] sm:w-[410px] h-[520px] max-h-[calc(100vh-6.5rem)]"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10 bg-[#0f172a] select-none">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-primary-500 via-primary-600 to-accent-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(14,165,233,0.4)] shrink-0">
                  <Bot size={20} />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-950 rounded-full animate-pulse" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-white truncate tracking-wide">
                      Rahul AI
                    </span>
                    <span className="text-[10px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/40">
                      Gemini
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1.5 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online · Ask about Rahul & Tech
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={handleReset}
                  className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-white/10 rounded-lg transition-colors"
                  title="Reset Conversation"
                  aria-label="Reset Conversation"
                >
                  <RotateCcw size={15} />
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="hidden sm:flex p-1.5 text-slate-400 hover:text-slate-100 hover:bg-white/10 rounded-lg transition-colors"
                  title={isExpanded ? "Collapse View" : "Expand View"}
                  aria-label={isExpanded ? "Collapse View" : "Expand View"}
                >
                  {isExpanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-white/10 rounded-lg transition-colors"
                  title="Close (Esc)"
                  aria-label="Close"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-scroll">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-300 shrink-0 mt-1">
                      <Bot size={15} />
                    </div>
                  )}

                  <div className="flex flex-col gap-1 max-w-[85%]">
                    <div
                      className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-br-none shadow-md"
                          : "bg-[#131b2e] border border-white/10 text-slate-200 rounded-bl-none shadow-sm prose prose-invert prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0.5 prose-strong:text-white prose-a:text-primary-400 prose-code:text-primary-300"
                      }`}
                    >
                      {msg.role === "user" ? (
                        msg.content
                      ) : (
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      )}
                    </div>

                    {msg.role === "assistant" && (
                      <div className="flex items-center justify-between px-1 text-[11px] text-slate-500">
                        <span className="font-mono text-[10px]">Rahul AI</span>
                        <button
                          onClick={() => copyMessage(msg.content, idx)}
                          className="flex items-center gap-1 hover:text-slate-300 transition-colors"
                          title="Copy message"
                        >
                          {copiedIdx === idx ? (
                            <>
                              <Check size={12} className="text-emerald-400" />
                              <span className="text-emerald-400 text-[10px]">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy size={12} />
                              <span className="text-[10px]">Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-lg bg-accent-500/20 border border-accent-500/30 flex items-center justify-center text-accent-300 shrink-0 mt-1">
                      <User size={15} />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Loader */}
              {loading && (
                <div className="flex gap-2.5 justify-start items-center">
                  <div className="w-7 h-7 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-300 shrink-0">
                    <Bot size={15} />
                  </div>
                  <div className="bg-[#131b2e] border border-white/10 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              {/* Quick Prompt Suggestions when conversation is young */}
              {messages.length <= 2 && !loading && (
                <div className="pt-2">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Sparkles size={12} className="text-gold-400" />
                    Quick Questions:
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {SUGGESTED_PROMPTS.map((prompt, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => handleSend(prompt)}
                        className="text-left text-xs bg-white/5 hover:bg-primary-500/15 hover:border-primary-400/50 border border-white/10 text-slate-300 hover:text-white px-3 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between group shadow-sm"
                      >
                        <span className="truncate mr-2">{prompt}</span>
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-primary-400 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-white/10 bg-[#0c1222]/95 backdrop-blur-md">
              <div className="flex items-center gap-2 bg-[#141b2c] border border-white/15 rounded-2xl px-3 py-1.5 transition-all duration-200 focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-500/40 focus-within:shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything about Rahul..."
                  disabled={loading}
                  className="flex-1 bg-transparent border-none text-white text-sm placeholder:text-slate-500 focus:outline-none disabled:opacity-50 pr-1"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || loading}
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0 ${
                    input.trim() && !loading
                      ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-[0_0_12px_rgba(14,165,233,0.5)] hover:scale-105 active:scale-95"
                      : "bg-white/10 text-slate-500 cursor-not-allowed"
                  }`}
                  aria-label="Send Message"
                >
                  <Send size={15} />
                </button>
              </div>

              {/* Keyboard & Branding Footer */}
              <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-slate-400 select-none">
                <span className="flex items-center gap-1 font-mono">
                  <span className="px-1 py-0.2 bg-white/10 rounded text-[9px] text-slate-300">Enter</span> to send · <span className="px-1 py-0.2 bg-white/10 rounded text-[9px] text-slate-300">Esc</span> to close
                </span>
                <span className="text-slate-400">Gemini 3.5</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
