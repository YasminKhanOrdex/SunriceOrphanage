import React, { Component } from 'react';
import {
    View, Image, FlatList, StatusBar,
    Text, SafeAreaView, StyleSheet, Platform, TouchableOpacity
} from 'react-native';
import DATA from "../Data";

const OrphanItem:
    React.FC<{ title: any, age: any, catagory: any, uri: any, ondetaliClick: any, physicallyDisable: any, commingDate: any, booldGroup: any }> =
    ({ title, age, catagory, uri, ondetaliClick, commingDate, booldGroup, physicallyDisable }) => {

        return (
            <TouchableOpacity onPress={() => ondetaliClick()}>
                <View style={styles.item}>

                    <View style={{ flexDirection: 'column',  }}>
                        <Text style={styles.title}>Name:</Text>
                        <Text style={styles.title}>Age:</Text>
                        <Text style={styles.title}>Catagory:</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 20,  }}>
                        <Text style={styles.subtitle}>{title}</Text>
                        <Text style={styles.subtitle}>{age}</Text>
                        <Text style={styles.subtitle}>{catagory}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: "flex-end",  }}>
                        <Image style={{ height: 80, width: 80, borderRadius: 20, borderColor: "#FF8A25", borderWidth: 1 ,padding:10}}
                            source={{ uri: uri }} />
                    </View>
                </View>
            </TouchableOpacity>
        )

    }
const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'center',
            paddingTop: StatusBar.currentHeight, backgroundColor: "#FFFFFF",
        },
        textStyle: {

            color: '#fff', fontWeight: '600',
            fontSize: 22
        },
        item: {
            flex: 1,
            justifyContent: 'space-between',
            backgroundColor: '#FED8B1',
            padding: 10,
            marginVertical: 5,
            marginHorizontal: 0,
            width: '100%',
            borderRadius: 5, flexDirection: 'row',
        },
        title: {
            fontSize: 18,
            fontWeight: '600', color: "#b36200", margin: 1
        },
        subtitle: {
            fontSize: 18,
            fontWeight: '400', color: "#b36200", margin: 1
        }
    });
export default OrphanItem;