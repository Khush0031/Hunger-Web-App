// for keeping info of a logged in user

import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "",
});

export default UserContext;