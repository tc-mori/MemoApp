import { View, Text, StyleSheet } from "react-native"

interface Props {
    label: string
}

const Button = (props: Props) => {
    const { label } = props
    return (
        <View style={styles.button
                        }> <Text style={styles.buttonLabel}>{ label }</Text>
                        </View>
    )
}

const styles = StyleSheet.create ({
    button: {
        backgroundColor: 'rgb( 0, 134, 173 )',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24
    },
    buttonLabel: {
        fontSize: 16,
        lineHeight: 32,
        color: 'rgb( 255, 255, 255 )',
        paddingVertical: 8,
        paddingHorizontal: 24
    }
})

export default Button
