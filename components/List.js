import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



export class List extends Component {
    render() {
        const myIcon1 = <Icon name="ios-trash" size={45} color="#E91E63" />; 

        return (
           <View key={this.props.keyval} style={[styles.note]}>
            <Text style={[styles.noteText]}>{this.props.val.date}</Text>
            <Text style={[styles.noteText]}>{this.props.val.note}</Text>
            <TouchableOpacity onPress={this.props.deleteMethod} style={[styles.noteDelete]}>
                <Text style={[styles.nodeDeleteText]}>{myIcon1}</Text>
            </TouchableOpacity>
           </View>
        )
    }
}
const styles = StyleSheet.create({
  note:{
      position: 'relative',
      padding:20,
      paddingRight:100,
      borderBottomWidth:2,
      borderBottomColor:"#ededed",
  },
  noteText:{
      paddingLeft:20,
      borderLeftWidth:10,
      borderLeftColor:"#E91E63",
  },
  noteDelete:{
      position:"absolute",
      justifyContent:"center",
      alignItems:"center",
      padding:10,
      top:10,
      bottom:10,
      right:10,
  },
  noteDeleteText:{
      color:"white"
  }
});

export default List
