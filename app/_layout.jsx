import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

import GlobalProvider from '../context/GlobalProvider'

// const RootLayout = () => {
//   return (
//     <>
//       <Text>Header</Text>
//       <Slot />
//       <Text>Footer</Text>
//     </>
//   )
// }

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins_Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins_Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins_ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins_ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins_Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins_Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins_Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins_SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins_Thin.ttf"),
  });

  useEffect(() => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if(!fontsLoaded && !error) return null;

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false }} /> */}
      </Stack>
    </GlobalProvider>
  );
};

export default RootLayout;
