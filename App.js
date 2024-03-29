import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Alert, SafeAreaView} from 'react-native';
import React, { useEffect, useState } from 'react';
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
  
  const [goal, setGoal] = useState('');
  const [editedGoal, setEditedGoal] = useState();

  //il faut initialiser le tableau
  const [goalItems, setGoalItems] = useState(sampleGoals);
  

//   useEffect(() => { 

// console.log("goal value :", goal)
//   },[goal]);
    const addGoal = (goal) => {
   
        if (goal === "") {
            return;
        }
        setGoalItems((goalItems) => [...goalItems, goal]);
        console.log(goal);
        // console.log(goalItems);
    };
 

  const deleteGoal = (index) => {
    // console.log("goal index :", index);
    // console.log("goalItems :", goalItems);
    const results = goalItems.filter ( (item,i) => i !== index)
          setGoalItems(() => [...results]);
        }

  const editGoal = (index) => { 
    console.log("edit goal")
     console.log("goal :", index)
    setEditedGoal({ index, value: goalItems[index] });
    setGoal(goalItems[index]);
  };

  const updateGoal = () => {
     if (!editedGoal) {
      return;
    }
    const updatedGoalItems = [...goalItems];
    updatedGoalItems[editedGoal.index] = goal;
    setGoalItems(updatedGoalItems);
    setEditedGoal(null);
    setGoal('');
  }


  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.container}>
        <ImageBackground source={require('./assets/home.jpg')} resizeMode='cover' style={styles.image}>
          <View style={styles.goalsWrapper}>
            
          <Text style={styles.sectionTitle}>Goal List</Text>
          { console.log("samplegoals :",sampleGoals) }
              <GoalForm addGoal={addGoal} goal={goal} setGoal={setGoal} editedGoal={editedGoal} updateGoal={updateGoal}/>
            <GoalList
                goalItems={goalItems}
                onDelete={deleteGoal}
                onUpdate={editGoal}
              />
      </View> 
          </ImageBackground>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1
  },
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


