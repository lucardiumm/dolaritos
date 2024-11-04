import { Stack, Tabs, router } from 'expo-router'
import { useFonts } from 'expo-font'
import { ClerkProvider, useAuth } from '@clerk/clerk-expo'
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
        <Tabs screenOptions={{
            headerShown: false,
        }} tabBar={(props) => <TabBar {...props} />}>
            <Tabs.Screen name={'index'} options={{
                headerShown: false,
            }} />
        </Tabs>
    )
}