import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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
  
   const listGoals = sampleGoals.map((goal) =>
      <Text>{goal}</Text>
   );
  
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Liste de goals</Text>
      <Text style={styles.input }></Text>
      <Text style={styles.button}>Add</Text>
      
      <Text style={styles.li}>{listGoals}</Text>
      
      <StatusBar style="auto" />
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
  h1: {
    fontSize: '20px',
  },
  button: {
  backgroundColor: '#04AA6D',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '16px',
}

});




