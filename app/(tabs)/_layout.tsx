import { Stack, Tabs, router } from 'expo-router'
import { useFonts } from 'expo-font'
import { colors } from '@/extra/colors'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

export default function Layout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
                display: 'none',
            },
        }}>
            <Tabs.Screen name={'items/[id]'} />
        </Tabs>
    )
}