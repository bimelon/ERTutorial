import React from 'react';
import {
   Text,
   View,
   Button,
	Switch,
   StyleSheet,
} from 'react-native';

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

class  ScoreScreen extends React.Component {

	constructor(props){
		super(props);
		const	{params}	=	this.props.navigation.state;
		const {navigate} = this.props.navigation;
		this.state = {modalVisible:true};
		this.state = {eval0:true,eval1:true,eval2:true,eval3:true,reedTime:(new Date() - this.props.screenProps.starttime)};
	}

	static navigationOptions = {
		title: 'Score',
      headerLeft:null,
		gestureEnable:false,
   };

	_setDifficult = (value) => {
		console.log(value);
		this.setState({dif: value});
			console.log(this.state.dif);
	}

	_goNext = (difficult) => {
		const	{params}	=	this.props.navigation.state;
		const {navigate} = this.props.navigation;

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

	setModalVisible(visible) {
	    this.setState({modalVisible: visible});
	 }

	render() {
		const	{params}	=	this.props.navigation.state;
      const {navigate}=	this.props.navigation;

      return (
         <View style={styles.underView}>
			<Modal
				animationType="slide"
				transparent={false}
				visible={this.state.modalVisible}
				onRequestClose={() => {alert("Modal has been closed.")}}
			>
				<View style={{marginTop: 22}}>
 					<View>
         			<Text>Hello World!</Text>
		            <TouchableHighlight onPress={() => {
              		this.setModalVisible(!this.state.modalVisible)
            		}}>
            			<Text>Hide Modal</Text>
         			</TouchableHighlight>
					</View>
         	</View>
        	</Modal>
            <Text style={styles.topText}>おつかれさまでした! {this.state.reedTime/1000}s</Text>
            <View style={styles.bodyView}>
               <Text style={styles.HeadText}>How did you like it?</Text>
               <Text style={styles.detailText}>{'\ '}今回の本はどうでしたか？</Text>
               <Text style={styles.detailText}>{'\ '}下のボタンで教えてください</Text>
               <Text style={styles.detailText}>{'\ '}簡単だったら難しい本を</Text>
               <Text style={styles.detailText}>{'\ '}難しかったら簡単な本を</Text>
               <Text style={styles.detailText}>{'\ '}つぎのページに用意します！</Text>
            </View>
               <View style={styles.switchView}>
                  <Text style={{fontSize:16,marginTop:8}}>むずかしかった？</Text>
					   <Switch
                     onValueChange={(value) => this.setState({eval0: value})}
                     style={{marginBottom: 10}}
                     value={this.state.eval0}
                  />
               </View>
               <View style={styles.switchView}>
                  <Text style={{fontSize:16,marginTop:8}}>むずかしかった？</Text>
					   <Switch
                     onValueChange={(value) => this.setState({eval1: value})}
                     style={{marginBottom: 10}}
                     value={this.state.eval1}
                  />
               </View>
               <View style={styles.switchView}>
                  <Text style={{fontSize:16,marginTop:8}}>むずかしかった？</Text>
					   <Switch
                     onValueChange={(value) => this.setState({eval2: value})}
                     style={{marginBottom: 10}}
                     value={this.state.eval2}
                  />
               </View>
               <View style={styles.switchView}>
                  <Text style={{fontSize:16,marginTop:8}}>むずかしかった？</Text>
					   <Switch
                     onValueChange={(value) => this.setState({eval3: value})}
                     style={{marginBottom: 10}}
                     value={this.state.eval3}
                  />
               </View>
               <View style={styles.nextButtonView}>
                  <Button
                     onPress={()=>{
								console.log(this.state.eval0+this.state.eval1+this.state.eval2+this.state.eval3);
                        if((this.state.eval0+this.state.eval1+this.state.eval2+this.state.eval3) < 4){
                           this._goNext(0);
                        }else{
									this._goNext(1);
								}
                     }}
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
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf:'center',
   },
})


export default ScoreScreen;
