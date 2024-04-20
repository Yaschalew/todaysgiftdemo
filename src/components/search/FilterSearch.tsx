import { Checkbox, Flex, Select, InputNumber, Button, Card, Empty } from "antd";
import type { CheckboxProps } from "antd";
import { IoStar } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useProducts } from "../home/useProduct";

type Params = {
  id: string;
};

type ProductProps = {
  id: string;
  brand: string;
  category: string;
  description: string;
  images: [];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

const FilterSearch = () => {
  const { product } = useProducts();
  const { id } = useParams<Params>();
  const searchParams = product?.products?.filter((item: ProductProps) =>id === "View All" ? item : item.category === id );

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const filter = [
    "cultural",
    "for her",
    "for him",
    "fun gifts",
    "home and garden",
    "kids",
    "luxiouries",
    "spritual",
  ];

  return (
    <Flex className="p-28 items-start">
      <Flex className="basis-1/4 flex-col ">
        <p className="font-bold text-3xl py-1">Filter</p>
        <Select
          placeholder="Category"
          variant="borderless"
          style={{ flex: 1, width: 300 }}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
          ]}
        />
        <Flex className="space-y-2 flex-col p-3">
          {filter.map((filterCategory) => (
            <Checkbox onChange={onChange}>{filterCategory}</Checkbox>
          ))}
        </Flex>
        <hr className="mx-8" />
        <Flex className="flex-col space-y-4">
          <Select
            placeholder="Price"
            variant="borderless"
            style={{ flex: 1, width: 300 }}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
          />
          <Flex className="space-x-4 ">
            <Flex className="flex-col">
              <InputNumber
                placeholder="Lowest"
                variant="borderless"
                style={{ width: 150 }}
              />
              <hr className="mx-5 " />
            </Flex>
            <Flex className="flex-col">
              <InputNumber
                placeholder="Highest"
                variant="borderless"
                style={{ width: 150 }}
              />
              <hr className="mx-5 " />
            </Flex>
          </Flex>
          <Flex className="flex-warp space-x-4">
            <Button>50ETB - 350 ETB</Button>
            <Button>350ETB - 740ETB</Button>
            <Button>...</Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="basis-3/4 flex-col">
      {searchParams.length > 0 &&
        <Flex className="space-x-5">
          <p className="md:pr-20 font-semibold">
            Showing 1 - {searchParams?.length} products of {product?.products?.length} for {id}   
          </p>
          <Select
            placeholder="Sort by: Most Popular"
            style={{ flex: 1, width: 300 }}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
          />
        </Flex>
      }
        <Flex className="grid grid-cols-3 grid-flow-row gap-4 pt-4 px-2 ">
          {searchParams.length > 0 ?
            (
              <>
               {searchParams?.map((item: ProductProps) =>
              <Card>
                    <img src={item.thumbnail} className="w-56" alt="img" />
                    <p className="py-3 ">Gift couples</p>
                    <p className="font-bold py-2">{item.price}</p>
                    <Flex className="justify-between">
                      <p>{item.title}</p>
                      <Flex className="items-center space-x-1">
                        <IoStar className="text-[#FFC540] text-xl" />
                        <p>{item.rating}</p>
                      </Flex>
                    </Flex>
              </Card>
              )}
              </>
            ) : (
              <Empty description="No Product found" className="pt-36"/>
            )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FilterSearch;
