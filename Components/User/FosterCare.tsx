import React, { Component, useState } from 'react';
import {
    View, Image, FlatList, StatusBar,
    Text, SafeAreaView, StyleSheet, Platform, TouchableOpacity, Alert
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import DATA from "../Data";
import OrphanItem from './OrphanItem';
import SelectDropdown from 'react-native-select-dropdown'
import * as Strings from '../../Assets/Strings';

const FosterCare: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [state, setState] = useState('')
    const [maritalStatus, setMaritalStatus] = useState('')
    const [jobProfile, setJobProfile] = useState('')
    const [income, setIncome] = useState(null)

    const OnSubmit = () => {
        if (name == '' ||
            age == '' ||
            mobile == '' ||
            address == '' ||
            city == '' ||
            pinCode == '' ||
            state == '' ||
            maritalStatus == '' ||
            jobProfile == '' ||
            income == null
        ) {
            Alert.alert("Please fill all Data")
        }
        else if (income < 7000) {
            (Platform.OS === 'ios') ? Alert.alert( Strings.lessIncome) : Alert.alert("Sorry... ", Strings.lessIncome)
        }
        else {
            console.log("name------", name)
            console.log("age------", age)
            console.log("mobile------", mobile)
            console.log("address------", address)
            console.log("city------", city)
            console.log("pinCode------", pinCode)
            console.log("state------", state)
            console.log("maritalStatus------", maritalStatus)
            console.log("jobProfile------", jobProfile)
            console.log("income------", income)
            Alert.alert("Thank You",Strings.FosterSucces)
             navigation.navigate("Home")
        }
    }
    const onClear = () => {
        setName('')
        setAge('')
        setAddress('')
        setCity('')
        setPinCode('')
        setState('')
        setMobile('')
        setMaritalStatus('')
        setJobProfile('')
        setIncome(null)
    }
    return (
        <SafeAreaView style={styles.MainContainer}>

            <View style={styles.MainContainer}>
                <ScrollView>
                    <View style={{ padding: 10 }}>
                        <TextInput style={styles.input}
                            placeholder="Name"
                            placeholderTextColor={"grey"}
                            value={name}
                            onChangeText={(e: any) => setName(e)} />
                        <TextInput style={styles.input}
                            placeholder="Age"
                            placeholderTextColor={"grey"}
                            value={age}
                            keyboardType='numeric'
                            onChangeText={(e: any) => setAge(e)} />
                        <TextInput style={styles.input}
                            placeholder="Mobile"
                            placeholderTextColor={"grey"}
                            value={mobile}
                            keyboardType='numeric'
                            onChangeText={(e: any) => setMobile(e)} />
                        <TextInput style={styles.input}
                            placeholder="Address"
                            placeholderTextColor={"grey"}
                            value={address}
                            onChangeText={(e: any) => setAddress(e)} />
                        <TextInput style={styles.input}
                            placeholder="City"
                            placeholderTextColor={"grey"}
                            value={city}
                            onChangeText={(e: any) => setCity(e)} />
                        <TextInput style={styles.input}
                            placeholder="State"
                            placeholderTextColor={"grey"}
                            value={state}
                            onChangeText={(e: any) => setState(e)} />
                        <TextInput style={styles.input}
                            placeholder="Pincode"
                            placeholderTextColor={"grey"}
                            keyboardType="numeric"
                            value={pinCode}
                            onChangeText={(e: any) => setPinCode(e)} />

                        <SelectDropdown

                            data={["Single", "Married", "Divorced", "Widowed"]}
                            onSelect={(selectedItem, index) => {
                                console.log("selected item-------", selectedItem, index)
                                setMaritalStatus(selectedItem)
                            }}
                            buttonStyle={styles.input}
                            defaultButtonText="Marital Status"
                            buttonTextStyle={{
                                color: 'grey',
                                fontSize: 14, textAlign: "left"
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem
                            }}

                            rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item
                            }}
                            // rowStyle={{backgroundColor:"#FED8B1"}}
                            rowTextStyle={{ color: "#000", fontWeight: '600' }}
                        />

                        <TextInput style={styles.input}
                            placeholder="Job Profile"
                            placeholderTextColor={"grey"}
                            value={jobProfile}
                            onChangeText={(e: any) => setJobProfile(e)} />
                        <TextInput style={styles.input}
                            placeholder="Income in Rs."
                            value={income}
                            placeholderTextColor={"grey"}
                            keyboardType="numeric"
                            onChangeText={(e: any) => setIncome(e)} />
                        <TouchableOpacity style={{
                            width: "100%", marginBottom: 15, marginTop: 20,
                            height: 50,
                            backgroundColor: '#FF9800',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        }}
                            onPress={() => onClear()}
                        >
                            <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: '600' }}>Clear</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: "100%", marginBottom: 15, marginTop: 0,
                            height: 50,
                            backgroundColor: '#FF9800',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        }}
                            onPress={() => OnSubmit()}
                        >
                            <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: '600' }}>Submit</Text>
                        </TouchableOpacity>
                
                    </View>
                </ScrollView>
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
       
      
    });
export default FosterCare;