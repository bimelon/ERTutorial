import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';

import CheckBox from 'react-native-check-box';

export default class CheckArea extends Component {
	constructor(props){
		super(props);
		this.state = {eval0:true,eval1:true,eval2:true,eval3:true};
	}

	_onClick=(num)=>{
		switch (num) {
			case 0:
				this.setState({eval0:!this.state.eval0})
				break;
			case 1:
				this.setState({eval1:!this.state.eval1})
				break;
			case 2:
				this.setState({eval2:!this.state.eval2})
				break;
			case 3:
				this.setState({eval3:!this.state.eval3})
				break;
			default:
		}
		if((this.state.eval0+this.state.eval1+this.state.eval2+this.state.eval3) < 4){
			this.props.changeEval(false);
		}else{
			this.props.changeEval(true);
		}
	}
  render() {
    return (
			<View style={styles.switchView}>
				<CheckBox
					onClick={()=>this._onClick(0)}
					isChecked={this.state.eval0}
					rightTextView={<Text>難しかった？</Text>}
					/>
				<CheckBox
					onClick={()=>this._onClick(1)}
					isChecked={this.state.eval1}
					rightTextView={<Text>難しかった？</Text>}
					/>
				<CheckBox
					onClick={()=>this._onClick(2)}
					isChecked={this.state.eval2}
					rightTextView={<Text>難しかった？</Text>}
					/>
				<CheckBox
					onClick={()=>this._onClick(3)}
					isChecked={this.state.eval2}
					rightTextView={<Text>難しかった？</Text>}
					/>
			</View>
    );
  }
}


const styles=StyleSheet.create({
   switchView:{
//      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf:'center',
   },
})
