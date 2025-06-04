import { View, Text, StyleSheet, type TextStyle } from "react-native"

interface Props {
    children: string
    bang?: boolean
    style?: TextStyle
}

const Hello = (props: Props) => {
    const { children, bang, style } = props
    return (
        <View>
            <Text style={[styles.text, style]}>
                Hello {children}{bang === true ? 'コンビニのWi-Fi繋げといたよ' : ''}
                </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        backgroundColor: '#00a381',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16
    }
})

export default Hello
