import { Button, Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useEffect, useRef, useState } from 'react'
import { router } from 'expo-router'
import { colors } from '../../extra/colors'
import Screen from '@/components/pages/Screen'

export default function Page() {
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
})