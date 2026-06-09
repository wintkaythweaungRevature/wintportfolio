import React from 'react';
import './Experiences.css';

const professionalHistory = [
  {
    role: "Software Engineer | Wint_AI",
    company: "www.wintkaythweaung.com",
    period: "Project",
    achievements: [
      "Built a multi-modal AI application using Spring Tool Suite (STS) and React, integrating OpenAI GPT-4o.",
      "Deployed a scalable cloud environment on AWS (Elastic Beanstalk/EC2) using Cloudflare Tunnels and Nginx.",
      "Engineered automated CI/CD pipelines with GitHub Actions and Docker for containerized deployments."
    ],
    skills: ["React", "Spring Boot", "GPT-4o", "AWS", "Docker", "Cloudflare"]
  },
  {
    role: "Software Engineer",
    company: "Revature, New York",
    period: "April 2022 – August 2023",
    achievements: [
      "Developed scalable software using OOP languages (Java, C#, JavaScript), increasing application reliability[cite: 23].",
      "Managed user access, roles, and permissions to ensure 100% compliance with security policies[cite: 22].",
      "Improved overall team productivity by 20% by delivering timely project support[cite: 19]."
    ],
    skills: ["Java", "C#", "JavaScript", "SQL", "Cloud Architecture"]
  },
  {
    role: "Software Engineer PHP-Intern",
    company: "Conveythis, New York",
    period: "Jan 2022 – Jan 2023",
    achievements: [
      "Designed and tested multilingual WordPress websites using Conveythis and Weglot[cite: 5].",
      "Analyzed system logs and performance issues to ensure optimal application functionality[cite: 7].",
      "Evaluated cross-platform plugin performance between WordPress and Shopify[cite: 8]."
    ],
    skills: ["PHP", "WordPress", "Data Analysis", "Localization"]
  },
  {
    role: "Project Manager",
    company: "Center Piece International",
    period: "Oct 2013 – Mar 2015",
    achievements: [
      "Successfully managed software releases with 98% seamless deployment[cite: 27].",
      "Implemented security strategies that reduced system vulnerabilities by 30%[cite: 26].",
      "Resolved client issues in under 2 hours, boosting customer satisfaction by 25%[cite: 27]."
    ],
    skills: ["Release Management", "Risk Mitigation", "Agile", "JIRA"]
  }
];

const Experiences = () => {
  return (
    <div className="experiences-container">
      <header className="exp-header">
        <h1>Professional Experience</h1>
        <p>A timeline of engineering, project management, and cloud architecture.</p>
      </header>
      
      <div className="timeline">
        {professionalHistory.map((job, index) => (
          <div key={index} className="exp-card">
            <div className="exp-meta">
              <span className="exp-period">{job.period}</span>
              <h2 className="exp-role">{job.role}</h2>
              <h3 className="exp-company">{job.company}</h3>
            </div>
            <ul className="exp-achievements">
              {job.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="exp-tags">
              {job.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;