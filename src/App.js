import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navigation from "./components/Navigation/Navigation";
import Authentication from "./pages/Authentication/Authentication";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import { setCurrentUser } from "./store/user/userAction";

import { onAuthStateChangedListener } from "./utils/firebase/firebase";
import { createUserDocumentFromAuth } from "./utils/firebase/firebase";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
