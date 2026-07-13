import { useState } from "react";
import { RESOURCES } from "../data";
import { Search, ChevronDown, ChevronUp, BookOpen, Filter, ArrowRight } from "lucide-react";

export default function ResourcesView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>("ipo-cost");

  const categories = ["All", "Costs", "Regulation", "Timeline", "Strategy"];

  const filteredArticles = RESOURCES.filter(art => {
    const matchesSearch = art.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === "All" || art.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div id="insights-resources-section" className="space-y-10 py-6">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#947D5C]">
          KNOWLEDGE PLATFORM
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#0F172A]">
          IPO Resources & Market Insights
        </h2>
        <p className="text-base text-slate-600 leading-relaxed font-sans">
          Clear, objective guidance on complex regulatory, listing, and budget mechanics. Knowledge is power—learn how PCAOB standards and Delaware holding setups shorten execution times.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-4xl mx-auto bg-[#FDFBF7] rounded-none border border-[#0F172A]/10 p-4 md:p-6 shadow-none flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search costs, S-1, PCAOB, SOX..."
            className="w-full bg-[#F7F4EF] border border-[#0F172A]/10 rounded-none pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:bg-white text-slate-800 font-sans"
          />
        </div>

        {/* Categories row */}
        <div className="flex flex-wrap gap-1.5 justify-center md:justify-end w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-none text-[10px] font-bold uppercase tracking-wider transition duration-150 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#0F172A] text-white shadow-none"
                  : "bg-[#F7F4EF] text-[#0F172A]/70 hover:bg-[#F7F4EF]/90"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Accordion List */}
      <div className="max-w-4xl mx-auto space-y-3">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((art) => {
            const isExpanded = expandedId === art.id;

            return (
              <div 
                key={art.id} 
                className="bg-[#FDFBF7] rounded-none border border-[#0F172A]/10 shadow-none overflow-hidden hover:border-[#0F172A]/30 transition duration-150"
              >
                <button
                  onClick={() => toggleExpand(art.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-none bg-[#0F172A]/5 flex items-center justify-center shrink-0 mt-0.5 text-[#947D5C]">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#0F172A] leading-snug">
                        {art.question}
                      </h4>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[9px] font-mono font-bold uppercase text-[#947D5C] bg-[#947D5C]/10 px-2 py-0.5 rounded-none">
                          {art.category}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          • {art.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-none bg-[#F7F4EF] border border-[#0F172A]/10 flex items-center justify-center shrink-0">
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-[#0F172A]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#0F172A]" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-3 border-t border-[#0F172A]/10 bg-[#F7F4EF]/50 text-left">
                    <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-sans max-w-3xl whitespace-pre-line">
                      {art.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center p-12 bg-[#FDFBF7] rounded-none border border-[#0F172A]/10 space-y-3">
            <p className="text-slate-500 text-sm font-sans">No advisory answers matching your keywords were found.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#947D5C] underline hover:text-slate-800 cursor-pointer"
            >
              Clear Filters & View All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
