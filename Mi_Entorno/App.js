import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';


const Texto= (props) => {
  const {contenido}=props
  return(
    <Text>{contenido}</Text>
    )
}

//MAIN
export default function App() {
  return (
    <View style={styles.container}>
          <StatusBar style="auto" />
          
      <Texto contenido="Hello"> </Texto>
      <Texto contenido="sekai"> </Texto>
      <Texto contenido="React Native"> </Texto>

      <Button title='Tocame ;)'></Button>


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
