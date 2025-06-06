import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"

import { Link, router } from "expo-router"
import { useState } from "react"

import Button from "../../components/Button"

const hanndlePress = (): void => {
    // 会員登録
    router.push('/memo/list')
}

const SignUp = () => {
     const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput
                                style={styles.input}
                                value={email}
                                onChangeText={(text) => { setEmail(text) }}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                placeholder="Email Address"
                                textContentType="emailAddress"
                                />
                                <TextInput
                                style={styles.input}
                                value={password}
                                onChangeText={(text) => { setPassword(text) }}
                                autoCapitalize="none"
                                secureTextEntry
                                placeholder="Password"
                                textContentType="password"
                                />
                <Button label='確定' onPress={hanndlePress} />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>アカウントがありませんか？</Text>
                    <Link href='/auth/log_in' asChild>
                    <TouchableOpacity>
                    <Text style={styles.footerLink}>ログイン</Text>
                    </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'rgb( 240, 244, 248 )'
    },
    inner: {
        paddingVertical: 24,
        paddingHorizontal: 27
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgb( 221, 221, 221 )',
        backgroundColor: 'rgb( 255, 255, 255 )',
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16
    },
    footer: {
        flexDirection: 'row'
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: 'rgb(15, 130, 207)'
    }
})

export default SignUp
