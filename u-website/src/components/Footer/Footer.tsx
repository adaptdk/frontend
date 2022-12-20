
export const Footer = () => {
  return (
    <footer className="bg-green-900 p-8 grid grid-cols-2 gap-2 bg-footer-pattern bg-center ">
        <div>
        <div>
          <img src="/logo.svg" alt="Logo" />
        </div>

        <div className="mt-4 font-semibold flex flex-col space-y-2 text-yellow-500">
          <h1 className="text-6xl">From us to you - happy holidays!</h1>
          <a href="/">Kontakt os</a>
          <a href="/">Nyheder</a>
          <a href="/">Privacy policy</a>
          <a href="/">Cookies</a>
        </div>
        {/* Maybe some social links here? */}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="space-x-8 drop-shadow-2xl">
        <button className="text-yellow-500 font-semibold underline text-xl">Europa</button>
        <button className="text-blue-500 font-semibold underline text-5xl">Asien</button>
        <button className="text-red-500 font-semibold underline text-sm">Africa</button>
        <button className="text-green-500 font-semibold underline text-2xl">America</button>
        <button className="text-purple-500 font-semibold underline text-6xl">Australia</button>
        </div>
        <div className="mt-8"><img src="/map.jpg" alt="" /></div>
        {/* Maybe a cool map? */}
      </div>
    </footer>
  );
};
