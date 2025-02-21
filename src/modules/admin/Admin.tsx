import { Accordion, AccordionItem, Button, Image } from "@heroui/react";
import React, { useEffect } from "react";
import { adminStore } from "../../store/adminStore";
import { userStore } from "../../store/authStore";
import { getUsers } from "../../services/UsersServices";
import { User } from "../../types/user";
import { getProducts } from "../../services/ProductService";
import UserProfile from "./components/UserProfile";
import SpecialsPrices from "./components/SpecialsPrices";
import useLogout from "../auth/hooks/useLogout";

const Admin = () => {
  const { user } = userStore();
  const { setUsers, users, setProducts } = adminStore();
  const {handleLogout} = useLogout()
  
  //Carga la información de usuarios y productos
  useEffect(() => {
    if(user){
      getUsers().then((value) => {
        const users = value.data.filter(
          (value: User) => value.email !== user!.email
        );
        setUsers(users);
      });
    }
    getProducts().then((value) => {
      setProducts(value);
    });
  }, [user, setUsers, setProducts]);

  return (
    <div className="bg-dots w-screen h-screen">
      <section className="flex justify-between items-center p-4 px-8 shadow-lg bg-white w-screen">
        <div className="flex gap-4 items-center">
          <Image className="rounded-full" src={user?.picture?.thumbnail} />
          <p>Admin</p>
        </div>
        <Button onPress={handleLogout} color="danger" className="text-white">
          <p>Cerrar Sesión</p>
        <i className="icon-[radix-icons--exit] rotate-180" role="img" aria-hidden="true" />
        </Button>
      </section>
      <h3 className="mt-16 text-2xl w-full text-center font-medium">
        Gestiona los usuarios y sus precios especiales
      </h3>
      <div className="w-[90%] mx-auto mt-10 md:w-[80%]  md:p-10 shadow-xl rounded-[20px] w-full">
        <Accordion variant="shadow">
          <AccordionItem key="1" aria-label="Accordion 1" title="Usuarios">
            <Accordion>
              {users.map((item, index) => (
                <AccordionItem
                  key={index}
                  aria-label="Accordion 1"
                  title={<UserProfile item={item} />}
                >
                    <SpecialsPrices user={item} collectionName={item.collectionName} />
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Admin;
