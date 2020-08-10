import React from 'react'; 
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView} from 'react-native'; 
import AppHeader1 from '../Screens/AppHeader1'

export default class WriteStoriesScreen extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:"lightblue",height:1300}}>
        
            <AppHeader1/>
            <TextInput style={styles.textInput}
            />
            <TouchableOpacity style={styles.button}>
            <Text>Submit</Text>
            </TouchableOpacity>
    
        </View>
        )
    }
}


const styles=StyleSheet.create({
  textInput:{
       borderWidth:4,
       borderRadius:2,
       height:420,
       width:1300,
       margin:30
  },
  button:{
   backgroundColor:"lightgreen",
   borderWidth:2,
   borderRadius:20,
   marginTop:-20,
   alignItems:"center",
   justifyContent:"center",
   width:100,
   height:45,
   marginLeft:650
  }
})