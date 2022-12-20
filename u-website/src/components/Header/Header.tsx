export const Header = () => {
  return (
    <header className="bg-[url('/header-bg.jpg')] bg-repeat-x bg-contain p-8 flex justify-between items-center">
      <div>
        <img src="/logo.svg" alt="Logo" className="w-auto h-12" />
      </div>
      <div className="space-x-4 font-semibold text-red-500">
        <a href="/">Cases</a>
        <a href="/">Om os</a>
        <a href="/">Nyheder</a>
        <a href="/">Investor</a>
      </div>
      {/* Maybe a language selector? */}
    </header>
  );
};
