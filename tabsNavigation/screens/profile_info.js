import {View, Text, StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile_info({navigation}) {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Detalles Usuario</Text>
            <Text style={styles.subtitle}>Usando Navigation Stack</Text>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    iconRow: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        marginLeft: 10,
        color: 'black',
    },
    subtitle: {
        fontSize: 18,
        marginLeft: 10,
        color: 'blue',
    },
});