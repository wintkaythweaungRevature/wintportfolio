import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "./Component/UI/Card";
import "./App.css";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("ai");
  

  const [isModalOpen, setIsModalOpen] = useState(false);

// This function prevents background scrolling when the modal is open
if (typeof document !== 'undefined') {
  document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
}
 const hobbies = 
 [
  { id: 1, src: "/images/intotheforest.jpg", title: "Painting" },
  { id: 2, src: "/images/bluepaint.jpg", title: "Art " },
  { id: 3, src: "/images/roadtrippaint.jpg", title: "Road Trip Painting" },
  
  //... ကျန်တာတွေ ထည့်ပါ
  ];
const videos = [
  { id: 1, src: "https://www.youtube.com/embed/jS_uznSJ4Sk" }, 
  { id: 2, src: " https://www.youtube.com/embed/IftBju-3Ics" }

 
];
  return (
    <div className="flex min-h-screen bg-white">

      {/* LEFT SIDEBAR - Fixed Position */}
      <div className="w-85 bg-[#000066] text-white fixed h-full flex flex-col items-center p-10 shadow-2xl z-50">
  {/* ROUND PROFILE IMAGE */}
  <img
    src="/images/profile.jpg" // ဒီနေရာမှာ နာမည်နဲ့ Extension မှန်ဖို့ လိုပါတယ်။
   alt = "Wint Kay Thwe Aung"
    className="w-40 h-40 rounded-full border-4 border-white object-cover mb-6 shadow-2xl"
  />
  
  <h1 className="text-2xl font-serif italic font-medium text-center tracking-wide text-white">
  Wint Kay Thwe Aung
</h1>
  <p className="text-xs text-slate-400 mb-10 text-center uppercase tracking-[0.2em] font-medium">
    Full-Stack Developer <br /> AI & Cloud Engineer
  </p>

  {/* Hobbies Section */}
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
          <section id="intro" className="text-center py-20 bg-gradient-to-b from-white to-gray-50">
    <h2 className="text-3xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
        Let Me Introduce Myself!  👋
    </h2>
    <p className="max-w-3xl mx-auto text-xl text-gray-700 leading-relaxed font-light">
         I’m <span className="font-bold text-gray-900">Wint Kay Thwe Aung</span> — a full-stack developer and strategic operations specialist dedicated to building scalable, AI-powered systems that drive business growth.
    </p>
    
    <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-relaxed">
        I bridge the gap between <span className="text-indigo-600 font-semibold">technical engineering</span> and <span className="text-indigo-600 font-semibold">executive leadership</span>. Whether I am architecting multi-modal AI applications with Spring Boot or optimizing financial workflows for international chairmen, my focus is always on efficiency, precision, and performance.
    </p>

    <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-relaxed italic">
        "I believe that engineering and entrepreneurship share the same foundation: the ability to see structure within chaos and the drive to build something better."
    </p>
      {/*teach stack row */}{/* Tech Stack Row - Centered */}
      
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"></link>


<div className="mt-12 flex flex-col items-center">
  <div className="flex items-center gap-6 py-4 px-8 bg-white/50 rounded-full shadow-sm border border-gray-100">
    <span className="text-blue-500 font-extrabold text-xs tracking-widest uppercase">
      Tech Stack:
    </span>

    <div className="flex items-center gap-5 text-2xl text-gray-400">
      {/* Muted Icons */}
      <i className="devicon-java-plain hover:text-red-600 transition-colors" title="Java"></i>
      <i className="devicon-spring-plain hover:text-green-500 transition-colors" title="Spring Boot"></i>
      <i className="devicon-python-plain hover:text-blue-400 transition-colors" title="Python"></i>
      <i className="devicon-react-original hover:text-cyan-400 transition-colors" title="React"></i>
      <i className="devicon-csharp-plain hover:text-purple-600 transition-colors" title="C#"></i>
      <i className="devicon-githubactions-plain hover:text-blue-500 transition-colors" title="GitHub Actions"></i>
      <i className="devicon-amazonwebservices-plain-wordmark hover:text-orange-400 transition-colors" title="AWS Hosting"></i>
      <i className="devicon-postgresql-plain hover:text-blue-700 transition-colors" title="PostgreSQL"></i>
      
      {/* Highlighted Docker Logo */}
      <div className="flex items-center justify-center w-9 h-9 bg-[#002438] rounded-full ml-2 shadow-md">
        <i className="devicon-docker-plain text-white text-lg"></i>
      </div>
    </div>
  </div>
</div>

{/* COVER LETTER TRIGGER */}
<div className="mt-8 flex justify-center">
  <button 
    onClick={() => setIsModalOpen(true)}
    className="px-6 py-2 bg-white border border-gray-200 text-[#000066] rounded-full font-bold shadow-sm hover:shadow-md hover:bg-slate-50 transition-all flex items-center gap-2"
  >
    <span className="text-blue-500">📄</span> Read Cover Letter
  </button>
</div>

    <div className="mt-10 flex justify-center gap-4">
        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Software Engineering</span>
        <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Executive Support</span>
        <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Data Analytics</span>
    </div>
<AnimatePresence>
  {isModalOpen && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* 1. Backdrop (Blurred background) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsModalOpen(false)}
        className="absolute inset-0 bg-[#001144]/40 backdrop-blur-md"
      />
      
      {/* 2. Modal Window */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-white rounded-[2.5rem] shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col border border-white/20"
      >
        {/* Header - Navy Gradient */}
        <div className="p-6 bg-gradient-to-r from-[#000066] to-[#001144] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">📝</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Professional Cover Letter</h3>
          </div>
          <button 
            onClick={() => setIsModalOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-red-500 transition-colors"
          >
            &times;
          </button>
        </div>

        {/* Body - Clean Paper Style */}
        <div className="p-10 overflow-y-auto text-left text-gray-700 leading-relaxed space-y-6 scrollbar-hide text-sm sm:text-base">
          <div className="border-l-4 border-blue-600 pl-4 py-1 italic text-gray-500">
            Attn: Hiring Manager / International Chairman
          </div>

          <p>Dear Hiring Manager,</p>
          
          <p>
            With a solid foundation in <strong>Java</strong>, the <strong>.NET Framework</strong>, and <strong>JavaScript</strong>, combined with hands-on experience in architecting secure, scalable cloud applications, I am eager to contribute to the high-quality technology systems your team provides.
          </p>
          
          <p>
            Throughout my career, I have demonstrated the ability to lead end-to-end development lifecycles. Most recently, I developed my professional portfolio and <strong>Wint_AI</strong>, a multi-modal application where I architected <strong>Cloudflare Tunnel-based routing</strong> to enable secure, encrypted communication. My technical background includes building applications with <strong>Spring Tool Suite</strong> and <strong>React</strong>, while engineering automated <strong>CI/CD pipelines</strong> using <strong>GitHub Actions</strong>, <strong>Docker</strong>, and <strong>AWS</strong> to ensure consistent, containerized deployments.
          </p>

          <p>
            During my time at a specialized technology consulting firm, I focused on delivering robust enterprise solutions while collaborating closely with cross-functional teams. I am well-versed in designing scalable software using <strong>C#</strong>, <strong>Java</strong>, and <strong>JavaScript</strong>, increasing application reliability through modern <strong>Object-Oriented Programming (OOP)</strong> principles. My experience also extends to deploying scalable cloud environments on <strong>AWS (Elastic Beanstalk and EC2)</strong> and utilizing <strong>Nginx</strong> for secure traffic routing.
          </p>

          <p>
            Furthermore, I am highly skilled in the Microsoft ecosystem, including <strong>Dynamics CRM 365</strong>, <strong>PowerBI</strong>, and <strong>MS-SQL</strong>, which allows me to provide comprehensive support for reporting systems and business intelligence solutions. I pride myself on writing clean, maintainable code and managing system security through careful access and role management—qualities I believe are essential for your production environment.
          </p>

          <p>
            I am currently planning to pursue a <strong>Master’s degree in Computer Science</strong> as a part-time student and am looking for a professional environment where I can grow as an engineer while adding immediate value to your team.
          </p>

          <p>
            Thank you for your time and consideration. I would welcome the opportunity to discuss how my technical skills in <strong>.NET</strong> and <strong>cloud architecture</strong> can support your firm’s digital infrastructure.
          </p>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Sincerely,</p>
            <p className="text-2xl font-serif text-[#000066] mt-2" style={{ fontFamily: "'Satisfy', cursive" }}>Wint Kay Thwe Aung</p>
          
          </div> 
          <img
    src="/images/profile.jpg" // ဒီနေရာမှာ နာမည်နဲ့ Extension မှန်ဖို့ လိုပါတယ်။
   alt = "Wint Kay Thwe Aung"
    className="w-40 h-40 rounded-full border-4 border-white object-cover shadow-2xl mb-0"
  />

        </div>

        {/* Footer - Actions */}
        <div className="p-6 border-t bg-gray-50 flex justify-end gap-4">
          <button 
            onClick={() => setIsModalOpen(false)}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
          <a 
            href="/CV_WintKayThweAung.pdf" 
            download
            className="px-6 py-2 bg-[#000066] text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Download PDF
          </a>
        </div>
      </motion.div>
    </div>
  )}
</AnimatePresence>
    
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
            {/* teach stack */}
            <div>

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
          <h4 className="font-bold">BA English - Yangon University </h4>
           <h4 className="font-bold">IADCS - Greenwhich University </h4>
          <p className="text-sm text-gray-500">Focus on AI & Software Engineering</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#000066] border-b-2 border-blue-100 pb-2">Experiences In Tech 💻</h3>
        <div>
          <h4 className="font-bold">Software Engineer </h4>
                  
          <p className="text-sm font-bold text-gray-500">Revature | Conveythis</p>
          <p className="text-sm text-gray-500">Spring Boot |.MVC | D365 | React | AWS Deployment</p>
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
<section id="hobbies" className="space-y-12">
  <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tight">Creative Expressions 🎨</h2>

  {/* Image Hobbies Grid */}
  <div className="grid md:grid-cols-3 gap-8">
    {hobbies.map((hobby) => (
      <div key={hobby.id} className="group relative rounded-[2rem] overflow-hidden shadow-xl aspect-square bg-slate-100">
        <img
          src={hobby.src}
          alt={hobby.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white font-bold text-xl">{hobby.title}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Video Hobbies Grid */}
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
</section>

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
    <a href="https://github.com/wintkaythweaungRevature" target="_blank" rel="noreferrer">
      <Github className="cursor-pointer hover:text-blue-600 transition" size={30} />
    </a>
    
    <a href="https://www.linkedin.com/in/wint-kay-thwe-aung-0793451b5/" target="_blank" rel="noreferrer">
      <Linkedin className="cursor-pointer hover:text-blue-600 transition" size={30} />
    </a>
    
    <a href="mailto:ms.wintkaythweaung@gmail.com">
      <Mail className="cursor-pointer hover:text-blue-600 transition" size={30} />
    </a>
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