import {View, Text, StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile({navigation}) {
    return (
        <View style={styles.container}>

                <Text style={styles.title}>Perfil Usuario</Text>


            <Pressable style={[styles.button, styles.buttonSettings]} onPress={() => navigation.navigate('Profile_info')}>
                <Text style={styles.buttonText}> Detalles del Usuario </Text>
            </Pressable>


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
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'green',
        paddingVertical: 12,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginBottom: 20,
        width: '40%',
        alignItems: 'center',
    },
    buttonSettings: {
        backgroundColor: '#438fe1ff',
    },
        buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '400',
    },
});