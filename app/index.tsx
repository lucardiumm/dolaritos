import { Dimensions, FlatList, Image, Keyboard, KeyboardAvoidingView, Platform, RefreshControl, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import * as SQLite from 'expo-sqlite'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AntDesign, createIconSetFromIcoMoon, Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { router } from 'expo-router'
import Card from '@/components/core/Card'
import * as Haptics from 'expo-haptics'
import { buttons } from '@/extra/buttons'
import axios from 'axios'
import { config } from '@/extra/config'
import { colors } from '@/extra/colors'
import useCripto from '@/hooks/useCripto'
import Constants from 'expo-constants'
import * as Progress from 'react-native-progress'

export default function Page() {
    const { data: dolares, refreshHook: refreshDolar } = useCripto()
    const db = SQLite.openDatabaseSync('me.db')

    const [refreshing, setRefreshing] = useState(false)
    const [progress, setProgress] = useState(0)

    const onRefresh = useCallback(() => {
        setRefreshing(true)

        refreshDolar()
        setProgress(0)
        
        setTimeout(() => {
            setRefreshing(false)
        }, 1000)
    }, [])

    return (
        <>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.back} />

            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <View 
                        // style={styles.topContainer}
                    ></View>

                    <View style={styles.progressBarView}>
                        <Progress.Bar borderWidth={0} borderRadius={2} unfilledColor={colors.progressBarUnfilled} color={colors.progressBarFilled} animated={true} progress={progress} width={Dimensions.get('window').width - 120} height={16}  />
                        <Text style={styles.progressText}>Actualizaciónes cada 1 minuto</Text>
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
                        {dolares.map(({ name, ask, bid, time }, index) => (
                            <Card key={index} name={name} ask={ask} bid={bid} time={time} />
                        ))}
                    </ScrollView>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignContent: 'center',
        backgroundColor: colors.back,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    subcontainer: {
        flex: 1,
        display: 'flex',
        alignContent: 'center',
        backgroundColor: colors.back,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Constants.statusBarHeight,
        flexDirection: 'column',
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