import { Button, Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useEffect, useRef, useState } from 'react'
import { colors } from '../extra/colors'
import { router, useRouter } from 'expo-router'
import Screen from '../components/pages/Screen'
import * as LocalAuthentication from 'expo-local-authentication'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Page() {
    const [show, setShow] = useState(false)
    const router = useRouter()

    const Press = async () => {
        await LocalAuthentication.authenticateAsync()
    }

    const Load = async () => {
        if (show === false) {
            await LocalAuthentication.authenticateAsync({
                biometricsSecurityLevel: 'strong',
            }).then((value) => {
                if (!value.success) {
                    setShow(false)
                } else {
                    Press()
                }
            })
        }
    }

    useEffect(() => {
        // Load()
    })

    return (
        <>
            <StatusBar barStyle={'light-content'} />

            <Screen />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    button: {
        width: 100,
        height: 70,
        backgroundColor: 'red',
    },
})