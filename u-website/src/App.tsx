import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Hero } from "components/Hero";
import { Lights } from "components/Lights";
import { NewsBanner } from "components/NewsBanner";
import { Santa } from "components/Santa";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Lights />
      <div>
        <Header />
        <Hero />
        <NewsBanner />
        <Santa />
      </div>
      <Footer />
    </div>
  );
};

export default App;
