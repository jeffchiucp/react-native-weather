
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DayTemp from './dayTemp';

export default class App extends React.Component {
  render() {
    //Update Day
    const days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
    const date = new Date();
    const dayNumber = date.getDay();
    const day = days[dayNumber];

    //Update Month using ES6 toLocaleString method
    const month = date.toLocaleString("en-us", { month: "long"});

    //Update Week's temperatures
    const weatherArray = ["77˚", "75˚", "74˚", "74˚", "70˚", "79˚", "73˚"];
    const currentWeather = weatherArray[dayNumber];

    // function we implement in the class
    const listDays = () => {
      return days.map((day, index) => {
        return <DayTemp key = {index} valueDay = {days[index]} valueWeather = {weatherArray[index]} />
      })
    }

    return (
      <View style= {styles.container}>
        <Text style= {styles.state}>San Francisco</Text>
        <Text style= {styles.date}>{day}, {month} {dayNumber + 1}</Text>
        <Text style= {styles.currentWeather}>{currentWeather}</Text>
        <View style= {styles.dayContainer}>
          {listDays()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    backgroundColor: '#D3D3D3',
  },
  state: {
    fontSize: 40,
    fontWeight: '300',
    paddingBottom: 5,
  },
  date:{
    fontSize: 30,
    fontWeight: '200',
    paddingBottom: 10,
  },
  dayTemp: {
    width: 50,
    height: 50,
  },
  dayContainer: {
    flexDirection: 'row',
  },
  currentWeather: {
    fontSize: 120,
    paddingBottom: 5,
    marginLeft: 40,
  }

});
