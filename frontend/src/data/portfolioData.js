// ============================================================
// All portfolio content lives here. Edit this file to update
// your name, projects, education, links, etc. — no need to dig
// through components.
// ============================================================

export const profile = {
  name: "Vignesh S R",
  initials: "VSR",
  role: "Aspiring Data Analyst | AI & Full-Stack Developer",
  tagline: "Building data-driven solutions through analytics, AI, and full-stack development.",
  location: "Bengaluru, Karnataka",
  status: "Open to Data Analytics & Software Development Roles",
  phone: "+91 8867732482", // ADDED — shown in the Hero contact overlay, edit me
  email: "vigneshsrg20@gmail.com",
  github: "https://github.com/Vignesh-20-SR",
  linkedin: "https://www.linkedin.com/in/vignesh-s-r-aa525b333/",
  resumeUrl: "/Vignesh_S_R_Resume.pdf", // drop your resume.pdf into the /public folder
  photo: "/assets/profile.jpeg", // ADDED — drop your photo into /public/assets/profile.jpg
};

export const aboutText = {
  paragraphs: [
    "I'm a recent B.E. Information Science graduate passionate about building data-driven solutions through data analytics, software development, and artificial intelligence. I enjoy transforming raw data into meaningful insights that help solve real-world problems and support better decision-making.",
    "My primary expertise lies in data analytics, where I work with Python, SQL, Excel, Power BI, and Tableau for data cleaning, analysis, visualization, and dashboard development. Alongside analytics, I've developed full-stack web applications using React, Node.js, REST APIs, and MongoDB, giving me practical experience in designing applications that efficiently manage and utilize data.",
    "I'm also expanding my knowledge in AI through hands-on projects involving machine learning and computer vision. As a fresher, I'm excited to learn continuously, collaborate with teams, and contribute to impactful projects across Data Analytics, Software Development, and AI.",
  ],
  facts: [
    { label: "📍Based in", value: "Bengaluru, India" },
    { label: "🎓Degree", value: "B.E. in Information Science & Engineering" },
    { label: "🎯Focus", value: "Data Analytics, AI & Software Development" },
    { label: "🌐 Languages", value: "English, Kannada, Hindi" },
    { label: "🟢 Status", value: "Open to Full-Time Opportunities" },
  ],
};

export const education = [
  {
    year: "2022 — 2026",
    degree: "Bachelor of Engineering",
    institution: "East Point College of Engineering and Technology, Bengaluru",
    score: "CGPA: 8.20",
    note: "Information Science & Engineering (VTU)",
  },
  {
    year: "2020 — 2022",
    degree: "Class XII (ISC)",
    institution: "St. Mary's International School, Chikkamagaluru, Karnataka",
    score: "76%",
    note: "PCM",
  },
  {
    year: "2019 — 2020",
    degree: "Class X (ICSE)",
    institution: "St. Mary's International School, Chikkamagaluru, Karnataka",
    score: "79%",
    note: "Science",
  },
];

export const skillGroups = [
  {
    category: "📊 Data Analytics",
    items: ["Python", "SQL", "Excel","Power BI", "Tableau"],
  },
  {
    category: "🤖 AI & Machine Learning",
    items: ["NumPy","Pandas", "OpenCV", "MediaPipe", "Machine Learning (Basics)"],
  },
  {
    category: "💻 Software Development",
    items: ["JavaScript","HTML/CSS", "React.js", "Node.js", "REST APIs", "Express.js", "MongoDB"],
  },
  {
    category: "🛠 Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook" ],
  },
  {
    category: "🤝 Soft Skills",
    items: ["Problem Solving", "Analytical Thinking", "Communication", "Teamwork"],
  },
];

// Add your project images inside /assets/projects/
// (create that folder under /public, e.g. public/assets/projects/project1.jpg)
export const projects = [
  {
    title: "💻 Disaster Relief Management System",
    subtitle: "Hope in Crisis",
    category: "Full-Stack Web Application",
    description:
      "A full-stack disaster response platform that streamlines emergency reporting, volunteer coordination, and resource management to improve disaster relief operations in real time.",
    tech: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
    image: "/assets/projects/project1.png", // ADDED
    features: [
      "Role-based authentication",
      "Emergency reporting & request management",
      "Volunteer coordination dashboard",
      "Real-time disaster response tracking",
    ],
    github: "https://github.com/Vignesh-20-SR/Disaster-Management-System",
    demo: "https://vignesh-disaster-management.vercel.app/",
    featured: true,
  },

  {
    title: "🤖 Hand Sign Detection",
    subtitle: "Real-Time Gesture Recognition",
    category: "Computer Vision & AI",
    description:
      "A computer vision application that detects and classifies hand gestures in real time using machine learning and MediaPipe landmarks.",
    tech: ["Python", "OpenCV", "MediaPipe", "Scikit-learn"],
    image: "/assets/projects/project2.png", // ADDED
    features: [
      "Real-time hand gesture detection",
      "Hand landmark extraction using MediaPipe",
      "Machine learning-based gesture classification"
    ],
    github: "https://github.com/Vignesh-20-SR/Hand-Sign-Detection-project",
    demo: "",
    featured: false,
  },

  {
    title: "📱 Smartphone Specifications Dashboard",

    subtitle: "Interactive Product Analytics Dashboard",

    category: "Data Analytics",

    description:
      "An interactive Power BI dashboard that enables users to analyze, compare, and explore smartphone specifications, pricing, and performance using dynamic filters and visual analytics.",

    tech: ["Power BI", "Excel"],

    image: "/assets/projects/project4.png",

    features: [
      "Interactive brand and model comparison using slicers",
      "Analysis of display, processor, RAM, storage, battery, camera, and pricing",
      "Dynamic charts and cross-filtering for data-driven product insights",
    ],

    github: "https://github.com/Vignesh-20-SR/Your-Repository-Name",

    demo: "https://app.powerbi.com/view?r=YOUR_POWERBI_PUBLIC_LINK",

    featured: false,
  },

  {
    title: "📊 Car Sales Dashboard",
    subtitle: "Interactive Business Intelligence Dashboard",
    category: "Data Analytics",
    description:
      "An interactive Power BI dashboard that analyzes car sales data to uncover business insights, monitor KPIs, and support data-driven         decision-making.",
    tech: ["Power BI", "Excel"],
    image: "/assets/projects/project3.png",
    features: [
      "Analyzed 5,000+ sales records",
      "Interactive KPIs, filters, and drill-down reports",
      "Sales trend and regional performance analysis",
    ],
    github: "https://github.com/Vignesh-20-SR/Car-Sales-PowerBI-Dashboard",
    demo: "https://app.powerbi.com/view?r=eyJrIjoiNmIxYzVlMzUtMzNhNy00ODdiLWI4NGEtMGIxODhkMzljMTRmIiwidCI6IjUyOWRmMWNkLTdjOGItNDJiMC05MDRmLTc5MGNkOWMwOGQ1MCJ9",
    featured: false,
  },

  {
    title: "Weather Forecast Website",
    subtitle: "Real-time conditions, anywhere",
    description:
      "A clean weather lookup tool that pulls live forecast data from a public API and presents it without the clutter.",
    tech: ["React", "JavaScript", "Weather API"],
    image: "/assets/projects/project5.jpg", // ADDED
    features: ["Live weather data", "Location search", "Responsive layout"],
    github: "",
    demo: "",
    featured: false,
  },

  {
    title: "Vehicle Info App",
    subtitle: "Look up vehicle details fast",
    description:
      "A lightweight service for retrieving and displaying structured vehicle information through a simple API layer.",
    tech: ["Node.js", "Express"],
    image: "/assets/projects/project6.jpg", // ADDED
    features: ["REST API", "Structured data lookup", "Simple query interface"],
    github: "",
    demo: "",
    featured: false,
  },

  // 👉 To add a new project later, just copy one of the objects above,
  // paste it here, and fill in your own title/description/tech/image/links.
];



// export const internship = {
//   role: "Data Analyst Intern (VTU Internship)",

//   company: "Besant Technologies",

//   duration: "2026",

//   location: "Bengaluru, India",

//   description:
//     "Completed a VTU internship in Data Analytics, gaining hands-on experience with SQL, Excel, Power BI, and Python. Worked on data cleaning, dashboard development, business reporting, and transforming raw data into actionable insights.",

//   certificateUrl:
//     "https://drive.google.com/YOUR_CERTIFICATE_LINK",

//   gallery: [
//     {
//       caption: "Internship Session",
//     },
//     {
//       caption: "Hands-on Training",
//     },
//     {
//       caption: "Project Presentation",
//     },
//     {
//       caption: "Completion Certificate",
//     },
//   ],
// };



// ===== NEW: Internship / Training section data =====
// Add your internship/training photos inside /assets/internship/
// (create that folder under /public, e.g. public/assets/internship/img1.jpg)
// This is an array, so you can add more than one internship/training —
// just copy one of the objects below and fill in your own details.
export const internships = [
  {
    company: "Besant Technologies",
    role: "Data Analyst Intern (VTU Internship)",
    type: "Internship", // or "Training"
    duration: "02/2026 — 05/2026",
    location: " Marathahalli, Bengaluru, India",
    description:
      "Completed a VTU internship in Data Analytics, gaining hands-on experience with SQL, Excel, Power BI, and Python. Worked on data cleaning, dashboard development, business reporting, and transforming raw data into actionable insights.",
    images: [
      // "/assets/internship/img1.jpg",
      // "/assets/internship/img2.jpg",
    ],
    certificateUrl: "https://drive.google.com/file/d/1wu3Qle57NSQ5FxjKXLoV3cQqA6YDqz-u/view?usp=sharing", // Paste your certificate link here (e.g. Google Drive), or leave blank for a placeholder
  },
  // 👉 To add another internship/training, copy the object above,
  // paste it here, and fill in your own details.
];





export const hackathon = {
  name: "UDGAM 2025",
  type: "National-Level Hackathon",
  organizer: "JSS Science and Technology University, Mysore",
  date: "January 2025",
  description:
    "Competed against teams from across the country to design and prototype a working solution within 24 hours — from problem framing to final demo.",
  certificateUrl: "https://drive.google.com/file/d/1ah88hUDrpd8urwdizGzN_OPdFDsDTMrd/view?usp=sharing", // add a path to your certificate image/PDF here
  gallery: [
    { caption: "Team at the venue" },
    { caption: "Mid-hackathon build" },
    { caption: "Final presentation" },
    { caption: "With the organizing team" },
  ],
};




export const publication = {
  title: "Disaster Relief Management System (Hope in Crisis)",
  journal: "IJSRST — International Journal of Scientific Research in Science and Technology",
  volume: "Volume 12, Issue 15",
  period: "May–June 2025",
  description:
    "A peer-reviewed paper documenting the design and implementation of a coordination platform for disaster response, built on the same project featured in this portfolio.",
  url: "https://ijsrst.com/IJSRST25121520", // add your publication link here
  // ===== NEW: images for the publication (paper screenshot, journal
  // listing, etc.). Add your files inside /assets/publications/ and
  // list their paths here — leave the array empty to show no images. =====
  images: [
    "/assets/publication/img1.jpeg",
    "/assets/publication/img2.png",
    "/assets/publication/img3.png",
    "/assets/publication/img4.png",
  ],
};





// export const publication = {
// title: "Disaster Relief Management System (Hope in Crisis)",
// journal: "IJSRST — International Journal of Scientific Research in Science and Technology",
// volume: "Volume 12, Issue 15",
// period: "May–June 2025",

// description:
// "A peer-reviewed research paper presenting the design and implementation of a full-stack disaster response platform for emergency coordination, volunteer management, and resource allocation. This publication is based on the same project featured in this portfolio.",

// paperUrl:
// "https://ijsrst.com/IJSRST25121520",// add your publication link here

// certificateUrl:
// "https://drive.google.com/file/d/1QCWbQyZsmEV7ddpcrHqAClzBOQ3D75Fr/view?usp=sharing",

// gallery: [
// {
// caption: "Cover Page",
// },
// {
// caption: "Publication Certificate",
// },
// {
// caption: "Journal Cover",
// },
// {
// caption: "Paper Presentation",
// },
// ],
// };



// export const publication = {
//   title: "Disaster Relief Management System (Hope in Crisis)",
//   journal: "IJSRST — International Journal of Scientific Research in Science and Technology",
//   volume: "Volume 12, Issue 15",
//   period: "May–June 2025",
//   description:
//     "A peer-reviewed paper documenting the design and implementation of a coordination platform for disaster response, built on the same project featured in this portfolio.",
//   url: "https://drive.google.com/file/d/1QCWbQyZsmEV7ddpcrHqAClzBOQ3D75Fr/view?usp=sharing", // add your publication link here
// };






export const certifications = [
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte (via Forage)",
    note: "Simulated client engagement covering forensic data analytics.",
    link: "https://drive.google.com/file/d/1cvtC4bmu_FzHKCUsdshh8LDLcoalP7yy/view?usp=sharing", // Paste your certificate link here
  },
  {
    name: "Python",
    issuer: "Infosys Springboard",
    note: "learnt python",
    link: "https://drive.google.com/file/d/1XfpYCB-JLuEDGiYv3QNaOsD63iXhf8GD/view?usp=sharing", // Paste your certificate link here
  },
  {
    name: "SQL",
    issuer: "Hacker Rank",
    note: "Intermediate SQL",
    link: "https://drive.google.com/file/d/1D8LWbTEpJlTz0EyQ_bruyh4ahkKvPDdv/view?usp=sharing", // Paste your certificate link here
    placeholder: true,
  },
  {
    name: "Excel",
    issuer: "Coursera",
    note: "completed js",
    link: "https://drive.google.com/file/d/12EVgupwlUcKzO-EaOUL5ypNjx_PHzvXx/view?usp=sharing", // Paste your certificate link here
    placeholder: true,
  },
  {
    name: "JavaScript",
    issuer: "Coursera",
    note: "Completed js",
    link: "https://drive.google.com/file/d/1X_zOiTSnstoDQD9v6XdZMacdzkjvauun/view?usp=sharing", // Paste your certificate link here
    placeholder: true,
  },
  {
    name: "React.Js",
    issuer: "Coursera",
    note: "Completed react.js",
    link: "https://drive.google.com/file/d/1Xa4qef2tNBLMSej02w8EKD3aHb8JHCwO/view?usp=sharing", // Paste your certificate link here
    placeholder: true,
  },
  {
    name: "Java",
    issuer: "Coursera",
    note: "Completed advance java",
    link: "https://drive.google.com/file/d/1XZ8oSifuyCMjWarAyNcFYC_8WcGZq0fV/view?usp=sharing", // Paste your certificate link here
    placeholder: true,
  },
];

export const stats = [
  { value: "4+", label: "Projects" },
  { value: "5+", label: "Certifications" },
  { value: "1", label: "National Hackathon" },
  { value: "1", label: "Publication" },
];
