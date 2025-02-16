import { useEffect, useState } from "react";

function useAuthen() {
  const [isLogin, setIsLogin] = useState(() => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem("token");
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  return isLogin;
}

export default useAuthen;
