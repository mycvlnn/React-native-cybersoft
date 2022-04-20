import React, {Component} from 'react'
import {StyleSheet, View, SafeAreaView} from 'react-native'
import DataBinding from './src/screens/DataBinding'
import NewFeed from './src/screens/NewFeed/NewFeed'

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.rootContainer}>
          {/* <DataBinding /> */}
          <NewFeed />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  }
})
