import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";

const Shop = () => {
  return (
    <div>
      <h2>Shop Page</h2>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
