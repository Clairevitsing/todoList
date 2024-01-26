import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const Goal = (props) => {
    
  //  console.log(props);
  
//    const listGoals = sampleGoals.map((goal,index) =>
//       <Text key={index}>{goal}</Text>
//            );
    
    return (
        
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.item}</Text> 
            </View>
            <View style={styles.itemRight}>
                <Text style={styles.button}>X</Text>
            </View>
        </View>
    )
 
}

const styles = StyleSheet.create({
    item: {
        diplay: 'flex', 
        backgroundColor: '#ffe4e1',
        padding: 15,
        borderWidth: 1,
        borderColor: '#1e90ff',
        borderRadius: 10,
        fixDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },

    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },

    itemText: {
        maxWidth: '60%',
    },

    itemRight: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#DC143C',
        color: 'white',
        padding: 5,
        textAlign: 'center',
        fontSize: 10,
    }

});


export default Goal;