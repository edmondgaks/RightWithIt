import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("./assets/Safejourney.png")} />
      <Button
      color="orange"
      title="Click Me" 
      onPress={() => Alert.alert("My title", "My message", [
        {text: "Yes", onPress: () => console.log("Yes")},
        {text: "No", onPress: () => console.log("No")},
      ])} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
