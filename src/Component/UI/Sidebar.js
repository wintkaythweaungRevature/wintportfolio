import React from "react";
// ✅ မှန်ကန်သော ပုံစံ
import Sidebar from "./components/Sidebar";
export default function Sidebar({ activeTab, setActiveTab }) {
  const sidebarButtons = [
    { id: "ai", label: "AI Generator 🤖", url: "https://wintaibot.com" },
    { id: "image", label: "Image Generator 🎨", url: "https://wintaibot.com/" },
    { id: "bot", label: "AI Bot 💬", url: "https://wintaibot.com/" }
  ];

  return (
    <div className="w-80 bg-[#000066] text-white fixed h-full flex flex-col items-center p-10 shadow-2xl z-50">
      <img
        src="/images/profile.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-white object-cover mb-6 shadow-2xl"
      />
      <h1 className="text-2xl font-serif italic font-medium text-center tracking-wide text-white">
        Wint Kay Thwe Aung
      </h1>
      <p className="text-xs text-slate-400 mb-10 text-center uppercase tracking-[0.2em] font-medium">
        Full-Stack Developer <br /> AI & Cloud Engineer
      </p>

      <div className="flex flex-col gap-4 w-full">
        {sidebarButtons.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              window.open(tab.url, "_blank", "noopener,noreferrer");
            }}
            className={`py-3 rounded-xl font-bold transition-all duration-300 transform active:scale-95 ${
              activeTab === tab.id
                ? "bg-white text-[#0f172a] shadow-xl translate-x-2"
                : "bg-[#334155] text-white hover:bg-[#475569]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}