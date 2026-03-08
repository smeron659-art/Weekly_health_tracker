import React, { useState, useEffect } from "react";
import { Text, StyleSheet,View,  SafeAreaView, TouchableOpacity} from "react-native";
import Recored from './recored';

import { TextInput } from "react-native-paper";

 export default function  Time (){
  const [task,setTask]=useState('');
  const [time,setTime]=useState(0);
  const  [cheek ,setCheek]=useState(false)
   const [screenrecord ,setScreenrecord ]=useState(false);
   const [ selectedtask ,setSelectedtask]=useState([]);
   const[onchange ,setOnchange]=useState([]);
  
  useEffect(() =>{
if(!cheek) return;
const interval=setInterval(()=>{setTime (prev=>prev+1) },1000);

    return () => clearInterval(interval);
 } ,[cheek]) 

  const changetime =(time) =>{
const minute=Math.floor(time/60);
const second=Math.floor(time%60);
return `${minute}:${second < 10 ? '0' : ''}${second}`;
  } 
  const changescrean =()=>{
      setScreenrecord(!screenrecord);}
      if(screenrecord){
        return <Recored  focuse={onchange} back={changescrean }/>
      }
  const onHandTouch = () => {
    setCheek(!cheek);
  } 
  const Reset=()=>{
    setCheek(false);
    setTime(0);
  } 
  const editing=()=>{
    const trimmed =task.trim();
    if (trimmed.length>0){
     setSelectedtask(prev=>[...prev,trimmed])
      setTask('');
      setOnchange(trimmed);
      
    }

  
  }
  return(
    <View style={styles.continer}>
    <Text style={styles.titel}>Exercise Timer</Text> 
 <Text style={styles.time}> {changetime(time)}</Text>
 <View style={styles.divide}/>
    <TextInput  placeholder=" Recored your exercise type " 
    value={task}
    onChangeText={task => setTask(task)}
  style={styles.intputtext}/> <TouchableOpacity onPress={ ()=>{changescrean();
   editing()
   }
    
 }><Text> Add</Text></TouchableOpacity>
 {selectedtask.map((task,index) =>(
  <Text key={index} >{task} </Text> 
 )

) }
         <TouchableOpacity  onPress ={onHandTouch} style={styles.tochable}> <Text style={styles.bottontext}> { cheek? 'puse' :'start'}</Text></TouchableOpacity>
          <TouchableOpacity  onPress ={Reset}  style={styles.restart}> <Text style={styles.textre}> Reset</Text> </TouchableOpacity>
</View>
 )
 }
const styles =StyleSheet .create(
  {
  continer:{
    textAlign:'center',
    padding:70,
    backgroundColor:'#080f61'
     
  } ,
  titel:{
 paddingHorizontal:27,
 fontSize:28,
 fontWeight:'bold',
 color:'#fff'
  },
  tochable:{
    width:110,
    height:110 ,
    borderRadius:'100%',
    borderColor:'#fff',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    marginBottom:40,
    marginTop:20,
    marginHorizontal:60,
    padding:15,
  } ,
  bottontext:{
    flex:1,
    alignContent:'center',
    padding:10,
    fontSize:20,
    fontWeight:'bold',
    color:'#fff'
    
  },

intputtext:{
width:'120%',
height:50,
paddingHorizontal:10,
},
time:{
  padding:30,
  fontSize:80,
fontWeight:'bold',
color:'#fff',
},
exersise:{
   fontSize:24,
   paddingHorizontal:3,
   padding:18,
   color:'#fff'
} ,
restart:{
  padding:15,
  width:190,
  height:60,
  backgroundColor:'#253422',
  borderWidth:1,
  borderRadius:30,
 textAlign:"center",
 alignItems:'center',
  marginHorizontal:40,
  marginBottom:100,

} ,
textre:{
  fontSize:20,
  fontWeight:'bold',
  color:'#fff'
},
divide:{
  width:0,
  height:10,
  alignItems:'center',
  color:'#fff'
},
addBottomtext:{
 flexDirection:'row',
 fontsize:20,
 color:'#ffff',

},
addBottom:{
  textAlign:'center',
  width:60,
  height:60,
  borderRadius:30,
  padding:20,

},
task:{
  color:'#ffff',
  textDecorationLine:'underline',
  
}

  })