import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
	Modal,
	Button,
} from 'react-native';


export default class ManagTimeModal extends Component {
    render() {
        return (
					<Modal
	          animationType="slide"
	          transparent={false}
	          visible={this.props.modalVisible}
	          onRequestClose={() => {alert("Modal has been closed.")}}
						transparent={true}
	          >
         		<View style={modalStyles.container}>
          		<View style={modalStyles.textArea}>
								<Text style={modalStyles.text}>読む速度が早かったようです{'\n'}もう一度読みますか？</Text>
							</View>
							<View style={modalStyles.buttonArea}>
								<Button
									onPress={() => {this.props.modalSet()}}
									style={{flex:1}}
									title={'戻る'}
									/>
								<Button
									onPress={() => {this.props.modalSet()}}
									style={{flex:1}}
									title={'続行'}
									/>
							</View>
         		</View>
        	</Modal>
        );
    }
}

const modalStyles = StyleSheet.create({
	container:{
		//見た目
			//外形
			height:100,				//高さ
			width:230,				//幅
			borderRadius:10,	//角の丸み
			//色
			backgroundColor:"snow",
			borderColor:"black",
			borderWidth:2,
		//中身
		padding:10,
		justifyContent: 'center',	//垂直揃え　中央
		//自身の並び
		alignSelf: 'center',			//水平揃え　中央
		//位置
		marginTop: 300,
	},
	textArea:{
		//flex
		flex:2,
		//中身
		justifyContent: 'center',	//垂直揃え
		alignItems: 'center',			//水平揃え
	},
	text:{
		textAlign:'center',
	},
	buttonArea:{
		//flex
		flex:1,
		//中身
		flexDirection:'row',
		justifyContent: 'space-around',
		//位置
		marginBottom:15,
	}
})
