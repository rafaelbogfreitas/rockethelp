import {NavigationContainer} from "@react-navigation/native";

// Components
import AppRoutes from "./app.routes";
// import SignIn from "../screens/SignIn";

const Routes = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default Routes;
