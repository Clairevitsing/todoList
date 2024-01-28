import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Alert, } from 'react-native';
import React, { useState } from 'react';
import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';

export default function App() {

  const sampleGoals = [
    
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d'altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ];
  
  const [editedGoal, setEditedGoal] = useState(null);

  //il faut initialiser le tableau
  const [goalItems, setGoalItems] = useState(sampleGoals);


    const addGoal = (goal) => {
   
        if (goal === "") {
            return;
        }
        setGoalItems((goalItems) => [...goalItems, goal]);
        console.log(goal);
        // console.log(goalItems);
    };
 

  const deleteGoal = (index) => {

    Alert.alert(
      
      'Alert Deletion', 'Are you sure to delete?',
      [{
        text: 'Cancel',
        style: 'Cancel',
      },
      {
        text: 'Confirm',
        onPress: () => {

          let updatedGoals = [...goalItems];
          updatedGoals.splice(index, 1);
          setGoalItems(updatedGoals);
        }
      },
    ]);
  }

  const editGoal = (index) => { 
    setEditedGoal(goalItems[index]);
  };
  const updateGoal = (index,editedGoal) => {
    const updatedGoals = [...goalItems];
    updatedGoals[index] = editedGoal;
    console.log("updatedGoals:", updatedGoals[index])
    setGoalItems(updatedGoals);
  }

  return (
     
    <View style={styles.container}>
      <ImageBackground source={require('./assets/home.jpg')} resizeMode='cover' style={styles.image}>
        <View style={styles.goalsWrapper}>
          
        <Text style={styles.sectionTitle}>Goal List</Text>
        { console.log("samplegoals :",sampleGoals) }
           <GoalForm addGoal={addGoal} />
           <GoalList
              goalItems={goalItems}
              onDelete={deleteGoal}
              onUpdate={updateGoal}
              editedGoal={editedGoal}
            />
    </View> 
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    marginTop: 30,
    color: '#fff',
    fontSize: 20,
  },

  goalsWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  goalItems: {
    marginTop: 30,
    
  },
  

});





