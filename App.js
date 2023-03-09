import { StatusBar } from 'expo-status-bar';
import { Dimensions,StyleSheet, Text, View, Image, SafeAreaView,Button, Alert, Platform } from 'react-native';
import LoginScreen from './screens/LoginScreen';


export default function App() {
  // console.log(Dimensions.get("screen"));
  return (
    <LoginScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
