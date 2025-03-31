import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useSalon } from "../../hooks/useSalon";
import { useRouter } from "expo-router";

export default function ListScreen() {
  const { salons } = useSalon();

  const router = useRouter();

  // Group salons by location
  const grouped = salons?.reduce((acc, salon) => {
    const location = salon.postalPlace || "Unknown";
    if (!acc[location]) acc[location] = [];
    acc[location].push(salon);
    return acc;
  }, {} as Record<string, typeof salons>);

  return (
    <View style={{ flex: 1 }}>
      <Pressable style={styles.mapButton} onPress={() => router.back()}>
        <Text style={styles.mapButtonText}>Map</Text>
      </Pressable>

      <ScrollView style={styles.container}>
        {grouped &&
          Object.entries(grouped).map(([location, salons]) => (
            <View key={location}>
              <Text style={styles.sectionHeader}>{location}</Text>
              {salons.map((salon) => (
                <View key={salon.id} style={styles.salonCard}>
                  <View>
                    <Text style={styles.salonName}>{salon.name}</Text>
                    <Text style={styles.salonAddress}>{salon.address}</Text>
                  </View>
                  <Text style={styles.closed}>Closed</Text>
                </View>
              ))}
            </View>
          ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
    paddingTop: 60,
    top: 20,
  },
  sectionHeader: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  salonCard: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  salonName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#888",
  },
  salonAddress: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
  },
  closed: {
    color: "#888",
    fontSize: 14,
    alignSelf: "center",
  },
  mapButton: {
    position: "absolute",
    top: 50,
    right: 16,
    backgroundColor: "#FFD600",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    zIndex: 10,
    elevation: 5,
  },
  mapButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});
