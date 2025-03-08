import { StatusBar } from "expo-status-bar";
import { View, Text, Button, StyleSheet, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import muryllo from '../../assets/muryllo.png'

export default function SkillScreen() {

    return (
        <LinearGradient colors={["#ADD8E6", "#9370DB"]} style={styles.container}>
            <Image
                source={muryllo}
                style={{ borderRadius: 150, width: 250, height: 250 }}
            />

            <Text style={styles.textSkill}>Minhas Habilidades</Text>

            <View style={styles.containerSkills}>

                <View style={styles.skill}>
                    <Text style={{fontSize: 24, fontWeight:'bold'}}>HTML: </Text>
                    <Text style={{fontSize: 24}}>⭐⭐⭐⭐⭐</Text>
                </View>

                <View style={styles.skill}>
                    <Text style={{fontSize: 24, fontWeight:'bold'}}>CSS: </Text>
                    <Text style={{fontSize: 24}}>⭐⭐⭐⭐</Text>
                </View>

                <View style={styles.skill}>
                    <Text style={{fontSize: 24, fontWeight:'bold'}}>REACT NATIVE: </Text>
                    <Text style={{fontSize: 24}}>⭐⭐⭐⭐</Text>
                </View>

                <View style={styles.skill}>
                    <Text style={{fontSize: 24, fontWeight:'bold'}}>TYPESCRIPT: </Text>
                    <Text style={{fontSize: 24}}>⭐⭐⭐⭐⭐</Text>
                </View>
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
    textSkill: {
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    containerSkills: {
        width: '100%',
        alignSelf: 'flex-start',
        flexDirection: 'column',
        gap: 14,
        
    },
    skill: {
        flexDirection: 'row',
        gap: 6,
        alignSelf: 'flex-start',
        fontSize: 28
    }
})