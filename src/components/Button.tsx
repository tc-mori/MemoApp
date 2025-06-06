import { Text, TouchableOpacity, StyleSheet } from "react-native"

interface Props {
    label: string
    onPress?: () => void
}

const Button = (props: Props) => {
    const { label, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={styles.button
                        }> <Text style={styles.buttonLabel}>{ label }</Text>
                        </TouchableOpacity>
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
