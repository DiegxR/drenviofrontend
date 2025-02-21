import  { useState } from 'react'
import { adminStore } from '../../../store/adminStore';
import { useDisclosure } from '@heroui/react';
import { addSpecialPrice } from '../../../services/ProductService';
import { toast } from 'react-toastify';
import { User } from '../../../types/user';

//Este custom hook maneja toda la lógica de el modal de agregar productos, abre el modal, maneja errores al ingresar el precio y hace la petición para agregar un nuevo precio especial
const useProductModal = ({user}:{user: User}) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { products } = adminStore();
    const [errorInput, setErrorInput] = useState(0);
    const [specialPrice, setSpecialPrice] = useState({
      productId: 0,
      specialPrice: 0,
    });
    const handlePrice = async (productId: number) => {
      if (productId === specialPrice.productId) {
        if (specialPrice.specialPrice !== 0) {
          try {
            const data = await addSpecialPrice(
              productId,
              specialPrice.specialPrice,
              user.collectionName
            );
            console.log(data);
            window.location.reload()
          } catch (error) {
            toast("Error al agregar producto", {
              position: "bottom-right",
              style: { color: "red" },
            });
          }
        } else {
          setErrorInput(productId);
        }
      } else {
        setErrorInput(productId);
      }
    };
  return {
    isOpen, onOpen, onOpenChange, handlePrice, setSpecialPrice, products, errorInput
  }
}

export default useProductModal