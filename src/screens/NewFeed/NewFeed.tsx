import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, Pressable} from 'react-native'
import Article from './Components/Article'
import ArticleList from './Components/ArticleList'
import Header from './Components/Header'
import ListAvatar from './Components/ListAvatar'

const NewFeed: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <Text>New Feed</Text> */}
      <Header />
      <ListAvatar />
      <ArticleList />
      {/* <FontAwesomeIcon icon={faMugSaucer} /> */}
    </View>
  )
}

export default NewFeed

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
