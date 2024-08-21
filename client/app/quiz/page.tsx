"use client";
import { useGetQuestionsQuery } from "@/lib/features/questionsApiSlice";
import React from "react";
import QuestionNavigator from "@/components/QuestionNavigator"; // Import the new component

const QuizPage = () => {
  const { data, isLoading, error } = useGetQuestionsQuery({ limit: 10, offset: 0 });

  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      {!error && !isLoading && data?.questions && (
        <div className="bg-gradient-to-tr from-fuchsia-600 via-violet-600 to-purple-600 w-full max-w-3xl p-6 rounded-lg shadow-md ">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Quiz Questions</h2>
          <QuestionNavigator questions={data.questions} />
        </div>
      )}
    </div>
  );
};

export default QuizPage;
