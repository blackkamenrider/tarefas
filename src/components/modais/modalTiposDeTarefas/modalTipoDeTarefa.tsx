/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
//import { useState } from "react";

import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addItemNaListaTarefa, selectTypeTarefas } from "../../testes/redux/todosSlice";
import { useEffect, useState } from "react";

export default function ModalTipoDeTarefa(props: any) {

    // let listTipoTarefa = ['tarefas de hoje', 'tarefas vencidas', 'tarefas concluidas', 'todas tarefas'];

    let dispatch = useDispatch();

    const config = useSelector((state: any) => {
        return state;
      })

    function setaTexto (texto: string){
        dispatch(selectTypeTarefas({tipoDeTarefas: texto}));

        //props.chamaFunction();
    }


  return (
    <SafeAreaView >
        
        <View style={styles.containerGeral}>
        <Image style={styles.imgTriangulo}
            source={require('../../../img/ponteiroparaLista.png')} 
            resizeMode="contain"
        /> 
        <View style={styles.containerGeralDasOpcoes}>        

        
                <TouchableOpacity style={styles.btnOpcoes}  onPress={() => {setaTexto('Tarefas de Hoje') }} >
                <View style={styles.containerOpcoes}  >
                        <View style={styles.bolinhaEmFrenteOpcaoTarefas}/>
                        <Text style={{fontWeight: "bold", }} > Tarefas de Hoje </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnOpcoes} onPress={() => setaTexto('Tarefas Vencidas') }>
                <View style={styles.containerOpcoes}>
                        <View style={styles.bolinhaEmFrenteOpcaoTarefas}/>
                        <Text style={{fontWeight: "bold", }}> Tarefas Vencidas</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnOpcoes} onPress={() => setaTexto('Tarefas Concluidas')}>
                <View style={styles.containerOpcoes}>
                        <View style={styles.bolinhaEmFrenteOpcaoTarefas}/>
                        <Text style={{fontWeight: "bold", }}> Tarefas Concluidas </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnOpcoes} onPress={() => setaTexto('Todas as Tarefas') }>
                <View style={styles.containerOpcoes}>
                        <View style={styles.bolinhaEmFrenteOpcaoTarefas}/>
                        <Text style={{fontWeight: "bold", }}> Todas as Tarefas </Text>
                </View>
            </TouchableOpacity>

        </View>

{/* 
            <View style={styles.containerCheckBoxs}>
                <CheckBox
                disabled={false}
                value={state.todasTarefas}
                onValueChange={(value) => setState({...state, todasTarefas: value})}
                style={styles.checkbox1}
                />
                <Text> Todas Tarefas </Text>
            </View>

            <View style={styles.containerCheckBoxs}>
                <CheckBox
                disabled={false}
                value={state.tarefasDeHoje}
                onValueChange={(value) => setState({...state, tarefasDeHoje: value})}
                style={styles.checkbox1}
                />
                <Text> Tarefas de hoje </Text>
            </View>

            <View style={styles.containerCheckBoxs}>
                <CheckBox
                disabled={false}
                value={state.tarefasVencidas}
                onValueChange={(value) => setState({...state, tarefasVencidas: value})}
                style={styles.checkbox1}
                />
                <Text> Tarefas vencidas </Text>
            </View>

            <View style={styles.containerCheckBoxs}>
                <CheckBox
                disabled={false}
                value={state.tarefasConcluidas}
                onValueChange={(value) => setState({...state, tarefasConcluidas: value})}
                style={styles.checkbox1}
                />
                <Text> Tarefas concluidas </Text>
            </View>
         */}
          
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    containerGeral: {
        //flex: 1, //pega tela inteira
        backgroundColor: '#9F7BDB',
        width: 200,
        height: 250,
        marginLeft: 20,
        marginTop: 60,
        borderRadius: 20, 
        borderTopEndRadius: 20,
        borderColor: 'rgba(31, 29, 29, 0.5)',
        borderBottomWidth: 3,
        borderRightWidth: 3,
        //elevation: 25,
        //justifyContent: 'center',
        //alignItems: 'flex-start',
    },

    // triangulo:{
    //     width: 100,
    //     height: 50,
    //     border: 50 , //solid
    //     borderColor: ' #da090954',
    //     borderBottomWidth: 2,
    //     borderRightWidth: 2,
    //     borderLeftWidth: 2,
    // },

    imgTriangulo:{
        position: 'absolute',
        marginTop: -35,
        marginLeft: '70%',
        //backgroundColor: '#000'
   },
   containerOpcoes:{
    flexDirection: 'row',
    alignItems: 'center'
   },

   bolinhaEmFrenteOpcaoTarefas:{
    width: 15,
    height: 15,
    backgroundColor: '#fff',
    borderRadius: 100,
    borderColor: 'rgba(31, 29, 29, 0.5)',
    borderBottomWidth: 2,
    borderLeftWidth: 4,
   },

   containerGeralDasOpcoes:{
    marginLeft: '15%',
    marginTop: 10, 
    alignItems: 'flex-start',
    
   },

   btnOpcoes:{
    marginTop: 30,
   },
})