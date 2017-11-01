import React from 'react';
import {
   Text,
   View,
   Button,
   StyleSheet,
} from 'react-native';

class LectureScreen extends React.Component {
   static navigationOptions = {
      title: 'Lecture',
   };
   render() {
      const {navigate}=this.props.navigation;
      return (
         <View style={styles.underView}>
            <Text style={styles.topText}>とにもかくにも多読をしてみよう！</Text>
            <View style={styles.bodyView}>
               <Text style={styles.HeadText}>Let{'\''}s 多読</Text>
               <Text style={styles.detailText}>{'\ '}次のページから英語の絵本が表示されます</Text>
               <Text style={styles.detailText}>{'\ '}真剣にならず気軽に読んでみましょう</Text>
               <Text style={styles.detailText}>{'\ '}意味が取れなくても大丈夫！</Text>
               <Text style={styles.detailText}>{'\ '}逆に同じところを何回も読まないようにしましょう！</Text>
               <Text style={styles.detailText}>{'\ '}前のページには戻れないのでそこは気をつけて！</Text>
               <Text style={styles.detailText,{fontSize:20}}>{'\n\t'}ではではLet{'\''}s Enjoy Reading</Text>
            </View>
            <View style={styles.buttonView}>
               <Button
                  onPress={()=>{
                     this.props.screenProps.setTime();
                     navigate('Book',{yl:1.2});
                  }
                  }
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
   buttonView:{
      //backgroundColor:'#8080ff',
      alignSelf: 'flex-end',
      padding:20,
   },
})

export default LectureScreen;
