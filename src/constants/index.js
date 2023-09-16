import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX  Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Digital Marketing",
    icon: creator,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front End Web Developer",
    company_name: "Globe Sync",
    icon: starbucks,
    iconBg: "#000",
    date: "Feb 2023 - current",
    points: [
      "Developing and maintaining web applications using React.js, Wordpress & other technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Uhuru Wallet",
    icon: tesla,
    iconBg: "#fff",
    date: "Jan 2022 - Jan 2025",
    points: [
      "Developing and maintaining web applications using MERN Stack.",
      "Creation of wireframes in line with UX best practice guidelines.",
      "Integrate external software libraries and APIs into existing projects.",
      "Participating in coding of the Fintech chatbot using Whatsapp and Twilio API.",
    ],
  },
  {
    title: "Front-end Web Developer",
    company_name: "AMI Groups",
    icon: shopify,
    iconBg: "#fff",
    date: "Jan 2019 - Nov 2021",
    points: [
      "Developing and maintaining web applications using HTML, CSS, Javascript, PHP and other related technologies.",
      ".High-level and low-level design, coding, testing and deploying.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Intergrating payment gateways, Debugging & CRM customization (ZOHO/Bitrix).",
    ],
  },
  {
    title: "Jnr Web Developer",
    company_name: "Startup Boost",
    icon: meta,
    iconBg: "#fff",
    date: "Mar 2017 - Oct 2018",
    points: [
      "Developing and maintaining web applications using Wordpress, Webflow and other related technologies.",
      "Performed quality assurance tests on various sites to ensure cross browser compatibility and mobile responsiveness.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing ecommerce application with woocommerce,shopify and Magento.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as unique as our brand. Tash made it happen in a short space of time.",
    name: "Abraham Saye",
    designation: "CEO",
    company: "AMI Groups",
    image: "https://iteckdev.b-cdn.net/wp-content/uploads/2022/09/Abraham-Saye-Martey.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tash does. He goes beyond to deliver.",
    name: "Trust Jakarasi",
    designation: "Managing Director",
    company: "Uhuru Wallet",
    image: "https://www.uhuruwallet.co.za/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-18-at-9.58.50-AM-680x380-1.jpeg",
  },
  {
    testimonial:
      "After Tash optimized our website, our traffic increased by 57%. He is a valuable asset to have for business growth!",
    name: "Karidas Tshintsholo",
    designation: "CEO",
    company: "Khula",
    image: "https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/karidas-tshintsholo-f841b68a",
  },
];

const projects = [
  {
    name: "Globe Sync",
    description:
      "Web-based platform that allows users to search, book, and manage immigration issues, providing a convenient and efficient solution for migration needs.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://globe-sync.com/",
  },
  {
    name: "Uhuru Wallet",
    description:
      "Uhuru digital wallet enables people to perform transaction such as person to person, utility bill payments amongst other functionality.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "whatsappapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.uhuruwallet.co.za/",
  },
  {
    name: "Ankhoma Projects",
    description:
      "A comprehensive construction company that focus on, solar installation, epoxy flooring, home renovations, and offers custom solutions .",
    tags: [
      {
        name: "vanillajs",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
      {
        name: "css/scss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Tashwillie/Ankhomaprojects",
  },
];

export { services, technologies, experiences, testimonials, projects };
