/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Text, StyleSheet, SafeAreaView, View, TextInput, TouchableOpacity} from 'react-native';
//import imgBack from '../../img/background.png';
import { ImageBackground } from 'react-native';

export default function Cadastro() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.containerGeral}>
        <ImageBackground blurRadius={12} source={require('../../img/background.png')} resizeMode="cover" style={styles.image} />


        <View style={styles.containerCadastro}>
            <Text style={styles.titulo}>Cadastro</Text>
            
            <TextInput
                placeholder="Nome"
                style={styles.input}
                value={name}
                onChangeText={ (text) => setName(text) }
            />

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

            <TouchableOpacity style={styles.botaoCadastrar}>
               <Text style={styles.tituloBtnCadastrar}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoLogin}>
                <Text style={styles.tituloBtnLogin}>Login</Text>
            </TouchableOpacity>

        </View>
    </SafeAreaView>
  );
}

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
  botaoCadastrar: {
    width: 250,
    height: 45,
    backgroundColor: '#7853B5',
    borderRadius: 5,
   // textAlign: 'center',  
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloBtnCadastrar:{
    fontSize: 22,
    fontWeight: '800',
    fontFamily: 'Roboto',
  },

  botaoLogin: {
    width: 100,
    height: 30,
    alignItems: 'flex-end',
    marginLeft: 140,
    marginTop: 60,
  },

  tituloBtnLogin: {
    fontSize: 20,
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
  containerCadastro: {
    width: 320,
    height: 500,
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