import { View, Text } from "react-native";
import { darkTheme } from "../theme";

export default function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: darkTheme.background,
      }}
    >
      <Text style={{ color: darkTheme.text }}>
        Profile screen is under development.
      </Text>
    </View>
  );
}
