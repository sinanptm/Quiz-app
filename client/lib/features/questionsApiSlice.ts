import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AdminLoginRequest, AdminLoginResponse,  QuestionQueryParams, QuestionsResponse } from "@/types";

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
    adminLogin: builder.mutation<AdminLoginResponse, AdminLoginRequest>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useGetQuestionsQuery, useAdminLoginMutation } = questionsApiSlice;

export default questionsApiSlice;
