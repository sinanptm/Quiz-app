'use client'
import React, { Suspense } from "react";
import QuizForm from "@/components/QuizForm";
import { useSearchParams } from "next/navigation";

const QuizPage = () => {
  const params = useSearchParams();
  const limit = parseInt(params.get("limit") || '10', 10);

  return (
    <Suspense>
      <QuizForm limit={limit} />
    </Suspense>
  );
};

export default QuizPage;
