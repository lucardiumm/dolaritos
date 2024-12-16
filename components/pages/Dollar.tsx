import { Button, Dimensions, Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useEffect, useRef, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import Screen from '@/components/pages/Screen'
import { colors } from '@/extra/colors'
import * as SQLite from 'expo-sqlite'
import Input from '@/components/core/Input'
import AntDesign from '@expo/vector-icons/AntDesign'
import axios from 'axios'
import * as Haptics from 'expo-haptics'
import { LineChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

export default function Dollar({ name, compra, venta }: DollarCompType) {
    const db = SQLite.openDatabaseSync('me.db') 

    const [isPressed, setIsPressed] = useState(false)
    const [amount, setAmount] = useState('100')
    const [data, setData] = useState<ChartType[]>([])

    const Submit = async () => {
        console.log(compra)
    }

    const Navigate = async () => {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        router.back()
    }

    const Press = () => {

    }

    useEffect(() => {})

    return (
        <>
            <SafeAreaView style={styles.container}>
                <AntDesign onPress={Navigate} name={'arrowleft'} style={styles.arrow} size={25} color={colors.white} />

                <View style={styles.switchContainer}>
                    <Pressable onPress={Press} onPressIn={() => setIsPressed(true)} style={[isPressed ? styles.switchActiveTextContainer : styles.switchTextContainer]}>
                        <Text style={styles.switchText}>Tengo dólares</Text>
                    </Pressable>
                    <Pressable onPress={Press} onPressIn={() => setIsPressed(false)} style={[isPressed ? styles.switchTextContainer :  styles.switchActiveTextContainer]}>
                        <Text style={styles.switchText}>Tengo pesos argentinos</Text>
                    </Pressable>
                </View>
                
                <View style={styles.amountInputContainer}>
                    <TextInput style={styles.amountInput} onSubmitEditing={Submit} value={amount} onChangeText={setAmount} />
                </View>

                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>Tipo de cambio a utilizado ({name})</Text>
                    <Text style={styles.priceIndicator}>{isPressed ? 'ARS' : ' USD'} {isPressed ? (parseInt(amount) * venta) : (parseInt(amount) / compra)}</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.back,
        gap: 25,
    },
    amountInputContainer: {
        
    },
    amountInput: {
        color: colors.white,
    },
    priceContainer: {
        backgroundColor: colors.priceContainerFill,
        width: '80%',
        height: '15%',
        borderRadius: 6,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        flexDirection: 'column',
    },
    priceText: {
        color: colors.white,
    },
    priceIndicator: {
        color: colors.white,
        fontWeight: 'bold',
    },
    switchContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
    },
    switchTextContainer: {
        borderWidth: 1.5,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.bannerBorder,
        borderRadius: 6,
        width: '40%',
        height: 60,
    },
    switchActiveTextContainer: {
        borderWidth: 1.5,
        borderColor: colors.spreadUp,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        width: '40%',
        backgroundColor: colors.spreadUp,
        height: 60,
    },
    switchText: {
        color: colors.white,
    },
    arrow: {
        position: 'absolute',
        left: '10%',
        top: '10%',
    },
})