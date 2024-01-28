import React from 'react';
import { View } from 'react-native';
import GoalItem from './GoalItem';

const GoalList = ({ goalItems,  onDelete, onUpdate }) => {
  return (
    <View>
      {goalItems.map((item, index) => (
        <GoalItem
          key={index.toString()}
          item={item}
          index={index}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </View>
  );
};

export default GoalList;