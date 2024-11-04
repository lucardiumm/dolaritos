import { Dimensions, FlatList, Image, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../extra/colors'
import * as SQLite from 'expo-sqlite'
import { io } from 'socket.io-client'
import { config } from '../../../extra/config'
import { useEffect, useRef, useState } from 'react'
import { WebView } from 'react-native-webview'
import Constants from 'expo-constants'
import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import Card from '../../core/Card'
import Input from '@/components/core/Input'
import * as Haptics from 'expo-haptics'
import { buttons } from '@/extra/buttons'

export default function SectionTwo() {
    const Press = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    }

    return (
        // <View style={styles.container}>
        //     <Image
        //         source={{
        //             uri: ''
        //         }}
        //         alt={''}
        //         style={styles.image}
        //     />
        //     <Text>hola</Text>
        //     <Text></Text>

        //     <TouchableOpacity>

        //     </TouchableOpacity>
        //     <TouchableOpacity>
                
        //     </TouchableOpacity>
        // </View>
        <></>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        borderBottomColor: colors.light,
        borderBottomWidth: 1,
        width: Dimensions.get('window').width,
        height: '30%',
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