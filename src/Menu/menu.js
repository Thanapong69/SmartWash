import React from 'react';
import {  
    View, 
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import MenuItem from '../component/MenuItem'
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

export default class menu extends React.Component {
    
    static navigationOptions = {
        header: null
    }
    callFun1 = () =>
    {
      this.props.navigation.navigate('HomeScreen');
    }
    callFun2 = () =>
    {
      this.props.navigation.navigate('WashScreen');
    }
    callFun3= () =>
    {
      this.props.navigation.navigate('AddcreScreen');
    }
    callFun4= () =>
    {
      this.props.navigation.navigate('UserScreen');
    }
    callFun5 = () =>
    {
      this.props.navigation.navigate('LogoutScreen');
    }

  render() {
    return (
     <ImageBackground
         source={require('../image/bg.jpg')}
         style={styles.container}>

         <View style={styles.overlayContainer}>

            <View style={styles.top}>
                <Text style={styles.header}>Smart Wash </Text>
                <Text style={styles.title}>ระบบจัดการเครื่องซักผ้าอัจฉริยะ</Text>
            </View>

            <View style={styles.menuContainer}>

                <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun1 } >
                <MenuItem itemImage={require('../image/menu_home.png')}/>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun2 } >
                <MenuItem itemImage={require('../image/menu_list.png')}/>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun3 } >
                <MenuItem itemImage={require('../image/menu_pay.png')}/>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun4 } >
                <MenuItem itemImage={require('../image/menu_user.png')}/>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun5 } >
                <MenuItem itemImage={require('../image/menu_logout.png')}/>
                </TouchableOpacity>
                
                <MenuItem itemImage={require('../image/web.png')}/>
            </View>

         </View>
     </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(47,163,218, .4)'
    },
    top: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: '#fff',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255, .1)'
    },
    title:{
        color: '#fff',
        fontSize: 23,
        // borderColor: '#fff',
        // borderWidth: 2,
        padding: 5,
        marginTop: 15,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255, .1)'
    },
    menuContainer: {
        height: '40%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})