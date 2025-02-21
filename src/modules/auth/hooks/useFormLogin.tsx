
import { FieldValues, useForm } from 'react-hook-form';
import { userStore } from '../../../store/authStore';
import { useNavigate } from 'react-router';
import { getUserByEmail } from '../../../services/UsersServices';
import { toast } from 'react-toastify';
import { useState } from 'react';

//Este custom hook tiene toda la lógica del formulario de logeo del usuario, para definir si es admin o es un usuario, se puede cambiar el admin en esta constante

const admin = "admin@email.com"

const useFormLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const [loading, setLoading] = useState(false)
      const { setUser } = userStore();
      const navigate = useNavigate()
      const onSubmit = async (e: FieldValues) => {
        setLoading(true)
        try {
          const {data} = await getUserByEmail(e.email);
          setUser(data);
          toast("¡Bienvenid@!", {
            position: "bottom-right",
            style: { color: "green" },
          });
          setLoading(false)
          if(data.email === admin){
            navigate("/Admin")
          }else{
            navigate("/Dashboard")
          }
        } catch (error) {
          console.log(error);
          toast("Error al ingresar", {
            position: "bottom-right",
            style: { color: "red" },
          });
        }
      };
    
  return (
    {register,
        handleSubmit, errors, onSubmit, loading}
  )
}

export default useFormLogin