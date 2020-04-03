import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, FlatList, Image, ScrollView, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';



const styles = StyleSheet.create({
  head: {
     paddingTop:5,
      height: 55,
      backgroundColor: "red",
      flexDirection: 'row'
  },
  search: {
      height: 40,
      backgroundColor: '#fbb8b8',
      width: "80%",
      marginLeft: 20,
      borderRadius: 30,
      flexDirection: 'row',
      color:"white",
  },
  searchright:{
      height:30,
      width:30,
      marginLeft:20,
  },
 
  box: {
      fontSize: 25,
      left: 60,
      top: 29
  },

 
  list: {
    backgroundColor: 'white',
    width:"100%",
    height: 75,
    marginTop: 10,
    flexDirection: 'row'
    },
    listimg1:{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:'#ffcccc',
    },
    listimg2:{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:'#ffe1b1',
    },
listimg3:{
    width:70,
    height:70,
    borderRadius:35,
    backgroundColor:'#bfe6a8',
},
listimg4:{
    width:70,
    height:70,
    borderRadius:35,
    backgroundColor:'#c3ddf2',
},
text:{ 
    textAlign:'center',
    marginTop:25,
    marginLeft:20,
    fontSize:17,
},
listright:{
    marginTop:20,
    marginLeft:"53%",
    color:'#b2abab',
    fontSize:24,
},
listright1:{
    marginTop:20,
    marginLeft:"60%",
    color:'#b2abab',
    fontSize:24,
},
  banner:{
      width:"100%",
      height:230,
  },
  need:{
    width:"80%",
    height:50,
    marginLeft:"10%",
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    marginTop:30,
},
});

export default class Home extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.head}>
                        <View style={styles.search}>
                            <TextInput
                                placeholder="请输入您要搜索的关键字"
                            />
                        </View>
                        <Image style={styles.searchright}
                            source={require('../../assets/home/gouwuche.png')}                         
                        />
                    </View>
                    <Image
                        source={require('../../assets/home/banner.png')}
                        style={styles.banner}
                    />
                    <View >
                        <View style={styles.list}>
                            <Image style={styles.listimg1 }
                                source={require('../../assets/home/list1.png')}                             
                            />
                            <Text style={styles.text}>居家维护保养</Text>
                            <Text style={styles.listright}>></Text>
                        </View>
                        <View style={styles.list}>
                        <Image style={styles.listimg2 }
                                source={require('../../assets/home/list2.png')}                                
                            />
                            <Text style={styles.text}>住宿优惠</Text>
                            <Text style={styles.listright1}>></Text>
                        </View>
                        <View style={styles.list}>
                        <Image style={styles.listimg3 }
                               source={require('../../assets/home/list3.png')}                              
                            />
                            <Text style={styles.text}>出行接送</Text>
                            <Text style={styles.listright1}>></Text>
                        </View>
                        <View style={styles.list}>
                        <Image style={styles.listimg4 }
                               source={require('../../assets/home/list4.png')}
                            />
                            <Text style={styles.text}>E族活动</Text>
                            <Text style={styles.listright1}>></Text>
                        </View>
                    </View>
                    <View style={styles.need}>
                      <Text style={{color:'white',fontSize:20}}>发布需求
                      </Text>
                     </View>
                    <Text style={styles.text}>@E族之家 版权所有</Text>
                </ScrollView>
            </View>
            
        )
    }
}

