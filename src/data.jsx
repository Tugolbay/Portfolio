import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiExternalLink } from "react-icons/fi";
import { SiFramework } from "react-icons/si";

import Work1 from "./assets/gadget.jpeg";
import Work2 from "./assets/fi3.jpeg";
import Work3 from "./assets/srm.jpeg";
import Work4 from "./assets/unnamed.png";
import Work5 from "./assets/1200px-Onyx_Soundlab.jpeg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Tugolbay",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Kasymbekov",
  },

  {
    id: 3,
    title: "Age : ",
    description: "21 Years",
  },

  {
    id: 4,
    title: "Phone : ",
    description: "+996703874862",
  },

  {
    id: 5,
    title: "Gmail : ",
    description: "kasymbekovv1221@gmail.com",
  },

  {
    id: 6,
    title: "Langages : ",
    description: "Kyrgyz, English, Russian",
  },
];

export const stats = [
  {
    id: 1,
    no: "1+",
    title: "Year of <br /> Experience",
  },

  {
    id: 2,
    no: "3+",
    title: "Completed <br /> Projects",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 - 2023",
    title: "Frontend Developer <span> Peaksoft </span>",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 - present",
    title: "Frontend Developer <span> Geeks Pro </span>",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title: "Frontend Developer <span> Peaksoft House (Bootcamp) </span>",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022 - present",
    title: "Bachelor's degree <span> Kyrgyz Economic University</span>",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019",
    title: "Secondary education <span> Gymnasium No. 4 </span>",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "100",
  },

  {
    id: 2,
    title: "Css",
    percentage: "100",
  },

  {
    id: 3,
    title: "JavaSrcipt",
    percentage: "100",
  },

  {
    id: 4,
    title: "TypeSrcipt",
    percentage: "70",
  },

  {
    id: 5,
    title: "React",
    percentage: "100",
  },

  {
    id: 6,
    title: "React Native",
    percentage: "60",
  },

  {
    id: 7,
    title: "Next js",
    percentage: "80",
  },

  {
    id: 8,
    title: "Vue.js",
    percentage: "60",
  },

  {
    id: 9,
    title: "Redux",
    percentage: "100",
  },

  {
    id: 10,
    title: "Redux Toolkit",
    percentage: "100",
  },

  {
    id: 11,
    title: "React Query",
    percentage: "90",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work4,
    title: "Auto Store",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Auto Store",
      },
      {
        icon: <SiFramework />,
        title: "framework : ",
        desc: "React",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview: ",
        descs: "https://impex-corp.vercel.app/",
      },
    ],
  },
  {
    id: 2,
    img: Work5,
    title: "Recording Studio",
    title2: "Web application",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Recording studio",
      },
      {
        icon: <SiFramework />,
        title: "framework : ",
        desc: "React",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview: ",
        descs: "https://q-rush-deploy.vercel.app/",
      },
    ],
  },

  {
    id: 3,
    img: "https://www.cornwallseawaynews.com/wp-content/uploads/sites/19/2021/04/Depositphotos_460549784_l-2015.jpg",
    title: "Online Cosmetics Store",
    title2: "Web application",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Online Cosmetics Store",
      },
      {
        icon: <SiFramework />,
        title: "framework : ",
        desc: "React",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview: ",
        descs: "https://www.amway-365.com/",
      },
    ],
  },
];

export const portfolio2 = [
  {
    id: 4,
    img: Work1,
    title: "Online Gadget Store",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Online store",
      },
      {
        icon: <SiFramework />,
        title: "framework : ",
        desc: "React",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Code: ",
        descs: "https://github.com/peaksoft-school/gadgetarium-js9",
      },
      {
        icon: <FiExternalLink />,
        title: "Figma : ",
        link: "https://www.figma.com/file/xiRfOZzx4shX7RovOuh2sy/Gadgetarium-(%D0%A8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82)?type=design&node-id=3-2065&mode=design",
      },
    ],
  },

  {
    id: 5,
    img: Work2,
    title: "Web application",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Task Tracker (kanban)",
      },
      {
        icon: <SiFramework />,
        title: "framework : ",
        desc: "React",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Code: ",
        descs:
          "https://github.com/peaksoft-school/task-tracker-js9/tree/feature/column",
      },
      {
        icon: <FiExternalLink />,
        title: "Figma : ",
        link: "https://www.figma.com/file/Ugb8I0BtyLct6RGyrwuLdV/Task-Tracker?type=design&mode=design",
      },
    ],
  },

  {
    id: 6,
    img: Work3,
    title: "CRM-system",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "CRM-system",
      },
      {
        icon: <SiFramework />,
        title: "framework : ",
        desc: "React",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Code: ",
        descs: "https://github.com/alixandr00/MindMentor",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
