"use client";
import React from "react";
import QuizForm from "@/components/QuizForm";
import { useSearchParams } from "next/navigation";

const QuizPage = () => {
  const params = useSearchParams();
  const limit = parseInt(params.get("limit") || '10', 10);

  return (
    <div className="flex items-center justify-center">
      <QuizForm limit={limit} />
    </div>
  );
};

export default QuizPage;
