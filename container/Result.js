import React from 'react';
import {
   Text,
   View,
   Button,
   StyleSheet,
} from 'react-native';
import { NavigationActions } from 'react-navigation'

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Welcome'})
  ]
})

class  BookScreen extends React.Component {


   static navigationOptions  = ({ navigation }) => ({
		title: `YL ${navigation.state.params.yl}`,
		headerLeft:null,
		gestureEnable:false,
   });



	render() {
      const	{params}	=	this.props.navigation.state;
		const {navigate} =	this.props.navigation;
      return (
         <View style={styles.underView}>
            <Text style={styles.topText}>チュートリアルは終了です</Text>
            <View style={styles.bodyView}>
               <Text style={styles.HeadText}>See you</Text>
               <Text style={styles.detailText}>{'\ '}チュートリアルお疲れ様でした</Text>
               <Text style={styles.detailText}>{'\ '}あなたにおすすめのYLは{params.yl}です！</Text>
               <Text style={styles.detailText}>{'\ '}このYLあたりの本を中心に楽しく多読をしましょう！</Text>
               <Text style={styles.detailText}>{'\ '}またこのYLより低い本もおすすめです</Text>
               <Text style={styles.detailText}>{'\ '}色々な本を読んでお気に入りの本を見つけましょう</Text>
               <Text style={styles.HeadText}>What{'\''}s YL</Text>
               <Text style={styles.detailText}>{'\ '}YLとは{'(y)'}よみやすさ{'(l)'}レベルのことです</Text>
               <Text style={styles.detailText}>{'\ '}同じYLの本は同じレベルの単語、文の長さとなっています</Text>
               <Text style={styles.detailText}>{'\ '}このYLを基準に本を選ぶといいでしょう</Text>
               <Text style={styles.detailText,{fontSize:20}}>{'\n\t'}Let{'\''}s Enjoy Reading</Text>
            </View>
            <Button title="back" onPress={()=>{this.props.navigation.dispatch(resetAction)}} />
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


export default BookScreen;
