import { Stack } from 'expo-router'

const Layout = () => {
    return <Stack screenOptions={{
        headerStyle: {
            backgroundColor: 'rgb( 0, 163, 129 )'
        },
        headerTintColor: 'rgb( 255, 255, 255 )',
        headerTitle: 'Memo App',
        headerBackTitle: '戻る',
        headerTitleStyle: {
            fontSize: 40,
            fontWeight: 'bold'
        }
    }} />
}

export default Layout
