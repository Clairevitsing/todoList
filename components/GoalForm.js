import React, { useState } from 'react';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet, Platform, } from 'react-native';


const GoalForm = ({ addGoal, goal, setGoal, editedGoal,updateGoal}) => {
   

 const handleAddGoal = () => {
    addGoal(goal);
    setGoal('');
    };
    
    return (
        <View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
                style={styles.writeGoalWrapper}>
                <TextInput style={styles.input} placeholder={"Write your new goals"} value={goal} onChangeText={text => setGoal(text)} />

                {editedGoal? (<TouchableOpacity  onPress={updateGoal}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.button}>Save</Text>
                    </View>
                </TouchableOpacity>) : (
                <TouchableOpacity onPress={handleAddGoal} >
                    <View style={styles.addWrapper}>
                        <Text style={styles.button}>+</Text>
                    </View>
                </TouchableOpacity>)}
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
  writeGoalWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1, 
    width: 250,
},
addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#32cd32',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00ffff',
    borderWidth: 1
    },
});

export default GoalForm;
