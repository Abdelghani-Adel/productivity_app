import "../styles/globals.css";
import "../styles/NewDiary.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/store";
import Layout from "../components/Layout/Layout";
import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { getDiaries } from "../store/slices/diarySlice";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
