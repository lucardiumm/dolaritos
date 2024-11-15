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
import Dollar from '@/components/pages/Dollar'

export default function Page() {
    const { id } = useLocalSearchParams()

    useEffect(() => {
        console.log(id)
    })

    return (
        <>
            <StatusBar barStyle={'light-content'} />

            <Dollar name={id[0]} />
        </>
    )
}