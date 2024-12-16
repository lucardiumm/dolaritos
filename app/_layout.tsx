import { Stack, Tabs, router } from 'expo-router'
import { useFonts } from 'expo-font'
import TabBar from '../components/navigation/TabBar'

export default function Layout() {
    const [loaded, error] = useFonts({
        'mon': require('../public/fonts/Montserrat/Montserrat-Regular.ttf'),
        'mon-sb': require('../public/fonts/Montserrat/Montserrat-SemiBold.ttf'),
        'mon-b': require('../public/fonts/Montserrat/Montserrat-Bold.ttf'),
        'cb-bold': require('../public/fonts/Coinbase/Bold.ttf'),
        'cb-medium': require('../public/fonts/Coinbase/Medium.ttf'),
        'cb-light': require('../public/fonts/Coinbase/Light.ttf'),
        'cb-regular': require('../public/fonts/Coinbase/Regular.ttf'),
    })
    
    if (!loaded && !error) {
        return null
    }

    return (
        <Stack screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name={'index'} options={{
                headerShown: false,
            }} />
            <Stack.Screen name={'items/[id]'} options={{
                headerShown: false,
            }} />
        </Stack>
    )
}