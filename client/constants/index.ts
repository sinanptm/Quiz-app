import { CardProps, Question } from "@/types";

export const NavItems = [
  {
    link: "/",
    text: "Home",
  },
  
];



export const timeQuizzes: CardProps[] = [
  {
    heading: "5 Questions",
    text: "A quick challenge to test your knowledge.",
    id: "5",
  },
  {
    image: "/one.webp",
    heading: "10 Questions",
    text: "A bit longer, a bit tougher.",
    id: "10",
  },
  {
    image: "/two.avif",
    heading: "15 Questions",
    text: "The ultimate test of your skills.",
    id: "15",
  },
  {
    heading: "5 Questions",
    text: "A quick challenge to test your knowledge.",
    id: "532",
  },
  {
    image: "/one.webp",
    heading: "10 Questions",
    text: "A bit longer, a bit tougher.",
    id: "1032",
  },
  {
    image: "/two.avif",
    heading: "15 Questions",
    text: "The ultimate test of your skills.",
    id: "15232",
  },
];



export const sampleQuestions: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
    difficulty: "Easy",
    category: "Geography",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
    difficulty: "Easy",
    category: "Astronomy",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci",
    difficulty: "Medium",
    category: "Art",
  },
];