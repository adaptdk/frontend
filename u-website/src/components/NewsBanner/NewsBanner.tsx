export const NewsBanner = () => {
  return (
    <div style={{ backgroundImage: `url("https://www.treehugger.com/thmb/yb4PF1tDeerN0gQY06APe-Q_MPg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2014__12__snowflake-84c87424d5734b03ab1ca695c5a423c6.jpg")` }}>
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex">
          <h2 className="uppercase font-bold text-3xl mb-8 text-red-500 skew-x-12 -rotate-12">
            Seneste nyheder
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="font-bold duration-100">
            <a href="/">
              <img src="/pension.jpg" alt="pension" className="mb-4 rounded-[50%] hover:rotate-[1080deg] duration-[2000ms]"/>
              <p className="space-x-3">
                <span className="text-red-500">16 dec</span>
                <span className="text-red-500">2022</span>
              </p>
              <h3 className="text-2xl text-green-500">
                Industriens Pension og PensionDanmark flytter mere end 1,2
                millioner borgere over på mit.dk
              </h3>
            </a>
          </div>
          <div className="space-y-6 border-4 border-red-500 rounded-[30%] p-16 font-bold">
            <div className="backdrop-blur hover:outline outline-red-500">
              <a href="/">
                <p>
                  <span className="text-red-500">16 nov -{" "}</span>
                  <span className="text-red-500">2022</span>
                </p>
                <h3 className="text-2xl text-green-500">
                  Ny Netcompany-løsning giver danskerne mulighed for at blive
                  indlagt i hjemmet
                </h3>
              </a>
            </div>

            <div className="backdrop-blur hover:outline outline-red-500">
              <a href="/">
                <p>
                  <span className="text-red-500">14 nov -{" "}</span>
                  <span className="text-red-500">2022</span>
                </p>
                <h3 className="text-2xl text-green-500">
                  Netcompany vinder den prestigefulde Emerging Tech Award ved UK IT
                  Awards i London
                </h3>
              </a>
            </div>

            <div className="backdrop-blur hover:outline outline-red-500">
              <a href="/">
                <p>
                  <span className="text-red-500">11 nov  -{" "}</span>
                  <span className="text-red-500">2022</span>
                </p>
                <h3 className="text-2xl text-green-500">
                  Netcompany er blandt de mest foretrukne arbejdspladser for erfarne
                  IT-professionelle i Danmark
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
