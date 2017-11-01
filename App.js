import React ,{Component} from 'react';
import {
   AppRegistry,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import WelcomeScreen from './containers/Welcome';
import LectureScreen from './containers/Lecture';
import BookScreen from './containers/Book';
import ScoreScreen from './containers/Score';
import ResultScreen from './containers/Result';

const TadokuStack = StackNavigator({
      Welcome: { screen: WelcomeScreen },
      Lecture: { screen: LectureScreen },
      Book:    { screen: BookScreen },
      Score:   { screen: ScoreScreen},
      Result:  { screen: ResultScreen },
   }
);

export default class App extends Component{
   constructor(props){
      super(props);
      this.state = {startTime:new Date()}
   }

   _setTime = () => {
      this.setState({ startTime:new Date() })
   }

   render(){
      return(
         <TadokuStack
            screenProps={{
               setTime:this._setTime,
               starttime:this.state.startTime
            }}
         />
      )
   }
}
