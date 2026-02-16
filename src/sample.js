import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("ai");

  return (
    <div className="flex min-h-screen font-sans">

      {/* LEFT SIDEBAR */}
      <div className="w-80 bg-[#0a1f44] text-white fixed h-full flex flex-col items-center p-10 shadow-2xl">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-36 h-36 rounded-full border-4 border-white object-cover mb-6 shadow-xl"
        />
        <h1 className="text-lg font-semibold text-center">Wint Kay Thwe Aung</h1>
        <p className="text-sm text-gray-300 mb-10 text-center">
          Full-Stack Developer <br /> AI & Cloud Engineer
        </p>

        <div className="flex flex-col gap-4 w-full">
          {[
            { id: "ai", label: "AI Generator 🤖" },
            { id: "image", label: "Image Generator 🎨" },
            { id: "bot", label: "AI Bot 💬" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 rounded-xl font-medium transition ${
                activeTab === tab.id
                  ? "bg-white text-[#0a1f44]"
                  : "bg-[#142b5c] text-white hover:bg-[#1c3a78]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 ml-80 bg-white text-[#0a1f44]">

        {/* TOP NAVIGATION */}
        <div className="w-full flex justify-end gap-8 px-12 py-6 border-b font-semibold text-lg">
          <a href="#intro" className="hover:text-blue-600 transition">Introduction</a>
          <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#cv" className="hover:text-blue-600 transition">CV</a>
          <a href="#funfact" className="hover:text-blue-600 transition">Fun Facts</a>
        </div>

        <div className="p-12 space-y-24">

          {/* INTRODUCTION */}
          <section id="intro" className="text-center">
            <h2 className="text-4xl font-bold mb-6">Introduction 👋</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              I'm Wint Kay Thwe Aung, a passionate Full‑Stack Developer and AI Engineer.
              I love building scalable systems, integrating AI solutions, and creating
              professional, interactive web experiences.
            </p>
          </section>

          {/* SKILLS */}
          <section id="skills">
            <h2 className="text-4xl font-bold text-center mb-12">Skills 🚀</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                "Java / Spring Boot ☕",
                "React / Next.js ⚛️",
                "AI Integration 🤖",
                "AWS / Docker ☁️",
                "Cloud Security 🔐",
                "Database Design 🗄️"
              ].map((skill, i) => (
                <Card key={i} className="rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition">
                  <CardContent className="p-6 text-center font-medium">
                    {skill}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects">
            <h2 className="text-4xl font-bold text-center mb-12">Projects 💼</h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {[
                "AI Automation Platform 🤖",
                "Secure Cloud Deployment ☁️",
                "Portfolio AI Chatbot 💬",
                "Workflow Automation Engine ⚙️"
              ].map((project, i) => (
                <Card key={i} className="rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition">
                  <CardContent className="p-6 text-center font-medium">
                    {project}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CV */}
          <section id="cv" className="text-center">
            <h2 className="text-4xl font-bold mb-6">Curriculum Vitae 📄</h2>
            <p className="text-gray-600 mb-6">Download my professional CV below.</p>
            <button className="bg-[#0a1f44] text-white px-8 py-3 rounded-full hover:scale-105 transition">
              Download CV
            </button>
          </section>

          {/* HOBBIES */}
          <section id="hobbies" className="text-center">
            <h2 className="text-4xl font-bold mb-10">Hobbies 🎨🎶🏀</h2>

            {/* HOBBY TEXT */}
            <div className="max-w-3xl mx-auto text-gray-600 space-y-3 mb-12">
              <p>Playing Guitar 🎸 & Piano 🎹</p>
              <p>Singing 🎤</p>
              <p>Photography 📸 & Painting 🎨</p>
              <p>Basketball 🏀, Tennis 🎾 & Skateboarding 🛹</p>
            </div>

            {/* PHOTO GRID */}
            <h3 className="text-2xl font-semibold mb-6">My Photos 📸</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
              {[1,2,3,4,5,6].map((item) => (
                <div key={item} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                  <img
                    src={`/images/hobby${item}.jpg`}
                    alt="Hobby"
                    className="w-full h-60 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* VIDEO SECTION */}
            <h3 className="text-2xl font-semibold mb-6">My Videos 🎬</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <video controls className="w-full h-72 object-cover">
                  <source src="/videos/video1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <video controls className="w-full h-72 object-cover">
                  <source src="/videos/video2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </section>

          {/* FUN FACTS */}
          <section id="funfact" className="text-center">
            <h2 className="text-4xl font-bold mb-6">Fun Facts 🎉</h2>
            <div className="max-w-3xl mx-auto text-gray-600 space-y-3">
              <p>I combine music, sports and technology creatively.</p>
              <p>I enjoy building AI systems that feel human.</p>
              <p>Creativity + Engineering = My Life Philosophy ✨</p>
            </div>
          </section>

          {/* AI TOOLS SECTION */}
          <section className="pt-20 border-t">
            {activeTab === "ai" && (
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold">AI Text Generator 🤖</h2>
                <textarea className="w-full max-w-3xl border rounded-xl p-4 h-40" placeholder="Enter your prompt..." />
                <div>
                  <button className="bg-[#0a1f44] text-white px-6 py-3 rounded-full">
                    Generate
                  </button>
                </div>
              </div>
            )}

            {activeTab === "image" && (
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold">AI Image Generator 🎨</h2>
                <input className="w-full max-w-3xl border rounded-xl p-4" placeholder="Describe image..." />
                <div>
                  <button className="bg-[#0a1f44] text-white px-6 py-3 rounded-full">
                    Generate Image
                  </button>
                </div>
              </div>
            )}

            {activeTab === "bot" && (
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold">AI Chat Bot 💬</h2>
                <div className="border rounded-xl p-6 max-w-3xl mx-auto h-60 bg-gray-50">
                  Chat UI Here...
                </div>
              </div>
            )}
          </section>

          {/* FOOTER */}
          <div className="text-center text-gray-500 pt-20">
            <div className="flex justify-center gap-6 mb-4">
              <Github size={28} />
              <Linkedin size={28} />
              <Mail size={28} />
            </div>
            © {new Date().getFullYear()} Wint Kay Thwe Aung
          </div>

        </div>
      </div>
    </div>
  );
}
