const Features = () => {
  return (
    <>
      <div className="flex bg_gradient md:p-20 p-10 justify-center overflow-hidden items-center flex-col gap-4">
        <div className="flex flex-col text-white gap-4 text-left md:text-center ">
          <h1 className="md:text-4xl text-2xl font-bold">
            Features of{" "}
            <span className='text-[#EE3C99] '>R-Fuel</span> Token
          </h1>
          <p className="text-base font-light">
            Select your favorite social network and share our
            <br className="hidden md:block" />
            icons with your contacts or friends.
          </p>
        </div>
        <div className="grid relative grid-cols-1 md:grid-cols-5 text-center mt-20 h-full py-10">
          <div
            className="absolute inset-0"
            style={{
              content: "",
              position: "absolute",
              zIndex: "0",
              borderRadius: "900px",
              height: "100%",
              width: "100%",
              background:
                "linear-gradient(180deg, rgba(167, 36, 104, 0.80) 0%, rgba(14, 37, 157, 0.80) 100%)",
              filter: "blur(250px)",
            }}
          ></div>

          <div>
            <div data-aos="fade-up-left" className="z-10 rounded-2xl flex flex-col card m-5 text-white justify-center items-center max-w-xs  md:min-h-[400px] py-10 md:py-0">
              <img src="/assets/allusers.svg" width={60} height={70} />
              <div className="flex p-8 flex-col">
                <p className="text-xl font-semibold text-center">
                PREMIUM ACCESS
                </p>
                <p className="text-base mt-6 font-light leading-[28px]">
                  Unlock exclusive features and elevate your platform experience.
                </p>
              </div>
            </div>
          </div>

          <div>

            <div data-aos="fade-up-left" className="z-10 rounded-2xl flex flex-col card m-5 text-white justify-center items-center max-w-xs  md:min-h-[400px] py-10 md:py-0">
              <img src="/assets/wallet.svg" width={60} height={70} />
              <div className="flex p-8 flex-col">
                <p className="text-xl font-semibold text-center">
                DYNAMIC TRANSACTIONS
                </p>
                <p className="text-base mt-6 font-light leading-[28px]">
                  Pay for services,purchase goods, and simultaneously earn from your actions.
                </p>
              </div>
            </div>
          </div>
          <div className="md:mt-[-50px]">

            <div data-aos="fade-up-left" className="z-10 rounded-2xl flex flex-col card m-5 text-white justify-center items-center max-w-xs  md:min-h-[400px] py-10 md:py-0">
              <img src="/assets/below.svg" width={60} height={70} />
              <div className="flex p-8 flex-col">
                <p className="text-xl font-semibold text-center">
                SHAPE YOUR PLATFORM
                </p>
                <p className="text-base mt-6 font-light leading-[28px]">
                  Be more than just a user. Participate in key governance decisions,steering the directions of R-Fuel.
                </p>
              </div>
            </div>
          </div>
          <div>

            <div data-aos="fade-up-left" className="z-10 rounded-2xl flex flex-col card m-5 text-white justify-center items-center max-w-xs  md:min-h-[400px] py-10 md:py-0">
              <img src="/assets/claimrequest.svg" width={60} height={70} />
              <div className="flex p-8 flex-col">
                <p className="text-xl font-semibold text-center">
                REWARDS AT EVERY CORNER
                </p>
                <p className="text-base mt-6 font-light leading-[28px]">
                 Engage,interact, and get rewarded. Every action,every click, can earn you R-FUEL.
                </p>
              </div>
            </div>
          </div>
          <div>

            <div data-aos="fade-up-left" className="z-10 rounded-2xl flex flex-col card m-5 text-white justify-center items-center max-w-xs md:min-h-[400px] py-10 md:py-0">
              <img src="/assets/admintransfer.svg" width={60} height={70} />
              <div className="flex p-8 flex-col">
                <p className="text-xl font-semibold text-center">
                PEER-TO-PEER EXCELLENCE
                </p>
                <p className="text-base mt-6 font-light leading-[28px]">
                  Streamline all peer-to-peer activities with the agility and efficiency of the R-FUEL token.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>

  );
};

export default Features;
