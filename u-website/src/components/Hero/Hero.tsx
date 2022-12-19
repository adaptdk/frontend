export const Hero = () => {
  return (
    <div
      style={{ backgroundImage: "url('/composable-hero.jpg')" }}
      className="h-[50vh] bg-cover flex flex-col justify-end p-10"
    >
      <div className="space-y-6">
        <p className="bg-red-400 px-2 py-1 text-white inline-block">
          Privat sektor
        </p>
        <h1 className="text-white font-semibold text-6xl">
          Netcompany lancerer composable enterprise framework
        </h1>
        <a
          href="/"
          className="border border-white bg-[rgba(255,255,255,0.2)] font-semibold text-white px-4 py-2 inline-block"
        >
          Læs mere
        </a>
      </div>
    </div>
  );
};
