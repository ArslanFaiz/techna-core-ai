import { FaChartLine, FaCloud, FaLaptopCode, FaMobileAlt, FaRocket, FaShieldAlt } from "react-icons/fa";

export const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We design high-performing, responsive websites that look great on every device and drive results. Our AI-powered tools personalize user experiences, optimize SEO automatically, and track visitor behavior in real-time.",
    features: ["AI-driven SEO", "Smart lead capture forms", "Dynamic content personalization"],
  },
  {
    id: 2,
    title: "Web Applications",
    description:
      "From SaaS platforms to enterprise dashboards, our web apps are built for performance and intelligence. We integrate predictive analytics, automation, and real-time data visualization so your app works as a decision-making hub.",
    features: ["Predictive trend analysis", "AI workflow automation", "Data-driven UX optimization"],
  },
  {
    id: 3,
    title: "Software Solutions",
    description:
      "We build custom AI-powered software to solve your biggest challenges — whether it’s NLP for document processing, computer vision for image recognition, or recommendation engines for sales growth.",
    features: ["Natural language processing", "Computer vision & object detection", "Recommendation engines"],
  },
  {
    id: 4,
    title: "Support & Optimization",
    description:
      "We don’t just launch your product — we help it evolve. With AI performance monitoring, predictive issue detection, and automated scaling, your platform stays fast, secure, and future-ready.",
    features: ["Automated bug detection", "Predictive maintenance", "Smart infrastructure scaling"],
  },
  {
    id: 5,
    title: "AI Services Tailored for Your Business",
    description:
      "We create AI systems that adapt to your needs — from customer engagement to operational efficiency. Our team blends cutting-edge algorithms with practical business workflows, delivering AI that actually works.",
    features: ["Custom AI solutions", "Operational efficiency", "Business workflow integration"],
  },
];
// blogsData.ts
export const blogs = [
  {
    id: 1,
    title: "How AI is Transforming Everyday Business Operations",
    description:
      "Artificial Intelligence (AI) has moved from being a futuristic concept to an everyday reality.",
    image: "/assets/blog-bg.jpg",
  },
  {
    id: 2,
    title: "The Future of Automation in Tech",
    description:
      "Automation is reshaping industries, creating smarter workflows, and improving efficiency.",
    image: "/assets/blog-bg.jpg",
  },
  {
    id: 3,
    title: "Top AI Tools for Small Businesses",
    description:
      "Discover AI tools that can help small businesses optimize operations and growth.",
    image: "/assets/blog-bg.jpg",
  },
  {
    id: 4,
    title: "How AI is Transforming Everyday Business Operations",
    description:
      "Artificial Intelligence (AI) has moved from being a futuristic concept to an everyday reality.",
    image: "/assets/blog-bg.jpg",
  },
  {
    id: 5,
    title: "The Future of Automation in Tech",
    description:
      "Automation is reshaping industries, creating smarter workflows, and improving efficiency.",
    image: "/assets/blog-bg.jpg",
  },
  {
    id: 6,
    title: "Top AI Tools for Small Businesses",
    description:
      "Discover AI tools that can help small businesses optimize operations and growth.",
    image: "/assets/blog-bg.jpg",
  },
];
export const testimonials = [
  {
    name: "Randall Smith",
    project: "Mobile App Development",
    text: "Our mobile app project with TechnaCore was a complete success. They delivered a sleek, intuitive app for both iOS and Android, which has greatly enhanced how we engage with our clients.",
    avatar: "https://i.pravatar.cc/80?img=1",
    rating: 5,
  },
  {
    name: "Allison",
    project: "Cloud & SaaS Solutions",
    text: "TechnaCore seamlessly migrated our business to the cloud and developed a custom SaaS solution tailored to our needs. Their expertise ensured a smooth transition and outstanding long-term support.",
    avatar: "https://i.pravatar.cc/80?img=2",
    rating: 5,
  },
  {
    name: "Jennifer O’Neil",
    project: "E-Commerce Platform",
    text: "With TechnaCore, we launched a secure and modern e-commerce platform. Their work on payment integration, scalability, and user experience has significantly boosted our online sales.",
    avatar: "https://i.pravatar.cc/80?img=3",
    rating: 5,
  },
];
export const techLogos = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", alt: "Redux" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg", alt: "Vite" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", alt: "GraphQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
];
export const serviceses= [
  {
    id: "s1",
    title: "Cloud-Native Architecture",
    description:
      "Design and implement scalable cloud systems using modern microservices patterns and serverless best-practices.",
    features: ["Auto-scaling", "Fault tolerance", "Cost optimization"],
    Icon: FaCloud,
    colorFrom: "from-indigo-500",
    colorTo: "to-purple-600",
  },
  {
    id: "s2",
    title: "Mobile & Web Apps",
    description:
      "Fast, accessible and delightful experiences — React, TypeScript, native, and PWAs built for growth.",
    features: ["Responsive UI", "Performance budget", "Offline-ready"],
    Icon: FaMobileAlt,
    colorFrom: "from-blue-500",
    colorTo: "to-indigo-600",
  },
  {
    id: "s3",
    title: "Security & Compliance",
    description:
      "Security-first engineering, threat modeling, and compliance (GDPR / SOC2) advisory for serious products.",
    features: ["Threat modeling", "Pen-test readiness", "Secure CI/CD"],
    Icon: FaShieldAlt,
    colorFrom: "from-purple-600",
    colorTo: "to-pink-600",
  },
  {
    id: "s4",
    title: "Growth & Performance",
    description:
      "Drive measurable growth with performance engineering, analytics, and A/B experimentation.",
    features: ["Performance audit", "Data instrumentation", "A/B testing"],
    Icon: FaChartLine,
    colorFrom: "from-teal-400",
    colorTo: "to-blue-600",
  },
  {
    id: "s5",
    title: "Product Engineering",
    description:
      "End-to-end product design and engineering — from discovery and prototyping to production-ready code.",
    features: ["Design systems", "Iterative delivery", "Quality engineering"],
    Icon: FaLaptopCode,
    colorFrom: "from-indigo-400",
    colorTo: "to-cyan-600",
  },
  {
    id: "s6",
    title: "Platform & Cloud Ops",
    description:
      "Reliable platform engineering for release velocity: infra-as-code, observability, and runbooks.",
    features: ["IaC", "Observability", "Runbook automation"],
    Icon: FaRocket,
    colorFrom: "from-pink-500",
    colorTo: "to-red-500",
  },
];
export const steps = [
{
step: "01",
title: "Discovery Phase",
description:
"During the initial phase, we delve deep into understanding your business objectives, target audience, and project requirements. This involves comprehensive research, stakeholder interviews, and competitive analysis to lay the foundation for a successful project.",
},
{
step: "02",
title: "Strategy Development",
description:
"With insights gathered from the discovery phase, we develop a comprehensive strategy that aligns with your business goals. This includes creating user personas, defining project scope, establishing timelines, and outlining the technical architecture that will drive your project forward.",
},
{
step: "03",
title: "Implementation and Execution",
description:
"Our experienced team brings the strategy to life through careful implementation. We follow agile development methodologies, maintain regular communication throughout the process, and ensure quality through rigorous testing and iterative improvements.",
},
{
step: "04",
title: "Monitoring and Optimization",
description:
"Post-launch, we continuously monitor performance metrics and user feedback to identify opportunities for enhancement. Our commitment extends beyond delivery, ensuring your digital solution evolves with your business needs and maintains peak performance.",
},
];

export const faqs = [
    {
      question: "What services do you offer?",
      answer: "We specialize in mobile app design and development, web app design and development, desktop app solutions, UI/UX design, and SaaS product design and development. Our team is dedicated to delivering tailored digital solutions to meet your business needs."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on the scope and complexity. Typically, a standard web application takes 8-12 weeks, while mobile apps can take 10-16 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you support projects after delivery?",
      answer: "Yes, we offer comprehensive post-launch support including bug fixes, updates, maintenance, and feature enhancements. We provide various support packages tailored to your needs."
    },
    {
      question: "Can you work within my budget?",
      answer: "We work with various budget ranges and can customize solutions to fit your financial constraints. During our consultation, we'll discuss your budget and find the best approach to deliver value within your means."
    },
    {
      question: "What makes your team different?",
      answer: "Our team combines technical expertise with creative innovation. We focus on understanding your business goals, maintaining transparent communication, and delivering solutions that drive real results. We're committed to long-term partnerships, not just project completion."
    }
  ];