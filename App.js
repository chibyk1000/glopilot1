import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen";
import Calendar from "./src/screens/Calendar";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import LocationScreen from "./src/screens/LocationScreen";
import Cars from "./src/screens/Cars";
import CarDetails from "./src/screens/CarDetails";
import Reservations from "./src/screens/Reservations";
import Hourly from "./src/screens/Hourly";
import SelectTime from "./src/screens/SelectTime";
import ChoiceMap from "./src/screens/ChoiceMap";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Calendar"
            component={Calendar}
            options={({ navigation, route }) => ({
              // header: (props) => <Header {...props} />,
              headerTitle: "",
              headerStyle: { backgroundColor: "#ffffff" },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Entypo name="chevron-small-left" size={35} color="black" />
                </TouchableOpacity>
              ),
            })}
          />

          <Stack.Screen
            name="Location"
            component={LocationScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Cars"
            component={Cars}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="CarDetails"
            component={CarDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Reservation"
            component={Reservations}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Hourly"
            component={Hourly}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SelectTime"
            component={SelectTime}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ChoiceMap"
            component={ChoiceMap}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

