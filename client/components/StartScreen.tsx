import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => (
  <Card className="w-full max-w-3xl p-6 mx-auto">
    <CardHeader>
      <CardTitle className="text-3xl mb-4">Welcome to the Quiz!</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-xl">Click the button below to start the quiz.</p>
    </CardContent>
    <CardFooter>
      <Button onClick={onStart} className="w-full text-lg py-6">
        Start Quiz
      </Button>
    </CardFooter>
  </Card>
);

export default StartScreen;
