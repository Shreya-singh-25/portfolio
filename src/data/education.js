import personalInfo from "./personalInfo";

const education = [
  {
    id: "btech",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    institution: "Lovely Professional University",
    college: "Phagwara, Punjab",
    startYear: "Aug 2024",
    endYear: "Present",
    cgpa: personalInfo.cgpa,
    scoreLabel: "CGPA",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java)",
      "Database Management Systems (SQL)",
      "Machine Learning & AI",
      "Operating Systems",
      "Web Technologies",
    ],
  },
  {
    id: "intermediate",
    degree: "Intermediate (PCM)",
    institution: "RPM Academy (CBSE)",
    college: "Gorakhpur, U.P",
    startYear: "2022",
    endYear: "2023",
    cgpa: "86%",
    scoreLabel: "Percentage",
    coursework: ["Physics", "Chemistry", "Mathematics"],
  },
  {
    id: "matriculation",
    degree: "Matriculation (CBSE)",
    institution: "RPM Academy (CBSE)",
    college: "Gorakhpur, U.P",
    startYear: "2020",
    endYear: "2021",
    cgpa: "94.6%",
    scoreLabel: "Percentage",
    coursework: ["Science", "Mathematics", "Social Science", "English"],
  },
];

export default education;
