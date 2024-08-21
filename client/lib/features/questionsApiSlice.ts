import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Question, QuestionQueryParams, QuestionsResponse } from "@/types";

const questionsApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
  }),
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionsResponse, QuestionQueryParams>({
      query: ({ limit, offset, category }) => ({
        url: "/questions",
        params: { limit, offset, category },
      }),
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApiSlice;

export default questionsApiSlice;
