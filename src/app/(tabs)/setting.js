 import { Text } from "react-native-paper";
 import react from "react";
 import { View,StyleSheet } from "react-native";
  export default  function setting(){
 return(
    <View>
    <Text style={styles.continer}> hellow</Text>  
    </View>
 )
  } 
  const styles =StyleSheet .create( 
  {
   continer:{
     fontSize: 40,
    fontWeight: "bold",
    Color:'black',
     textAlign: "center",
     justifyContent: "center",
    alignItems: "center",

    }  } )