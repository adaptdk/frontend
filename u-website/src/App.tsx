import { Counter } from "components/Counter";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Hero } from "components/Hero";
import { Lights } from "components/Lights";
import { NewsBanner } from "components/NewsBanner";
import Snowfall from "react-snowfall";
import { Santa } from "components/Santa";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
        snowflakeCount={750}
        speed={[7, 10]}
        wind={[4, 10]}
        radius={[1, 15]}
      />
      <Lights />
      <div>
        <Header />
        <Hero />
        <NewsBanner />
        <Santa />
      </div>
      <Counter />
      <Footer />
    </div>
  );
};

export default App;
