import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen  from "./Screen/HomeScreen"
import CalendarScreen from "./Screen/CalendarScreen";
import AddDreamScreen from "./Screen/AddDreamScreen";
import ChatScreen from "./Screen/ChatScreen";
import MyScreen from "./Screen/MyScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Calendar" component={CalendarScreen} />
          <Tab.Screen name="AddDream" component={AddDreamScreen} />
          <Tab.Screen name="Chat" component={ChatScreen} />
          <Tab.Screen name="MyPage" component={MyScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
