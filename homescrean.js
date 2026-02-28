import { StatusBar } from 'expo-status-bar';
import react from 'react';
import{ View,Text,StyleSheet,TextInput, TouchableOpacity, Image} from 'react-native';

export default function Homescrean({navigation}) {
  return (
    <View style={styles.continer}>
      <Image source={require('./assets/photo_2026-02-21_17-16-56.jpg')} style={styles.image} />
<Text style={styles.input}>Weely Health Tracker</Text>
 <View style={styles.divider}/>
 <Text style={styles.inputs}>Track your Health , Improve your life!</Text> 
 <View style={styles.dividers}/>
 <Image source={require('./assets/photo_2026-02-21_17-17-05.jpg')} style={styles.image} />
 <TouchableOpacity style={styles.techableop}> 
<Text style={styles.inputop}>Create Account</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.techableopp} onPress={()=> navigation.navigate("login")}> 
<Text style={styles.inputopp}> Log In</Text>
 </TouchableOpacity>

  <Text style={styles.last} > Frist time using thisl app?<TouchableOpacity ><Text style={styles. underlineText}>Learn More</Text></TouchableOpacity></Text>
  <StatusBar style="auto" />
    </View> 

) 
}

const styles =StyleSheet.create(
  {inputop:{
  color:'white',
fontsize :10,
fontWeight:'bold',
  },
continer:{
backgroundColor: '#0f4d83',
flexDirection: 'column' ,
flex:1,
justifyContent:'center',
alignItems:'center',

} ,
input:{
  color:'white',
  fontSize:30,
  fontWeight:'bold',
},
inputs:{
  color:'white',
fontsize:27,
fontWeight:'bold'
},
divider:{
marginTop:40,
width:'100%',
backgroundColor:'white',
flexDirection:'row',

} ,
dividers:{
marginTop:50,
width:'100%',
backgroundColor:'white',
flexDirection:'row',},
techableop:{
   backgroundColor: '#1637da',
  
    paddingVertical: 19, 
    paddingHorizontal: 110,     
    borderRadius: 50, 
    
    marginVertical: 10,
} ,
techableopp:{
   backgroundColor: 'black',
  
    paddingVertical: 20, 
    paddingHorizontal: 140, 
    borderRadius: 50, 
    marginVertical: 10,
} ,
inputop:{
  color:'white',
fontsize :10,
fontWeight:'bold',

},
inputopp:{
  color:'white',
fontsize :10,
fontWeight:'bold',
}
,
last:{
  color:'white',
   fontSize:13,
    textDecorationLine: 'underline', 
    textDecorationLinecolor: 'white', 


} ,
last:{
  color:'white',
   fontSize:13,},
   underlineText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textDecorationLine: 'underline',  // THIS makes it underline
    textDecorationStyle: 'solid'
}, 
image: {
    width: 200,
    height: 150,
    marginBottom: 20,
  }

}
)
import react from "react";
import homescrean from './homescrean';
import login from './login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>  
      <Stack.Navigator>
        <Stack.Screen name="Homescrean" component={homescrean} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="login" component={login} 
       options={{ headerShown:true }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}