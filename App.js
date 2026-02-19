import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button ,TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container }>
      <Text style={styles.text}> Set your weekly health states</Text>
      <View style={styles.divider}/>
      <StatusBar style="auto" /> 
     < View style={styles. inputcontiner}>
     <TextInput placeholder="Enter your weight" /> 
      <Button 
      title='click'         
        onPress={() => alert("Button pressed")}
/>
      </View>
       < View style={styles. inputcontiner}>
     <TextInput placeholder="Enter your blood pleser" /> 
      <Button 
      title='click'         
        onPress={() => alert("Button pressed")}
/>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'rgba(101, 17, 165, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,

  },


  text:{
    fontSize:20,
   
  } ,
  divider :{
margin:20,
  width:'100%',
    height:2,
    backgroundColor:'#228645a5'
  },
  inputcontiner:{
    margin:20,
    flexDirection:'row',
    width:'80%',
borderColor :'#862234a5',
borderWidth :1,
borderRadius :5,
  

  }
})
