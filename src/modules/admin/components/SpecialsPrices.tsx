import { useEffect, useState } from "react";
import { getSpecialPrice } from "../../../services/ProductService";
import { Product, specialPrice } from "../../../types/products";
import { User } from "../../../types/user";
import ProductsModal from "./ProductsModal";
import { Image } from "@heroui/react";
import { adminStore } from "../../../store/adminStore";

const SpecialsPrices = ({
  collectionName,
  user,
}: {
  collectionName: string;
  user: User;
}) => {
  const [specialPrices, setSpecialPrices] = useState<specialPrice[]>([]);
  const [specialProducts, setSpecialProducts] = useState<Product[]>([]);
  const { products } = adminStore();
  //Aquí se consultan los productos especiales de cada usario
  useEffect(() => {
    getSpecialPrice(collectionName).then((value) => {
      //Esta función filtra de los productos generales del store, los productos que ya se encuentran en precios especiales para mostrar sólo los que aún no están
      const filteredProducts = products.filter((item) =>
        value.data.some(
          (item2: specialPrice) => Number(item2.productId) === item.id
        )
      );
      setSpecialProducts(filteredProducts);
      setSpecialPrices(value.data);
    });
  }, [collectionName, products]);

  return (
    <>
      {specialProducts.map((product) => (
        <div key={product.id}>
        <div className="flex w-full px-4 justify-between items-center">
          <div className="flex py-2 items-center">
            <Image className="w-16 h-16 object-contain" src={product.image} />
            <div>
              <p className="max-w-[100px] truncate">{product.title}</p>
              <p>Precio inicial - ${product.price}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-center">Precio Especial</p>
            <div className="flex gap-2 items-end justify-end">
              <p>
                ${specialPrices.find((item) => Number(item.productId) === product.id)?.specialPrice}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto border-b-1 border-gray-300"></div>
        </div>
      ))}
      <ProductsModal prices={specialProducts} user={user} />
    </>
  );
};

export default SpecialsPrices;
