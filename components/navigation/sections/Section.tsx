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
import * as WebBrowser from 'expo-web-browser'

export default function Section({ image, link, content, title, id }: NotesType) {
    const Press = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)

        router.push(`/items/${id}`)
    }

    return (
        <TouchableOpacity onPress={Press} style={styles.container}>
            <Image
                source={{
                    uri: image
                }}
                resizeMethod={'scale'}
                alt={''}
                width={350}
                height={220}
                style={styles.image}
            />
            
            <View style={styles.textContainer}>
                <Text style={styles.bio}>{title}</Text>
            </View>
        </TouchableOpacity>
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
        marginVertical: 15,
    },
    image: {
        borderRadius: 18,
    },
    title: {
        color: colors.black,
        fontFamily: 'cb-bold',
        fontSize: 20,
    },
    bio: {
        color: colors.gray,
        fontFamily: 'cb-regular',
        fontSize: 15,
    },
    textContainer: {
        margin: 25,
        alignContent: 'flex-start',
        textAlign: 'left',
        gap: 10,
    },
    buttonsContainer: {
        marginLeft: 25,
        marginBottom: 15,
        flexDirection: 'row',
        display: 'flex',
    },
    buttonOne: {
        borderRadius: 9999,
        backgroundColor: colors.riot,
        width: 80,
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        height: 40,
    },
    buttonTwo: {
        borderRadius: 9999,
        width: 80,
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        height: 40,
    },
    text: {
        fontFamily: 'cb-medium',
        color: colors.white,
    },
    textTwo: {
        fontFamily: 'cb-medium',
        color: colors.black,
    },
})