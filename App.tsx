/* eslint-disable semi */
/* eslint-disable prettier/prettier */

/* eslint-disable keyword-spacing */


/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import {Text, StyleSheet, SafeAreaView, View} from 'react-native';
import { useState } from 'react';
import TelaInicial from './src/components/telaInicial/telaInicialComponent';

import DataContext, {initialState} from './src/components/testes/context/separandoAqruivoContext'

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import  store  from './src/components/testes/redux/store';

export default function App() {



  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState(null);

  if (!user){
    // return  <Login /> <Cadastro />  <Tarefas/> <ModalAddTarefa/> <ModalDetalhesTarefa/> <ModalTipoDeTarefa/>  <TextRedux/>
    return(

      <View style={ styles.containerTarefas }>

             <Provider store={store} >  
                <TelaInicial/>
             </Provider> 
            

          {/* <Provider store={reducer}> </Provider> */}

      </View>
    );
    
  }
  
//Se nao tiver usuário caia aqui em baixo
  return (
    <SafeAreaView style={styles.container}>
      <Text>App Tarefas</Text> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 150,
    backgroundColor: '#f1c',
  },
  containerTarefas:{
    backgroundColor: '#CFCAD1',
    flex: 1,

  }
});