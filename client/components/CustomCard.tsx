'use client'

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { CardProps } from "@/types";
import Link from "next/link";

export const ThreeDCardDemo = ({
  image = "/default.jpg",
  heading = "Default Heading",
  text = "Default text. Hover over this card to unleash the power of CSS perspective.",
  id,
}: CardProps) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-opacity-15 bg-indigo-600 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.1] w-full h-full rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold">
          {heading}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-sm mt-2">
          {text}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            priority
            height="1000"
            width="1000"
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center mt-6">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 dark:bg-white dark:text-black text-white text-sm font-bold transition-colors">
            <Link href={`/quiz?limit=${id}`}>Start Quiz</Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};