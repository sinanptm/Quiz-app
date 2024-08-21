import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Question } from '@/types';

const QuestionNavigator = ({ questions }: { questions: Question[] }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = questions[currentQuestionIndex];

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    return (
        <div className="flex flex-col items-center ">
            <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md mb-6">
                <p className="text-xl font-semibold text-gray-900 mb-4">{currentQuestion.question}</p>
                <div className="flex justify-evenly items-center w-full my-20 flex-wrap">
                    {currentQuestion.options.map((option, i) => (
                        <Button key={i} variant="outline" className="w-full">
                            {option}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="flex justify-end w-full max-w-md">
                {currentQuestionIndex < questions.length - 1 && (
                    <Button onClick={handleNextQuestion} variant="secondary">
                        Next
                    </Button>
                )}
            </div>
        </div>
    );
};

export default QuestionNavigator;
