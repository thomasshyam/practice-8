import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Text,
} from 'react-native';


export default class Header extends Component {

    render() {
        return (
            <ImageBackground style={styles.headerbg}
                source={require('../img/3.jpg')}>
                <View style={styles.headercontainer}>
                    <View style={styles.profilepic}>
                        <Image 
                            source={require('../img/1.jpg')}
                            style={styles.mypic}
                        />
                    </View>
                    <Text style={styles.name}>ThomasShyam</Text>
                    <Text style={styles.liner}>Developer</Text>
                </View>
            </ImageBackground>
        );
    }
    
}

const styles = StyleSheet.create({
   headerbg:{
       flex:1,
       width:null,
       alignSelf:'stretch',
       
   },
   headercontainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        backgroundColor:'rgba(0,0,0,0.6)',

   },
   profilepic:{
       width:180,
       height:180,
   },
   mypic:{
       
       flex:1,
       width:null,
       alignSelf:'stretch',
       borderRadius:90,
       borderWidth:3,
       borderColor:'#fff',
   },
   name:{
       fontSize:17,
       marginTop:20,
       color:'#fff',
       fontWeight:'bold',
   },
   liner:{
        color:'#fff',
        fontSize:15,
        fontStyle:'italic',

   },
});
