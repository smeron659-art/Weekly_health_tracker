import react, { useState } from "react";
import { View,Text, StyleSheet,TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
export default  function Recored({ focuse,back}){ 
   
    return(
    <View style={styles.continer}> 
<Text style={styles.title}> Your Recoreds page </Text>
<View style={{ flexDirection:'row'}}>
<Text style={{marginHorizontal:50}}> ExerciseType</Text> <Text> Time Takens</Text>
</View>

<Text   style={styles.text}>{focuse ( prev=>{})}</Text>


<TouchableOpacity  onPress={back} style={styles.touchable}> <Text style={styles.back}>back</Text></TouchableOpacity>
    </View>
    )
}

const styles =StyleSheet .create( 
{
 continer:{
    flex:1,
   marginBottom:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#080f61',

 },
 touchable:{
  width:70,
  height:40,
  borderRadius:20,
  borderColor:'#ffff',
  backgroundColor:'#fff',
 },
text:{
fontSize:26,
color:'#fff',
marginBottom:30,

width:'90%'
},
back:{
    color:'#201919',
    fontWeight:'bold',
    padding:10,
},
title:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff',
marginBottom:60,
 
}

})