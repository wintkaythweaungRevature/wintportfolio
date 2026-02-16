import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "./Component/UI/Card";
import "./App.css";




export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("ai");
// const hobbies = [
 // { id: 1, src: "/images/1.jpg", title: "Painting" },
 // { id: 2, src: "/images/bluepaint.jpg", title: "Art " },
 // { id: 3, src: "/images/roadtrippaint.jpg", title: "Road Trip Painting" },
  // ... ကျန်တာတွေ ထည့်ပါ];
const videos = [
  { id: 1, src: "https://www.youtube.com/embed/jS_uznSJ4Sk" }, 
  { id: 2, src: " https://www.youtube.com/embed/IftBju-3Ics" }

 
];
  return (
    <div className="flex min-h-screen bg-white">

      {/* LEFT SIDEBAR - Fixed Position */}
      <div className="w-80 bg-[#000066] text-white fixed h-full flex flex-col items-center p-10 shadow-2xl z-50">
  {/* ROUND PROFILE IMAGE */}
  <img
    src="/Images/profile.jpg" // ဒီနေရာမှာ နာမည်နဲ့ Extension မှန်ဖို့ လိုပါတယ်။
   alt = "Wint Kay Thwe Aung"
    className="w-40 h-40 rounded-full border-4 border-white object-cover mb-6 shadow-2xl"
  />
  
  <h1 className="text-2xl font-serif italic font-medium text-center tracking-wide text-white">
  Wint Kay Thwe Aung
</h1>
  <p className="text-xs text-slate-400 mb-10 text-center uppercase tracking-[0.2em] font-medium">
    Full-Stack Developer <br /> AI & Cloud Engineer
  </p>

  {/* SIDEBAR BUTTONS */}
  {/* SIDEBAR BUTTONS */}
<div className="flex flex-col gap-4 w-full">
  {[
    { id: "ai", label: "AI Generator 🤖", url: "https://wintaibot.com" },
    { id: "image", label: "Image Generator 🎨", url: "https://wintaibot.com/" },
    { id: "bot", label: "AI Bot 💬", url: "https://wintaibot.com/" }
  ].map((tab) => (
    <button
      key={tab.id}
      onClick={() => {
        setActiveTab(tab.id);
        // Link အသစ်ကို Tab အသစ်မှာ ဖွင့်ပေးမှာပါ
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

      {/* RIGHT SIDE - Scrollable Content */}
<div className="flex-1 ml-80 bg-white">
  
  {/* NAME HEADER SECTION */}
  <div className="px-12 pt-10 flex items-baseline gap-4">
   <h3 className="text-7xl text-[#001144] leading-none tracking-normal" 
      style={{ fontFamily: "'Satisfy', cursive" }}>
    Wint Kay Thwe Aung
  </h3>
    
    {/* MUSIC STAFF LINES */}
<div className="mt-10 flex flex-col gap-[3px] opacity-60 group cursor-pointer">
  {/* မျဉ်းကြောင်း ၅ ကြောင်း */}
  {[...Array(5)].map((_, i) => (
    <div key={i} className="h-[1px] w-32 bg-[#001144]"></div>
  ))}
  
  {/* Music Note Icon - မျဉ်းကြောင်းပေါ်မှာ တင်ထားတဲ့ပုံစံ */}
  <div className="relative">
    <span className="absolute -top-8 left-10 text-[#001144] text-2xl animate-bounce">
      ♪
    </span>
    <span className="absolute -top-10 left-20 text-[#001144] text-xl animate-pulse">
      ♫
    </span>
  </div>
</div>
  
    <span className="w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
  </div>

  <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md w-full flex justify-end gap-6 px-12 py-6 border-b font-bold text-xs uppercase tracking-widest">
    {[    
      { id: "intro", label: "Introduction" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "cv", label: "CV" },
      { id: "hobbies", label: "Hobbies" }
    ].map((link) => (
      <a
        key={link.id}
        href={`#${link.id}`}
        className="px-5 py-2.5 rounded-full bg-[#000066] text-white hover:bg-[#1e293b] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-center min-w-[110px]"
      >
        {link.label}
      </a>
    ))}
  </nav>

        <div className="p-12 space-y-32 max-w-6xl mx-auto">

          {/* INTRODUCTION SECTION */}
          <section id="intro" className="text-center py-20">
            <h2 className="text-5xl font-black mb-8">Introduction 👋</h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
             Hi, I’m Wint Kay Thwe Aung — a Computer Science student and full-stack developer passionate about building scalable, AI-powered applications.

I specialize in backend engineering with Spring Boot, frontend development with React, and cloud deployment on AWS. I enjoy designing clean APIs, automating workflows, and turning complex ideas into production-ready systems.

Beyond technology, I’m deeply interested in art, music, films, and creative expression. I believe creativity and engineering share the same foundation — structure, imagination, and constant experimentation.

I’m a lifelong learner who’s always exploring something new — whether it’s a new framework, a different language, a piece of music, or even discovering new latte flavors that spark inspiration ☕.

Curiosity drives everything I do.
            </p>
          </section>

          {/* SKILLS SECTION */}
          <section id="skills">
            <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tight">Technical Arsenal 🚀</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Java / Spring Boot ☕", "React / Next.js ⚛️", "AI Integration 🤖",
                "AWS / Docker ☁️", "Cloud Security 🔐", "Database Design 🗄️"
              ].map((skill, i) => (
                <Card key={i}><CardContent>{skill}</CardContent></Card>
              ))}
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects">
            <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tight">Selected Works 💼</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                "AI Automation Platform 🤖", "Secure Cloud Deployment ☁️",
                "Portfolio AI Chatbot 💬", "Workflow Automation Engine ⚙️"
              ].map((project, i) => (
                <Card key={i}><CardContent>{project}</CardContent></Card>
              ))}
            </div>
          </section>

        
       {/* CV SECTION */}
<section id="cv" className="py-20 px-10 bg-slate-50 rounded-[3rem] shadow-inner">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-5xl font-black mb-4">Curriculum Vitae 📄</h2>
    <p className="text-[#001144]/60 text-lg mb-12 italic">Architecting digital solutions with passion and precision.</p>

    {/* TIMELINE PREVIEW */}
    <div className="grid md:grid-cols-2 gap-10 text-left mb-16">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#000066] border-b-2 border-blue-100 pb-2">Education 🎓</h3>
        <div>
          <h4 className="font-bold">Computer Science Student</h4>
          <p className="text-sm text-gray-500">Focus on AI & Software Engineering</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#000066] border-b-2 border-blue-100 pb-2">Experience 💻</h3>
        <div>
          <h4 className="font-bold">Full-Stack Developer</h4>
          <p className="text-sm text-gray-500">Spring Boot | React | AWS Deployment</p>
        </div>
      </div>
    </div>

    {/* DOWNLOAD BUTTON */}
    <a 
      href="/CV_WintKayThweAung.pdf" 
      download="Wint_Kay_Thwe_Aung_CV.pdf"
      className="inline-block bg-[#000066] text-white px-12 py-5 rounded-full font-black text-lg hover:bg-[#1e293b] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
    >
      <span className="flex items-center gap-3">
        Download Full CV 
        <motion.span 
          animate={{ y: [0, 5, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ⬇️
        </motion.span>
      </span>
    </a>
  </div>
</section>

{/* HOBBIES SECTION */}
         
          <div className="grid md:grid-cols-2 gap-8">
  {videos.map((video) => (
    <div key={video.id} className="rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-video">
      <iframe
        className="w-full h-full"
        src={video.src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  ))}
</div>

          {/* AI INTERACTIVE SECTION */}
          <section className="py-20 border-t-2 border-slate-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-4xl mx-auto"
              >
                {activeTab === "ai" && (
                  <div className="text-center space-y-8">
                    <h2 className="text-4xl font-black">AI Text Engine 🤖</h2>
                    <textarea className="w-full border-2 border-slate-100 rounded-[2rem] p-8 h-48 focus:ring-4 focus:ring-blue-50 shadow-inner outline-none text-lg" placeholder="Ask anything about Spring Boot or Cloud..." />
                    <button className="bg-[#0f172a] text-white px-10 py-4 rounded-full font-bold shadow-xl">Execute Generation</button>
                  </div>
                )}
                {/* Image & Bot Tabs follow the same pattern... */}
                {activeTab === "image" && <div className="text-center h-64">Image Gen Module Loading...</div>}
                {activeTab === "bot" && <div className="text-center h-64 font-mono">Chat System Initialized...</div>}
              </motion.div>
            </AnimatePresence>
          </section>

          {/* FOOTER */}
          <footer className="text-center border-t border-slate-100 pt-20 pb-10">
            <div className="flex justify-center gap-10 mb-8">
              <Github className="cursor-pointer hover:text-blue-600 transition" size={30} />
              <Linkedin className="cursor-pointer hover:text-blue-600 transition" size={30} />
              <Mail className="cursor-pointer hover:text-blue-600 transition" size={30} />
            </div>
            <p className="text-xs font-bold tracking-[0.4em] text-gray-400 uppercase">
              © {new Date().getFullYear()} Wint Kay Thwe Aung • Crafted with React
            </p>
          </footer>

        </div>
      </div>
    </div>
  );
}