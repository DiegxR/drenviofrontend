import { userStore } from "../../../store/authStore";
import { Product } from "../../../types/products";
import { Button, Card, CardBody, Chip, Image } from "@heroui/react";

export const CardProduct = ({ product }: { product: Product }) => {
  const {specialPrices} = userStore()
  const specialPrice = specialPrices.find(item => Number(item.productId) === product.id)?.specialPrice;
  
  return (
    <Card className="bg-white w-[300px] h-[300px] rounded-[20px] shadow-md flex flex-col">
        <div className="bg-gray-300 flex justify-center py-5">
          {specialPrice ? <Chip className="absolute z-[99] top-2 left-2 text-[12px] max-w-[30px]" color="success">Precio especial</Chip> : <></>}
        <Image
          className="w-full mx-auto h-28"
          src={product.image}
        />
        </div>
      <CardBody>
        <div className="flex p-2 flex-col gap-2">
          <p className="max-w-[200px] truncate">{product.title}</p>
          <p>{product.category}</p>
          <div className="flex justify-between items-center">
          {specialPrice ? 
           <div className="flex gap-2">
             <p className="line-through">${product.price}</p> 
             <p>${specialPrice}</p>
           </div> 
           :<p>${product.price}</p>
        }
          
          <Button>Ver detalles</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
