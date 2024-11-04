import { Dimensions, FlatList, Image, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
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
import * as Random from 'expo-random'

export default function Bar() {
    const db = SQLite.openDatabaseSync('me.db') 

    const Press = async () => {
        Haptics.selectionAsync()

        const id = Math.random().toString(36).substr(3, 10)
        console.log(id)

        await db.runAsync('INSERT INTO notes(content, title, id) VALUES(?,?,?)', ['...', 'Note', id])
        router.push('/items/' + id)
    }

    return (
        <>
            <View style={styles.navContainer}>
                <Text style={styles.title}>Notion</Text>

                <View style={styles.icons}>
                    <TouchableOpacity>
                        <AntDesign name={'search1'} size={25} color={colors.black} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Press}>
                        <MaterialCommunityIcons name={'scan-helper'} size={20} color={colors.black} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '22.5%',
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
        height: '7.5%',
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