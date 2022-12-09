import React from "react";
import {View, Text, StyleSheet} from 'react-native'

export function WinnerScreen() {
  return(
    <View style={styles.container}>
      <Text style={styles.font}>Winner Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#191919',
    justifyContent: 'center',
    alignItems: 'center'
  },
  font: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#b3b3b3',
  }
})