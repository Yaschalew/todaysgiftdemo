import { Button, Flex } from "antd";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import images from "../../constants";

function Categories() {
  const { Title } = Typography;
  const navigate = useNavigate();

  const handleClick = (items: string) => {
    navigate(`/search/${items}`)
  }
  const category = [
    {name: "For Him", images: `${images.forhim}`}, 
    {name:"For Her", images: `${images.gifther}`},
    {name:"Graduation",images: `${images.graduation}`},
    {name: "kids", images: `${images.kids}`},
    {name: "Luxurious", images: `${images.luxurios}`},
    {name:"Spritual",images: `${images.spirtual}`},
    {name: "Cultural",images: `${images.cultural}`},
    {name: "Fungifts", images: `${images.fungift}`}];

  return (
    <>
      <Flex className="py-14 justify-around items-center flex-col md:flex-row">
        <Title level={1}>All Categories</Title>
        <Button onClick={() => handleClick("View All")} >
             View All
          </Button>
      </Flex>
      <Flex className="m-auto  grid lg:w-[78%] xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-5  place-items-center">
        {category.map((items) => 
         <button onClick={() => handleClick(items.name)} >
      <div className=" rounded-2xl bg-cover bg-center w-[270px] magnify-image" style={{backgroundImage: `url(${items.images})`}}>
          <p className="text-white text-3xl font-semibold  p-16 px-[4.3rem] ">
            {items.name}
          </p>
        </div>
       </button> 
       )}
        
      </Flex>
    </>
  );
}

export default Categories;
