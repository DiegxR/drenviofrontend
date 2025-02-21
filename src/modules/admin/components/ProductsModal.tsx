import {
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@heroui/react";
import { User } from "../../../types/user";
import { Product } from "../../../types/products";
import useProductModal from "../hooks/useProductModal";

const ProductsModal = ({ user, prices }: { user: User; prices: Product[] }) => {
 
  const {errorInput, handlePrice, isOpen, onOpen, onOpenChange, products, setSpecialPrice} = useProductModal({user})
  return (
    <>
      <div className="flex pb-8 pt-2 justify-center w-full">
        <Button
          onPress={onOpen}
          className="flex justify-center mt-4 items-center gap-2"
        >
          <i className="icon-[gala--add]" role="img" aria-hidden="true" />
          <p>Agregar Producto</p>
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="min-w-[50vw]">
          {(onClose) => (
            <>
              <ModalHeader className="text-center">
                Agrega un producto con precio especial
              </ModalHeader>
              <ModalBody className="max-h-[50vh] overflow-x-scroll">
                {products?.map((product) => {
                  const found = prices.find((item) => item.id === product.id);
                  if (!found) {
                    return (
                      <div key={product.id}>
                        <div className="flex w-full justify-between items-center">
                          <div className="flex items-center">
                            <Image
                              className="w-24 h-24 object-contain"
                              src={product.image}
                            />
                            <div>
                              <p className="max-w-[100px] truncate">
                                {product.title}
                              </p>
                              <p>Precio actual - ${product.price}</p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <p className="text-center">Precio Especial</p>
                            <div className="flex gap-2 items-end justify-end">
                              <Input
                                type="number"
                                color={
                                  errorInput === product.id
                                    ? "danger"
                                    : "default"
                                }
                                onInput={(e) =>
                                  setSpecialPrice({
                                    productId: product.id,
                                    specialPrice: Number(e.currentTarget.value),
                                  })
                                }
                                className="w-[100px]"
                              />
                              <Button onPress={() => handlePrice(product.id)}>
                                <i
                                  className="icon-[gala--add] text-xl"
                                  role="img"
                                  aria-hidden="true"
                                />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="w-full border-b-1 border-gray-300"></div>
                      </div>
                    );
                  }else{
                    return <></>
                  }
                })}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductsModal;
