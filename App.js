import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import axios from "axios";


const App = () => {
  const [temperature, setTemperature] = useState("");
  const [desc, setDesc] = useState("");
  const [city, setCity] = useState("Pune");
  const [country, setCountry] = useState("IN");


  const getWeatherData = (city, country) => {
    axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=de7a597c6f1f7ed2153264e5433703cb`,
    })
    .then((res) => {
        console.log('test data', res.data.main.temp)
        setTemperature(res.data.main.temp - 273.15);
        setDesc(res.data.weather[0].main);
    })
    .catch((err)=>{
        console.log('test err', err)
    })
  }
 return (
   <View>
    <View style={styles.mainView}>
        <Text style={styles.textStyle}>{city} Weather</Text>
        <Text style={styles.textStyle}>{Math.round(temperature * 100) / 100} ℃ - {desc}</Text>
    </View>
    <View>
      <TextInput
      style={styles.textInput}
      placeholder="Enter City"
      value={city}
      onChangeText={(text) => setCity(text)}
      ></TextInput>
      <TextInput
      style={styles.textInput}
      placeholder="Enter Country"
      value={country}
      onChangeText={(text)=> setCountry(text)}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={() => {getWeatherData(city, country)}}><Text style={styles.btnText}>Get Weather</Text></TouchableOpacity>
    </View>
   </View>
 )
}
export default App;

const styles = StyleSheet.create({
  mainView: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: '100%',
    backgroundColor: "#226ba3",
    fontSize: 30,
    color: "#fff",
  },
  textInput: {
    borderColor: 'grey',
    borderWidth: 1,
    margin: 20
  },
  button: {
    marginTop: 30,
    backgroundColor: '#226ba3',
    width: 200,
    height: 46,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 120
  },
  textStyle: {
    color: "#fff",
    fontSize: 22
  },
  btnText: {
    color: '#fff',
    fontSize: 18
  }
})