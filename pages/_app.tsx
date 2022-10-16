import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../components/Layout/Layout";
import store from "../store/store";
import "../styles/globals.css";
import "../styles/NewDiary.css";

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
