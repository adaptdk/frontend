export const Footer = () => {
  return (
    <footer className="bg-blue-900 p-8 grid grid-cols-2 gap-2">
      <div className="">
        <div>
          <img src="/logo.svg" alt="Logo" />
        </div>
        <div className="mt-4 text-white font-semibold flex flex-col space-y-2">
          <a href="/">Kontakt os</a>
          <a href="/">Nyheder</a>
          <a href="/">Privacy policy</a>
          <a href="/">Cookies</a>
        </div>
        {/* Maybe some social links here? */}
      </div>
      <div className="space-x-8">
        <button className="text-white font-semibold underline">Europa</button>
        <button className="text-white font-semibold underline">Asien</button>
        {/* Maybe a cool map? */}
      </div>
    </footer>
  );
};
