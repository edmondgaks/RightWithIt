import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("./assets/Safejourney.png")} />
      <Text>Lead me Please</Text>
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
