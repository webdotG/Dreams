import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./Screen/HomeScreen"
import CalendarScreen from "./Screen/CalendarScreen";
import AddDreamScreen from "./Screen/AddDreamScreen";
import ChatScreen from "./Screen/ChatScreen";
import MyScreen from "./Screen/MyScreen";
import { color } from "native-base/lib/typescript/theme/styled-system";

const Tab = createBottomTabNavigator();
const theme = extendTheme({})

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Dreams",
                headerStyle: {
                  backgroundColor: theme.colors.muted[600],
                },
                headerTitleAlign: 'center',
                headerTintColor: '#fff'
              }}
              />
            <Tab.Screen name="Calendar" component={CalendarScreen} />
            <Tab.Screen name="AddDream" component={AddDreamScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="MyPage" component={MyScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
