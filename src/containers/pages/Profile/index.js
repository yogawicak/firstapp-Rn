import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileImage from '../../../components/atoms/ProfileImage'
import { SampleClassComp } from '../../../components/atoms';

class Profile extends Component {
  constructor(props) {
    super(); 
    console.log(props)
    // this.props.test = {'udin':'bejo'}
    console.log(this.props)
  }
  testfunction(){
    return this.state.name
  }
  
  state = {
      name: 'ss',
      email: '',
      fullname: ''
  };

  render() {
    return (
      <View style={{flex:1}}>
        <View style={style.container}></View>
        <View style={{flex:1,marginHorizontal:20,alignItems:'center'}}>
          <ProfileImage alignSelf='center' marginTop={-17}></ProfileImage>
          <Text style={style.text}>Hello, { this.testfunction() }</Text>
          <Text style={style.text}>{ this.state.email }</Text>
          <Text style={style.text}>{ this.state.fullname }</Text>
          <SampleClassComp sample='ini sample'/>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container:{
    backgroundColor:'#7272FF',
    height:200,
    borderBottomLeftRadius:13,
    borderBottomRightRadius:13,
  },
  text:{
    fontWeight:'bold',
    marginTop:10,
    fontSize:20
  }
})

export default Profile;
