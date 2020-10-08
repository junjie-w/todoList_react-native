import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function TodoItem({ item, pressHandler }) {
  const [isSelected, setSelection] = useState(false);

  const setDone = () => {
    setSelection(!isSelected);
  }

  return (
    <TouchableOpacity>
      <View style={styles.item} >
        {/*<CheckBox value={isSelected} onValueChange={setSelection} tintColors={false ? "red" : "black"} />*/}
        <MaterialCommunityIcons name="checkbox-multiple-marked-circle-outline" size={18} color="#709fb0" onPress={setDone} style={styles.checkbox} />
        <Text style={styles.itemText, isSelected && styles.crossedText} onPress={setDone}>{item.text}</Text>
        {/*<MaterialIcons style={styles.icon} name="delete" size={20} color="#e5df88" onPress={() => pressHandler(item.key)} />*/}
        <Ionicons name="md-trash" style={styles.icon} size={20} color="#e5df88" onPress={() => pressHandler(item.key)} />
      </View>
    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#709fb0',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: "center",
    //justifyContent: "space-between"
  },
  itemText: {
    marginLeft: 10,

  },
  crossedText: {
    textDecorationLine: "line-through",
  },
  checkbox: {
    marginRight: 16,
  },
  icon: {
    position: "absolute",
    right: 13,
  },
})