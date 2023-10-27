const AboutUs = () => {
    return (
        <>
            <div className="grid grid-flow-row-dense lg:grid-cols-2 p-10  bg-[#131313] gap-6">
                <div className="about-section lg:mt-24">
                    <img data-aos="fade" data-aos-duration="1000" loading="lazy" src="/assets/aboutUs.PNG" width="700"
                        height="600" alt="tokenomics" className="aos-init aos-animate" />
                </div>
                <div className="">
                    <h1 className="text-5xl text-white font-extrabold my-5">About Us</h1>
                    <p className="about-section text-md my-5">
                        <span className="font-bold">Beyond Connectivity - </span> A Future Forged with Precision. Empowering every user with flawless
                        peer-to-peer interactions, our vision centers on harnessing cutting-edge technology to
                        create connections that are not just frequent but also meaningful.</p>

                    <p className="about-section text-md my-5">
                        <span className="font-bold">At R-Fuel App, </span> we've designed a unique platform, merging the finest elements of Social Media,
                        Freelancing, Talent Management, Event Management, and beyond. Picture a digital realm where seamless
                        peer-to-peer connections transcend borders, and where every feature you love from various platforms
                        now harmoniously co-exists under one canopy.</p>

                    <p className="about-section text-md my-5">
                        <span className="font-bold">Our native token, </span> R-FUEL, isn't just another cryptocurrency, it’s the lifeblood that fuels every
                        aspect of the R-Fuel ecosystem, ensuring seamless transactions, engaging experiences, and an empowered community.</p>
                </div>
            </div>
        </>
    )
}

export default AboutUs