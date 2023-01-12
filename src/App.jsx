import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";

export default function App() {
  return (
    <div>
      <p>header</p>
      <Header/>

      <p>content</p>
      <Content/>

      <p>footer</p>
      <Footer/>
    </div>
  );
}
