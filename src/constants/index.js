import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Capabilities",
    url: "#features",
  },
  {
    id: "1",
    title: "Plans & Tiers",
    url: "#pricing",
  },
  {
    id: "2",
    title: "User Guide",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Development Timeline",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "AI-Powered Image Generation",
  "Advanced Photo Enhancement",
  "Seamless System Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice Command Support",
    text: "Implement advanced voice recognition technology, enabling users to interact with the chatbot hands-free for a seamless experience.",
    date: "May 2023",
    status: "Completed",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Engagement Gamification",
    text: "Incorporate interactive game elements like badges and leaderboards to enhance user engagement and encourage frequent interactions.",
    date: "May 2023",
    status: "In Progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Advanced Customization",
    text: "Introduce options for users to personalize the chatbot's UI and response style, creating a more tailored and enjoyable user experience.",
    date: "May 2023",
    status: "Completed",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "API Integrations",
    text: "Enable seamless integration with external APIs, such as weather and news services, for dynamic and context-aware responses.",
    date: "May 2023",
    status: "In Progress",
    imageUrl: roadmap4,
  },
];


export const collabText =
  "Powered by intelligent automation and enterprise-grade security, AI-Moon is the ultimate solution for teams aiming to collaborate smarter and faster.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: "Effortlessly integrate AI-Moon into your workflow, ensuring compatibility with your existing tools and platforms.",
  },
  {
    id: "1",
    title: "Intelligent Automation",
    text: "Streamline repetitive tasks with advanced AI automation, boosting productivity and efficiency across your team.",
  },
  {
    id: "2",
    title: "Enterprise-Grade Security",
    text: "Safeguard your data with cutting-edge encryption and robust security protocols, ensuring peace of mind for every interaction.",
  },
];


export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Core AI features with no cost, ideal for individuals exploring AI capabilities",
    price: "0",
    features: [
      "Smart AI chatbot to handle basic queries efficiently",
      "Personalized recommendations tailored to your preferences",
      "Full access to core app functionalities at no cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Enhanced AI tools with priority support and analytics for power users",
    price: "9.99",
    features: [
      "Advanced AI chatbot capable of handling complex and nuanced queries",
      "Comprehensive analytics dashboard to monitor and analyze interactions",
      "Priority support for faster issue resolution and guidance",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Scalable AI solutions with customized features and dedicated support for businesses",
    price: null,
    features: [
      "Customizable AI chatbot to meet unique business requirements",
      "Advanced analytics for deep insights into usage and trends",
      "Dedicated account management and personalized onboarding",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Instant Queries",
    text: "Empower users to retrieve precise answers in real-time, eliminating the need to sift through multiple resources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Continuous Improvement",
    text: "Utilizing advanced NLP algorithms, the app continuously refines its understanding to deliver contextually relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Seamless Connectivity",
    text: "Access the AI chatbot from any device, enabling frictionless interactions and ensuring always-on availability.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Instant Response",
    text: "Gain rapid insights with immediate responses, minimizing the need for manual searches across multiple platforms.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Endless Inquiry",
    text: "Ask any question, and the app provides intelligent, accurate answers, making information retrieval effortless and efficient.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "AI-Powered Progress",
    text: "Harness the power of machine learning and NLP to ensure every interaction improves, providing sharper, more relevant responses over time.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
