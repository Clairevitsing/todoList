import React, {useState } from 'react';
import { View, Modal,Text, Pressable, StyleSheet,TouchableOpacity } from 'react-native';

const GoalItem = ({ item, index, onDelete, onUpdate }) => {
    
    const [modalVisible, setModalVisible] = useState(false);

    const confirmDelete = () => {
        setModalVisible(false);
        onDelete();
     };

    return (
            
        <View style={styles.item} key={index.toString()}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                    <Text style={styles.itemText}>{item}</Text>
                            <Pressable style={styles.deleteButton} onPress={() => { setModalVisible(!modalVisible), onDelete(index) }}>
                                 <Text style={styles.text}>X</Text>
                </Pressable>
                 <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                     }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Are you sure to delete this goal? </Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={confirmDelete}  style={[styles.button, styles.buttonDelete]}>
                                        <Text style={styles.buttonText}>Confirm</Text>  
                                </TouchableOpacity>
                                 <TouchableOpacity onPress={()=>setModalVisible(false)}  style={[styles.button, styles.buttonCancel]}>
                                        <Text style={styles.buttonText}>Cancel</Text>  
                                </TouchableOpacity>
                            </View>
                         </View>
                    </View>  
                </Modal>
            </View>     
                <Pressable style={styles.editButton} onPress={() => onUpdate(index, editedText)}>
                    <Text style={styles.text}>edit</Text>
                </Pressable>
            </View>
       );
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
    },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#00ffff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    },
 buttonContainer: {
    display: 'flex',
    flexDirecrion: 'row',
    justifyContent: 'space-around',
    width: '100%',
    },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin:10,
    },
  
 buttonDelete: {
    backgroundColor:"#dc143c",
    },
 buttonCancel: {
      backgroundColor:"#008000",
  }

  
});

export default GoalItem;
