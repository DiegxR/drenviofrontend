import { userStore } from "../../../store/authStore";
import { useNavigate } from "react-router";

const useLogout = () => {
  const { setUser } = userStore();
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };
  return { handleLogout };
};

export default useLogout;
