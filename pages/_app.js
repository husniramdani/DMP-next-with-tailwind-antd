import "@styles/index.css";
import "antd/dist/antd.css";
// import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }) {
  return (
    // <ThemeProvider attribute="class">
      <Component {...pageProps} />
    // </ThemeProvider>
  );
}

export default App;
