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
}

export const socialLinks = {
  //url: 'https://www.koffiecode.com/',
  //instagram: "https://www.instagram.com/ricardobiundo/",
  //github: "https://github.com/ricardobiundo",
  linkedin: "https://www.linkedin.com/in/ricardobiundo/",
  discord: "",
  blog: "",
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
export const seoData = {
  title: "Ricardo Marques's Portfolio",
  description: "Full Stack Developer showcasing my work and experience.",
  image: "https://avatars.githubusercontent.com/u/5224572?v=4",
  url: "https://koffiecode.com/",
  keywords: [
    "Ricardo Marques",
    "Portfolio",
    "Full Stack Developer",
    "Open to work",
    "Developer",
    "web developer",
    "Eindhoven",
    "Netherlands"
  ],
};
