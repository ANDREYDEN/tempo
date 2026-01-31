import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { TButton } from "../components/TButton";
import { TText } from "../components/TText";

export function IntroScreen() {
  return (
    <View style={styles.container}>
      <TText>Welcome to Tempo!</TText>

      <Link href="/(tabs)/exercises" asChild>
        <TButton title="Continue" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
