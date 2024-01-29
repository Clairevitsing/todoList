import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Alert, SafeAreaView} from 'react-native';
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

          let updatedGoals = [...goalItems];
          updatedGoals.splice(index, 1);
          setGoalItems(updatedGoals);
        }

  const editGoal = (goal, editedText) => { 
    
    setEditedGoal(goal);
    let index = goalItems.index;
    goalItems.splice(index, 1, {id: index, goal: editedText});

  };
  

  return (
     <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <ImageBackground source={require('./assets/home.jpg')} resizeMode='cover' style={styles.image}>
        <View style={styles.goalsWrapper}>
          
        <Text style={styles.sectionTitle}>Goal List</Text>
        { console.log("samplegoals :",sampleGoals) }
           <GoalForm addGoal={addGoal} />
           <GoalList
              goalItems={goalItems}
              onDelete={deleteGoal}
              onUpdate={editedGoal}
            />
    </View> 
        </ImageBackground>
      </View>
      </SafeAreaView>
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





