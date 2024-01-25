import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Goal = (props) => {
    
    console.log(props);
  
//    const listGoals = sampleGoals.map((goal,index) =>
//       <Text key={index}>{goal}</Text>
//        );
    return (
        
        <View style={styles.item}>
            <View style={styles.itemleft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.item}</Text>
            <View style={styles.circular}></View>
            </View>
        </View>
    )
 
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius:10,
    },

    square: {
        
    },

    circular: {
        
    }
});


export default Goal;