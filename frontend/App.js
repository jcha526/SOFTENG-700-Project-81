import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./screens/pages/LoginPage";
import TestPage from "./screens/pages/TestPage";
import DashboardPage from "./screens/pages/DashboardPage";
import ProfilePage from "./screens/pages/ProfilePage";
import OverviewPage from "./screens/pages/OverviewPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Test" component={TestPage} />
        <Stack.Screen
          name="Dashboard"
          component={DashboardPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Overview"
          component={OverviewPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
