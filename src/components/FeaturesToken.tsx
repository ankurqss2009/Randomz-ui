const FeaturesToken = () => {
  return (
    <>
      {/* <div className="flex bg_gradient md:p-20 p-10 justify-center items-center flex-col gap-4">
        <div className="flex flex-col text-white gap-4 text-left md:text-center ">
          <h1 className="md:text-4xl text-2xl font-bold">
            Features of <span className="text-[#EE3C99]">Randomz</span> Token
          </h1>
          <p className="text-base font-light">
            Select your favorite social network and share our
            <br className="hidden md:block" />
            icons with your contacts or friends.
          </p>
        </div>
        <div className="flex-row max-w-4xl flex text-white gap-6 mt-10 justify-center flex-wrap md:flex-nowrap items-end w-[15rem]">
          <div className="flex bg-[#0D0D1B] h-full max-w-xs flex-col gap-4 items-start justify-center shadow-inner shadow-[#EE3C99] md:p-8 p-10 md:px-10 rounded-[38px]">
            <div className="flex justify-center items-center p-6  rounded-full  bg-[#1E1E1E]">
              <img src="/assets/red.svg" width={40} height={40} alt="notfound" />
            </div>
            <p className="font-light text-[#9E9E9E]">
              Select your favorite social network and share our new icons with
              your contacts or friends for better experience here with
            </p>
          </div>
          <div className="flex bg-[#0D0D1B] gap-4 flex-col items-start md:max-h-60 justify-center shadow-inner shadow-[#EE3C99] md:p-8 md:px-12 p-10 rounded-[38px]">
            <div className="flex justify-center items-center p-6  rounded-full  bg-[#1E1E1E]">
              <img src="/assets/red.svg" width={40} height={40} alt="notfound" />
            </div>
            <p className="font-light text-[#9E9E9E]">
              Select your favorite social network and share our new icons with
              your contacts or friends for better experience here with
            </p>
          </div>
        </div>
        <div className="flex-row max-w-5xl flex  text-white gap-6 mt-10 justify-center flex-wrap md:flex-nowrap items-start w-full">
          <div className="flex bg-[#0D0D1B] md:flex-row flex-col items-start  gap-4 md:items-center justify-center shadow-inner shadow-[#EE3C99] md:p-8 p-10 rounded-[38px]">
            <div className="flex justify-center items-center p-6  rounded-full  bg-[#1E1E1E]">
              <img src="/assets/blue.svg" width={40} height={40} alt="notfound" />
            </div>
            <p className="font-light text-[#9E9E9E]">
              Select your favorite social network and share our new icons with
              your contacts or friends for better experience here with
            </p>
          </div>
          <div className="flex bg-[#0D0D1B] h-full max-w-xs flex-col gap-4 items-start justify-center shadow-inner shadow-[#EE3C99] p-8 px-10 rounded-[38px]">
            <div className="flex justify-center items-center p-6  rounded-full  bg-[#1E1E1E]">
              <img src="/assets/yellow.svg" width={40} height={40} alt="notfound" />
            </div>
            <p className="font-light text-[#9E9E9E]">
              Select your favorite social network and share our new icons with
              your contacts or friends for better experience here with
            </p>
          </div>
        </div>
        <div className="flex bg-[#0D0D1B] md:mt-[-140px] h-full max-w-xs flex-col gap-4 items-start justify-center shadow-inner shadow-[#EE3C99] p-8 px-10 rounded-[38px]">
          <div className="flex justify-center items-center p-6  rounded-full  bg-[#1E1E1E]">
            <img src="/assets/yellow.svg" width={40} height={40} alt="notfound" />
          </div>
          <p className="font-light text-[#9E9E9E]">
            Select your favorite social network and share our new icons with
            your contacts or friends for better experience here with
          </p>
        </div>
      </div> */}



      {/* <div className="md:p-10 card ">
        <div className="mb-20 w-[100%] lg:w-[44rem] text-white  ">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="md:w-full card text-sm text-left  ">
              <thead className="md:text-xl uppercase border-2  border-white">
                <tr>
                  <th scope="col" className="border-2 border-white px-6 py-3">
                    Sale
                  </th>
                  <th scope="col" className="border-2 border-white px-6 py-3">
                    Rate
                  </th>
                  <th scope="col" className="border-2 border-white px-6 py-3">
                    Earning Potential
                  </th>
                </tr>
              </thead>
              <tbody className="text-lg">
                <tr className="border-2 border-white">
                  <th scope="row" className="border-2 border-white px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Private Sale A
                  </th>
                  <td className="border-2 border-white px-6 py-4">
                    0.01 USDT
                  </td>
                  <td className="border-2 border-white px-6 py-4">
                    13000%
                  </td>
                </tr>
                <tr className="">
                  <th scope="row" className="border-2 border-white px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Private Sale A
                  </th>
                  <td className="border-2 border-white px-6 py-4">
                    0.01 USDT
                  </td>
                  <td className="border-2 border-white px-6 py-4">
                    6500%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        <div className="grid lg:grid-cols-7 justify-center items-end text-center">
          <div className="m-3 w-[15rem] md:w-full">
            <div className="card border-2 border-purple-500 rounded-xl text-white h-[15rem]  lg:h-[13rem] bg-red-400 m-3 flex flex-col justify-center items-center">
            <img className="lg:-mt-[4rem] -mt-[6rem] mb-[1rem] lg:mb-[2rem] lg:h-[5rem] h-[4rem]" src="assets/plane.svg" alt="" />
              <img src="assets/USDT.svg" alt="" height="50" width="50" />
              <p className="text-2xl">0.1 </p>
              <p className="text-2xl">USDT</p>
            </div>
            <p className="my-5 text-xl text-white">ITO Phase-I</p>
          </div>
          <div className="m-3 w-[15rem] md:w-full">
            <div className="card border-2 border-purple-500 rounded-xl text-white h-[15rem]  lg:h-[15rem] bg-red-400 m-3 flex flex-col justify-center items-center">
              <img className="lg:-mt-[5rem] -mt-[6rem] mb-[1rem] lg:mb-[3rem] lg:h-[5rem] h-[4rem]" src="assets/plane.svg" alt="" />
              <img src="assets/USDT.svg" alt="" height="50" width="50" />
              <p className="text-2xl">0.2 </p>
              <p className="text-2xl">USDT</p>
            </div>
            <p className="my-5 text-xl text-white">ITO Phase-II</p>
          </div>
          <div className="m-3 w-[15rem] md:w-full">
            <div className="card border-2 border-purple-500 rounded-xl text-white h-[15rem]  lg:h-[17rem] bg-red-400 m-3 flex flex-col justify-center items-center">
              <img className="lg:-mt-[6rem] -mt-[6rem] mb-[1rem] lg:mb-[3rem] lg:h-[5rem] h-[4rem]" src="assets/plane.svg" alt="" />
              <img src="assets/USDT.svg" alt="" height="50" width="50" />
              <p className="text-2xl">0.3 </p>
              <p className="text-2xl">USDT</p>
            </div>
            <p className="my-5 text-xl text-white">ITO Phase-III</p>
          </div>
          <div className="m-3 w-[15rem] md:w-full">
            <div className="card border-2 border-purple-500 rounded-xl text-white h-[15rem]  lg:h-[19rem] bg-red-400 m-3 flex flex-col justify-center items-center">
              <img className="lg:-mt-[7rem] -mt-[6rem] mb-[1rem] lg:mb-[5rem] lg:h-[5rem] h-[4rem]" src="assets/plane.svg" alt="" />
              <img src="assets/USDT.svg" alt="" height="50" width="50" />
              <p className="text-2xl">0.4 </p>
              <p className="text-2xl">USDT</p>
            </div>
            <p className="my-5 text-xl text-white">ITO Phase-IV</p>
          </div>
          <div className="m-3 w-[15rem] md:w-full">
            <div className="card border-2 border-purple-500 rounded-xl text-white h-[15rem]  lg:h-[21rem] bg-red-400 m-3 flex flex-col justify-center items-center">
              <img className="lg:-mt-[8rem] -mt-[6rem] mb-[1rem] lg:mb-[5rem] lg:h-[5rem] h-[4rem]" src="assets/plane.svg" alt="" />
              <img src="assets/USDT.svg" alt="" height="50" width="50" />
              <p className="text-2xl">0.5 </p>
              <p className="text-2xl">USDT</p>
            </div>
            <p className="my-5 text-xl text-white">ITO Phase-V</p>
          </div>
          <div className="m-3 w-[15rem] md:w-full">
            <div className="card border-2 border-purple-500 rounded-xl text-white h-[15rem]  lg:h-[23rem] bg-red-400 m-3 flex flex-col justify-center items-center">
              <img className="lg:-mt-[10rem] -mt-[6rem] mb-[1rem] lg:mb-[5rem] lg:h-[5rem] h-[4rem]" src="assets/plane.svg" alt="" />
              <img src="assets/USDT.svg" alt="" height="50" width="50" />
              <p className="text-2xl">0.6 </p>
              <p className="text-2xl">USDT</p>
            </div>
            <p className="my-5 text-xl text-white">ITO Phase-VI</p>
          </div>

          <div className="m-3 w-[15rem] md:w-full">
            <div className="card border-2 border-purple-500 rounded-xl text-white h-[15rem]  lg:h-[25rem] m-3 flex flex-col justify-center items-center">
              <img className="lg:-mt-[10rem] -mt-[4rem] mb-[1rem] lg:mb-[5rem] lg:h-[5rem] h-[4rem]" src="assets/plane.svg" alt="" />
              <img className="lg:h-[5rem] h-[4rem]" src="assets/USDT.svg" alt="" />
              <p className="text-2xl my-2">1.30 </p>
              <p className="text-2xl">USDT</p>
            </div>
            <p className="my-5 text-2xl text-white">LAUNCH</p>
          </div>
        </div>
      </div> */}
    </>


  );
};

export default FeaturesToken;
