import "./style.css";

export const Hero = () => {
  return (
    <div
      style={{ backgroundImage: "url('/christmas-bg.webp')" }}
      className="h-[50vh] bg-cover flex flex-col justify-end"
    >
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="space-y-6 max-w-7xl flex">
        <div className="w-full h-full self-end">
          <img src="/santa-claus.png" className="self-end" />
        </div>

        <div className="self-center p-14">
          <h1 className="text-white font-semibold text-6xl">
            Netcompany lancerer composable enterprise framework
          </h1>
          <a
            href="/"
            className="bg-[#BB2528] font-semibold text-white px-4 py-2 inline-block"
          >
            Læs mere
          </a>
        </div>
      </div>
    </div>
  );
};
