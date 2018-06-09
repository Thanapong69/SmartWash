import React from 'react';
import {  
  View, 
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { Fonts } from '../utils/Fonts';

export default class Wash extends React.Component {
  static navigationOptions = {
    title: 'รายการเครื่องซักผ้า'
  };

  constructor(props) {
    super(props);
 
  }

  callFun1 = () =>
  {
    this.props.navigation.navigate('BranchScreen1');
  }

  callFun2 = () =>
  {
    this.props.navigation.navigate('BranchScreen2');
  }

  render() {
    return (
      <View style={styles.container}>

      <View style={[styles.boxContainer, styles.boxOne]}>
      <Text style={ styles.status1 }>สาขาที่ 1</Text>
  
      <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun1 }>
      <Image source={require('../image/1.png')} style = {styles.ImageClass1} />
      </TouchableOpacity>

      </View>

      <View style={[styles.boxContainer, styles.boxThree]}>
      <Text style={ styles.status1 }>สาขาที่ 2</Text>

      <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun2 }>
      <Image source={require('../image/2-2.png')} style = {styles.ImageClass} />  
      </TouchableOpacity>

      </View>

      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 1:1
    flexDirection: 'column',
  },
  boxContainer: {
    flex: 1, // 1:3
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxOne: {
    flex: 1.6, // 3:6
    backgroundColor: '#99e6ff',
    justifyContent: 'space-around',
  },
  status1: {
    fontSize: 25,
    color: "black",
    fontFamily: Fonts.ltim
  },
  ImageClass : {
    width : 100,
    height : 100,
    marginTop: 50,
  },
  ImageClass1 : {
    width : 100,
    height : 100,
    marginBottom: 50,
  },
  boxThree: {
    flex: 1.6, // 2:6
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#33ccff',
  },
});