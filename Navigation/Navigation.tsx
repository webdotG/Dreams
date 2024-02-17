import HomeScreen from "../Screen/HomeScreen"
import CalendarScreen from "../Screen/CalendarScreen";
import AddDreamScreen from "../Screen/AddDreamScreen";
import ChatScreen from "../Screen/ChatScreen";
import MyScreen from "../Screen/MyScreen";
import { FontAwesome } from '@expo/vector-icons';
import { Box, HStack, Icon, Pressable, Text, VStack, extendTheme } from "native-base";
import { DrawerContentScrollView, createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const theme = extendTheme({})

const getIcon = (screenName: string) => {
  switch (screenName) {
    case 'Add Dream': return 'plus-square'
    case 'Dreams'   : return 'home'
    case 'Calendar' : return 'calendar'
    case 'Chat'     : return 'folder-o'
    case 'My Page'  : return 'user-md'
    default         : undefined
  }
}

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <VStack paddingTop={50}>
        {props.state.routeNames.map((name: string, index: number) => (
          <Pressable onPress={(event) => props.navigation.navigate(name)}>
            <HStack alignItems="center" paddingLeft={10} paddingTop={25} space={10}>
              <Icon
                size={8}
                color={index === props.state.index ? theme.colors.orange[500] : theme.colors.trueGray[700]}
                as={
                  <FontAwesome 
                  name={getIcon(name)} 
                  color= {theme.colors.trueGray[700]} />
                }
              ></Icon>
              <Text
                color={index === props.state.index ? theme.colors.orange[500] : theme.colors.trueGray[700]}
                fontWeight={400}
                fontSize={25} >
                {name}
              </Text>
            </HStack>
          </Pressable>
        ))
        }
      </VStack>
    </DrawerContentScrollView>
  )
}

export default function Navigation() {

  const headerStyle = {
    headerStyle: {
      backgroundColor: theme.colors.orange[500]
    },
    headerTintColor: theme.colors.muted[50]
  }

  return (
    <Drawer.Navigator
      // defaultStatus="open"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="AddDream"
      screenOptions={{
        drawerPosition: 'right',
        drawerType: 'front',
        headerLeft: () => false,
        headerRight: () => <DrawerToggleButton />,
      }}
    >
      <Drawer.Screen
        name="Add Dream"
        component={AddDreamScreen}
        options={{
          ...headerStyle
        }}
      />
      <Drawer.Screen
        name="Dreams"
        component={HomeScreen}
        options={{
          ...headerStyle
        }}
      />
      <Drawer.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          ...headerStyle
        }}
      />
      <Drawer.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          ...headerStyle
        }}
      />
      <Drawer.Screen
        name="My Page"
        component={MyScreen}
        options={{
          ...headerStyle
        }}
      />
    </Drawer.Navigator>
  )
}