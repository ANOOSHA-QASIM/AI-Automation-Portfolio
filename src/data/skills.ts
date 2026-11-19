import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiOpenai,
  SiFastapi, SiFigma, SiFirebase, SiSanity,
  SiVercel, SiN8N
} from 'react-icons/si';
import { FaHtml5, FaCode, FaBrain, FaGithub, FaGitAlt, FaRobot } from 'react-icons/fa';
import { VscCode } from "react-icons/vsc";

export const skillCategories = [
  {
    title: "AI & Agentic Systems",
    subtitle: "AI-powered applications and agents",
    icon: FaBrain,
    accent: "#14b8a6",
    skills: [
      { name: "Agentic AI Fundamentals", icon: FaRobot },
      { name: "OpenAI Agents SDK", icon: SiOpenai },
      { name: "Prompt & Context Engineering", icon: FaBrain },
      { name: "Claude AI", icon: FaBrain },
      { name: "Gemini AI", icon: FaBrain },
    ]
  },
  {
    title: "Automation & Integrations",
    subtitle: "Workflows and connected services",
    icon: SiN8N,
    accent: "#0ea5e9",
    skills: [
      { name: "n8n Workflow Automation", icon: SiN8N },
      { name: "REST API Integration", icon: FaCode },
      { name: "AI Tool Integrations", icon: SiOpenai },
      { name: "Workflow Design", icon: FaRobot },
    ]
  },
  {
    title: "Development",
    subtitle: "Applications, APIs and developer tools",
    icon: FaCode,
    accent: "#a78bfa",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "TypeScript & JavaScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML & CSS", icon: FaHtml5 },
      { name: "FastAPI (Basic)", icon: SiFastapi },
      { name: "Firebase", icon: SiFirebase },
      { name: "Git & GitHub", icon: FaGithub },
      { name: "Vercel", icon: SiVercel },
    ]
  }
];

export const toolsMarquee = [
  { name: "Git", icon: FaGitAlt, iconColor: "#F05032" },
  { name: "GitHub", icon: FaGithub, iconColor: "#ffffff" },
  { name: "Vercel", icon: SiVercel, iconColor: "#ffffff" },
  { name: "VS Code", icon: VscCode, iconColor: "#007ACC" },
  { name: "n8n", icon: SiN8N, iconColor: "#EA4B71" },
  { name: "Python", icon: SiPython, iconColor: "#3776AB" },
  { name: "OpenAI Agents SDK", icon: SiOpenai, iconColor: "#74aa9c" },
  { name: "Claude", icon: SiOpenai, iconColor: "#D97706" },
  { name: "Gemini", icon: SiOpenai, iconColor: "#8E75A8" },
  { name: "Figma", icon: SiFigma, iconColor: "#F24E1E" },
  { name: "Firebase", icon: SiFirebase, iconColor: "#FFCA28" },
  { name: "Next.js", icon: SiNextdotjs, iconColor: "#ffffff" },
];
