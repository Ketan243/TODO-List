import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import React, { Component } from 'react'
import List from './List'
export class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             noteArray:[],
             noteText:'',
        }
    }
    
    render() {
        let notes = this.state.noteArray.map((val,key)=>{
            return <List key={key} keyval={key} val={val}
            deleteMethod={()=>this.deleteNote(key)}/>
        });
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>MY TODO LIST</Text>
                </View>
                <ScrollView style={styles.scroll}>
                    {notes}
                </ScrollView>
                <View style={styles.footer}>
                <TextInput 
                    onChangeText={(noteText)=>this.setState({noteText})}
                    value={this.state.noteText}
                    placeholder="Start Typing...."
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    style={styles.footerText} />
                </View>
                <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
           
        );
        
    }
    addNote(){
        
            if(this.state.noteText){
                var d = new Date();
                this.state.noteArray.push({
                    'date': d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear(),
                    'note':this.state.noteText,
                });
                this.setState({noteArray: this.state.noteArray})
                this.setState({noteText:''});
                alert('Added')
            }
        }
    deleteNote(key){
        this.state.noteArray.splice(key,1);
        this.setState({noteArray:this.state.noteArray})
    }    
}
const styles = StyleSheet.create({
  container:{
      flex:1,
  },
  scroll:{
      flex:1,
      marginBottom:100
  },
  header:{
      backgroundColor:"#E91E63",
      alignItems:"center",
      height:100,
      justifyContent:"center",
      borderBottomWidth:2,
      borderBottomColor:"black",
  },
  title:{
      color:"white",
      fontSize:25,
      padding:26,
      fontFamily:"cursive",
      fontWeight:"bold"
  },
  
  footer:{
      position:"absolute",
      bottom:0,
      left:0,
      right:0,
      height:60,
      backgroundColor:"black"
  },
  footerText:{
      color:"white",
      fontFamily:"serif",
      height:50,
      width:250
  },
  addButton:{
      position:"absolute",
      zIndex:11,
      bottom:90,
      right:10,
      backgroundColor:"#E91E63",
      width:70,
      height:70,
      borderRadius:50,
      alignItems:"center",
      justifyContent:"center",
      elevation:8
  },
  addButtonText:{
      color:"#fff",
      fontSize:24
  }

  

});
export default Main

