import React, { Component } from 'react';
import {
    View, Image, FlatList,StatusBar,
    Text, SafeAreaView, StyleSheet, Platform,TouchableOpacity
} from 'react-native';
import DATA from "../Data";
import Logout from '../Logout';
import OrphanItem from './OrphanItem';


const Home: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => <Logout navigation={navigation} />,
        });
      }, [navigation]);
    const ondetaliClick = (item:any)=>{
        // console.log("Item------",JSON.stringify(item.name))
        navigation.navigate("Orphan Detail",
        // { items:item}
        {
            id:item.id,
            name:item.name,
            age:item.age,
            catagory:item.catagory,
            booldGroup:item.booldGroup,
            physicallyDisable:item.physicallyDisable,
            uri:item.uri,

        }

        )
    }
    return (
        <SafeAreaView style={styles.MainContainer}>

            <View style={{ padding: 10, marginBottom: 10 }}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => 
                    <OrphanItem
                        title={item.name}
                        age={item.age}
                        catagory={item.catagory}
                        uri={item.uri}
                        commingDate={item.commingDate}
                        booldGroup={item.booldGroup}
                        physicallyDisable={item.physicallyDisable}
                        ondetaliClick={()=>ondetaliClick(item)
                        }
                         />
                    }
                    keyExtractor={item => item.id}
                />
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
        item: {
            flex: 1,
            justifyContent: 'space-between',
            backgroundColor: '#FED8B1',
            padding: 15,
            marginVertical: 8,
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
export default Home;