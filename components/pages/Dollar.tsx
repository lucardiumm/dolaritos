import { Button, Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useEffect, useRef, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import Screen from '@/components/pages/Screen'
import { colors } from '@/extra/colors'
import * as SQLite from 'expo-sqlite'
import { io } from 'socket.io-client'
import Input from '@/components/core/Input'
import AntDesign from '@expo/vector-icons/AntDesign'
import axios from 'axios'
import { LineChart } from 'react-native-gifted-charts'
import * as Haptics from 'expo-haptics'

export default function Dollar({ name }: DollarCompType) {
    const db = SQLite.openDatabaseSync('me.db') 

    const [data, setData] = useState<ChartType[]>([])

    const Read = async () => {
        await axios.get('https://www.dolarito.ar/api/frontend/history', {
            headers: {
                'Auth-Client': '0022200edebd6eaee37427532323d88b',
            }
        }).then((response) => {
            if (response.status === 200) {
                /* Object.entries(response.data).forEach(([key, value]: any) => {
                    const stringed = JSON.stringify(value)

                    if (stringed.includes('cripto')) {
                        setData(prevData => [...prevData, {
                            value: value.compra,
                            date: key,
                        }])
                    }  
                }) */
            }
        })
    }

    const Press = async () => {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        router.back()
    }

    useEffect(() => {
        Read()
    })

    return (
        <>
            <SafeAreaView style={styles.container}>
                <AntDesign onPress={Press} name={'arrowleft'} size={25} color={colors.white} />
                
                
            </SafeAreaView>
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
        backgroundColor: colors.back,
    },
})