import React, { Component } from 'react'
import{View,Text,Image,StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
const styles =StyleSheet.create({
   head:{
       width:'100%',
       height:210,
       backgroundColor:'#f23030',
       justifyContent:'center',
       alignItems:'center'
   },
   img:{
       width:100,
       height:100,
       borderRadius:50
   },
   login:{
       height:50,
       backgroundColor:'white',
       paddingLeft:10,
       flexDirection:'row',
       alignItems:'center'
   },
   image:{
      height:25,
      width:25,
      marginLeft:10
    },
    bbox:{
      flexDirection:'row',
      flexWrap:'wrap',
      backgroundColor:'white'
    },
   box:{
       width:'33.3%',
       height:80,
       justifyContent:'center',
       alignItems:'center'
   },
   mee:{
   marginLeft:20,
   paddingTop:10,
   textAlign:"center",
   fontSize:20,
   },
})


export default class Login extends Component {
    render() {
        return (
        <>
            <View style={styles.head}>
                <Image style={styles.img} source={require('../assets/login/1.png')}  />
                <Text style={{color:'white'}}> BINNU DHILLON</Text>
            </View>
            <View style={styles.login}>
               <Image style={styles.image} source={require('../assets/login/gerenzhongxinwoderenwubiaozhuntouxianxingcopy.png')}  />
                <Text style={styles.mme}>我的个人中心</Text>
            </View>
            <View style ={styles.bbox}>
                 <View style={styles.box}>
                 <Image style={styles.image} source={require('../assets/login/icon-.png')}  />
                    <Text style={styles.mme}>账户管理</Text>
                 </View>
                 <View style={styles.box}>
                 <Image style={styles.image} source={require('../assets/login/shouhuodizhi.png')}  />
                    <Text style={styles.mme}>收货地址</Text>
                 </View>
                 <View style={styles.box}>
                 <Image style={styles.image} source={require('../assets/login/dingdan.png')}  />
                    <Text style={styles.mme}>我的信息</Text>
                 </View>
                 <View style={styles.box}>
                 <Image style={styles.image} source={require('../assets/login/dingdanguanli.png')}  />
                    <Text style={styles.mme}>我的订单</Text>
                 </View>
                 <View style={styles.box}>
                 <Image style={styles.image} source={require('../assets/login/icon.png')}  />
                    <Text style={styles.mme}>我的二维码</Text>
                 </View>
                 <View style={styles.box}>
                 <Image style={styles.image} source={require('../assets/login/jifen.png')}  />
                    <Text style={styles.mme}>我的积分</Text>
                 </View>
                 <View style={styles.box}>
                 <Image style={styles.image} source={require('../assets/login/shoucang.png')}  />
                    <Text style={styles.mme}>我的收藏</Text>
                 </View>
            </View>
            <View style={styles.login}>
               <Image style={styles.image} source={require('../assets/login/gerenzhongxinwoderenwubiaozhuntouxianxingcopy.png')}  />
                <Text style={styles.mme}>E族活动</Text>
            </View>
            <View style={styles.bbox}>
                 <View style={styles.box}>
                 <Image style={styles.image} source={require('../assets/login/weixiu.png')}  />
                    <Text style={styles.mme}>居家维修保养</Text>
                 </View>
                 <View style={styles.box}>
                 <Image style={styles.image} source={require('../assets/login/chuhang.png')}  />
                    <Text style={styles.mme}>出行接送</Text>
                 </View>
                 <View style={styles.box}>
                 <Image style={styles.image} source={require('../assets/login/profile.png')}  />
                    <Text style={styles.mme}>我的受赠人</Text>
                 </View>
                 <View style={styles.box}>
                 <Image style={styles.image} source={require('../assets/login/zhusu2.png')}  />
                    <Text style={styles.mme}>我的住宿优惠</Text>
                 </View>
                 <View style={styles.box}>
                 <Image style={styles.image} source={require('../assets/login/wodehuodong.png')}  />
                    <Text style={styles.mme}>我的活动</Text>
                 </View>
                 <View style={styles.box}>
                   <Image style={styles.image} source={require('../assets/login/wodefabu.png')}  />
                   <Button 
                        onPress={()=>{Actions.list()}}
                        style={styles.mme}
                    >我的发布</Button>
                   
                 </View>
            </View>
            <View style={{alignItems:'center',marginTop:10}}>
                <Text style={{alignItems:'center',fontSize:14,color:"#bcbcbc"}}>BINNU DHILLON | 退出</Text>
            </View>
        </>
        )
    }
}

