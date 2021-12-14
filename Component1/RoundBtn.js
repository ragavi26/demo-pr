import React from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';

function RoundBtn({text}) {
  return (
    <SafeAreaView style={styles.middleware}>
      <TouchableOpacity style={styles.roundButton}>
        <Text style={styles.text}> {text} </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default RoundBtn;
const styles = StyleSheet.create({
  roundButton: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    overflow: 'hidden',
    borderStyle: 'solid',
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
