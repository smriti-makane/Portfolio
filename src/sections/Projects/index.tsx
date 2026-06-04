import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  summary: string;
  tech: string[];
  github: string;
  live: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "ParkYourLot",
      description:
        "Built an AI-powered parking management system using YOLO, OpenCV, Flask, and SQL that automates vehicle detection and parking allocation, achieving 90% detection accuracy and significantly improving parking efficiency through intelligent automation.",
      summary: `🚗 ParkYourLot – Smart Vehicle Detection & Parking Allocation System
      
      📌 Project Overview
      ParkYourLot is an AI-powered smart parking management system that automates vehicle detection, parking slot monitoring, and intelligent slot allocation using Computer Vision and Machine Learning.
      
      🎯 Problem Solved
      • Drivers waste time searching for parking spaces
      • Parking management relies on manual supervision.
      • Sensor-based systems are expensive.
      • Inefficient parking utilization.
      
      ✨ Features
      🚘 Real-Time Vehicle Detection
      • YOLO-based vehicle detection
      • Live CCTV processing
      • Confidence-based predictions
      
      🅿️ Smart Slot Occupancy Detection
      • Available
      • Occupied
      • Assigned
      
      ⚡ Automated Slot Allocation
      • Optimal slot assignment
      • Reduced search time
      • Improved parking utilization
      
      📊 Dashboard
      • Real-time monitoring
      • Occupancy analytics
      
      🏆 Achievements
      • 90% Vehicle Detection Accuracy
      • 95% Occupancy Accuracy
      • <1 Second Latency
      • 40–50% Reduction in Search Time
      • 25–35% Improvement in Utilization
      
      🛠 Tech Stack
      YOLOv8
      OpenCV
      Python
      Flask
      REST API
      SQL
      React
      
      🚀 Future Scope
      • Mobile App
      • ANPR
      • Cloud Deployment
      • Smart Navigation
      • IoT Integration
     `,
      tech: ["YOLO", "OpenCV", "Flask", "SQL", "React"],
      github: "https://github.com/smriti-makane/ParkingAllocation",
      live: "https://parking-allocation-ten.vercel.app/",
    },
    {
      title: "Unique Minds Connect",
      description:
        "Developed an AI-powered learning platform for neurodiverse students that integrates emotion recognition and adaptive learning, achieving 90% emotion detection accuracy while reducing manual intervention by 40% and improving personalized learning outcomes.",
      summary: `🧠 Unique Minds Connect
      
      📌 Project Overview
      Unique Minds Connect is an AI-powered learning platform designed for neurodiverse students that leverages emotion recognition and adaptive learning to provide personalized educational experiences.
      
      🎯 Problem Solved
      • Lack of personalized learning support
      • Difficulty tracking emotional engagement
      • High dependency on manual learning assistance
      • Limited adaptive learning systems

      ✨ Features
      • Emotion Detection using DeepFace
      • Adaptive Learning Recommendations
      • Personalized Learning Paths
      • Student Progress Tracking
      • AI-powered Learning Support
      • Interactive Learning Activities
      
      🏆 Achievements
      • 90% Emotion Detection Accuracy
      • 40% Reduction in Manual Intervention
      • Improved Student Engagement
      • Enhanced Personalized Learning Outcomes

      🛠 Tech Stack
      TensorFlow
      DeepFace
      OpenCV
      Flask
      Python
      Machine Learning
      Computer Vision
    
      🚀 Future Scope
      • Voice-based Learning Assistant
      • Cloud Deployment
      • Mobile Application
      • Advanced Emotion Analytics
      • AI-powered Student Performance Prediction`,
      tech: ["TensorFlow", "DeepFace", "OpenCV", "Flask"],
      github: "https://github.com/smriti-makane/Unique-Minds-Connects",
      live: "",
    },
    {
      title: "CyberSense",
      description:
        "Engineered an AI-based cybersecurity monitoring platform capable of detecting anomalies and analyzing threats in real time, achieving 92% threat detection efficiency and enhancing proactive security operations through intelligent automation.",
      summary: `💡CyberSense

      📌 Project Overview
      CyberSense is an AI-powered cybersecurity monitoring platform designed to detect anomalies, analyze threats, and strengthen digital security through intelligent automation and real-time threat monitoring.
      
      🎯 Problem Solved
      • Delayed threat detection and response
      • Growing cybersecurity risks
      • Lack of proactive monitoring systems
      • Inefficient threat analysis workflows
      • Limited real-time security visibility
      
      ✨ Features
      🔍 Threat Detection
      • AI-powered anomaly detection
      • Suspicious activity monitoring
      • Intelligent threat analysis
      
      🌐 URL Intelligence Analysis
      • Malicious URL detection
      • Risk assessment and monitoring
      • Threat categorization
      
      📊 Security Monitoring Dashboard
      • Real-time threat visualization
      • Security analytics and reporting
      • Activity monitoring
      
      ⚡ Intelligent Automation
      • Automated threat identification
      • Faster security response
      • Reduced manual monitoring efforts
      
      🏆 Achievements
      • 92% Threat Detection Efficiency
      • Faster Threat Identification
      • Improved Security Monitoring
      • Enhanced Incident Response
      • Strengthened Proactive Cyber Defense
      
      🛠 Tech Stack
      Python
      Flask
      JavaScript
      Artificial Intelligence
      Machine Learning
      
      🚀 Future Scope
      • SIEM Integration
      • Cloud Security Monitoring
      • Threat Prediction Models
      • Advanced Malware Detection
      • AI-powered Security Analytics`,
      tech: ["Python", "Flask", "JavaScript", "AI"],
      github: "https://github.com/smriti-makane/CyberSense",
      live: "",
    },
  ];

  const getIcon = (tech: string) => {
    switch (tech) {
      case "YOLO":
        return "🎯";
      case "OpenCV":
        return "👁️";
      case "Flask":
        return "⚗️";
      case "SQL":
        return "🗄️";
      case "React":
        return "⚛️";
      case "TensorFlow":
        return "🧠";
      case "DeepFace":
        return "😊";
      case "Python":
        return "🐍";
      case "JavaScript":
        return "📜";
      case "AI":
        return "🤖";
      default:
        return "🚀";
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 text-white px-8 py-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          style={{ fontFamily: "Times New Roman, serif" }}
          className="text-7xl font-bold text-center mb-16 text-purple-300 [text-shadow:3px_3px_0px_rgba(88,28,135,0.8),6px_6px_12px_rgba(0,0,0,0.5)]"
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              style={{ fontFamily: "'Times New Roman', serif" }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 border border-purple-500/20 rounded-3xl p-8 shadow-lg hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition duration-300"
            >
              <h3
                onClick={() => setSelectedProject(project)}
                style={{ fontFamily: "'Times New Roman', serif" }}
                className="text-3xl font-bold text-violet-400 cursor-pointer hover:text-fuchsia-400 transition"
              >
                {project.title}
              </h3>

              <p
                style={{ fontFamily: "'Times New Roman', serif" }}
                className="text-slate-300 mt-6 leading-8 text-xl"
              >
                {project.description}
              </p>

              <h4
                style={{ fontFamily: "'Times New Roman', serif" }}
                className="text-purple-400 font-semibold mt-8 mb-4 uppercase tracking-wider"
              >
                Tech Stack
              </h4>

              <div className="flex flex-wrap items-center gap-3">
                {project.tech.map((item) => (
                  <div
                    key={`${project.title}-${item}`}
                    className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/20 hover:bg-purple-500/30 transition"
                  >
                    <span className="text-lg">{getIcon(item)}</span>
                    <span style={{ fontFamily: "'Times New Roman', serif" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-slate-900 border border-purple-500 rounded-3xl p-8 w-[80%] max-w-5xl max-h-[85vh] overflow-y-auto mx-auto">
              <h2 className="text-4xl font-bold text-violet-400 mb-6 text-center">
                {selectedProject.title}
              </h2>

              <div className="text-slate-300 whitespace-pre-line leading-8">
                {selectedProject.summary}
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-purple-600 px-6 py-3 rounded-xl text-white hover:bg-purple-500 transition"
                  >
                    GitHub
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-fuchsia-600 px-6 py-3 rounded-xl text-white hover:bg-fuchsia-500 transition"
                  >
                    Live Demo
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-slate-800 px-6 py-3 rounded-xl text-white hover:bg-slate-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

