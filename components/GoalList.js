import React from 'react';
import {  ScrollView,StyleSheet } from 'react-native';
import GoalItem from './GoalItem';

const GoalList = ({ goalItems,  onDelete, onUpdate }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {goalItems.map((item, index) => (
        <GoalItem
          key={index.toString()}
          item={item}
          index={index}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  });

export default GoalList;