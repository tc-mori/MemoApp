import { View, Text, StyleSheet } from "react-native"

const Index = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Memo App</Text>
          <Text style={styles.headerRight}>ログアウト</Text>
        </View>
      </View>

      <View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2025年6月3日 15:52</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>やる事リスト</Text>
            <Text style={styles.memoListItemDate}>2025年6月3日 15:52</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>新作</Text>
            <Text style={styles.memoListItemDate}>2025年6月3日 15:52</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>

    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>+</Text>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb( 255, 255, 255 )"
  },
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
  },
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
  },
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
    lineHeight: 65
  }
})

export default Index
