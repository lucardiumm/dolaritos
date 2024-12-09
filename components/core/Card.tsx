import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Haptics from 'expo-haptics'
import { colors } from '@/extra/colors'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import Lemon from '@/components/icons/Lemon'
import Binance from '@/components/icons/Binance'
import Ripio from '@/components/icons/Ripio'
import BuenBit from '@/components/icons/BuenBit'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'

export default function Card({ casa, name, sell, buy, timestamp }: DolaresType) {
    const [dolarDate, setDolarDate] = useState<number>()
    const [indicator, setIndicator] = useState('segundos')

    const Press = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)
        
        if (casa) {
            router.push('/items/' + casa.toLowerCase())
        } else {
            router.push('/items/' + name.toLowerCase())
        }
    }

    if (name.includes('Ofic')) {
        name = name + ' 🏦'
    } else if (name.includes('Blu')) {
        name = name + ' 💶'
    } else if (name.includes('Tarj')) {
        name = name + ' 💳'
    } else if (name.includes('Crip')) {
        name = name + ' ⚡'
    } else if (name.includes('Bols')) {
        name = name + ' 💰'
    }
    
    useEffect(() => {
        const currenDate = new Date().getSeconds()
        const targetDate = new Date(timestamp).getMilliseconds()

        const secs = currenDate - targetDate
        
        if (secs > 60) {
            setDolarDate(secs / 60)
            setIndicator('minutos')    
        }

        setDolarDate(secs)
    })

    if (name.includes('lemon') || name.includes('buen') || name.includes('ripio')) {
        const dotIndex = sell.toString().indexOf('.')
        const finalSell = sell.toString().substring(0, dotIndex + 3)
        const finalBuy = buy.toString().substring(0, dotIndex + 3)
        
        return (
            <View style={styles.fullContainer}>
                <TouchableOpacity style={[styles.banner, {
                    borderColor: colors.bannerBorder,
                }]} activeOpacity={0.8} onPress={Press}>
                    <View style={styles.leftView}>
                        <View style={styles.bannerLeftView}>
                            {name.includes('lemon') ? <Lemon style={{
                                width: 100,
                                height: 20,
                            }} /> : ''}
                            {name.includes('buen') ? <BuenBit style={{
                                width: 100,
                                height: 20,
                            }} /> : ''}
                            {name.includes('ripio') ? <Ripio style={{
                                width: 100,
                                height: 20,
                            }} /> : ''}
                        </View>
                        <View style={styles.timestampBox}>
                            <Text style={styles.timeText}>Hace {((Date.now() - parseInt(timestamp)) / 60000).toString().slice(0, 1)} minutos</Text>
                        </View>   
                    </View>
                    
                    <View style={styles.bannerRightView}>
                        <Text style={styles.buyText}><FontAwesome name={'dollar'} size={17.5} color={colors.buy} /> {finalSell}</Text>
                        <Text style={styles.sellText}><FontAwesome name={'dollar'} size={15} color={colors.sell} /> {finalBuy}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.fullContainer}>
            <TouchableOpacity style={[styles.banner, {
                borderColor: colors.bannerBorder,
            }]} activeOpacity={0.8} onPress={Press}>
                <View style={styles.leftView}>
                    <View style={styles.bannerLeftView}>
                        <Text style={styles.typeText}>{name.toUpperCase().slice(0, 17)}</Text>
                    </View>
                    <View style={styles.timestampBox}>
                        <Text style={styles.timeText}>Hace {dolarDate} {indicator}</Text>
                    </View>
                </View>

                <View style={styles.bannerRightView}>
                    <Text style={styles.buyText}><FontAwesome name={'dollar'} size={17.5} color={colors.buy} /> {sell}</Text>
                    <Text style={styles.sellText}>{name.includes('Tar') ? '' : <FontAwesome name={'dollar'} size={15} color={colors.sell} /> } {name.includes('Tar') ? '' : buy}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    fullContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    leftView: {
        margin: 25,
        gap: 25,
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
    },  
    timeText: {
        color: colors.light,
        fontFamily: 'mon-sb',
        fontSize: 12,
        margin: 0,
        fontWeight: '500',
    },
    timestampBox: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    colsBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '50%',
        gap: 15,
    },
    banner: {
        backgroundColor: colors.banner,
        width: Dimensions.get('window').width - 35,
        borderRadius: 5,
        height: 115,
        flexDirection: 'row',
        display: 'flex',
        borderWidth: 2,
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    bannerLeftView: {
        gap: 15,
    },
    bannerRightView: {
        position: 'relative',
        right: 0,
        marginVertical: 25,
        marginRight: 25,
        gap: 5,
    },
    typeText: {
        color: colors.type,
        fontFamily: 'Roboto',
        fontSize: 17.5,
        fontWeight: '700',
    },
    spread: {
        marginTop: -20,
        position: 'relative',
        bottom: '-17.5%',
        zIndex: 10,
        borderRadius: 12,
        borderWidth: 2,
        backgroundColor: colors.banner,
        width: 85,
        gap: 5,
        height: 40,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    buyText: {
        fontFamily: 'Roboto',
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.buy,
    },
    sellText: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '500',
        color: colors.sell,
    },
    amount: {
        color: colors.spreadText,
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: 'bold',
    },
    caret: {
        marginTop: 2.5,
    },
})