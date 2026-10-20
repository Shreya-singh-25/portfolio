const projects = [
  {
    id: "smart-campus-service-management",
    title: "Smart Campus Service Management System",
    description:
      "A comprehensive Java-based desktop application streamlining campus facilities, hostel complaints, maintenance requests, and administrative operations through a unified graphical interface.",
    technologies: ["Java", "Swing", "JDBC", "MySQL"],
    features: [
      "Engineered an integrated desktop management system handling student complaints, facility requests, technician workflows, and administrative reporting.",
      "Implemented JDBC connectivity with relational database tables for transactional stability, automated record search, and bill generation.",
      "Designed a modular Java Swing graphical interface with role-based navigation, input validation, and real-time state updates.",
    ],
    image: "/assets/images/project-campus.jpg",
    github: "https://github.com/Shreya-singh-25/smart-campus-service-management",
    liveDemo: null,
    featured: false,
  },
  {
    id: "real-time-loan-eligibility-advisor",
    title: "Real-Time Loan Eligibility Advisor",
    description:
      "An intelligent loan eligibility advisor powered by 5 machine learning models with a Voting Ensemble to evaluate applicant credentials and provide explainable insights in real-time.",
    technologies: ["React.js", "Python", "Flask", "Scikit-learn"],
    features: [
      "Developed a real-time loan eligibility advisor using 5 machine-learning models with a Voting Ensemble to assess applicant and loan information.",
      "Trained Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, and Neural Network models for eligibility prediction and comparative analysis.",
      "Connected the trained models to a React frontend via a Python Flask backend, delivering instant eligibility predictions and model-based insights.",
    ],
    image: "/assets/images/project-loan.jpg",
    github: "https://github.com/Shreya-singh-25/real-time-loan-eligibility-advisor",
    liveDemo: null,
    featured: true,
  },
  {
    id: "deadlock-prevention-kit",
    title: "Deadlock Prevention Kit",
    description:
      "An interactive deadlock prevention toolkit built around 3 core modules — safety checking, deadlock detection, and recovery simulation — using Banker's Algorithm.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Operating Systems"],
    features: [
      "Created an interactive deadlock prevention toolkit built around 3 core modules: safety checking, deadlock detection, and recovery simulation using Banker's Algorithm.",
      "Visualized process-resource allocation states and identified deadlocked processes through resource-allocation analysis and step-by-step algorithm logs.",
      "Simulated recovery strategies including process termination, resource preemption, and rollback to demonstrate practical deadlock resolution.",
    ],
    image: "/assets/images/project-deadlock.jpg",
    github: "https://github.com/Shreya-singh-25/Deadlock-Prevention-Kit",
    liveDemo: null,
    featured: false,
  },
  {
    id: "smart-vehicle-service-management-system",
    title: "AutoCare — Vehicle Service Management System",
    description:
      "A robust desktop application spanning 7 core modules — customers, vehicles, mechanics, services, bookings, billing, and service records — through a unified interface.",
    technologies: ["Java", "Swing", "JDBC", "SQLite"],
    features: [
      "Engineered a Java-based desktop application spanning 7 core modules — customers, vehicles, mechanics, services, bookings, billing, and service records — through a unified graphical interface.",
      "Integrated Java Swing, JDBC, and SQLite with modular UI, controller, model, database, and utility components for maintainable application architecture.",
      "Implemented CRUD operations, searching, validation, invoice generation, CSV export, and database backup/restore using core data-structure concepts.",
    ],
    image: "/assets/images/project-vehicle.jpg",
    github: "https://github.com/Shreya-singh-25/smart-vehicle-service-management-system",
    liveDemo: null,
    featured: false,
  },
];

export default projects;
