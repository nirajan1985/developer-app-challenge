import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SalonProvider } from "../contexts/SalonProvider";
import { LocationProvider } from "../contexts/LocationProvider";

export default function RootLayout() {
  return (
    <SalonProvider>
      <LocationProvider>
        <Tabs
          screenOptions={({ route }) => ({
            // Customize icons based on route name
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => {
              let iconName: keyof typeof Ionicons.glyphMap;

              if (route.name === "index") iconName = "location-outline";
              else if (route.name === "profile") iconName = "person-outline";
              else if (route.name === "cutters") iconName = "cut-outline";
              else iconName = "ellipse-outline"; // fallback icon

              return <Ionicons name={iconName} size={26} color={color} />;
            },
            tabBarStyle: {
              backgroundColor: "#121212",
              borderTopColor: "#121212",
              height: 70,
              borderTopWidth: 0,
              elevation: 0,
            },
            tabBarActiveTintColor: "#FFD600",
            tabBarInactiveTintColor: "#AAAAAA",
          })}
        >
          <Tabs.Screen
            name="index"
            options={{ title: "Home", headerShown: false }}
          />
          <Tabs.Screen
            name="cutters"
            options={{ title: "Cutters", headerShown: false }}
          />
          <Tabs.Screen
            name="profile"
            options={{ title: "Profile", headerShown: false }}
          />
        </Tabs>
      </LocationProvider>
    </SalonProvider>
  );
}
