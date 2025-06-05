import { ReactNode } from "react"
import { View, Text, StyleSheet, type ViewStyle } from "react-native"

interface Props {
    children: ReactNode
    style?: ViewStyle
}

const CircleButton = (props: Props) => {
    const { children, style } = props
    return (
        <View style={[styles.circleButton, style]}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
    )
}

const styles = StyleSheet.create ({
    circleButton: {
        width: 57,
        height: 57,
        borderRadius: 29,
        backgroundColor: 'rgb( 0, 134, 173 )',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 22,
        bottom: 55,
        shadowColor: 'rgb( 0, 0, 0)',
        shadowOpacity: 0.25,
        shadowRadius:8,
        shadowOffset: { width: 0, height: 8 },
        elevation: 8
      },
      circleButtonLabel: {
        color: 'rgb( 255, 255, 255 )',
        fontSize: 70,
        lineHeight: 40
      }
})

export default CircleButton
