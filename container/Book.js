import React from 'react';
import {
   Text,
   View,
   Button,
	Image,
} from 'react-native';

function BookImag(yl,page){
	switch(yl){
		case 0.4:
			switch(page){
				case 0: return require('../Book/4-t.png');
				case 1: return require('../Book/4-1.png');
				case 2: return require('../Book/4-2.png');
				case 3: return require('../Book/4-3.png');
			}
		case 0.8:
			switch(page){
				case 0: return require('../Book/8-t.png');
				case 1: return require('../Book/8-1.png');
				case 2: return require('../Book/8-2.png');
				case 3: return require('../Book/8-3.png');
			}
		case 1.2:
			switch(page){
				case 0: return require('../Book/12-t.png');
				case 1: return require('../Book/12-1.png');
				case 2: return require('../Book/12-2.png');
				case 3: return require('../Book/12-3.png');
			}
		case 1.6:
			switch(page){
				case 0: return require('../Book/16-t.png');
				case 1: return require('../Book/16-1.png');
				case 2: return require('../Book/16-2.png');
				case 3: return require('../Book/16-3.png');
			}
		case 2:
			switch(page){
				case 0: return require('../Book/20-t.png');
				case 1: return require('../Book/20-1.png');
				case 2: return require('../Book/20-2.png');
				case 3: return require('../Book/20-3.png');
			}
	}
}


class  BookScreen extends React.Component {

	constructor(props){
		super(props);
		this.state = {moving: 0 ,moveStartPoint: 0};
		this.state = {page:0};
	}

   static navigationOptions  = ({ navigation }) => ({
		title: `YL ${navigation.state.params.yl}`,
		headerLeft:null,
		gestureEnable:false,
   });

	_onMove = (event) => {
		if(this.state.moving==0){
			this.setState({moving: 1 ,moveStartPoint: event.nativeEvent.locationX});
		}
		//console.log(this.state.moveStartPoint);
	}

	_onRelease = (event) => {
		const	{params}	=	this.props.navigation.state;
		this.setState({moving:0})
		if(event.nativeEvent.locationX - this.state.moveStartPoint < -80){
			this._goNext();
		}
	}

	_goNext = () => {
		const	{params}	=	this.props.navigation.state;
		const {navigate} =	this.props.navigation;
		if(this.state.page<3){
			this.setState( {page :this.state.page+1});
		}else{
			if(params.yl==2.0 || params.yl==0.4) navigate('Result',{yl:params.yl});
			else navigate('Score',{yl:params.yl});
		}
	}

	render() {
		const	{params}	=	this.props.navigation.state;
      return (
			<View
				style={{flex: 1, justifyContent: 'center',alignItems: 'center',}}
				onStartShouldSetResponder={()=>{return true;}}
				onMoveShouldSetResponder={()=>{return true;}}
				onResponderMove={this._onMove}
				onResponderRelease={this._onRelease}
			>
				<Image
          		source={BookImag(params.yl,this.state.page)}
          		style={{ width: 350, height: 480 }}
				/>
            <Button
               onPress={this._goNext}
               title="次へ"
					style={{flex:1}}
            />
         </View>
      );
   }
}

export default BookScreen;
