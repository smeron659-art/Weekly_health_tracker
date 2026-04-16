 import { Text } from "react-native-paper";
 import { Ionicons } from "@expo/vector-icons";
 import react from "react";
 import { View,StyleSheet, Pressable } from "react-native";
 import { usecolor } from "../../context/colorcontext";
  export default  function Setting(){
    const {color,statusbar,toggleteam ,isDark}=usecolor();
 return(
   <View style={{ backgroundColor: color.background }}>

    <Text style={styles.continer}> hellow</Text>  
    <Pressable onPress={toggleteam}>change 
    <Ionicons name={isDark? 'moon':'sunny'} size={24} color={color.icon}/>
    </Pressable>

    </View>
 )
  } 
  const styles =StyleSheet .create( 
  {
   continer:{
     fontSize: 40,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
   

    }  } )