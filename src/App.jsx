import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import UserContext from "./context/userContext";
import { Provider } from "react-redux";
import store from "./store/store"

function App() {
  const [userName, setUserName] = useState();

  // authentication
  useEffect(() => {
    // an api call to get username and password
    const data = {
      name: "",
    };
    setUserName(data.name);
  }, []);

  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
}

export default App;
