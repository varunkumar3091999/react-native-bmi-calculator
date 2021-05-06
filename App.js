/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setbmi] = useState(0)

  const calculateBmi = () => {

  }

  return (

    <KeyboardAvoidingView>
      <View>
        <View style={ { height: 300, marginBottom: 100 } }>
          <Text style={ styles.bmi }>{ bmi.toFixed(2).toString() }</Text>

          { bmi === 0 && null }
          { bmi < 18.5 && bmi !== 0 && <Text style={ styles.description }>Low weight for your height</Text> }
          { bmi > 18.5 && bmi < 24.9 && <Text style={ styles.description }>Normal height and weight</Text> }
          { bmi > 25 && bmi < 29.9 && <Text style={ styles.description }>Normal height and weight</Text> }
          { bmi > 18.5 && bmi < 24.9 && <Text style={ styles.description }>Overweight</Text> }
          { bmi >= 30 && <Text style={ styles.description }>Obese</Text> }
        </View>

        <View style={ styles.labelAndIput }>
          <Text style={ styles.label }>
            Enter you Height in Centimeters:
      </Text>
          <TextInput
            onChangeText={ height => setHeight(height / 100) }
            value={ height }
            placeholder="your height"
            keyboardType="numeric"
            style={ { fontSize: 20 } }
          />
        </View>

        <View style={ styles.labelAndIput }>
          <Text style={ styles.label }>
            Enter you Weight in KG:
      </Text>
          <TextInput
            onChangeText={ weight => setWeight(weight) }
            value={ weight }
            placeholder="your weight"
            keyboardType="numeric"
            style={ { fontSize: 20 } }
          />
        </View>

        <View style={ { alignItems: 'center' } }>
          <TouchableOpacity
            onPress={ () => setbmi(weight / (height ^ 2)) }
            style={ styles.button }
          >
            <Text style={ { alignSelf: 'center', fontSize: 30, } }>Calculate BMI</Text>
          </TouchableOpacity>
        </View>

      </View >
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    marginTop: 32,
    backgroundColor: '#7fffd4',
    height: 70,
    width: 300,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,

  },
  label: {
    fontSize: 25,
    fontWeight: '600',
  },
  bmi: {
    fontSize: 60,
    fontWeight: '400',
    marginTop: 50,
    marginBottom: 30,
    textAlign: 'center'
  },
  description: {
    fontSize: 25,
    marginBottom: 50,
    marginHorizontal: 30,
    textAlign: 'center'
  },
  labelAndIput: {
    height: 100
  }
});

export default App;
