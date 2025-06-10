import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';


const Texto= () => {
  return(
    <Text> Hello, Sekai!</Text>
    )
}


export default function App() {
  return (
    <View style={styles.container}>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Button title='Tocame ;)'></Button>
      <StatusBar style="auto" />
    </View>
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
