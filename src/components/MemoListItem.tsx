import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

import { Link } from "expo-router"

import Icon from "./Icon"

const MemoListItem = () => {
    return (
        <Link href='/memo/detail' asChild>
        <TouchableOpacity style={styles.memoListItem}>
                  <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2025年6月3日 15:52</Text>
                  </View>
                  <TouchableOpacity>
                    <Icon name='delete' size={32} color="rgb( 0, 134, 173 )" />
                  </TouchableOpacity>
                </TouchableOpacity>
                </Link>
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
