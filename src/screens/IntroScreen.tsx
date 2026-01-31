import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export function IntroScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Tempo!</Text>

      <Link href="/(tabs)/exercises" asChild>
        <Button title="Continue" />
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
