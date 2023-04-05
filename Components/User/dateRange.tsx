import React, { Component, useState } from 'react';
import {
    View, Image, FlatList, StatusBar,
    Text, SafeAreaView, StyleSheet, Platform, TouchableOpacity, Alert
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import moment from "moment";
import DateRangePicker from 'rn-select-date-range';
const Adoption: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    
    const [selectedRange, setRange] = useState({});

    return (
       
        <SafeAreaView>
        <View style={styles.container}>
          <DateRangePicker
            onSelectDateRange={(range) => {
              setRange(range);
            }}
            blockSingleDateSelection={true}
            responseFormat="YYYY-MM-DD"
            maxDate={moment()}
            minDate={moment().subtract(100, "days")}
            selectedDateContainerStyle={styles.selectedDateContainerStyle}
            selectedDateStyle={styles.selectedDateStyle}
          />
          <View style={styles.container}>
            {/* <Text>first date: {selectedRange.firstDate}</Text>
            <Text>second date: {selectedRange.secondDate}</Text> */}
          </View>
        </View>
      </SafeAreaView>
  
    );

}
const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'center',
            // paddingTop: StatusBar.currentHeight,
            backgroundColor: "#FFFFFF",
        },
        textStyle: {

            color: '#fff', fontWeight: '600',
            fontSize: 22
        },
        input: {
            height: 50,
            width: '100%', backgroundColor: '#FFF',
            paddingLeft: 15,
            borderRadius: 10, borderWidth: 1, borderColor: "#FF8A25", marginTop: 20,

        },
        container: {
            margin: 50,
          },
        selectedDateContainerStyle: {
            height: 35,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "blue",
          },
          selectedDateStyle: {
            fontWeight: "bold",
            color: "white",
          },

    });
export default Adoption;