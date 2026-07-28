export const projectsData = [
  {
    id: 1,
    title: "Motor Bikes and Spare parts Management System",
    description: "Full-stack Motor Bikes and Spare parts Management System with user authentication, product, inventory, services and repairs and finance management features.",
    detailedDescription: `This comprehensive Motor Bikes and Spare Parts Management System is a full-stack web application designed to streamline operations for motorcycle dealerships and repair shops. The system provides a complete solution for managing inventory, tracking services and repairs, handling customer relationships, and managing finances.

Key Features:
• User Authentication & Authorization with role-based access control
• Product & Inventory Management with real-time stock tracking
• Service & Repair Management with job tracking and scheduling
• Customer Management with detailed service history
• Financial Management including invoicing and payment tracking
• Responsive design optimized for desktop and mobile devices
• Secure data handling and backup systems

The application follows modern development practices with a clean, intuitive interface that makes it easy for staff to manage daily operations efficiently. Built with scalability in mind, it can handle growing business needs while maintaining optimal performance.`,
    tech: ["MERN", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: "/assets/images/rathnasiri-motors-dashboard.png",
    videoUrl: "/assets/videos/rathnasiri-motors-demo.mp4",
    github: "https://github.com/Nisal-Dushmantha/Rathnasiri_Motors.git",
    category: "web-development",
    featured: true
  },
  {
    id: 2,
    title: "PowerSense - Intelligent Energy Management Platform",
    description: "Full-stack MERN application for electricity usage tracking, bill management, carbon analytics, renewable integration, and role-based administration.",
    detailedDescription: `PowerSense is a full-stack MERN (MongoDB, Express, React, Node.js) energy management platform engineered for electricity usage tracking, monthly billing analytics, carbon footprint monitoring, and renewable energy integration.

Key Features:
• Real-time energy consumption tracking & historical usage trends
• Household & smart device energy management
• Carbon footprint analysis and threshold alert notifications
• Monthly bill calculation, payment status tracking, and PDF export
• Renewable energy production tracking & management
• Secure JWT user authentication and role-based admin governance
• Interactive charts and data visualizations

Architecture & Stack:
• Frontend: React, React Router, Axios, Tailwind CSS (Deployed on Vercel)
• Backend: Node.js, Express.js, MongoDB, Mongoose, JWT (Deployed on Render)
• Testing & Performance: Jest, Supertest, Artillery`,
    tech: ["MERN", "React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: "/assets/images/powersense-preview.jpg",
    github: "https://github.com/Nisal-Dushmantha/PowerSense.git",
    liveUrl: "https://powersense-af.vercel.app/",
    category: "web-development",
    featured: true
  },
  {
    id: 3,
    title: "BrewMe - UI/UX Design Project",
    description: "A mobile application designed to streamline the coffee ordering process for customers and baristas.",
    detailedDescription: `BrewMe is a comprehensive mobile application design project focused on revolutionizing the coffee ordering experience. This UI/UX design project addresses the pain points of traditional coffee ordering systems by creating an intuitive, efficient, and delightful user experience for both customers and baristas.

Design Objectives:
• Create an intuitive and user-friendly ordering interface
• Streamline the coffee ordering and pickup process
• Enhance customer engagement through personalized experiences
• Optimize workflow efficiency for baristas and cafe staff
• Implement modern design principles and accessibility standards

Key Features Designed:
• Personalized user profiles with order history and preferences
• Real-time menu browsing with detailed coffee descriptions
• Customizable order options (size, milk type, sweetness, etc.)
• Location-based cafe finder with real-time availability
• Order tracking with estimated preparation times
• Integrated payment systems for seamless transactions
• Loyalty program with rewards and special offers

Design Process:
The project followed a comprehensive design thinking approach, starting with user research and persona development, followed by wireframing, prototyping, and user testing. The design incorporates modern UI trends while maintaining usability and accessibility at its core.`,
    tech: ["Figma", "UI/UX Design"],
    image: "/assets/images/brewme-screenshot.png",
    videoUrl: "/assets/videos/brewme-demo.mp4",
    github: "https://github.com/Nisal-Dushmantha/BrewMeFigma.git",
    figmaUrl: "https://www.figma.com/design/9emv7UHBV2lgsTID4k7aAQ/Untitled?node-id=0-1&t=jr3mvaLoJ5ihslPz-1",
    category: "ui-ux",
    featured: true
  },
  {
    id: 4,
    title: "Brew Now - Android UI/UX Design",
    description: "Android mobile application UI/UX design prototype created with Android Studio and Kotlin, focusing on coffee ordering user experience.",
    detailedDescription: `Brew Now is an Android mobile application UI/UX design project that showcases modern mobile interface design for a coffee ordering platform. Created using Android Studio and Kotlin, this project demonstrates front-end mobile development skills and user interface design principles without backend implementation.

Design Objectives:
• Create an intuitive and modern Android coffee ordering interface
• Implement Material Design principles for consistent user experience
• Develop responsive layouts for various Android screen sizes
• Showcase advanced Android UI components and navigation patterns
• Demonstrate proficiency in Android Studio and Kotlin development

UI Features Designed:
• Welcome and Onboarding screens with smooth transitions
• User registration and login interface mockups
• Coffee menu browsing with grid and list view options
• Product detail screens with customization options
• Shopping cart and checkout interface designs
• User profile and settings screens
• Order history and favorites interface
• Modern navigation drawer and bottom navigation
• Search functionality with filter options
• Responsive design for tablets and phones`,
    tech: ["Android Studio", "Kotlin", "Material Design", "XML Layouts", "UI/UX Design"],
    image: "/assets/images/brew-now-android-studio.png",
    videoUrl: "/assets/videos/brew-now-demo.mp4",
    github: "https://github.com/Nisal-Dushmantha/BrewNow-AS.git",
    category: "android",
    featured: false
  },
  {
    id: 5,
    title: "HealthMate - Healthcare & Wellness Platform",
    description: "Full-stack healthcare & wellness application for patient management, medical appointment scheduling, and health metrics monitoring.",
    detailedDescription: `HealthMate is a digital healthcare and wellness management platform engineered to streamline patient appointments, health records management, and real-time medical metric tracking.

Key Features:
• Patient & Doctor portal management
• Appointment booking, scheduling, and automated reminders
• Medical history tracking & electronic health records (EHR)
• Health metric monitoring and fitness analytics
• Responsive user interface tailored for web & mobile accessibility`,
    tech: ["MERN", "React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: "/assets/images/healthmate-preview.jpg",
    github: "https://github.com/Nisal-Dushmantha/HealthMate.git",
    category: "web-development",
    featured: true
  }
];

export const getProjectById = (id) => {
  return projectsData.find(project => project.id === parseInt(id, 10));
};
