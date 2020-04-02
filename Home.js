/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Actions } from 'react-native-router-flux';
import {Card} from 'react-native-shadow-cards';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Home = () =>{
    const goToEmployee= () =>{
        Actions.employee()
    }

    return (
        <View style = {styles.container}>
  
          <View style = {styles.innerContainer}>
            <Card style={styles.myCard}>
                <TouchableOpacity onPress={goToEmployee}>
                    <Text>Employee List</Text>
                </TouchableOpacity>
            </Card>
            <Card style={styles.myCard}>
              <Text>Create Employee</Text>
            </Card>
          </View>
  
          <View style = {styles.innerContainer}>
          <Card style={styles.myCard}>
            <Text>Another Menu</Text>
          </Card>
          <Card style={styles.myCard}>
            <Text>Another Menu</Text>
          </Card>
          </View>
        </View>
      )
}
export default Home

const styles = StyleSheet.create({
  myCard:{
    flex: 1,
    padding: 10, 
    margin: 10,
    alignItems: "center"
  },
  innerContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
    height: 600
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
