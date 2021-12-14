import React from 'react';
import Header from './Component/Header';
import Middleware from './Component1/Middleware';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <View>
      {/* <Header /> */}
      <Middleware />
    </View>
  );
};

export default App;
