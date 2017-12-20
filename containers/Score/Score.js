import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';

import CheckArea from './CheckArea';
import MTModal from './ManageTimeModal';
/*
function BookWords(YL){
	switch (YL) {
		case 0.4:
			return 18;
			break;
		case 0.8:
			return 85;
			break;
		case 1.2:
			return 104;
			break;
		case 1.6:
			return 429;
			break;
		case 2.0:
			return 156;
			break;
		default:

	}
}
*/
class  ScoreScreen extends Component {

	constructor(props){
		super(props);
		const	{params}	=	this.props.navigation.state;
		const {navigate} = this.props.navigation;
		this.state = {eval:true,reedTime:(new Date() - this.props.screenProps.starttime)};
		this.state = {modalVisible:true};
	}

	static navigationOptions = {
		title: 'Score',
    headerLeft:null,
		gestureEnable:false,
  };

	_goNext = () => {
		const	{params}	=	this.props.navigation.state;
		const {navigate} = this.props.navigation;
		var difficult = this.state.eval;

		this.props.screenProps.setTime();

		switch(params.yl){
			case 0.4:
				navigate('Result',{yl:params.yl});
			break;
			case 0.8:
				if(difficult) navigate('Book',{yl:(params.yl*10 - 0.4*10)/10});
				else 	navigate('Result',{yl:params.yl});
			break;
			case 1.2:
				if(difficult) navigate('Book',{yl:(params.yl*10 - 0.4*10)/10});
				else navigate('Book',{yl:(params.yl*10 + 0.4*10)/10});
			break;
			case 1.6:
				if(difficult) navigate('Result',{yl:(params.yl*10 - 0.4*10)/10});
				else navigate('Book',{yl:(params.yl*10 + 0.4*10)/10});
			break;
			case 2.0:
				navigate('Result',{yl:params.yl});
			break;
		}
	}

	render() {
		const	{params}	=	this.props.navigation.state;
		const {navigate}=	this.props.navigation;
		console.log(this.state.eval);
   	return (
		<View style={styles.underView}>
			<MTModal modalVisible={this.state.modalVisible} modalSet={()=>this.setState({modalVisible:!this.state.modalVisible})}/>
			<Text style={styles.topText}>おつかれさまでした!</Text>
			<View style={styles.bodyView}>
				<Text style={styles.HeadText}>How did you like it?</Text>
				<Text style={styles.detailText}>{'\ '}今回の本はどうでしたか？</Text>
				<Text style={styles.detailText}>{'\ '}下のボタンで教えてください</Text>
				<Text style={styles.detailText}>{'\ '}簡単だったら難しい本を</Text>
				<Text style={styles.detailText}>{'\ '}難しかったら簡単な本を</Text>
				<Text style={styles.detailText}>{'\ '}つぎのページに用意します！</Text>
			</View>
			<CheckArea changeEval={(value)=>{this.setState({eval:value})}} />
			<View style={styles.nextButtonView}>
				<Button
				 	onPress={this._goNext}
				 	title="次へ"
				 	/>
			</View>
		</View>
		);
   }
}


const styles=StyleSheet.create({
   underView:{
      flex:1,
		justifyContent: 'space-between',
   },
   topText:{
      alignSelf: 'center',
      fontSize:22,
      paddingTop:15,
   },
   bodyView:{
      //backgroundColor: 'powderblue',
      flex:1,
      margin:10,
      paddingTop:10,
      paddingLeft:10,
   },
   HeadText:{
      margin:4,
      fontSize:20,
      color:'#3030ff',
   },
   detailText:{
      margin:5,
      fontSize:15,
   },
   nextButtonView:{
      //backgroundColor:'#8080ff',
      alignSelf: 'flex-end',
      padding:20,
   },
   switchView:{
//      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf:'center',
   },
})


export default ScoreScreen;
