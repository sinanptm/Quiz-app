import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Question } from "@/types";
import { useGetQuestionsQuery } from "@/lib/features/questionsApiSlice";
import StartScreen from "./StartScreen";
import EndScreen from "./EndScreen";

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

  const { data, isLoading, error } = useGetQuestionsQuery({ limit });

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
