import { View, Text, StyleSheet } from "react-native"

const Header = () => {
    return (
        <View style={styles.header}>
                <View style={styles.headerInner}>
                  <Text style={styles.headerTitle}>Memo App</Text>
                  <Text style={styles.headerRight}>ログアウト</Text>
                </View>
              </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "rgb( 0, 163, 129 )",
        height: 104,
        justifyContent: "flex-end"
      },
      headerInner: {

      },
      headerTitle: {
        fontSize: 40,
        lineHeight: 56,
        fontWeight: 'bold',
        color: 'rgb( 255, 255, 255 )',
        left: 24,
        bottom: 0
      },
      headerRight: {
        position: 'absolute',
        right: 22,
        bottom: 13,
        fontSize: 12,
        color: 'rgba( 255, 255, 255, 0.7)'
      }
})

export default Header
