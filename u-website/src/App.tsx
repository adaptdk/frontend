import { Counter } from "components/Counter";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Hero } from "components/Hero";
import { Lights } from "components/Lights";
import { NewsBanner } from "components/NewsBanner";
import { Santa } from "components/Santa";
import Snowfall from "react-snowfall";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
        snowflakeCount={25000}
        speed={[1, 2]}
        wind={[1, 2]}
        radius={[1, 5]}
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
