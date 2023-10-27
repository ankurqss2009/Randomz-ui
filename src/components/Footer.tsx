import { useState } from "react";
import toast from "react-hot-toast";

const Footer = () => {
  const [email,setEmail]=useState("");

  const handleClick = () => {
    if(email!=""){

      toast.success("You have successfully subscribed to R-Fuel")
    }else{
      toast.error("Pls enter a valid email address")
    }
  }
  return (
    <div>
      <footer className="bg-[#080808] md:p-10">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8 md:px-4 md:py-6 lg:py-8 p-10 md:grid-cols-3">
            <img src="/assets/randomz.png" alt="logo" className="md:hidden" width={140} />

            <div>
              <h2 className="mb-6 text-lg md:text-2xl font-bold text-white  ">
                Terms
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg md:text-2xl font-bold text-white  ">
                Contact us
              </h2>
              <ul className="text-gray-500  font-medium">

                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    support@randomz.io
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg md:text-2xl font-bold text-white">
                Community
              </h2>
              <ul className="text-gray-500 font-medium flex gap-4">
                <li className="mb-4">
                  <a href="https://instagram.com/randomz.io" target="_blank" className="hover:underline">
                    <img src="/assets/Instagram.png" width={40} height={40} alt="notfound" />
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://x.com/randomzio" target="_blank" className="hover:underline">
                    <img className="mt-1" src="/assets/Twitter.png" width={35} height={35} alt="notfound" />
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://discord.gg/yJVunKAb" target="_blank" className="hover:underline">
                    <img src="/assets/discord.png" width={40} height={40} alt="notfound" />
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://t.me/+cz_FyP0uTEk5YWQ1" target="_blank" className="hover:underline">
                    <img src="/assets/Telegram.png" width={40} height={40} alt="notfound" />
                  </a>
                </li>

              </ul>
            </div>
          </div>
          <div className="flex flex-col  px-4 ">
            <div className="flex  mb-10 flex-col gap-4 md:flex-row  bg-[#131313] p-3 my-10  md:max-w-xl text-white items-center justify-center rounded-md">
              <input
                type="email"
                name=""
                placeholder="Enter email address"
                id=""
                onChange={(e)=>{setEmail(e.target.value)}}
                value={email}
                className="w-full h-full bg-[#131313] p-3 text-white"
              />
              <button className="bg-[#EE3C99] md:w-24 w-full rounded-md p-2" onClick={handleClick}>Join</button>
            </div>
            <p className="text-[#858181] md:text-left text-center mb-4">randomz.io . All Rights Reserved.2023</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
