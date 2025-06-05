import { View, Text, StyleSheet } from "react-native"

const MemoListItem = () => {
    return (
        <View style={styles.memoListItem}>
                  <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2025年6月3日 15:52</Text>
                  </View>
                  <View>
                    <Text>X</Text>
                  </View>
                </View>
    )
}

const styles = StyleSheet.create ({
    memoListItem: {
        backgroundColor: 'rgb( 255, 255, 255)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingLeft: 19,
        paddingRight: 41,
        borderBottomWidth: 1,
        borderColor: 'rgba( 44, 0, 0, 0.25 )'
      },
      memoListItemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgb( 6, 0, 60 )'
      },
      memoListItemDate: {
        fontSize: 12,
        color: 'rgba( 6, 0, 60, 0.8 )'
      }
})

export default MemoListItem
