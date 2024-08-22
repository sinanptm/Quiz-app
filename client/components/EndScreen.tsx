import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface EndScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const EndScreen = ({ score, totalQuestions, onRestart }: EndScreenProps) => (
  <Card className="w-full max-w-3xl p-6 mx-auto">
    <CardHeader>
      <CardTitle className="text-3xl mb-4">Quiz Completed!</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-2xl mb-4">
        Your final score: {score} out of {totalQuestions}
      </p>
      <p className="text-xl">Percentage: {((score / totalQuestions) * 100).toFixed(2)}%</p>
    </CardContent>
    <CardFooter>
      <Button onClick={onRestart} className="w-full text-lg py-6">
        Restart Quiz
      </Button>
    </CardFooter>
  </Card>
);

export default EndScreen;
