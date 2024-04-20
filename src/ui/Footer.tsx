import { Flex } from "antd";
import images from "../constants";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaApple,
} from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
import { BiLogoPlayStore } from "react-icons/bi";
function Footer() {
  return (
    <Flex className="overflow-hidden text-white flex-col">
      <Flex className=" md:flex-row flex-col bg-[#2BA0AF] justify-around  p-5">
        <div className="m-2 space-y-5">
          <img src={images.Today} className="h-[70px] " alt="todays logo" />
          <p className="lg:w-[24rem]">
            The best Xultions, we hold long standing and robust trade
            relationships with all major airlines, specialist airforce
            consolidators.
          </p>
          <Flex className=" text-white space-x-3">
            <a href="#" ><FaYoutube size={20} /></a>
            <a href="#" ><FaFacebookF size={20} /></a>
            <a href="#" ><FaInstagram size={20} /></a>
            <a href="#" ><FaTelegramPlane size={20} /></a>
            <a href="#" ><FaTiktok size={20} /></a>
          </Flex>
        </div>
        <Flex className="space-x-20">
          <Flex className="flex-col my-7 space-y-1.5 text-black">
            <p className="text-white font-semibold">About Us</p>
            <a href="#" >About us</a>
            <a href="#" >News and Blog</a>
            <a href="#" >Investors</a>
            <a href="#" >Affililates & Partners</a>
            <a href="#" >Suppliers</a>
          </Flex>
          <Flex className="flex-col my-7 space-y-1.5 text-black">
            <p className="text-white font-semibold">Support</p>
            <a href="#" >FAQs</a>
            <a href="#" >Visit support center</a>
            <a href="#" >Retrieve Order info</a>
            <a href="#" >Feedback</a>
          </Flex>
        </Flex>
        <Flex className="flex-col my-7 space-y-1.5">
          <p className="text-white font-semibold">Mobile</p>
          <Flex className="space-y-4 flex-col pt-6 items-start">
            <button className="bg-[#1C1B1E] text-white px-2 rounded-lg">
              <Flex className="items-center p-1 space-x-1">
                <BiLogoPlayStore className="text-3xl" />
                <Flex className="flex-col items-start">
                  <p className="text-[.6rem]">Get it on</p>
                  <p>Google Play</p>
                </Flex>
              </Flex>
            </button>
            <button className="bg-[#1C1B1E] text-white px-2 rounded-lg">
              <Flex className="items-center p-1 space-x-4">
                <FaApple className="text-3xl" />
                <Flex className="flex-col">
                  <p className="text-[.6rem]">Download on the</p>
                  <p>App Store</p>
                </Flex>
              </Flex>
            </button>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="sm:flex-row flex-col bg-[#121212] space-y-3 justify-around  py-4">
        <Flex className="flex-row space-x-2 items-center">
          <MdOutlineCopyright />
          <p>2023 Today&lsquo;s All rights reserved.</p>
        </Flex>
        <Flex className=" space-x-3 ">
          <p>Privacy</p>
          <p>Security</p>
          <p>Terms</p>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
