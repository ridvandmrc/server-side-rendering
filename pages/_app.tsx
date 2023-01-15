import "../styles/globals.css";
import { MainLayout } from "../src/layout";

export default function App({ Component, pageProps }: any) {
  const component = Component.pageLayout ?? ((page: any) => page);
  return <MainLayout>{component(<Component {...pageProps} />)}</MainLayout>;
}
