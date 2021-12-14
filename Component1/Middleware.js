import React from 'react';
import RoundBtn from './RoundBtn';
import {SafeAreaView, Text, StyleSheet, View, Dimensions} from 'react-native';

function Middleware() {
  const letters = ['P', 'L', 'P', 'T', 'S', 'A', 'C', 'E', 'H', 'D'];

  return (
    <SafeAreaView style={styles.middleware}>
      <View style={styles.roundbutton}>
        {letters.map(letter => (
          <RoundBtn text={letter} />
        ))}
      </View>
    </SafeAreaView>
  );
}
export default Middleware;
const styles = StyleSheet.create({
  middleware: {
    flex: 1,
    padding: 25,
    flexDirection: 'row',
  },
  roundbutton: {
    flexDirection: 'column',
    alignItems: 'center',

    justifyContent: 'space-between',
    alignContent: 'space-between',
    flexWrap: 'wrap',
    height: 140,
    width: '100%',
  },
});
