import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

interface Diary {
  _id: string;
  date: string;
  mode: string;
  wishes: string[];
  achievements: string[];
  badNews: string[];
  goodNews: string[];
  dayEvent: string;
  lessons: string[];
}

// Define a service using a base URL and expected endpoints
export const diariesApi = createApi({
  reducerPath: "diariesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getDiaries: builder.query<Diary[], void>({
      query: () => `/diaries`,
    }),
    // getDiaries: builder.query('/diaries')
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDiariesQuery } = diariesApi;
export default diariesApi;
