import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from './Components/Splash';
import Home from './Components/User/Home';
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import OrphanItem from './Components/User/OrphanItem';
import OrphanDetail from './Components/User/OrphanDetail';
import Adoption from './Components/User/Adoption';
import FosterCare from './Components/User/FosterCare';
import Donation from './Components/User/Donation';
import { ScreenStack } from 'react-native-screens';
import SideBar from './Components/SideBar';
import Logout from './Components/Logout';
import HomeAdmin from './Components/Admin/Home';
import AddOrphan from './Components/Admin/AddOrphan';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  function DrawerNavigator() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}
          options={{
            // headerShown:false
            headerStyle: { backgroundColor: "#FF8A25", }, headerTitleStyle: { color: "#FFFFFF" }, drawerActiveTintColor: "#FF8A25",
            // headerRight: () => <Logout/>,
          }}
        />
        <Drawer.Screen name="Adoption" component={Adoption}
          options={{
            headerStyle: { backgroundColor: "#FF8A25", }, headerTitleStyle: { color: "#FFFFFF" }, drawerActiveTintColor: "#FF8A25",
          }}
        />
        <Drawer.Screen name="Donation" component={Donation}
          options={{
            headerStyle: { backgroundColor: "#FF8A25", }, headerTitleStyle: { color: "#FFFFFF" }, drawerActiveTintColor: "#FF8A25",
          }}
        />
        <Drawer.Screen name="Foster Care" component={FosterCare}
          options={{
            headerStyle: { backgroundColor: "#FF8A25", }, headerTitleStyle: { color: "#FFFFFF" }, drawerActiveTintColor: "#FF8A25",
          }}
        />
      </Drawer.Navigator >
    );
  }
  function StackNavigator() {
    return (
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Splash" component={Splash}
          options={{ headerBackVisible: false, headerStyle: { backgroundColor: "#FF8A25", }, headerTitleStyle: { color: "#FFFFFF" } }}
        />
        <Stack.Screen name="Home" component={Home}
          options={{ headerBackVisible: false, headerStyle: { backgroundColor: "#FF8A25", }, headerTitleStyle: { color: "#FFFFFF" } }}
        />
        <Stack.Screen name="Welcome" component={Welcome}
          options={{ headerBackVisible: false, headerShown: false, headerStyle: { backgroundColor: "#FF8A25", }, headerTitleStyle: { color: "#FFFFFF" } }}
        />
        <Stack.Screen name="Login" component={Login}
          options={{ headerBackTitleVisible: false, headerStyle: { backgroundColor: "#FF8A25", }, headerTitleStyle: { color: "#FFFFFF", fontSize: 20 } }}
        />
        <Stack.Screen name="Orphan Detail" component={OrphanDetail}
          options={{ headerBackTitleVisible: false, headerStyle: { backgroundColor: "#FF8A25", }, headerTitleStyle: { color: "#FFFFFF", fontSize: 20 } }}
        />
        <Stack.Screen name="Adoption" component={Adoption}
          options={{ headerBackTitleVisible: false, headerStyle: { backgroundColor: "#FF8A25", }, headerTitleStyle: { color: "#FFFFFF", fontSize: 20 } }}
        />
        <Stack.Screen name="Foster" component={FosterCare}
          options={{ headerBackTitleVisible: false, headerStyle: { backgroundColor: "#FF8A25", }, headerTitleStyle: { color: "#FFFFFF", fontSize: 20 } }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Root"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Welcome" component={Welcome}
          options={{ headerBackVisible: false, headerShown: false,}}
        />
        <Stack.Screen name="Login" component={Login}
          options={{ headerBackTitleVisible: false, headerStyle: { backgroundColor: "#FF8A25", }, headerTitleStyle: { color: "#FFFFFF", fontSize: 20 } }}
        />
        <Stack.Screen name="Orphan Detail" component={OrphanDetail}
          options={{ headerBackTitleVisible: false, headerStyle: { backgroundColor: "#FF8A25", }, headerTitleStyle: { color: "#FFFFFF", fontSize: 20 } }}
        />
        <Stack.Screen name="Splash" component={Splash}
          options={{ headerBackVisible: false, headerStyle: { backgroundColor: "#FF8A25", }, headerTitleStyle: { color: "#FFFFFF" } }}
        />
         <Stack.Screen name="Logout" component={Logout}
          options={{ headerBackVisible: false, headerStyle: { backgroundColor: "#FF8A25", }, headerTitleStyle: { color: "#FFFFFF" } }}
        />
        <Stack.Screen name="Home" component={HomeAdmin}
          options={{ headerBackVisible: false, headerStyle: { backgroundColor: "#FF8A25", }, headerTitleStyle: { color: "#FFFFFF" } }}
        />
         <Stack.Screen name="Add Orphan" component={AddOrphan}
          options={{ headerBackVisible: true, headerStyle: { backgroundColor: "#FF8A25", }, headerTitleStyle: { color: "#FFFFFF" } }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
