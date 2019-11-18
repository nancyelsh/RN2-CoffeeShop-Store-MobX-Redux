import { createStackNavigator } from "react-navigation-stack";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";
import Login from "../Components/Login";

const StackNav = createStackNavigator(
  {
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail,
    CoffeeCart: CoffeeCart,
    Login: Login
  },
  {
    initialRouteName: "Login"
  }
);

export default StackNav;
