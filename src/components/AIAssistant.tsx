import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot, User, RefreshCw, HelpCircle } from "lucide-react";
import { ChatMessage } from "../types";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Welcome to Prescient Crossborder. I am your AI IPO Advisor. I can assist you with your queries regarding listing requirements (NASDAQ, NYSE, TSX, LSE, HKEX), accounting standards (PCAOB Audits, GAAP/IFRS), corporate governance structures (Delaware holdings, SOX), pre-IPO capital markets, or cross-border dual-listings. What phase of the IPO journey are you currently evaluating?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    "What are PCAOB audits?",
    "How much does an IPO cost?",
    "NYSE vs NASDAQ for Biotech",
    "What is SOX compliance?"
  ];

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: "msg-" + Date.now(),
      role: "user",
      content: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      const chatHistory = [...messages, userMsg].map(m => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch("/api/advisor/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages: chatHistory })
      });

      if (!res.ok) {
        throw new Error("Failed to contact chat endpoint");
      }

      const data = await res.json();
      
      const assistantMsg: ChatMessage = {
        id: "msg-" + Date.now() + "-reply",
        role: "assistant",
        content: data.content || "I experienced an error compiling my advisory insights.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Chatbot error:", err);
      setMessages(prev => [
        ...prev,
        {
          id: "msg-err-" + Date.now(),
          role: "assistant",
          content: "I apologize. I am temporarily experiencing connection friction. Please verify your GEMINI_API_KEY settings or try again. In the meantime, you can complete our IPO Readiness Scorecard for customized offline diagnostics.",
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: "Chat history refreshed. I am ready to guide you regarding cross-border corporate structure, PCAOB accounting, SOX frameworks, and secondary public offerings. Ask me any listing-related query.",
        timestamp: new Date()
      }
    ]);
  };

  return (
    <>
      {/* Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          id="ai-assistant-trigger"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-[#0F172A] text-white px-5 py-4 rounded-none shadow-2xl border border-[#0F172A]/15 hover:bg-[#1E293B] cursor-pointer"
        >
          {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5 text-[#947D5C]" />}
          {!isOpen && (
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest pr-1 hidden md:inline">
              AI IPO Advisor
            </span>
          )}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-assistant-window"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 w-11/12 sm:w-96 md:w-[420px] h-[550px] bg-[#FDFBF7] rounded-none shadow-2xl border border-[#0F172A]/15 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0F172A] text-white p-4 flex items-center justify-between border-b border-[#0F172A]/15">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-none bg-[#FDFBF7]/5 border border-white/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#947D5C]" />
                </div>
                <div className="text-left">
                  <h4 className="font-serif font-bold text-sm tracking-tight text-white">Prescient AI IPO Advisor</h4>
                  <p className="text-[9px] text-slate-400 flex items-center gap-1 font-mono uppercase tracking-wider mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-none bg-[#947D5C] animate-pulse"></span>
                    Interactive Advisor Mode
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={clearChat}
                  title="Clear Chat"
                  className="p-1.5 hover:bg-white/5 rounded-none text-slate-400 hover:text-white transition cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/5 rounded-none text-slate-400 hover:text-white transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F7F4EF]/40">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`w-7 h-7 rounded-none flex items-center justify-center text-[10px] font-mono shrink-0 ${
                      msg.role === "user" ? "bg-[#0F172A] text-white" : "bg-[#F7F4EF] border border-[#0F172A]/10 text-slate-800"
                    }`}>
                      {msg.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5 text-[#947D5C]" />}
                    </div>
                    <div className="text-left">
                      <div className={`p-3 rounded-none text-xs leading-relaxed font-sans shadow-none border ${
                        msg.role === "user" 
                          ? "bg-[#0F172A] text-white border-[#0F172A]" 
                          : "bg-[#FDFBF7] text-slate-800 border-[#0F172A]/10"
                      }`}>
                        <p className="whitespace-pre-line">{msg.content}</p>
                      </div>
                      <span className="text-[8px] text-slate-400 block mt-1 ml-1 font-mono">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[85%]">
                    <div className="w-7 h-7 rounded-none bg-[#F7F4EF] border border-[#0F172A]/10 text-slate-800 flex items-center justify-center text-xs shrink-0">
                      <Bot className="w-3.5 h-3.5 text-[#947D5C] animate-spin" />
                    </div>
                    <div className="p-3 bg-[#FDFBF7] border border-[#0F172A]/10 rounded-none shadow-none text-xs text-slate-500 flex items-center gap-2 text-left font-sans">
                      <span>Analyzing capital parameters...</span>
                      <span className="flex gap-1">
                        <span className="w-1 h-1 bg-[#947D5C] animate-bounce" style={{ animationDelay: "0ms" }}></span>
                        <span className="w-1 h-1 bg-[#947D5C] animate-bounce" style={{ animationDelay: "150ms" }}></span>
                        <span className="w-1 h-1 bg-[#947D5C] animate-bounce" style={{ animationDelay: "300ms" }}></span>
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions & Input */}
            <div className="p-3 bg-[#FDFBF7] border-t border-[#0F172A]/10 space-y-2">
              {messages.length === 1 && !isLoading && (
                <div className="flex flex-wrap gap-1.5 py-1 justify-start">
                  {suggestedPrompts.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(p)}
                      className="text-[10px] bg-[#F7F4EF] hover:bg-[#F7F4EF]/80 text-[#0F172A]/80 px-2.5 py-1.5 rounded-none border border-[#0F172A]/10 font-sans font-medium transition cursor-pointer"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about SEC filings, SOX, NASDAQ rules..."
                  className="flex-1 bg-[#F7F4EF] border border-[#0F172A]/10 rounded-none px-3 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#947D5C] focus:bg-white text-[#0F172A] font-sans"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-[#0F172A] text-white p-2.5 rounded-none hover:bg-[#1E293B] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center shrink-0"
                >
                  <Send className="w-4 h-4 text-[#947D5C]" />
                </button>
              </form>
              <p className="text-[9px] text-slate-400 text-center font-sans">
                Prescient AI Advisor is for initial guidance. Formal engagements require legal and PCAOB sign-off.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
