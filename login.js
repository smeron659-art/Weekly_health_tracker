import { StatusBar } from 'expo-status-bar';
import{ useState} from 'react'
import React from 'react';
import {TextInput} from 'react-native-paper';
import{ View ,Text,StyleSheet ,  ImageBackground,TouchableOpacity,KeyboardAvoidingView,Platform } from 'react-native';

export default function Login() {
 const [text, setText] = React.useState('');
  const [hidePassword, setHidePassword] = useState(true);
    return (
<KeyboardAvoidingView
  style={{ flex: 1 }}
  behavior={Platform.OS === "ios" ? "padding" : "height"} 
>
<ImageBackground  source={ require('./assets/k.jpg')} style={styles.background} resizeMode='cover'>
           <View style={styles.dividen}/> 
           <Text style={styles.textw}> Welcome To Login </Text>
        <Text style={styles.texth}>Login to continue track your health </Text>
       
        <View >
        <View style={styles.retangl}> 
          <View style={styles.inputContainer}>
  <TextInput placeholder=' Enter Email '
    
    style={{ backgroundColor: 'transparent' }}
    contentStyle={{ paddingVertical: 8, paddingHorizontal: 12 }}
    left={<TextInput.Icon icon="email" />}
  />
</View>       
          <View style={styles.dividen}/>
           <TextInput placeholder='Password' style={styles.inputContainer}
            placeholderTextColor='hsl(0, 11%, 35%)' 
             secureTextEntry={hidePassword}
           
     right={ 
   
    <TextInput.Icon
     contentStyle={{ paddingVertical: 8, paddingHorizontal: 12 }}
      icon={hidePassword ? "eye-off" : "eye"}
      onPress={() => setHidePassword(!hidePassword)}
    />
  } />
           <View style={styles.dividen}/>
           <TouchableOpacity style={styles.tochable}><Text style={styles.tochbletext}> Login</Text></TouchableOpacity>
            <View style={styles.dividen}/>
           <TouchableOpacity><Text style={styles.tochl}> Forgot  Password?</Text></TouchableOpacity>
           <View style={styles.dividen}/>      
           <View style={styles.sedivi}/>
            <View style={styles.dividen}/><View style={styles.dividen}/>
           <Text>Don't have an account?<TouchableOpacity><Text style={styles.creat}> Creat an account</Text></TouchableOpacity> </Text> 
        </View> 
        </View>
        </ImageBackground> 
    
    </KeyboardAvoidingView>
    )
} 
const styles=StyleSheet.create(
{
textw:{
  color:'hsl(274, 19%, 93%)',
  fontSize:30,
  fontWeight:'bold',
 textAlign:'center',
} ,
texth:{
  color:'#111111',
  fontSize:20,
  fontWeight:'bold',
  marginBottom:30,
} ,
inputContainer: {
  width: '100%',
  borderRadius: 25,
  backgroundColor: '#fff',
  paddingVertical:2,
  paddingHorizontal:80,
},
dividen:{
  width:'0%',
  height:'3%',
backgroundColor:'white',
flexDirection:'row',
} ,
tochable:{
width:'90%',
height:40,
borderRadius:40,
borderColor:'black',
borderWidth:1,
paddingHorizontal:80,
paddingVertical:1,
backgroundColor:'#1e1a97'
},
tochbletext:{
  fontWeight:'bold',
  fontSize:21,
  color:'#fff',
textAlign:'center',
verticalAlign:'middle',
paddingHorizontal:22,

},
tochl:{
  fontSize:15,
  fontWeight:'bold',
 textDecorationLine: 'underline',  
    textDecorationStyle: 'solid',
    color:'#1e1a97',
    paddingHorizontal:20,
    verticalAlign:'middle',
},
sedivi:{
  width:300,
  height:6,
  backgroundColor:'rgb(240, 235, 235)',
},
creat:{
  color:'#95971a',
  fontSize:15,
  textDecorationLine:'underline',
},
retangl: {
  width: '95%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 30,
    padding: 25,
    alignItems: 'center',
    elevation: 60, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 5, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 20,
},background:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
}

}
)                     