import React from "react";
import {NativeBaseProvider, StatusBar} from "native-base";

// Fonts
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

// Components
import SignIn from "./src/screens/SignIn";
import Loading from "./src/components/Loading";

// Styles
import {THEME} from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  );
}
