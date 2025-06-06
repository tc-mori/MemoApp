import { View, StyleSheet } from "react-native"

import { router, useNavigation } from "expo-router"

import { useEffect } from "react"

import Icon from "../../components/Icon"

import MemoListItem from "../../components/MemoListItem"

import CircleButton from "../../components/CircleButton"

import LogOutButton from "../../components/LogOutButton"

const handlePress = (): void => {
    router.push('/memo/create')
}

const Index = () => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <LogOutButton /> }
        })
    }, [])
  return (
    <View style={styles.container}>
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
      <CircleButton onPress={handlePress}>
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
