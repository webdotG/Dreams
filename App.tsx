import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider} from "native-base";
import Navigation from "./Navigation/Navigation";

export default function App() {

  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Navigation/>
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
