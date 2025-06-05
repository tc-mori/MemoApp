import { View, StyleSheet } from "react-native"
import Icon from "../../components/Icon"

import Header from "../../components/Header"

import MemoListItem from "../../components/MemoListItem"

import CircleButton from "../../components/CircleButton"
const Index = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      </View>
      <CircleButton>
        <Icon name='plus' size={40} color='rgb( 255, 255, 255 )' />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb( 255, 255, 255 )"
  }
})

export default Index
