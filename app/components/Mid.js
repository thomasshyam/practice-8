import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


export default class Mid extends Component {

    render() {
        return (
            <View style={styles.Mid}>
                <View style={[styles.Midview,styles.leftbar]}>
                    <Text style={styles.one}>75 +</Text>    
                    <Text style={styles.two}>Photos</Text>    
                </View>
                <View style={styles.Midview}>
                <Text style={styles.one}>30K +</Text>    
                    <Text style={styles.two}>Followers</Text>
                </View>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    Mid: {
        flexDirection:'row',
        backgroundColor:'#CF000F',
        borderTopWidth:8,
        borderTopColor:'#fff',

    },
    Midview:{
        flex:1,
        padding:20,
        alignItems:'center',

    },
    one:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',

    },
    two:{   
        color:'#fff',
        fontSize:15,
        marginTop:10,
    },
    leftbar:{
        borderRightWidth:4,
        borderRightColor:'#fff',
    },
});
