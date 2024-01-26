import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView,Alert,Pressable } from 'react-native';
import react, { useState } from 'react';

export default function App() {
  
  

  const sampleGoals = [
    
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    //"Monter à plus de 5000m d'altitude",
    // // "Acheter mon premier appartement",
    // // "Perdre 5 kgs",
    // // "Gagner en productivité",
    // // "Apprendre un nouveau langage",
    // // "Faire une mission en freelance",
    // // "Organiser un meetup autour de la tech",
    // // "Faire un triathlon",
  ];
  const [goal, setGoal] = useState('');

  //il faut initialiser le tableau
  const [goalItems, setGoalItems] = useState(sampleGoals);

  const addGoal = () => {
    setGoalItems((goalItems) => [...goalItems, goal]);
    console.log(goal);
    // console.log(goalItems);
  }

  const deleteGoal = (index) => {

    Alert.alert(
      
      'Alert Title', 'Are you sure to delete?',
      [{
        text: 'Cancel',
        style: 'Cancel',
      },
      {
        text: 'Confirm',
        onPress: () => {

          let itemsCopy = [...goalItems];
          itemsCopy.splice(index, 1);
          setGoalItems(itemsCopy);
        }
      },
    ]);

  
   
  }


  return (
     
    <View style={styles.container}>
      <View style={styles.goalsWrapper}>
        <Text style={styles.sectionTitle}>Liste de goals</Text>
        { console.log("samplegoals :",sampleGoals) }
        <View style={styles.goalItems}>{
          goalItems.map((item,index) => {
            return (
             <View style={styles.item}>
              <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{item}</Text>
                <Pressable style={styles.deleteButton} key={index} onPress={() => deleteGoal(index)}>
                  <Text style={styles.text}>X</Text>
                </Pressable>
                <Pressable style={styles.editButton}>
                  <Text style={styles.text}>edit</Text>
                </Pressable>
              </View>
              </View>);    

            }
          )
        }</View> 
       
        </View> 
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style={styles.writeGoalWrapper}>
        <TextInput style={styles.input} placeholder={"Write your new goals"} value={goal} onChangeText={text => setGoal(text)} />
        <TouchableOpacity onPress={addGoal} >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
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
  },
  sectionTitle: {
    color: '#fff',
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

  goalItems: {
    marginTop: 30,
    
  },
  writeGoalWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    backgroundColor: '#32cd32',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00ffff',
    borderWidth: 1
  },
 item: {
        backgroundColor: '#ffe4e1',
        padding: 15,
        borderWidth: 1,
        borderColor: '#1e90ff',
        borderRadius: 10,
        fixDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
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





