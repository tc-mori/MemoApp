import { View, Text, TextInput, StyleSheet } from "react-native"

import Button from "../../components/Button"

import Header from "../../components/Header"

const SignUp = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput style={styles.input} value="Email address" />
                <TextInput style={styles.input} value="Password" />
                <Button label='確定' />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>アカウントがありませんか？</Text>
                    <Text style={styles.footerLink}>ログイン</Text>
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
