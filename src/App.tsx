import ThemeProvider from "react-bootstrap/ThemeProvider";
import Layout from "./components/Layout";
import SayHello from "./components/SayHello";
import Counter from "./features/counter/Counter";

export default function App() {
  return (
    <ThemeProvider
      data-bs-theme="dark"
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Layout>
        <SayHello message="Halo, Selamat Datang Di Aplikasi Counter" />
        <Counter />
      </Layout>
    </ThemeProvider>
  );
}
