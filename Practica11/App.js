import React, { useState } from "react";
import {View,Text,TextInput,Button,StyleSheet,SafeAreaView,Image,ImageBackground,Switch,ActivityIndicator,Platform,Alert,} from "react-native";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [aceptarTerminos, setAceptarTerminos] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Función universal de alerta que funciona en web y móvil
  const mostrarAlerta = (titulo, mensaje) => {
    if (Platform.OS === "web") {
      window.alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const handleRegister = () => {
    if (!nombre.trim() || !email.trim()) {
      mostrarAlerta(
        "Campos incompletos",
        "Por favor, completa tu nombre y correo electrónico."
      );
      return;
    }
    if (!aceptarTerminos) {
      mostrarAlerta(
        "Términos y condiciones",
        "Debes aceptar los términos y condiciones para registrarte."
      );
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      mostrarAlerta(
        "¡Registro exitoso!",
        `Tus datos:\n\nNombre: ${nombre}\nEmail: ${email}`
      );
      limpiarFormulario();
    }, 2000);
  };

  const limpiarFormulario = () => {
    setNombre("");
    setEmail("");
    setAceptarTerminos(false);
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60'
      }}
      style={styles.background}
      resizeMode="cover"
      blurRadius={1}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.overlay}>
          <Text style={styles.bienvenida}>Bienvenido a la app</Text>
        </View>

        {/* Logo personalizado */}
        <Image
          source={{ uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/lion-fire-logo-design-template-free-89daa14626ac403bd3cf6282036663ff_screen.jpg?ts=1572094154' }}
          style={styles.logo}
        />

        <View style={styles.formulario}>
          <Text style={styles.titulo}>Registro de usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre completo *"
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico *"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={styles.terminosContainer}>
            <Switch
              value={aceptarTerminos}
              onValueChange={setAceptarTerminos}
            />
            <Text style={styles.terminosText}>Aceptar términos y condiciones</Text>
          </View>

          {loading ? (
            <ActivityIndicator size="large" color="#2196F3" />
          ) : (
            <Button title="Registrarse" onPress={handleRegister} color="#2196F3" />
          )}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flex: 1, padding: 20, justifyContent: "center" },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 20,
  },
  bienvenida: { color: "white", fontSize: 22, textAlign: "center" },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 30,
  },
  formulario: {
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 20,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  terminosContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  terminosText: { marginLeft: 10, flex: 1, fontSize: 14 },
});
