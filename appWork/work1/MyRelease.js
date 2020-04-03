import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    TouchableOpacity,
    Button,
    ToastAndroid
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: "100%",
        
    },
    list:{
      height:60,
      flexDirection:'row',
      justifyContent:'center',
     flexWrap:'wrap'
    },
    txtleft:{
        fontSize: 16,
        color: 'black',
        lineHeight: 20,
       width:300,
        marginLeft:0,
        
    },
    txtcenter:{
        fontSize: 16,
        color: 'black',
        lineHeight: 20,
        marginLeft:"5%"
    },
    type: {
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: 'white',
        height: "10%"
    },
    button:{
        width: 80,
        height: 40,
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 50,
        marginTop: 5
    },
    center:{
        fontSize: 18,
        color: 'grey',
        marginTop: 11,
        marginLeft: 80
    },
   
})

export default class MyRelease extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            pages: 1,
        }
    }

    componentDidMount() {
        fetch('https://cnodejs.org/api/v1/topics?limit=10&page=' + this.state.pages).then(res => res.json())
            .then(res => this.setState({list: res.data}))
    }

    text = () => {
        let arr = ['已回复', '待回复'];
        let n = Math.floor(Math.random() * arr.length + 1) - 1;
        if (n/2==0){
            
            return arr[n];
        }
        else{
            return arr[n];
        }
       
    }
    upper = () => {
        if (this.state.pages === 1) {
            ToastAndroid.show('第一页！', ToastAndroid.BOTTOM);
        }
        else {
            this.setState({
                pages: --this.state.pages
            })
            fetch('https://cnodejs.org/api/v1/topics?limit=10&page=' + this.state.pages).then(res => res.json())
                .then(res => this.setState({list: res.data}))
        }
    }
    next = () => {
        this.setState({
            pages: ++this.state.pages
        })
        fetch('https://cnodejs.org/api/v1/topics?limit=10&page=' + this.state.pages).then(res => res.json())
            .then(res => this.setState({list: res.data}))
    }

    
    render() {
        return (
            <ScrollView> 
            <View>
                <View>
                <Button 
                        title='返回'
                        onPress={
                            Actions.pop
                        }
                    />
                    {
                        this.state.list.map((item) => (
                            <View style={styles.box}>
                                <View style={styles.list}>
                                    <Text style={styles.txtleft}>
                                        {item.title ? (item.title.length > 15 ? item.title.substr(0, 15) + "..." : item.title) : ""}
                                    </Text>
                                </View>
                                <View style={styles.list}>
                                    <Text style={styles.txtcenter}>
                                        {item.create_at.substr(0, 10)}
                                    </Text>
                                </View>
                                <View style={styles.list}>
                                    <Text style={styles.txtleft}>
                                        {this.text()}
                                    </Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
                <View style={styles.type}>
                    <TouchableOpacity onPress={() => this.upper()}>
                        <View style={styles.button}>
                            <Text >上一页</Text>
                        </View>
                    </TouchableOpacity>
                        <Text style={styles.center}>第{this.state.pages}页</Text>
                    <TouchableOpacity onPress={() => this.next()}>
                        <View style={styles.button}>
                          <Text>下一页</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView> 
        )
    }
}

