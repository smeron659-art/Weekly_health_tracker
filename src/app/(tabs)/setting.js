 import { Text } from "react-native-paper";
 import { Ionicons } from "@expo/vector-icons";
 import react from "react";
 import { View,StyleSheet, Pressable } from "react-native";
 import { usecolor } from "../../context/colorcontext";
  export default  function Setting(){
    const {color,statusbar,toggleteam ,isDark}=usecolor();
 return(
   <View style={{ flex: 1, backgroundColor: color.background }}>

    <Text style={styles.continer}> hellow</Text>  
    <Pressable
  onPress={toggleteam}
  style={({ pressed }) => ({
    transform: [{ scale: pressed ? 0.95 : 1 }],
    backgroundColor: pressed ? "#a35555" : "rgb(32, 172, 20)",
    padding: 10,
  })}
>change
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