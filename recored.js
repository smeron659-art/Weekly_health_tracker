import react from "react";
import { View,Text,} from 'react';
import {TextInput} from 'react-native-paper';
export default  function Recored({ focuse,back}){ 
    <View style={styles.continer}> 
<Text> This the recording page </Text>
<Text>{focuse}</Text>
<TouchableOpacity  onpress={back} style={styles.touchable}> <Text>back</Text></TouchableOpacity>
    </View>

}
const styles=StyleSheet.create({
 continer:{
    flex:1,
    padding:30,
    alignItems:'center',
    justifyContent:'center',
 },
 touchable:{
  width:70,
  height:70,
  borederRadius:40,
 }


})