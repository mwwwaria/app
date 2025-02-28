import React, { Component } from "react";
import { View, Text, Image } from'react-native';

class App extends Component {
  render() {
    return(
      <View>
        <Text style={{color: '#492d12', fontSize: 50, margin: 10}}>Projeto Inicial da Aplicação</Text> 
        <Text style={{color: '#14320b'}}>Versão 1.0 :D</Text> 
      
        <Image
        source={{uri: 'https://th.bing.com/th/id/R.b500af63267db854f30d521e91110db9?rik=fvOEPZeaBUjHUg&pid=ImgRaw&r=0'}}
        style={{width: 300, height: 500}}
        />
      
      </View>

    );
  }
}

export default App; 