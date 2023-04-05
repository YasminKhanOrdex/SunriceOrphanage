import React, { Component, useState } from 'react';
import {
    View, Image, FlatList, StatusBar,
    Text, SafeAreaView, StyleSheet, Platform, TouchableOpacity, Alert, ScrollView, TextInput
} from 'react-native';
import DATA from "../Data";
import SelectDropdown from 'react-native-select-dropdown'
import * as Strings from '../../Assets/Strings';
import DatePicker from 'react-native-date-picker';


const AddOrphan: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [commingDate, setCommingDate] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const [gender, setGender] = useState('')
    const [physicallyDisable, setPhysicallyDisable] = useState('')
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [filePath, setFilePath] = useState({});
    const getID = () => {
        var S4 = () => {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (
            S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4()
        );
    };
    const OnSubmit = async () => {
        if (name == '' ||
            age == '' ||
            commingDate == '' ||
            bloodGroup == '' ||
            gender == '' ||
            physicallyDisable == ''
        ) {
            Alert.alert("Please fill all Data")
        }
        else {

            const data = { id: getID(), name: name, age: age, commingDate: commingDate, bloodGroup: bloodGroup, gender: gender, physicallyDisable: physicallyDisable, }
            // console.log("name------", name)
            // console.log("age------", age)
            // console.log("commingDate------", commingDate)
            // console.log("bloodGroup------", bloodGroup)
            // console.log("gender------", gender)
            // console.log("physicallyDisable------", physicallyDisable)
            console.log("Orphan Data----------", data);
            // OrphanData.push(data);
            // console.log("-----after pushing----", OrphanData)
            Alert.alert("Thank You", Strings.OrphanAddeSucces)
            navigation.navigate("Home")
        }
    }
    const onClear = () => {
        setName('')
        setAge('')
        setBloodGroup('')
        setCommingDate('')
        setGender('')
        setPhysicallyDisable('')
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

                        <SelectDropdown
                            data={["Girl", "Boy", "Other"]}
                            onSelect={(selectedItem, index) => {
                                setGender(selectedItem)
                            }}
                            buttonStyle={styles.input}
                            defaultButtonText="Gender"
                            buttonTextStyle={{
                                color: 'grey',
                                fontSize: 14, textAlign: "left"
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}

                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            // rowStyle={{backgroundColor:"#FED8B1"}}
                            rowTextStyle={{ color: "#000", fontWeight: '600' }}
                        />
                        <TextInput style={styles.input}
                            placeholder="Comming Date"
                            placeholderTextColor={"grey"}
                            value={commingDate}
                            onPressIn={() => setOpen(true)}
                            onChangeText={(e: any) => setCommingDate(e)} />
                        <DatePicker
                            modal
                            open={open}
                            date={date}
                            mode={"date"}
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                                setCommingDate(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear())
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />

                        <TextInput style={styles.input}
                            placeholder="Boold Group"
                            placeholderTextColor={"grey"}
                            value={bloodGroup}
                            onChangeText={(e: any) => setBloodGroup(e)} />

                        <TextInput style={styles.input}
                            placeholder="Physically Disable"
                            placeholderTextColor={"grey"}
                            value={physicallyDisable}
                            onChangeText={(e: any) => setPhysicallyDisable(e)} />
                        {/* <Image
                            source={{
                                uri: 'data:image/jpeg;base64,' + filePath.data,
                            }}
                            style={styles.imageStyle}
                        />
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.buttonStyle}
                            onPress={chooseFile}>
                            <Text style={styles.textStyle}>
                                Choose Image
                            </Text>
                        </TouchableOpacity> */}
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
        buttonStyle: {
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#DDDDDD',
            padding: 5,
          },
          imageStyle: {
            width: 200,
            height: 200,
            margin: 5,
          },


    });
export default AddOrphan;