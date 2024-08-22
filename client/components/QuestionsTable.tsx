import React from "react";
import { ThreeDCardDemo } from "./CustomCard";
import { timeQuizzes } from "@/constants";

export default function QuizTypesSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Choose Your Quiz Type</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {timeQuizzes.map((quiz) => (
          <ThreeDCardDemo
            key={quiz.id}
            image={quiz.image}
            heading={quiz.heading}
            text={quiz.text}
            id={quiz.id}
          />
        ))}
      </div>
    </section>
  );
}