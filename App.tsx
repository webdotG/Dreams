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
                  backgroundColor: theme.colors.amber[600],
                },
                headerTitleAlign: 'center',
                headerTintColor: theme.colors.light[50]             }}
              />
            <Tab.Screen 
            name="Calendar" 
            component={CalendarScreen} 
            options={{
              title: "Calendar",
              headerStyle: {
                backgroundColor: theme.colors.amber[600],
              },
              headerTitleAlign: 'center',
              headerTintColor: theme.colors.light[50]
            }}
            />
            <Tab.Screen 
            name="AddDream" 
            component={AddDreamScreen} 
            options={{
              title: "Add Dream",
              headerStyle: {
                backgroundColor: theme.colors.amber[600],
              },
              headerTitleAlign: 'center',
              headerTintColor: theme.colors.light[50]
            }}
            />
            <Tab.Screen 
            name="Chat" 
            component={ChatScreen} 
            options={{
              title: "Chat",
              headerStyle: {
                backgroundColor: theme.colors.amber[600],
              },
              headerTitleAlign: 'center',
              headerTintColor: theme.colors.light[50]
            }}
            />
            <Tab.Screen 
            name="MyPage" 
            component={MyScreen} 
            options={{
              title: "My Page",
              headerStyle: {
                backgroundColor: theme.colors.amber[600],
              },
              headerTitleAlign: 'center',
              headerTintColor: theme.colors.light[50]
            }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
