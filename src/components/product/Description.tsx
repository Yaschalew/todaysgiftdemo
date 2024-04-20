import {Flex } from "antd";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

type ProductProps ={
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
  
interface Productsprop {
    filterProduct: ProductProps[];
  };

  
const Description = ({filterProduct}:Productsprop) =>{
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'Description',
          children: (
            <div className="h-auto">
            <p >{filterProduct[0]?.description}</p>
            <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Nihil laboriosam facilis distinctio adipisci nam vitae repellendus deleniti fugit, tenetur totam quasi alias odit 
            animi beatae eligendi dicta sit amet? Ipsum.</p>
            </div>
          ),
        },
        {
          key: '2',
          label: 'Specification',
          children: (
            <div className="h-auto">
            <p >{filterProduct[0]?.description}</p>
            <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit specific. 
            Nihil laboriosam facilis distinctio adipisci nam vitae repellendus deleniti fugit, tenetur totam quasi alias odit 
            animi beatae eligendi dicta sit amet? Ipsum.</p>
            </div>
          ),
        },
      ];
    
      
    return (
        <Flex className="m-auto w-[50%] ">
            <Tabs defaultActiveKey="1" items={items}  />
       </Flex>

    )
}
export default Description