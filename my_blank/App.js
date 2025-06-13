import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react' ;


const Texto= () => {
  const [contenido, setContenido]=useState('Siiiiii tocameeeee')
  const actualizaTexto=()=>{setContenido('Gracias')}
  return(
    <Text onPress={actualizaTexto} >{contenido}</Text>
  )
}

const Boton= () => {
  const [contboton, setcontboton]=useState('Tocame Tocame!!!!')
  const actualizarBoton=()=> {setcontboton("Oooooooooo... gracias <3")}
  return(
    <Button onPress={actualizarBoton} title={contboton}></Button>
  )

}


//MAIN
export default function App() {
  return (
    <View style={styles.container}>
          <StatusBar style="auto" />

      <Texto> </Texto>
      <Texto> </Texto>

      <Boton> </Boton>


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
