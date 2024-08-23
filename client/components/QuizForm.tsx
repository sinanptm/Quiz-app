import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Question } from "@/types";
// import { useGetQuestionsQuery } from "@/lib/features/questionsApiSlice"; // Commented out for dummy data usage
import StartScreen from "./StartScreen";
import EndScreen from "./EndScreen";

// Dummy data for production purposes
// eslint-disable-next-line react-hooks/exhaustive-deps
const dummyData:Question[] = [
  {
    _id:  "66c4ccd30c711b826a756a64",
    question: "Joseph Smith was the founder of what religion?",
    options: ["Buddhism", "Christianity", "Hinduism"],
    correctAnswer: "Mormonism",
    difficulty: "medium",
    category: "History",
  },
  {
    _id:  "66c4ca516d1b9270e02684d2",
    question: "Which kind of algorithm is Ron Rivest not famous for creating?",
    options: ["Hashing algorithm", "Asymmetric encryption", "Stream cipher"],
    correctAnswer: "Secret sharing scheme",
    difficulty: "hard",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ccd30c711b826a756a69",
    question: "In the Pok&eacute;mon series, what is Palkia&#039;s hidden ability?",
    options: ["Pressure", "Water Bubble", "Hydration"],
    correctAnswer: "Telepathy",
    difficulty: "hard",
    category: "Entertainment: Video Games",
  },
  {
    _id:  "66c4ca516d1b9270e02684cd",
    question: "What was the name given to Android 4.3?",
    options: ["Lollipop", "Nutella", "Froyo"],
    correctAnswer: "Jelly Bean",
    difficulty: "medium",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ccd30c711b826a756a78",
    question:
      "DragonForce&#039;s &#039;Through the Fire and Flames&#039; is widely considered to be the hardest song in the Guitar Hero series.",
    options: ["False"],
    correctAnswer: "True",
    difficulty: "medium",
    category: "Entertainment: Video Games",
  },
  {
    _id:  "66c4ca516d1b9270e02684b7",
    question: "Who is the founder of Palantir?",
    options: ["Mark Zuckerberg", "Marc Benioff", "Jack Dorsey"],
    correctAnswer: "Peter Thiel",
    difficulty: "hard",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ccd30c711b826a756a6f",
    question: "Activision created Battlefield 1.",
    options: ["True"],
    correctAnswer: "False",
    difficulty: "easy",
    category: "Entertainment: Video Games",
  },
  {
    _id:  "66c4ca516d1b9270e02684df",
    question:
      "In the programming language &quot;Python&quot;, which of these statements would display the string &quot;Hello World&quot; correctly?",
    options: [
      "console.log(&quot;Hello World&quot;)",
      "echo &quot;Hello World&quot;",
      "printf(&quot;Hello World&quot;)",
    ],
    correctAnswer: "print(&quot;Hello World&quot;)",
    difficulty: "medium",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ca516d1b9270e02684c3",
    question:
      "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
    options: ["HD Graphics 700 ", "HD Graphics 600", "HD Graphics 7000"],
    correctAnswer: "HD Graphics 500",
    difficulty: "easy",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ca516d1b9270e02684be",
    question: ".rs is the top-level domain for what country?",
    options: ["Romania", "Russia", "Rwanda"],
    correctAnswer: "Serbia",
    difficulty: "medium",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ca516d1b9270e02684bf",
    question: "Which of these is not a key value of Agile software development?",
    options: ["Individuals and interactions", "Customer collaboration", "Responding to change"],
    correctAnswer: "Comprehensive documentation",
    difficulty: "hard",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ca516d1b9270e02684cf",
    question: "What is the domain name for the country Tuvalu?",
    options: [".tu", ".tt", ".tl"],
    correctAnswer: ".tv",
    difficulty: "easy",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ca516d1b9270e02684e2",
    question:
      "Moore&#039;s law originally stated that the number of transistors on a microprocessor chip would double every...",
    options: ["Four Years", "Two Years", "Eight Years"],
    correctAnswer: "Year",
    difficulty: "medium",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ca516d1b9270e02684e1",
    question: "Which of these programming languages is a low-level language?",
    options: ["Python", "C#", "Pascal"],
    correctAnswer: "Assembly",
    difficulty: "medium",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ccd30c711b826a756a5f",
    question: "What was the UK &quot;Who Wants to be a Millionaire?&quot; cheating scandal known as?",
    options: ["Ingram Cheater", "Coughing Major", "Millionaire Crime"],
    correctAnswer: "Major Fraud",
    difficulty: "hard",
    category: "Entertainment: Television",
  },
  {
    _id:  "66c4ca516d1b9270e02684c6",
    question: "All of the following programs are classified as raster graphics editors EXCEPT:",
    options: ["Paint.NET", "GIMP", "Adobe Photoshop"],
    correctAnswer: "Inkscape",
    difficulty: "medium",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ca516d1b9270e02684b8",
    question: "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
    options: ["Cherry MX Black", "Cherry MX Red", "Cherry MX Brown"],
    correctAnswer: "Cherry MX Blue",
    difficulty: "hard",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ca516d1b9270e02684da",
    question: "The acronym &quot;RIP&quot; stands for which of these?",
    options: ["Runtime Instance Processes", "Regular Interval Processes", "Routine Inspection Protocol"],
    correctAnswer: "Routing Information Protocol",
    difficulty: "hard",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ca516d1b9270e02684b9",
    question: "How long is an IPv6 address?",
    options: ["32 bits", "64 bits", "128 bytes"],
    correctAnswer: "128 bits",
    difficulty: "easy",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ccd30c711b826a756a76",
    question:
      "&quot;Cube&quot;, &quot;Cube 2: Hypercube&quot; and &quot;Cube Zero&quot; were directed by the same person.",
    options: ["True"],
    correctAnswer: "False",
    difficulty: "hard",
    category: "Entertainment: Film",
  },
  {
    _id:  "66c4ca516d1b9270e02684c8",
    question: "Which computer hardware device provides an interface for all other connected devices to communicate?",
    options: ["Central Processing Unit", "Hard Disk Drive", "Random Access Memory"],
    correctAnswer: "Motherboard",
    difficulty: "easy",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ccd30c711b826a756a75",
    question: "Mirror&#039;s Edge Catalyst takes place in the City of...?",
    options: ["Mirrors", "Purity", "Diamonds"],
    correctAnswer: "Glass",
    difficulty: "medium",
    category: "Entertainment: Video Games",
  },
  {
    _id:  "66c4ca516d1b9270e02684d1",
    question: "Which of these is not a layer in the OSI model for data communications?",
    options: ["Application Layer", "Transport Layer", "Physical Layer"],
    correctAnswer: "Connection Layer",
    difficulty: "hard",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ca516d1b9270e02684d5",
    question: "The Harvard architecture for micro-controllers added which additional bus?",
    options: ["Address", "Data", "Control"],
    correctAnswer: "Instruction",
    difficulty: "hard",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ca516d1b9270e02684d7",
    question: "Which computer language would you associate Django framework with?",
    options: ["C#", "C++", "Java"],
    correctAnswer: "Python",
    difficulty: "easy",
    category: "Science: Computers",
  },
  {
    _id:  "66c4ccd30c711b826a756a71",
    question: "Which of these is NOT a name of a city in the main island of PLAYERUNKNOWN&#039;S BATTLEGROUNDS?",
    options: ["Yasnaya Polyana", "Pochinki", "Georgopol"],
    correctAnswer: "Belushya Guba",
    difficulty: "medium",
    category: "Entertainment: Video Games",
  },
  {
    _id:  "66c4ca516d1b9270e02684bc",
    question: "What amount of bits commonly equals one byte?",
    options: ["1", "2", "64"],
    correctAnswer: "8",
    difficulty: "easy",
    category: "Science: Computers",
  },
];


interface QuizFormProps {
  limit: number;
}

const QuizForm = ({ limit }: QuizFormProps) => {
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Commented out API fetching for dummy data usage
  // const { data, isLoading, error } = useGetQuestionsQuery({ limit });

  // Use dummy data instead of fetched data
  const data = { questions: dummyData };
  const isLoading = false;
  const error = null;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const questions: Question[] = data?.questions || [];

  const shuffledOptions = useMemo(() => {
    if (!questions[currentQuestionIndex]) return [];
    return [...questions[currentQuestionIndex].options, questions[currentQuestionIndex].correctAnswer].sort(
      () => Math.random() - 0.5
    );
  }, [questions, currentQuestionIndex]);

  if (isLoading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Error loading questions. Please try again later.
      </div>
    );
  if (questions.length === 0)
    return <div className="flex items-center justify-center min-h-screen">No questions available.</div>;

  const currentQuestion = questions[currentQuestionIndex];

  const handleStart = () => {
    setStarted(true);
    setScore(0);
    setQuizCompleted(false);
  };

  const handleAnswerSubmit = () => {
    if (selectedAnswer) {
      setShowAnswer(true);
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const renderQuizContent = () => (
    <Card className="w-full max-w-3xl mx-auto p-6">
      <CardHeader>
        <CardTitle className="text-2xl mb-4">
          Question {currentQuestionIndex + 1} of {questions.length}
        </CardTitle>
        <p className="text-xl">{currentQuestion.question}</p>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedAnswer || ""} onValueChange={setSelectedAnswer} className="space-y-4">
          {shuffledOptions.map((option, index) => (
            <div key={index} className="flex items-center space-x-3">
              <RadioGroupItem value={option} id={`option-${index}`} disabled={showAnswer} />
              <Label htmlFor={`option-${index}`} className="text-lg">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {showAnswer && (
          <div className="mt-6 p-4 bg-muted rounded-md">
            <p className="font-semibold text-lg">Correct Answer: {currentQuestion.correctAnswer}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between mt-6">
        {!showAnswer ? (
          <Button onClick={handleAnswerSubmit} disabled={!selectedAnswer} className="w-full">
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleNextQuestion} className="w-full">
            {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      {!started ? (
        <StartScreen onStart={handleStart} />
      ) : quizCompleted ? (
        <EndScreen score={score} totalQuestions={questions.length} onRestart={handleStart} />
      ) : (
        renderQuizContent()
      )}
    </div>
  );
};

export default QuizForm;

export const getDummyData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return res(dummyData);
    }, 600);
  });
};
