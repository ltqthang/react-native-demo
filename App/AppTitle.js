/**
 * Created by letqt on 12/3/17.
 */
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class AppTitle extends Component {

  render() {
    const {children} = this.props

    return (
      <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'orange',
    padding: 16,
  },
  title: {
    textAlign: 'center',
    color: 'white',
  },
})
