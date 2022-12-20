export const NewsBanner = () => {
  return (
    <div className="max-w-7xl mx-auto my-16 px-4">
      <h2 className="uppercase font-semibold text-3xl text-blue-900 mb-8">
        Seneste nyheder
      </h2>
      <div className=" grid grid-cols-2 gap-8">
        <div>
          <a href="/">
            <img src="/pension.jpg" alt="pension" className="mb-4" />
            <p className="space-x-3">
              <span className="text-red-400 font-semibold">16 dec</span>
              <span>2022</span>
            </p>
            <h3 className="text-2xl font-light">
              Industriens Pension og PensionDanmark flytter mere end 1,2
              millioner borgere over på mit.dk
            </h3>
          </a>
        </div>
        <div className="space-x-10">
          <a href="/">
            <p>
              <span className="text-red-400 font-semibold">16 nov</span> -{" "}
              <span>2022</span>
            </p>
            <h3 className="text-2xl font-light">
              Ny Netcompany-løsning giver danskerne mulighed for at blive
              indlagt i hjemmet
            </h3>
          </a>
          <a href="/">
            <p>
              <span className="text-red-400 font-semibold">14 nov</span> -{" "}
              <span>2022</span>
            </p>
            <h3 className="text-2xl font-light">
              Netcompany vinder den prestigefulde Emerging Tech Award ved UK IT
              Awards i London
            </h3>
          </a>
          <a href="/">
            <p>
              <span className="text-red-400 font-semibold">11 nov</span> -{" "}
              <span>2022</span>
            </p>
            <h3 className="text-2xl font-light">
              Netcompany er blandt de mest foretrukne arbejdspladser for erfarne
              IT-professionelle i Danmark
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
};
