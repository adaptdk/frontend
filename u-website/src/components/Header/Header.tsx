export const Header = () => {
  return (
    <header className="bg-blue-900 p-8 flex justify-between">
      <div>
        <img src="/logo.svg" alt="Logo" />
      </div>
      <div className="space-x-4 text-white font-semibold">
        <a href="/">Cases</a>
        <a href="/">Om os</a>
        <a href="/">Nyheder</a>
        <a href="/">Investor</a>
      </div>
      {/* Maybe a language selector? */}
    </header>
  );
};
