import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


const Texto= (props) => {
  const {children}=props
  return(
    <Text>{children}</Text>
    )
}


//MAIN
export default function App() {
  return (
    <View style={styles.container}>
          <StatusBar style="auto" />

      <Texto> "Hello"</Texto>
      <Texto> "sekai"</Texto>
      <Texto> React Native</Texto>

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
