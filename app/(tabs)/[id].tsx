import { Button, Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useEffect, useRef, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { colors } from '@/extra/colors'
import * as SQLite from 'expo-sqlite'
import AntDesign from '@expo/vector-icons/AntDesign'
import axios from 'axios'
import { config } from '@/extra/config'

export default function Page() {
    const { id } = useLocalSearchParams()

    const [compra, setCompra] = useState(0)
    const [venta, setVenta] = useState(0)

    return (
        <>
            <StatusBar barStyle={'light-content'} />

            
        </>
    )
}