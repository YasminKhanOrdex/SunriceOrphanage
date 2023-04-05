import React, { Component } from 'react';
import {
    View, Image, FlatList, StatusBar,
    Text, SafeAreaView, StyleSheet, Platform, TouchableOpacity, Alert
} from 'react-native';
import DATA from "../Data";
import Logout from '../Logout';
import OrphanItem from '../User/OrphanItem';
const HomeAdmin: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Logout navigation={navigation} />,
        });
    }, [navigation]);

    const ondetaliClick = (item: any) => {
        // console.log("Item------",JSON.stringify(item.name))
        // // // navigation.navigate("Orphan Detail",
        // // // { items:item}
        // // {
        // //     id:item.id,
        // //     name:item.name,
        // //     age:item.age,
        // //     catagory:item.catagory,
        // //     booldGroup:item.booldGroup,
        // //     physicallyDisable:item.physicallyDisable,
        // //     uri:item.uri,

        // // }

        // )
        Alert.alert('hiii')
    }


    return (
        <View style={styles.container}>

            <FlatList
                data={DATA}
                // renderItem={({ item }) => <View style={styles.list}>
                //     <Text>Name : {item.name}</Text>
                //     <Text>Age : {item.age}</Text>
                // </View>}
                renderItem={({ item }) =>
                    <View style={styles.list}>
                        <OrphanItem
                            title={item.name}
                            age={item.age}
                            catagory={item.catagory}
                            uri={item.uri}
                            commingDate={item.commingDate}
                            booldGroup={item.booldGroup}
                            physicallyDisable={item.physicallyDisable}
                            ondetaliClick={() => ondetaliClick(item)
                            }
                        />
                    </View>
                }
                keyExtractor={item => item.id}
            />

            <TouchableOpacity onPress={() => navigation.navigate("Add Orphan")} style={styles.fab}>
                <Text style={styles.fabIcon}>+</Text>
            </TouchableOpacity>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingTest: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    list: {
        // margin: 5,
        // backgroundColor: 'white',
        // height: 80,
        // justifyContent: 'space-around',
        paddingLeft: 10,
        paddingRight: 10,

        // elevation: 1111
    },
    fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: '#FF9800',
        // backgroundColor:"white",
        borderRadius: 30,
        elevation: 14
    },
    fabIcon: {
        fontSize: 40,
        // color: '#FF9800',
        color: "white"
    }
});
export default HomeAdmin;