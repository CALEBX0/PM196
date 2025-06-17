import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react' ;


const Texto= ({style}) => {
  const [contenido, setContenido]=useState('Siiiiii tocameeeee')
  const actualizaTexto=()=>{setContenido('Gracias')}
  return(
    <Text style={[styles.text,style]} onPress={actualizaTexto} >{contenido}</Text>
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

      <Texto style={styles.verdecin}> </Texto>
      <Texto style={styles.amarillo}> </Texto>
      <Texto style={styles.cafecin}> </Texto>

      <Boton > </Boton>


    </View>
  );
}

//3.Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#268',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    flexDirection:'row',
  },

  text:{
    color:'cyan',
    fontSize:27
  },
  verdecin:{backgroundColor:'green'},
  amarillo:{backgroundColor:'yellow'},
  cafecin:{backgroundColor:'brown'}

});


  