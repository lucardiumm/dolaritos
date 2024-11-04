import { Dimensions, FlatList, Image, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../../extra/colors'
import * as SQLite from 'expo-sqlite'
import { io } from 'socket.io-client'
import { config } from '../../extra/config'
import { useEffect, useRef, useState } from 'react'
import { WebView } from 'react-native-webview'
import Constants from 'expo-constants'
import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import Card from '../core/Card'
import Input from '@/components/core/Input'
import * as Haptics from 'expo-haptics'
import { buttons } from '@/extra/buttons'
import * as Sharing from 'expo-sharing'

export default function Header() {
    const Press = async (text: string) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        
        console.log(text)

        if (text === 'Users') {
            router.push('/(tabs)/items/')
        } else if (text === 'Line ups') {
            router.push('/(tabs)/items/lines')
        } else if (text === 'Skins') {
            router.push('/(tabs)/items/skins')
        } else if (text === 'Starred') {
            router.push('/(tabs)/items/starred')
        } else {
            Sharing.shareAsync('https://google.com')
        }
    }   

    return (
        <>
            <View style={styles.container}>
                <View style={styles.view}>
                    {buttons.map(({ icon, text }, index) => (
                        <View style={styles.buttonsContainer} key={index}>
                            <TouchableOpacity activeOpacity={1} onPress={() => {
                                Press(text)
                            }} style={styles.button}>
                                <AntDesign name={icon} size={20} color={colors.white} style={styles.icon} />
                            </TouchableOpacity>

                            <Text style={styles.text}>{text}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '15%',
        width: Dimensions.get('window').width,
        borderBottomColor: colors.light,
        borderBottomWidth: 1,
        gap: 17.5,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        gap: 15,
        marginRight: 25,
    },
    navContainer: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    scrollView: {
        flexDirection: 'row',
        display: 'flex',
    },
    scrollViewContianer: {
        flexGrow: 0,
    },
    view: {
        flexDirection: 'row',
        gap: 25,
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        width: 50,
        height: 50,
        backgroundColor: colors.riot,
        borderRadius: 99999,
    },
    buttonsContainer: {
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
    },
    icon: {
        color: colors.white,
    },
    text: {
        color: colors.gray,
        fontSize: 12.5,
    },
    title: {
        marginLeft: 25,
        color: colors.black,
        fontSize: 35,
        fontFamily: 'cb-medium',
    },
})