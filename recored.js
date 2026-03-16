
import { View,Text, StyleSheet,TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import { SystemBars } from "react-native-edge-to-edge";
import React, { useState,useEffect } from "react";
export default  function Recored({ focuse,back,RecorederTime}){
    const [teker,setTeker]=useState([]);
    const[timestore,setTimestore]=useState([])
    useEffect(()=>{
        if (!focuse) return;
setTeker(prev=>[...prev,focuse])
    },[focuse])
 useEffect(()=>{
    if (!RecorederTime) return;
setTimestore(prev=>[...prev,RecorederTime])
    },[RecorederTime])
    return(
    <View style={styles.continer}> 
<Text style={styles.title}> Your Recoreds page </Text>
<View style={styles.text }>
<Text  style={styles.title}> ExerciseType</Text> <Text style={{ marginHorizontala:50}}>  </Text> <Text style={styles.titlel}> Time Takens</Text>
</View>
 <SystemBars style="light" />
 
 {teker.map((item,index)=> (
    <View key={index} style={{flexDirection:'row'}}>
      <Text style={{marginHorizontal:50,color:'#fff',fontSize:20}}>{item}</Text>
      <Text style={{color:'#fff',fontSize:20}}>{timestore[index]}</Text>
    </View>
  ))


    
  }
   

<TouchableOpacity  onPress={back} style={styles.touchable}> <Text style={styles.back}>back</Text></TouchableOpacity>
    </View>
    
    )}
const styles =StyleSheet .create( 
{
 continer:{
    padding:10,
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
  marginTop:90,
  
 },
text:{
fontSize:26,
color:'#fff',
marginBottom:30,
width:'90%',
 flexDirection:'row',

},
back:{
    color:'#201919',
    fontWeight:'bold',
    padding:6,
    marginBottom:10,
    textAlign:'center',
    
},
title:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff',
marginBottom:30,
textAlign:'top',
justifyContent:'flex-start',
marginHorizontal:40,
 
} ,
titlel:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff',
marginBottom:10,
textAlign:'top',
 
}

})