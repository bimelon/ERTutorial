import React from 'react';
import {
   Text,
   View,
   Button,
	Switch,
   StyleSheet,
} from 'react-native';


class  ScoreScreen extends React.Component {

	constructor(props){
		super(props);
		const	{params}	=	this.props.navigation.state;
		const {navigate} = this.props.navigation;
		this.state = {difficult:true,evalution:[true,true,true,true]};
	}

	static navigationOptions = {
		title: 'Score',
      headerLeft:null,
		gestureEnable:false,
   };

	_goNext = () => {
		const	{params}	=	this.props.navigation.state;
		const {navigate} = this.props.navigation;
      const reedTime = new Date() - this.props.screenProps.starttime;
		switch(params.yl){
			case 0.4:
				navigate('Result',{yl:params.yl});
			break;
			case 0.8:
				if(this.state.difficult) navigate('Book',{yl:(params.yl*10 - 0.4*10)/10});
				else 	navigate('Result',{yl:params.yl});
			break;
			case 1.2:
				if(this.state.difficult) navigate('Book',{yl:(params.yl*10 - 0.4*10)/10});
				else navigate('Book',{yl:(params.yl*10 + 0.4*10)/10});
			break;
			case 1.6:
				if(this.state.difficult) navigate('Result',{yl:(params.yl*10 - 0.4*10)/10});
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
      return (
         <View style={styles.underView}>
            <Text style={styles.topText}>おつかれさまでした! {reedTime/1000}s</Text>
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
                     onValueChange={(value) => this.setState({evalution[0]: value})}
                     style={{marginBottom: 10}}
                     value={this.state.difficult}
                  />
               </View>
               <View style={styles.switchView}>
                  <Text style={{fontSize:16,marginTop:8}}>むずかしかった？</Text>
					   <Switch
                     onValueChange={(value) => this.setState({evalution[1]: value})}
                     style={{marginBottom: 10}}
                     value={this.state.difficult}
                  />
               </View>
               <View style={styles.switchView}>
                  <Text style={{fontSize:16,marginTop:8}}>むずかしかった？</Text>
					   <Switch
                     onValueChange={(value) => this.setState({evalution[2]: value})}
                     style={{marginBottom: 10}}
                     value={this.state.difficult}
                  />
               </View>
               <View style={styles.switchView}>
                  <Text style={{fontSize:16,marginTop:8}}>むずかしかった？</Text>
					   <Switch
                     onValueChange={(value) => this.setState({evalution[3]: value})}
                     style={{marginBottom: 10}}
                     value={this.state.difficult}
                  />
               </View>
               <View style={styles.nextButtonView}>
                  <Button
                     onPress={()=>{
                        const {evalution}=this.state;
                        if(Math.min.evalution<1){
                           this.setState({difficult:false});
                        }
                        this.props.screenProps.setTime();
                        this._goNext();
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
