 import { Text } from "react-native-paper";
 import { Ionicons } from "@expo/vector-icons";
 import react from "react";
 import { View,StyleSheet, Pressable } from "react-native";
 import { SafeAreaView } from "react-native-safe-area-context";
 import { usecolor } from "../../context/colorcontext";
  export default  function Setting(){
    const {color,statusbar,toggleteam ,isDark}=usecolor();
 return( 
  <SafeAreaView style={{ flex: 1, backgroundColor: color.background }}>
   <View> 
    <Text style={styles.continer}> hellow</Text>  
    <Pressable
  onPress={toggleteam}
  style={({ pressed }) => ({
    transform: [{ scale: pressed ? 2 : 0.8}],
    backgroundColor: pressed ? "#a35555" : "rgb(145, 165, 26)",
     padding: 10,
            borderRadius: 29,
            flexDirection: "row",
            alignItems: "center",
            width:70,
            gap: 10,
  })}
>change
    <Ionicons name={isDark? 'moon':'sunny'} size={24} color={color.icon}/>
    </Pressable>

    </View>
    </SafeAreaView>
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