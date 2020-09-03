import React,{component} from 'react'
import {View,Text} from 'react-native'

class App extends component{
  constuctor(props){
    super(props)
    this.state={
      text:"React native in Thailand"
   }
  }
  render(){
    return(
      <View>
        <text style={{fontSize:20}}> {this.state.text}</text>
        <text style={{color:"red"}}> hello, I have a book</text>
      </View>
    )
  }
}
export default App;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      