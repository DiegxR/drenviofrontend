import { Button, Image, Input } from "@heroui/react";
import useFormLogin from "../hooks/useFormLogin";
import logo from "../../../assets/drenvio.svg"
const LoginForm = () => {

  const {errors, handleSubmit, onSubmit, register} = useFormLogin()

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full flex-col items-center justify-center gap-[10%] "
    >
      <Image alt="drenvíoLogo" className="w-full h-14" src={logo} />
      <h3 className="font-bold mb-8 text-center text-3xl ">Iniciar Sesión</h3>
      <div className="flex flex-col gap-[16px] w-[70%] mx-auto">
        <p className="text-center mx-auto text-sm border-1 border-slate rounded-[12px] p-2 px-4">
          Bienvenido, ingresa con credenciales de usuario o administrador
        </p>
        <label htmlFor="">Email</label>
        <Input
          color={errors.email ? "danger" : "secondary"}
          {...register("email", { required: true })}
        />
        <p className="text-red-300 text-sm">
          {errors.email && "Ingresa un email"}
        </p>
        <Button
          type="submit"
          className="mt-10 font-medium mx-auto w-[70%]"
          color="secondary"
        >
          Iniciar
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
