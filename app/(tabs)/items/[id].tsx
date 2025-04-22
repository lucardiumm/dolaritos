import { Button, Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useEffect, useRef, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import Screen from '@/components/pages/Screen'
import { colors } from '@/extra/colors'
import * as SQLite from 'expo-sqlite'
import Input from '@/components/core/Input'
import AntDesign from '@expo/vector-icons/AntDesign'
import Dollar from '@/components/pages/Dollar'
import axios from 'axios'
import { config } from '@/extra/config'

export default function Page() {
    const { id } = useLocalSearchParams()

    const [compra, setCompra] = useState(0)
    const [venta, setVenta] = useState(0)

    const Run = async () => {
        if (id.includes('lemon') || id.includes('buen') || id.includes('ripio')) {
            await axios.get('https://www.dolarito.ar/api/frontend/quotations/usdt', {
                headers: {
                    'Auth-Client': '0022200edebd6eaee37427532323d88b',
                }
            }).then((response) => {
                if (response.status === 200) {
                    Object.entries(response.data).forEach(([key, value]: any) => {
                        if (key.includes('lemon') || key.includes('buen') || key.includes('ripio')) {
                            setCompra(value.buy)
                            setVenta(value.sell)
                        }
                    })
                }
            })
        }
        await axios.get(config.apis.dolarPrices).then((response) => {
            if (response.status === 200) {
                response.data.forEach(element => {
                    if (element.casa.toLowerCase() === id.toString().toLowerCase()) {
                        setCompra(element.compra)
                        setVenta(element.venta)
                    }  
                })
            }
        })
    }

    useEffect(() => {
        Run()
    })

    return (
        <>
            <StatusBar barStyle={'light-content'} />

            <Dollar compra={compra} venta={venta} name={id.toString()} />
        </>
    )
}