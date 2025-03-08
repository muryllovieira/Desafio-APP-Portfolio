import { StatusBar } from "expo-status-bar";
import { View, Text, Button, StyleSheet, Image, Pressable } from "react-native";
import { Linking } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import muryllo from '../../assets/muryllo.png'

export default function HomeScreen({ navigation }: any) {

    function navToGallery() {
        navigation.navigate('skill')
    }

    return (
        <LinearGradient colors={["#ADD8E6", "#9370DB"]} style={styles.container}>
            <Image
                source={muryllo}
                style={{ borderRadius: 150, width: 250, height: 250 }}
            />

            <Text style={styles.textName}>Muryllo Vieira</Text>

            <View style={styles.containerContacts}>
                <Pressable style={styles.contacts}>
                    <Text
                        style={styles.contactText}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/muryllo-vieira-a2b79024a/')}
                    >LINKEDIN
                    </Text>
                </Pressable>
                <Pressable style={styles.contacts}>
                    <Text
                        style={styles.contactText}
                        onPress={() => Linking.openURL('https://github.com/muryllovieira')}
                    >GITHUB
                    </Text>
                </Pressable>
                <Pressable style={styles.contacts}>
                    <Text
                        style={styles.contactText}
                        onPress={() => Linking.openURL('mailto:muryllovieira59@gmail.com')}
                    >E-MAIL
                    </Text>
                </Pressable>

                <Pressable style={styles.buttonSkill}>
                    <Text style={styles.skillText} onPress={navToGallery}>VEJA AS MINHAS SKILLS</Text>
                </Pressable>
            </View>

            <StatusBar style="auto" />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 32
    },
    textName: {
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    containerContacts: {
        flexDirection: 'column',
        gap: 14,
    },
    contacts: {
        width: 300,
        height: 42,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonSkill: {
        width: 300,
        height: 42,
        backgroundColor: '#d5a2de',
        alignItems: 'center',
        justifyContent: 'center'
    },
    skillText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'monospace'
    },
    contactText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'monospace'
    }
})