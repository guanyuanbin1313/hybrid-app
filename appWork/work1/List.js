import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, FlatList, Image, ScrollView, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';


const styles=StyleSheet.create({
  box:{
    width:"40%",
    height:300,
    margin:10,
    backgroundColor:'#ffffff'
  },
  txt:{
    color:'gray',
  },
  size:{
    fontSize:30,
  },
  color:{
    color:'red',
    marginTop:15,
  },
  nav: {
    width: "100%",
    height: 55,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
},
top: {
    height: 45,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 10,
    color: '#515A5A',
    marginLeft:58
}
});



export default class List extends Component {
    render() {
        return (
            <View>
               <ScrollView >
        <TextInput 
        placeholder="请输入内容"
        
        style={{
          borderColor:'#ffffff',
          width:"95%",
          height:50,
          margin:10,
          backgroundColor:'#eeeeee',
          borderWidth:1,
          borderRadius:3
        }}/>

            <View style={styles.nav}>
                <Text style={{
                      height: 45,
                      textAlign: 'center',
                      fontSize: 20,
                      paddingTop: 10,
                      color: '#EC7063'
                    }}>综合</Text>
                <Text style={styles.top}>销量</Text>
                <Text style={styles.top}>新品</Text>
                <Text style={styles.top}>价格</Text>
                <Text style={styles.top}>信用</Text>
                </View>

        {/* justifyContent主轴对齐方式 */}
        <View style={{
          flexDirection:'row',
          justifyContent:'space-evenly',
          flexWrap:'wrap'
          }}>
          <View style={styles.box}>
            <View>
              <Image resizeMode="cover" style={{height:220,width:"100%"}} source={require('../assets/list/2.png')}/>
            </View> 
            <View>
              <Text style={styles.txt}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
            </View>
            <View>
              <Text style={styles.color}>36.00</Text>
            </View>
          </View>

          <View style={styles.box}>
          <View>
              <Image resizeMode="cover" style={{height:220,width:"100%"}} source={require('../assets/list/3.png')}/>
            </View> 
            <View>
              <Text style={styles.txt}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
            </View>
            <View>
              <Text style={styles.color}>36.00</Text>
            </View>
          </View>

          <View style={styles.box}>
          <View>
              <Image resizeMode="cover" style={{height:220,width:"100%"}} source={require('../assets/list/2.png')}/>
            </View> 
            <View>
              <Text style={styles.txt}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
            </View>
            <View>
              <Text style={styles.color}>36.00</Text>
            </View>
          </View>
          <View style={styles.box}>
          <View>
              <Image resizeMode="cover" style={{height:220,width:"100%"}} source={require('../assets/list/3.png')}/>
            </View> 
            <View>
              <Text style={styles.txt}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
            </View>
            <View>
              <Text style={styles.color}>36.00</Text>
            </View>
          </View>
          <View style={styles.box}>
          <View>
              <Image resizeMode="cover" style={{height:220,width:"100%"}} source={require('../assets/list/2.png')}/>
            </View> 
            <View>
              <Text style={styles.txt}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
            </View>
            <View>
              <Text style={styles.color}>36.00</Text>
            </View>
          </View>
          <View style={styles.box}>
          <View>
              <Image resizeMode="cover" style={{height:220,width:"100%"}} source={require('../assets/list/3.png')}/>
            </View> 
            <View>
              <Text style={styles.txt}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
            </View>
            <View>
              <Text style={styles.color}>36.00</Text>
            </View>
          </View>
        </View>
        
      </ScrollView> 
            </View>
            
        )
    }
}

