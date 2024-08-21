'use client'
import { useGetQuestionsQuery } from "@/lib/features/questionsApiSlice";
import React from 'react'

const QuizPage = () => {
    const { data, isLoading, error } = useGetQuestionsQuery({ limit: 10, offset: 0 });

  return (
    <div>
        {!error&&!isLoading && (
            <div className="flex">

            </div>
         )}
    </div>
  )
}

export default QuizPage