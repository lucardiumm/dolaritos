import { Dimensions, FlatList, Image, Keyboard, KeyboardAvoidingView, Platform, RefreshControl, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../../extra/colors'
import * as SQLite from 'expo-sqlite'
import { io } from 'socket.io-client'
import { config } from '../../extra/config'
import { useCallback, useEffect, useRef, useState } from 'react'
import { WebView } from 'react-native-webview'
import Constants from 'expo-constants'
import { AntDesign, createIconSetFromIcoMoon, Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { router } from 'expo-router'
import Card from '@/components/core/Card'
import Input from '@/components/core/Input'
import * as Haptics from 'expo-haptics'
import { buttons } from '@/extra/buttons'
import Header from '../navigation/Header'
import Bar from '../core/Bar'
import Section from '../navigation/sections/Section'
import * as LocalAuthentication from 'expo-local-authentication'
import axios from 'axios'
import * as Progress from 'react-native-progress'

export default function Screen() {
    const db = SQLite.openDatabaseSync('me.db')
    const socket = io(config.api)

    const [refreshing, setRefreshing] = useState(false)
    const [progress, setProgress] = useState(0)
    const [dolares, setDolares] = useState<DolaresType[]>([])

    const Read = async () => {
        setDolares([])
        
        await axios.get('https://www.dolarito.ar/api/frontend/quotations/dolar', {
            headers: {
                'Auth-Client': '0022200edebd6eaee37427532323d88b'
            }
        }).then((response) => {
            if (response.status === 200) {
                Object.entries(response.data).forEach(([key, value]: any) => {
                    if (key.includes('cripto') || key.includes('infor')) {
                        setDolares(prevDolar => [...prevDolar, {
                            buy: value.buy != null ? value.buy : '',
                            sell: value.sell != null ? value.sell : '',
                            name: key,
                            timestamp: value.timestamp != null ? value.timestamp : '',
                            spread: value.spread != null ? value.spread : '',
                            variation: value.variation != null ? value.variation : '',
                        }])
                    }
                })
            }

            axios.get('https://www.dolarito.ar/api/frontend/quotations/usdt', {
                headers: {
                    'Auth-Client': '0022200edebd6eaee37427532323d88b',
                }
            }).then((response) => {
                if (response.status === 200) {
                    Object.entries(response.data).forEach(([key, value]: any) => {
                        if (key.includes('lemon') || key.includes('buen') || key.includes('ripio') || key.includes('binance')) {
                            setDolares(prevDolar => [...prevDolar, {
                                buy: value.buy != null ? value.buy : '',
                                sell: value.sell != null ? value.sell : '',
                                name: key,
                                timestamp: value.timestamp != null ? value.timestamp : '',
                                spread: value.spread != null ? value.spread : '',
                                variation: value.variation != null ? value.variation : '',
                            }])
                        }
                    })
                }
            })
        })
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true)

        setProgress(0)
        Read()
        
        setTimeout(() => {
            setRefreshing(false)
        }, 1000)
    }, [])

    useEffect(() => {
        Read()
    }, [])
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}></View>

            <View style={styles.progressBarView}>
                <Progress.Bar width={Dimensions.get('window').width - 100} borderRadius={2} height={15} progress={progress} color={colors.progressBarFilled} borderWidth={0} unfilledColor={colors.progressBarUnfilled} />
                <Text style={styles.progressText}>Próxima actualización en 5 minutos</Text>
            </View>
            
            <View style={styles.indicator}>
                <Text style={[styles.indicatorText, {
                    marginHorizontal: 15,
                    color: colors.white,
                }]}>TIPO DE CAMBIO</Text>
                <View style={styles.indicatorDif}>
                    <Text style={[styles.indicatorText, {
                        color: colors.buy,
                    }]}>{'Comprá'.toUpperCase()}</Text>
                    <Text style={[styles.indicatorText, {
                        color: colors.white,
                    }]}>/</Text>
                    <Text style={[styles.indicatorText, {
                        color: colors.sell,
                    }]}>{'Vendé'.toUpperCase()}</Text>
                </View>
            </View>
            
            <ScrollView refreshControl={
                <RefreshControl tintColor={colors.progressBarUnfilled} refreshing={refreshing} onRefresh={onRefresh} />
            } showsVerticalScrollIndicator={false} style={styles.scroll} contentContainerStyle={styles.scrollViewContainer}>
                {dolares.map(({ name, buy, sell, variation, spread, timestamp }, index) => (
                    <Card key={index} name={name} buy={buy} sell={sell} timestamp={timestamp} variation={variation} spread={spread} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignContent: 'center',
        backgroundColor: colors.back,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    scroll: {
        flexGrow: 0,
        height: '80%',
    },
    scrollViewContainer: {},
    progressBarView: {
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        gap: 15,
    },
    progressText: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.progressText,
    },
    indicator: {
        width: Dimensions.get('window').width - 35,
        backgroundColor: colors.banner,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        height: 35,
        gap: 15,
    },
    indicatorDif: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
        gap: 5,
    },
    indicatorText: {
        fontSize: 12.5,
        fontWeight: '700',
    },
})