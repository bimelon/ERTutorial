import React from 'react';
import {
   Text,
   View,
   Button,
   StyleSheet,
} from 'react-native';

class WelcomeScreen extends React.Component {
   static navigationOptions = {
      title: 'Welcome',
   };

   render() {
      const {navigate}=this.props.navigation;
      return (
         <View style={styles.underView}>
            <Text style={styles.topText}>ようこそ　多読チュートリアルへ</Text>
            <View style={styles.bodyView}>
               <Text style={styles.HeadText}>What{'\''}s this app</Text>
               <Text style={styles.detailText}>{'\t'}”多読”初心者のあなたを</Text>
               <Text style={styles.detailText}>{'\t'}簡単な説明とチュートリアルで</Text>
               <Text style={styles.detailText}>{'\t'}中級者へのステップアップをお手伝いします！</Text>
               <Text style={styles.HeadText}>What{'\''}s 多読</Text>
               <Text style={styles.detailText}>{'\t'}簡単な英語をとにかくたくさん読む</Text>
               <Text style={styles.detailText}>{'\t'}英語の勉強方法です！</Text>
               <Text style={styles.HeadText}>How to 多読</Text>
               <Text style={styles.detailText}>{'\t'}以下のルールを守ってただ英語を読むだけ</Text>
               <Text style={styles.detailText}>{'\t'}　1）辞書は引かない</Text>
               <Text style={styles.detailText}>{'\t'}　2）わからないところは飛ばす</Text>
               <Text style={styles.detailText}>{'\t'}　3）つまらなくなったらやめる</Text>
               <Text style={styles.detailText}>{'\n\t'}英語を日本語に翻訳せず読むのがコツです</Text>
            </View>
            <View style={styles.buttonView}>
               <Button
                  onPress={()=>{navigate('Lecture');}}
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
      fontSize:14,
   },
   buttonView:{
      //backgroundColor:'#8080ff',
      alignSelf: 'flex-end',
      padding:20,
   },
})


export default WelcomeScreen;
