/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Text, StyleSheet, SafeAreaView, View, TextInput, TouchableOpacity} from 'react-native';
import { ImageBackground } from 'react-native';

/*
########EXEMPLO DE CONSTANTES PARA TAMANHOS E PODE SER VIÁVEL FAZER PARA TODOS OS ESTILOS DE FONTE LÁ DO FIGMA##################

const size = 70;
const cat = {
  uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
  width: size,
  height: size,
};

*/

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


  return (
    <SafeAreaView style={styles.containerGeral}>
        <ImageBackground blurRadius={12} source={require('../../img/background.png')} resizeMode="cover" style={styles.image} />


        <View style={styles.containerLogin}>
            <Text style={styles.titulo}>Login</Text>
            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={ (text) => setEmail(text) }
            />

            <TextInput
                placeholder="**********"
                style={styles.input}
                value={password}
                onChangeText={ (text) => setPassword(text) }
            />

            <TouchableOpacity style={styles.botaoEntrar}>
               <Text style={styles.tituloBtnEntrar}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoCadastrar}>
                <Text style={styles.tituloBtnCadastrar}>Cadastrar</Text>
            </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

// preciso tentar usar o rem tipo fontSize: '1.5rem',
// marginBottom: '0.75rem',
// marginTop: '0.25rem',
// se nao der usando o StyleSheet ofertado pela lib do 'react-native', se nao der preciso usar o react-native-extended-stylesheet. 
//usa-se da seguinte forma: import EStyleSheet from 'react-native-extended-stylesheet';  e uso na estilizaçao o EStyleSheet da seguinte forma
//const styles = EStyleSheet.create({ aqui vai os objt de estilizção })
//retirado do site :  https://ildaneta.dev/posts/lidando-com-responsividade-em-aplica%C3%A7%C3%B5es-m%C3%B3veis-utilizando-o-rem/


const styles = StyleSheet.create({
  containerGeral: {
    flex: 1, //pega tela inteira
   backgroundColor: '#1A2426',
   justifyContent: 'center',
   alignItems: 'center',
   
  },
  input: {
    backgroundColor: 'rgba(217,217,217,0.7)', //'#D9D9D9',
    //marginBottom: 20,
    marginTop: 20,
    width: 250, 
    height: 45,
    borderRadius: 5,
    textAlign: 'center',
    fontFamily:'Roboto',
    fontSize: 22,
    fontWeight: '400',

    // top: 284,
    // left: 75,
    // Radius: 5,
    // Opacity: 70,
  },
  botaoEntrar: {
    width: 250,
    height: 45,
    backgroundColor: '#7853B5',
    borderRadius: 5,
   // textAlign: 'center',  
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloBtnEntrar:{
    fontSize: 22,
    fontWeight: '800',
    fontFamily: 'Roboto',
  },

  botaoCadastrar: {
    width: 100,
    height: 30,
    alignItems: 'flex-end',
    marginLeft: 140,
    marginTop: 60,
  },

  tituloBtnCadastrar: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: "400", //
    fontFamily: 'bold', //Roboto
  },

  image: {
    width: 350, //251
    height:  700, //652
    opacity: 0.5,
    // left: 50,
    // right: -50,
    marginTop: 500,
   position: 'absolute',
  },
  containerLogin: {
    height: 450,
    width: 320,
    borderRadius: 5,
    backgroundColor: 'rgba(142,255,159,0.5)',   //'#8EFF9F',
    //justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    //styleName: h1-regular;
    fontFamily:'Roboto', //'Cochin',
    fontSize: 37,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
  },
 
})

/*
 <SafeAreaView> para nao oculpar a area da hora 
*/