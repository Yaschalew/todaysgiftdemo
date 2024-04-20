import { Button, Flex } from "antd"
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import images from "../../constants";

const AppDesc = () => {
    return (
        <Flex className="flex-col">
            <Flex className="justify-around items-center py-6">
                <Flex className="flex-col space-y-4 ">
                    <p className="text-3xl font-semibold">Get <span className="text-[#2BA0AF] font-bold">Today's</span> App</p>
                    <p className="">We will send you a link, open it on <br /> your phone to download the app.</p>
                    <Flex className="space-x-4 pt-6">
                        <button className="bg-[#1C1B1E] text-white px-2 rounded-lg">
                            <Flex className="items-center p-1 space-x-3">
                                <BiLogoPlayStore className="text-3xl" />
                                <Flex className="flex-col items-start">
                                    <p className="text-[.6rem]">Get it on</p>
                                    <p>Google Play</p>
                                </Flex>
                            </Flex>
                        </button>
                        <button className="bg-[#1C1B1E] text-white px-2 rounded-lg">
                            <Flex className="items-center p-1 space-x-3">
                                <FaApple className="text-3xl" />
                                <Flex className="flex-col">
                                    <p className="text-[.6rem]">Download on the</p>
                                    <p>App Store</p>
                                </Flex>
                            </Flex>
                        </button>
                    </Flex>
                </Flex>
                <Flex>
                    <img src={images.app} className="w-[70%]" alt="appImg" />
                </Flex>
            </Flex>
            <Flex className="justify-around pt-10 bg-[#F8F8F8] p-2">
                <Flex className="flex-col space-y-4">
                    <p  className="font-bold">Shop by Recipient</p>
                    <Flex className="flex-col space-y-2 items-start">
                        <Button type="link" className="text-black">Man</Button>
                        <Button type="link" className="text-black">Woman</Button>
                        <Button type="link" className="text-black">Kids</Button>
                        <Button type="link" className="text-black">Teens</Button>
                        <Button type="link" className="text-black">Me</Button>
                        <Button type="link" className="text-black">Mom</Button>
                        <Button type="link" className="text-black">Dad</Button>
                        <Button type="link" className="text-black">Both Gender</Button>
                    </Flex>
                </Flex>
                <Flex className="flex-col space-y-4">
                    <p  className="font-bold">Shop by Categories</p>
                    <Flex className="flex-col space-y-2  items-start">
                    <Button type="link" className="text-black">Cultural</Button>
                    <Button type="link" className="text-black">Coporate gift</Button>
                    <Button type="link" className="text-black">Educational</Button>
                    <Button type="link" className="text-black">Food and Drinks</Button>
                    <Button type="link" className="text-black">Gifts for prison</Button>
                    <Button type="link" className="text-black">Home and Graden</Button>
                    <Button type="link" className="text-black">Professional</Button>
                    <Button type="link" className="text-black">Psychological</Button>
                    <Button type="link" className="text-black">Spiritual</Button>
                    </Flex>
                </Flex>
                <Flex className="flex-col space-y-4">
                    <p className="font-bold">Shop by Occasions</p>
                    <Flex className="flex-col space-y-2  items-start">
                    <Button type="link" className="text-black">Anniversary</Button>
                    <Button type="link" className="text-black">Apology gifts</Button>
                    <Button type="link" className="text-black">Appreciation</Button>
                    <Button type="link" className="text-black">Baby shower</Button>
                    <Button type="link" className="text-black">Back to School</Button>
                    <Button type="link" className="text-black">Christening</Button>
                    <Button type="link" className="text-black">Engagement</Button>
                    <Button type="link" className="text-black">Get well</Button>
                    <Button type="link" className="text-black">Graduation</Button>
                    <Button type="link" className="text-black">Welcome and farewell</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default AppDesc