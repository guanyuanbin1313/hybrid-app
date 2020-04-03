import React,{useState,useEffect} from 'react';
import {StyleSheet,AsyncStorage, View, Text, Dimensions, FlatList, Image, ScrollView, StatusBar} from 'react-native';
import {Router, Scene, Tabs, Modal,Actions} from 'react-native-router-flux';
import Home from './src/Home/Home';
import Login from './src/login/Login';
import List from './src/List/List';
import MyRelease from './src/login/MyRelease';
import SplashScreen from 'react-native-splash-screen';
import User from './src/common/user';
import User1 from './src/common/user1';
import SwiperPage from './src/common/SwiperPage';

// 图标安装完后，要link，link成功后卸载App，再重新 npm run android
// 重装完以后，App停止运行的，卸载除了 react-native-router-flux之外的没用的包
// yarn remove 包名   删除包
// 每新装完一个包，服务就会自动停止，


const TabIconhome = ({focused, title}) => {
    return (
        <View>
     
             
            <Text
                style={{fontSize:20,color: focused ? 'rgb(242,48,48)' : 'grey'}}
            >
                <Image resizeMode="cover" style={{height:20,width:20}} source={require('./assets/login/jifen.png')}/>
            </Text>
        </View>
    );
};
const TabIconlist = ({focused, title}) => {
    return (
        <View>
            <Text
                style={{color: focused ? 'rgb(242,48,48)' : 'grey'}}
            >
                 <Image resizeMode="cover" style={{height:20,width:20}} source={require('./assets/login/jifen.png')}/>
            </Text>
        </View>
    );
};
const TabIconperson = ({focused, title}) => {
    return (
        <View>
            <Text
                style={{color: focused ? 'rgb(242,48,48)' : 'grey'}}
            >
                 <Image resizeMode="cover" style={{height:20,width:20}} source={require('./assets/login/gerenzhongxinwoderenwubiaozhuntouxianxingcopy.png')}/>
            </Text>
        </View>
    );
};
const TabIconuser = ({focused, title}) => {
    return (
        <View>
            <Text
                style={{color: focused ? 'rgb(242,48,48)' : 'grey'}}
            >
                 <Image resizeMode="cover" style={{height:20,width:20}} source={require('./assets/login/gerenzhongxinwoderenwubiaozhuntouxianxingcopy.png')}/>
            </Text>
        </View>
    );
};

const App = () => {
    let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(false);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
    return (
        <View style={{flex:1}}>
            <StatusBar
                backgroundColor={'red'}
                barStyle="light-content"
            />
            <Router
                backAndroidHandler={()=>{
                    if(Actions.currentScene != 'home'){
                        Actions.pop();
                        return true;
                    }else{
                        if(new Date().getTime()-now<2000){
                            BackHandler.exitApp();
                        }else{
                            ToastAndroid.show('确定要退出吗',100);
                            now = new Date().getTime();
                            return true;
                        }
                    }
                    
                }}
            >
                {/*Router里只能放一个组件*/}
                {/* 将全部的跳转页面都放在Root下面 */}
                <Scene key="root">
                    {/* key 就是给页面的标签,供Actions使用 */}
                    {/* component 设置关联的页面 */}
                    {/* title 就是给页面标题 */}
                    {/* initial 就是设置默认页面*/}
                    <Tabs
                        key='tabbar'
                        swipeEnabled={true}
                        wrap={false}
                        hideNavBar
                        activeTintColor="rgb(242,48,48)"
                        inactiveTintColor="grey"
                        tabBarStyle={{backgroundColor: 'white',height:60}}
                    >
                        <Scene
                            key="one"
                            component={Home}
                            title="首页"
                            header={null}
                            initial={true}
                            icon={TabIconhome}
                        />
                        <Scene
                           
                           
                            key="two"
                            component={List}
                            title="列表"
                            icon={TabIconlist}
                        />
                        <Scene
                            key="three"
                            component={Login}
                            title="个人中心"
                            icon={TabIconperson}
                        />
                        <Scene
                            key="four"
                            component={User}
                            title="登录"
                            icon={TabIconuser}
                        />
                    </Tabs>
                    <Scene
                            hideNavBar
                            key="list"
                            component={MyRelease}
                            title="列表"
                            icon={TabIconuser}
                        />
                        <Scene
                            hideNavBar
                            key="user1"
                            component={User1}
                            title="列表"
                            icon={TabIconuser}
                        />
                </Scene>
               
            </Router>
        </View>
    );
};


export default App;
