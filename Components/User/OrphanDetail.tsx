import React, { Component, useState } from 'react';
import {
    View, Image, FlatList,
    Text, SafeAreaView, StyleSheet, Platform, TouchableOpacity, ScrollView
} from 'react-native';

const OrphanDetail: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const submitAdoption = () => {
        navigation.navigate("Adoption")
    }
    const submitFosterCare = () => {
        navigation.navigate("Foster Care")
    }
    return (
        <SafeAreaView style={styles.MainContainer}>

            <View style={styles.MainContainer}>
                <Image style={{ height: "50%", width: "100%", }}
                    source={{ uri: route.params.uri }} />
                <ScrollView>

                    {/* <Text style={{ backgroundColor: "#FED8B1", color: "#b36200", fontWeight: "400", fontSize: 16, padding: 5, }}>
                        At Our Orphanage, orphans are provided shelter, food, clothing, education, health, sports and all other facilities of life with love, affection and care.
                    </Text> */}
                    {/* <Text style={{ backgroundColor: "#FED8B1", color: "#b36200", fontWeight: "400", fontSize: 16, padding: 5, }}>
                        And {route.params.name} is one of the orphan child of our orphanage.
                    </Text> */}

                    <View style={styles.item}>

                        <View style={{ flexDirection: 'column', }}>
                            <Text style={styles.title}>Name:</Text>
                            <Text style={styles.title}>Age:</Text>
                            <Text style={styles.title}>Catagory:</Text>
                            {/* <Text style={styles.title}>Comming Date:</Text> */}

                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                            <Text style={styles.subtitle}>{route.params.name}</Text>
                            <Text style={styles.subtitle}>{route.params.age}</Text>
                            <Text style={styles.subtitle}>{route.params.catagory}</Text>
                            {/* <Text style={styles.subtitle}>{route.params.commingDate}</Text> */}
                        </View>
                        <View style={{ flexDirection: 'column', }}>

                            <Image style={{ height: 60, width: 60, marginLeft: 15 }}
                                source={!route.params.physicallyDisable ? require('../../Images/phisicallyNotD.png') : require('../../Images/Pdisable.png')} />
                            {route.params.physicallyDisable ?
                                <Text style={{ textAlign: 'center', color: "#b36200", }}>Physically challenged</Text>
                                : <Text style={{ textAlign: 'center', color: "#b36200", }}>Physically Good</Text>}

                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: "center", }}>

                            <Image style={{ height: 50, width: 50, }}
                                source={require('../../Images/bloodG.png')} />
                            <Text style={{ textAlign: 'center', color: "#b36200", fontSize: 18 }}>{route.params.booldGroup}</Text>


                        </View>


                    </View>
                    <Text style={{ textAlign: 'center', color: "#b36200", fontSize: 18, backgroundColor: "#FED8B1" }}>
                        Monthly expense : INR 7000 / $47</Text>

                    <View style={{ padding: 15, width: "100%", marginTop: 20 }}>
                        <TouchableOpacity style={{
                             marginBottom: 15, marginTop: 0,
                             height: 50, width: "100%",
                             backgroundColor: '#FF9800',
                             justifyContent: 'center',
                             alignItems: 'center',
                             borderRadius: 10,
                        }}
                            onPress={() => submitAdoption()}
                        >
                            <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: '600' }}>Adopt</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                             marginBottom: 15, marginTop: 0,
                             height: 50, width: "100%",
                             backgroundColor: '#FF9800',
                             justifyContent: 'center',
                             alignItems: 'center',
                             borderRadius: 10,
                        }}
                            onPress={() => submitFosterCare()}
                        >
                            <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: '600' }}>Foster Care</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'center',
            // paddingTop: (Platform.OS === 'ios') ? 20 : 0, 
            backgroundColor: "#FFFFFF",
        },
        scrollView: { marginHorizontal: 0, },
        textStyle: {

            color: '#fff', fontWeight: '600',
            fontSize: 22
        },
        item: {
            justifyContent: 'space-between',
            backgroundColor: '#FED8B1',
            padding: 10,
            width: '100%',
            flexDirection: 'row',
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
export default OrphanDetail;