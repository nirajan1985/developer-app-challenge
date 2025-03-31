import { Text, useColorScheme, View } from "react-native";
import { darkTheme } from "../theme";

export default function CutterScreen() {
  const systemScheme = useColorScheme();

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
        Cutters screen is under development.
      </Text>
    </View>
  );
}
