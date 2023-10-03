import emoji from "react-easy-emoji";

export const greetings = {
  name: "Ricardo Marques",
  title: "Welcome",
  description:
    "I am a Full Stack Sofware / Lead Developer, with passion for products and people. I have 8 years of experience building applications with Python, Django, JavaScript, React, Vue, Node, Golang and some other cool libraries and frameworks.",
  resumeLink: "https://ricardobiundo.github.io/Resume/",
};

export const openSource = {
  githubUserName: "ricardobiundo",
};

export const contact = {};

export const socialLinks = {
  //url: 'https://www.koffiecode.com/',
  //instagram: "https://www.instagram.com/ricardobiundo/",
  //github: "https://github.com/ricardobiundo",
  linkedin: "https://www.linkedin.com/in/ricardobiundo/",
  discord: "https://www.hackerrank.com/Bglance68",
  blog: "https://brendanglancy.github.io/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/webdev.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Develop robust web applications, platforms and pipelines."
        ),
        emoji(
          "⚡ Collaborative team player with focus on deliverables."
        ),
        emoji(
          "⚡ Capacity to lead and coach fellow members."
        ),
      ],
      softwareSkills: [
        {
          skillName: "python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django-icon",
        },
        {
          skillName: "FastApi",
          fontAwesomeClassname: "logos:fastapi-icon",
        },
        {
          skillName: "reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "vuejs",
          fontAwesomeClassname: "logos:vue",
        },
        {
          skillName: "nodejs",
          fontAwesomeClassname: "logos:nodejs-icon",
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "cpp",
          fontAwesomeClassname: "logos:c-plusplus",
        },
        {
          skillName: "php",
          fontAwesomeClassname: "logos:php",
        },
        {
          skillName: "yarn",
          fontAwesomeClassname: "logos:yarn",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "MySQL-icon",
          fontAwesomeClassname: "logos:mysql-icon",
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "logos:nextjs-icon",
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
        },
        {
          skillName: "Helm",
          fontAwesomeClassname: "logos:helm",
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "logos:terraform-icon",
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "logos:google-cloud",
        },
      ],
    },
  ],
};
 
export const timeline = {
  title: "My experience",
  subTitle: "I focus on modernizing and developing products with the help of multidisciplinary teams.",
}

export const SkillBars = [
  {
    Stack: "Programming",
  },
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
  },
  {
    Stack: "Backend",
  },
  {
    Stack: "Security",
  },
];

export const educationInfo = [
  {
    schoolName: "Universidad Simón Bolivar",
    subHeader: "Masters in Electronics Engineering",
    duration: "August 2021 - Present",
    grade: "3.8 GPA",
    desc: "Programming CIS degree",
    descBullets: [
      "The Bachelor of Science in Computer Information Systems (CIS) - Programming degree option allows students to attain knowledge of effective software application development, client/server application development, and database application development and management for businesses.",
      "The CIS - Programming degree option is designed to prepare students for careers in the field of software engineering and development.",
    ],
    github: "https://github.com/BrendanGlancy/akron/",
  },
];

export const experience = [
  {
    role: "Full Stack Tech Lead",
    company: "ASML",
    companylogo: "/img/icons/common/chamber.jpeg",
    date: "Feburary 2021 – Present",
    desc: "lljlfd",
  },
  {
    role: "Software Developer Intern",
    company: "OVS Knife Co.",
    companylogo: "/img/icons/common/ovs.png",
    date: "December 2022",
    descBullets: [
      "  As a Software Developer Intern at OVS Knife Co, I am responsible for the development and maintenance of the company's web application. Utilizing my skills in Next.js, React, MongoDB, Node.js, Django, and Express.js.",
      "  I work independently to implement new features, improve the overall user experience and make sure the platform is reliable and fast for our customers.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "OVS Knife Co.",
    companylogo: "/img/icons/common/ovs.png",
    date: "December 2022",
    descBullets: [
      "  As a Software Developer Intern at OVS Knife Co, I am responsible for the development and maintenance of the company's web application. Utilizing my skills in Next.js, React, MongoDB, Node.js, Django, and Express.js.",
      "  I work independently to implement new features, improve the overall user experience and make sure the platform is reliable and fast for our customers.",
    ],
  },
];

export const projects = [
  {
    name: "Ronis Hair Forum",
    desc: "Custom website for a local hair salon, Responsive Ready, Powered by Bootstrap 4, Dedicated portfolio and blog page, Easy Customization",
    link: "https://ronishair.com/",
    tags: ["Java", "VueJS", "PostgreSQL"],
  },
  {
    name: "Empyrial",
    desc: "Contributor on Empyrial, Empyrial is a Python-based open-source quantitative investment library dedicated to financial institutions and retail investors, officially released in March 2021. Already used by thousands of people working in the finance industry, Empyrial aims to become an all-in-one platform for portfolio management, analysis, and optimization.",
    github: "https://github.com/ssantoshp/Empyrial",
    link: "https://ssantoshp.github.io/Empyrial/",
    tags: ["python", "finace", "machine learning"],
  },
  {
    name: "Knifely",
    desc: "Professional Knife Sharpening site for our company. Made with Tailwind CSS, Gatsby v3, and NextJS. Looking for a reliable and professional residential knife sharpening service in Akron? Look no further than Knifely!",
    github: "https://github.com/OVS-Knife",
    link: "https://www.knifely.com/",
    tags: ["NextJS", "Gatsby", "JavaScript"],
  },
  {
    name: "OVS Knife Co.",
    desc: "As a Software Developer Intern at OVS Knife Co, I am responsible for the development and maintenance of the company's web application. Utilizing my skills in Next.js, React, MongoDB, Node.js, Django, and Express.js, I work independently to implement new features, improve the overall user experience and make sure the platform is reliable and fast for our customers.",
    link: "https://ovsknife.com/home",
    tags: ["Intern", "Full Stack", "E-Commerce"],
  },
];

export const feedbacks = [
  {
    name: "Austin Coontz",
    feedback:
      "I was trying to make a website that is blazingly fast. I had no idea where to start. What did I do? Called my friend Brendan. I had no Idea what i Was doing! He fixed it. Website? Fast. Blazingly. Done.",
  },
  {
    name: "Andrew Rose",
    feedback:
      "Brendan Glancy, the website developer I worked with was exceptional. He took the time to understand my needs and goals, and created a website that not only met, but exceeded my expectations. Their communication was clear and timely throughout the process, and I would highly recommend them to anyone in need of an exceptional website.",
  },
];

export const seoData = {
  title: "Ricardo Marques's Portfolio",
  description: "Full Stack Developer showcasing my work and experience.",
  image: "https://avatars.githubusercontent.com/u/61941978?v=4",
  url: "https://brendanglancy.software/",
  keywords: [
    "Brendan Glancy",
    "Portfolio",
    "Full Stack Developer",
    "Open to work",
    "Ronis Hair Forum",
    "Developer",
    "web developer",
    "Empyrial",
    "OVS Grinding",
    "OVS Knife Co.",
    "Knifely",
    "Canton Regional Chamber of Commerce",
    "Akron",
    "Ohio",
  ],
};
