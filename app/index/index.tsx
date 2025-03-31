import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button,
  Pressable,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import { useSalon } from "../../hooks/useSalon";
import { useLocation } from "../../hooks/useLocation";
import { darkTheme } from "../../theme";
import { darkMapStyle } from "../../mapStyle";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const { salons } = useSalon();
  const { location } = useLocation();

  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="#121212" />

      <MapView
        customMapStyle={darkMapStyle}
        provider="google"
        style={styles.map}
        region={
          location
            ? {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }
            : {
                // fallback to Oslo while loading
                latitude: 59.911491,
                longitude: 10.757933,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
        }
        showsUserLocation
      >
        {salons?.map((salon) => (
          <Marker
            key={salon.id}
            coordinate={{
              latitude: parseFloat(salon.coordinates.latitude),
              longitude: parseFloat(salon.coordinates.longitude),
            }}
            title={salon.name}
            description={salon.postalPlace}
          >
            <View style={styles.customMarker}></View>
          </Marker>
        ))}
      </MapView>

      <Pressable style={styles.listButton} onPress={() => router.push("/list")}>
        <Text style={styles.listButtonText}>List</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  footer: {
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "row",
  },
  customMarker: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FFD600",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#111111",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  listButton: {
    position: "absolute",
    top: 60,
    right: 16,
    backgroundColor: "#FFD600",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    zIndex: 10,
    elevation: 5,
  },
  listButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});
