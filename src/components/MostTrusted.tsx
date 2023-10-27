
const MostTrusted = () => {
    return (
        <div className="bg_gradient grid gap-10 grid-cols-1 sm:grid-cols-1 overflow-hidden md:grid-cols-2 p-8 md:p-20 justify-center items-center">
            <div className="flex gap-4 h-full w-full justify-end items-center order-2 md:order-none">
                <div  data-aos="fade-left"
           className="card p-14 md:min-h-[340px] md:max-w-xs w-full  flex flex-col text-white gap-4">
                    <img width={50} height={50} src="/assets/wallet.svg" alt="notfound" />
                    <h1 className="text-xl font-semibold leading-8">
                        Get a personalized
                        crypto wallet
                    </h1>
                    <p className="text-base font-light">
                        {/*Select your favorite social network and share our
                        icons with your contacts or friends. If you are legend.*/}
                        Our AI-driven profile optimization guarantees that users don't just get data - they receive the most precise, tailored
                        {/*insights aligned with their skills and interests.
                        Every user interaction becomes a step towards self- discovery and global connectivity.*/}
                    </p>
                </div>
                <div  className=" gap-4 sm:flex hidden flex-col text-white text-center">
                    <div data-aos="fade-left" className="card p-6 w-full min-h-[200px] md:max-w-[200px] justify-center items-center flex flex-col">
                        <img src="/assets/randomz.png" alt="notfound" />
                        <p className="text-base mt-4">
                          {/*  Play games using
                            our native token and win*/}
                            R-Fuel isn't just another platform. We're the vanguard.
                            {/*Merging the vigor of Social Media with the potent possibilities of Cryptocurrency,
                            all with the refined touch of Artificial Intelligence, we've set a new gold standard in
                            the digital arena.*/}

                        </p>
                    </div>
                    <div data-aos="fade-right" className="card p-6 w-full min-h-[200px] md:max-w-[200px] justify-center items-center flex-col flex">
                        <img src="/assets/randomz.png" alt="notfound" /><p className="text-base mt-4">
                        {/*Play games using
                            our native token and win*/}
                        Our robust fusion of advanced technologies is not just about global
                        {/*connectivity. It's about empowering every individual to reach their pinnacle,
                        to bask in the spotlight, and to reap tangible rewards.*/}

                    </p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" className="flex text-white flex-col gap-4  h-full w-full order-1 md:order-none">
                <h1 className="md:text-4xl  text-3xl font-semibold leading-[50px] md:inline hidden">
                    Most trusted platform
                    <br />
                    for blockchain apps
                </h1>
                <h1 className="md:text-4xl  text-3xl font-normal leading-[50px]   md:hidden inline">
                    Most trusted platform
                    for blockchain apps
                </h1>
                <p className="leading-8 font-normal mt-4 text-lg  md:inline hidden">
                    {/*Select your favorite social network and share our
                    <br />
                    icons with your contacts or friends. If you don’t
                    <br />
                    have these social networks, simply copy the link
                    <br />
                    and paste it in the one you use. For more
                    <br />
                    information read*/}
                    <b>Earn while you engage</b><br/>
                    Dive into a world where your actions and contributions are valued,
                    both in connections and tokens. From the moment of registration and verification
                    to content creation, sharing, service delivery, and more every step is an
                    opportunity.
                </p>
                <p className="leading-8 font-light mt-4 text-lg  md:hidden inline">
                    Select your favorite social network and share our icons with your contacts or friends. If you don’t have these social networks, simply copy the link and paste
                    it in the one you use. For more information read the blog on website.
                </p>
            </div>
        </div>
    )
}

export default MostTrusted