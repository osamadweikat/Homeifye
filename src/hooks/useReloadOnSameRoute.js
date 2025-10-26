import { useLocation } from "react-router-dom";

const useReloadOnSameRoute = () => {
  const location = useLocation();

  const reloadIfSame = (path) => {
    if (location.pathname === path) {
      window.location.reload();
    }
  };

  return reloadIfSame;
};

export default useReloadOnSameRoute;
