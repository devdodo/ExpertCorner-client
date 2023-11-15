import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "../utilities/store"
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
