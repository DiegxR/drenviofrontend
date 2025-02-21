import { Button, Image } from "@heroui/react";
import React, { useEffect } from "react";
import { userStore } from "../../store/authStore";
import { getProducts, getSpecialPrice } from "../../services/ProductService";
import { CardProduct } from "./components/CardProduct";
import useLogout from "../auth/hooks/useLogout";

const Dashboard = () => {
  const { user, setProducts, setSpecialPrices, products } =
    userStore();
  const {handleLogout} = useLogout()
  useEffect(() => {
    getProducts().then((value) => {
      setProducts(value);
    });
    if (user) {
      getSpecialPrice(user!.collectionName).then((value) => {
        setSpecialPrices(value.data);
      });
    }
  }, [setProducts, user, setSpecialPrices]);

  return (
    <section className="bg-dots w-screen h-screen">
      <section className="flex justify-between items-center p-4 px-8 shadow-lg bg-white w-screen">
        <div className="flex gap-4 items-center">
          <Image className="rounded-full" src={user?.picture?.thumbnail} />
          <p>
            {user?.name.title} {user?.name.first}
          </p>
        </div>
        <Button
          onPress={handleLogout}
          color="danger"
          className="text-white"
        >
          <p>Cerrar Sesión</p>
          <i
            className="icon-[radix-icons--exit] rotate-180"
            role="img"
            aria-hidden="true"
          />
        </Button>
      </section>
      <h4 className="text-center font-bold text-3xl mt-14 mb-10">Productos</h4>
      <section className="flex p-10 flex-wrap justify-center gap-10">
        {products.map((product) => (
          <CardProduct product={product} />
        ))}
      </section>
    </section>
  );
};

export default Dashboard;
