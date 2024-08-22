import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Question } from "@/types";
import { useGetQuestionsQuery } from "@/lib/features/questionsApiSlice";

interface QuizFormProps {
  limit: number;
}

const QuizForm = ({ limit }: QuizFormProps) => {
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const { data, isLoading, error } = useGetQuestionsQuery({ limit });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading questions. Please try again later.</div>;
  if (!data?.questions || data.questions.length === 0) return <div>No questions available.</div>;

  const questions:Question[] = data.questions;
  const currentQuestion = questions[currentQuestionIndex];

  console.log(questions);
  

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswerSubmit = () => {
    if (selectedAnswer) {
      setShowAnswer(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      setStarted(false);
      setCurrentQuestionIndex(0);
    }
  };

  if (!started) {
    return (
      <Card className="min-w-[300px] max-w-fit  p-5 mx-auto mt-96">
        <CardHeader>
          <CardTitle>Welcome to the Quiz!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Click the button below to start the quiz.</p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleStart}>Start Quiz</Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>{currentQuestion.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup 
          value={selectedAnswer || ""} 
          onValueChange={setSelectedAnswer} 
          className="space-y-2"
        >
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem 
                value={option} 
                id={`option-${index}`} 
                disabled={showAnswer} 
              />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
        {showAnswer && (
          <div className="mt-4 p-2 bg-muted rounded-md">
            <p className="font-semibold">
              Correct Answer: {currentQuestion.correctAnswer}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {!showAnswer ? (
          <Button onClick={handleAnswerSubmit} disabled={!selectedAnswer}>
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleNextQuestion}>
            {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuizForm;
