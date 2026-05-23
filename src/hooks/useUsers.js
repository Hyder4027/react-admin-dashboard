import { useContext } from "react";

import { UserContext } from "../context/UserContext";

const useUsers = () => {

  return useContext(UserContext);
};

export default useUsers;