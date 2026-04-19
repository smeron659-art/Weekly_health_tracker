
import { View,Text, StyleSheet,TouchableOpacity,ImageBackground,ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';
import { SystemBars } from "react-native-edge-to-edge";
import React, { useState,useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from 'expo-router';
import { usetask } from "../../context/taskcontext";
import { usecolor } from "../../context/colorcontext";
export default  function Recored(){                                        
  const{ color,statusbar}=usecolor(); 
const {onchange,setOnchange,selectedtask,setSelectedtask}=usetask();
 const savedtask=selectedtask;
     const router=useRouter(); 
    return(   
   <View style={[styles.continer, { backgroundColor: color.background }]}>
<Text style={[styles.title ,{color:color.textPrimary}]}> Your Recoreds page </Text> 
<View style={styles.text }>
<Text  style={[styles.title,{color:color.textPrimary}]}> ExerciseType</Text> <Text style={{ marginHorizontala:50}}>  </Text> <Text style={[styles.titlel,{color:color.textPrimary}]}> Time Takens</Text>
</View>  
<ImageBackground  source={require('../../../assets/light.jpg')} style={styles.image} > 
    <View style={styles.dataRow} >
      <Text style={styles.taskText}>{savedtask}</Text>
      <Text style={styles.taskText}>{onchange}</Text>
    </View> 
  </ImageBackground>  
<TouchableOpacity  onPress={() =>router.push('/') } style={styles.touchable}> <Text style={styles.back}>back</Text></TouchableOpacity>
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

marginBottom:30,
width:'90%',
 flexDirection:'row',

},
dataRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '90%',
  
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
   
marginBottom:30,
textAlign:'top',
justifyContent:'flex-start',
marginHorizontal:40,
 
} ,
titlel:{
    fontSize:20,
    fontWeight:'bold',
  
marginBottom:10,
textAlign:'top',
 
}, 
taskText:{
  marginHorizontal:50,
 
  fontSize:20,
  flex:1
},

timeText:{
  
  fontSize:20,
  flex:1
},
image: {
   width: '100%', // Make image background fill the width
    minHeight: 170, // Use minHeight to allow content to expand
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  }  

})  