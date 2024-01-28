import React from 'react';
import { View, Text, Pressable, StyleSheet, } from 'react-native';

const GoalItem = ({ item, index, onDelete, onUpdate, editedGoal}) => {
    return (
        <View style={styles.item} key={index.toString()}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{item}</Text>
                <Pressable style={styles.deleteButton} onPress={() => onDelete(index)}>
                    <Text style={styles.text}>X</Text>
                </Pressable>
                <Pressable style={styles.editButton} onPress={() => onUpdate(index, editedGoal)}>
                    <Text style={styles.text}>edit</Text>
                </Pressable>
            </View>
        </View>);
};

const styles = StyleSheet.create({
     item: {
        backgroundColor: '#ffe4e1',
        padding: 5,
        borderWidth: 1,
        borderColor: '#1e90ff',
        borderRadius: 10,
        fixDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    itemLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
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

  deleteButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#DC143C',
  },
  editButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#FFFF00',
    }

  
});

export default GoalItem;
