import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import Goal from './components/Goal';

export default function App() {
  
  const [goal, setGoal] = useState();
  const [goalItems, setGoalItems] = useState([]);

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

  const handleAddGoal = () => {
    setGoalItems([...goalItems, goal])
    setGoal(null);
    console.log(goal);
  }

  // const completeGoal = (index) => {
  //   let itemsCopy = [...goalItems];
  //   itemsCopy.splice(index, 1);
  // }

  return (
    <View style={styles.container}>
      <View style={styles.goalsWrapper}>
        <Text style={styles.sectionTitle}>Liste de goals</Text>
        { console.log("samplegoals :",sampleGoals) }
        <View style={styles.items}>{
          sampleGoals.map((item, index) => 
            // <TouchableOpacity  key={index} onPress={() => completeGoal()}>
            <TouchableOpacity>
              <Goal key={index} text={item} />
            </TouchableOpacity>
          )
        }</View> 
        </View> 
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style={styles.writeGoalWrapper}>
        <TextInput style={styles.input} placeholder={"Write your new goals"} value={goal} onChangeText={text => setGoal(text)} />
        <TouchableOpacity onPress={handleAddGoal}>
          <View style={styles.addWrapper}>
            <Text style={styles.button}>+</Text>
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 20,
  },
  button: {
    backgroundColor: '#04AA6D',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    fontSize: 16,
  },
  goalsWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  items: {
    padding: 10,
    
  },
  writeGoalWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  }

});





