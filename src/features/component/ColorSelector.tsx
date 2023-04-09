import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ColorSelector = ({ onColorSelected }) => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    onColorSelected(color);
  };

  return (
    <View style={style.container}>
        <TouchableOpacity
        style={{
          backgroundColor: 'yellow',
          width: 30,
          height: 30,
          margin: 10,
          borderRadius: 25,
          borderWidth: selectedColor === 'yellow' ? 6 : 0,
          borderColor: 'black',
        }}
        onPress={() => handleColorSelection('yellow')}
      />
        <TouchableOpacity
        style={{
          backgroundColor: 'gray',
          width: 30,
          height: 30,
          margin: 10,
          borderRadius: 25,
          borderWidth: selectedColor === 'gray' ? 6 : 0,
          borderColor: 'black',
        }}
        onPress={() => handleColorSelection('gray')}
      />
        <TouchableOpacity
        style={{
          backgroundColor: 'purple',
          width: 30,
          height: 30,
          margin: 10,
          borderRadius: 25,
          borderWidth: selectedColor === 'purple' ? 6 : 0,
          borderColor: 'black',
        }}
        onPress={() => handleColorSelection('purple')}
      />
    
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          width: 30,
          height: 30,
          margin: 10,
          borderRadius: 25,
          borderWidth: selectedColor === 'red' ? 6 : 0,
          borderColor: 'black',
        }}
        onPress={() => handleColorSelection('red')}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          width: 30,
          height: 30,
          margin: 10,
          borderRadius: 25,
          borderWidth: selectedColor === 'green' ? 6 : 0,
          borderColor: 'black',
        }}
        onPress={() => handleColorSelection('green')}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          width: 30,
          height: 30,
          margin: 10,
          borderRadius: 25,
          borderWidth: selectedColor === 'blue' ? 6 : 0,
          borderColor: 'black',
        }}
        onPress={() => handleColorSelection('blue')}
      />
    </View>
  );
};

export default ColorSelector;

const style = StyleSheet.create({
    container : {
        flexDirection : 'row',
       
    }
})