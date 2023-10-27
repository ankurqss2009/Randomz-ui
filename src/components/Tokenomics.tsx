const Tokenomics = () => {
  return (
    <div className="flex bg_gradient md:p-10 p-5 justify-center items-center flex-col gap-4 ">
      <div className="flex flex-col text-white gap-4  text-center">
        <h1 className="md:text-4xl text-2xl font-bold mt-4">
           <span className="text-[#EE3C99] ">R-Fuel</span> Tokenomics
        </h1>
        <p className="text-base font-light">
          Select your favorite social network and share our
          <br className="hidden md:block" />
          icons with your contacts or friends.
        </p>
        <img
          data-aos="fade"
          data-aos-duration="1000"
          loading="lazy"
          src="/assets/tokenomics2.svg"
          width={1000}
          height={600}
          alt="tokenomics"
        />
      </div>
    </div>
  );
};

export default Tokenomics;
