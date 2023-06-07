/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { useState } from "react";
import { Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ModalDetalhesTarefa from "../modais/modalDetalhesTarefa/modalDetalhesTarefa.component";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemInListTask, openModalDetailsTarefa } from "../testes/redux/todosSlice";



export default function Tarefas(props: any ) {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [name, setName] = useState('');
    const dispatch = useDispatch();

    const byInformationStore = useSelector((state: any) => {
        return state;
    })

        function mudaEstado(){
            props.idItem();
            dispatch(openModalDetailsTarefa({}));
        }
//styles.containerGeral #b3b2b2 #07fd07
  return (
    <SafeAreaView >
        <View style={{ 
                width: 297,
                height: 111,
                // left: 62,
                // top: 300,
                borderRadius: 5, 
                backgroundColor: props.backgroundColor,
                borderColor: 'rgba(31, 29, 29, 0.2)',
                borderBottomWidth: 2,
                borderRightWidth: 2,
                elevation: 20,
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}>
            <View style={styles.containerNomeTrefaBtnDetales}>
                <View style={styles.containerNomeTarefa}>
                    <Text style={styles.tituloDaTarefa}> {props.nome} </Text>
                </View>

                <TouchableOpacity style={styles.btnDetalhes}  onPress={mudaEstado}>
                    <Text style={styles.tituloBtnDetalhes}>Detalhes da Tarefa</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerEditarDeleteCheck}>

                <TouchableOpacity onPress={props.concludedTask}>
                     <Image style={styles.imageCheck}
                    source={require('../../img/check.png')} 
                    resizeMode="contain"
                /> 
                </TouchableOpacity>
               

                <TouchableOpacity onPress={props.updateItemList}>
                     <Image style={styles.imageEditar}
                        source={require('../../img/editar.png')} 
                        resizeMode="contain"
                    /> 
                </TouchableOpacity>
                   
                    
    
                <TouchableOpacity  onPress={props.deleteItemList}>
                    <Image style={styles.imageDelete}
                        source={require('../../img/delete.png')} 
                        resizeMode="contain"
                    /> 
                </TouchableOpacity>
                    
            </View>

            <Modal 
                animationType="slide"
                transparent={true}
                visible={byInformationStore.todos.modaDetalhesTarefa}
            >
                <View style={styles.modalDetalhes}>
                    <ModalDetalhesTarefa  returnIdClicado={props.returnIdClicado}/>
                </View>
            </Modal>

            {/* <View style={styles.containerCadastro}>
                
                <TouchableOpacity style={styles.botaoCadastrar}>
                <Text style={styles.tituloBtnCadastrar}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoLogin}>
                    <Text style={styles.tituloBtnLogin}>Login</Text>
                </TouchableOpacity>

            </View>  */}
        </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    containerGeral: {
     // flex: 1, //pega tela inteira
        width: 297,
        height: 111,
        // left: 62,
        // top: 300,
        borderRadius: 5, 
        backgroundColor: '#b3b2b2',
        borderColor: 'rgba(31, 29, 29, 0.2)',
        borderBottomWidth: 2,
        borderRightWidth: 2,
        elevation: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    containerNomeTarefa:{
        width: 250,
        height: 40,
        backgroundColor: '#fff',
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tituloDaTarefa:{
        fontFamily: "roboto",
        fontSize: 15,
        fontWeight: '700',
        color: '#000'
    },

    btnDetalhes:{
       // backgroundColor: '#fff',
        width: 150,
        marginTop: 25,
        marginBottom: 1,
        marginLeft: 20,
    },

    tituloBtnDetalhes:{
        //styleName: Small-regular;
        color: '#5B3699',
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: 'left',

    },

    containerEditarDeleteCheck:{
        flexDirection: 'column',
        marginStart:' 90%',
        marginBottom: 105,
        position: 'absolute'
    },

    imageCheck:{
        backgroundColor: '#8EFF9F',
        // borderColor: 'rgba(31, 29, 29, 1)',
        // borderBottomWidth: 20,   colocar uma borda fina escura
        borderRadius: 100,
        width: 40,
        height: 40,
        marginBottom: 10
    },

    imageEditar:{
        backgroundColor: '#CFCAD1',
        borderRadius: 100,
        width: 30,
        height: 30,
        margin: 5,
    },

    imageDelete:{
        backgroundColor: '#FF4848',
        borderRadius: 100,
        width: 30,
        height: 30,
        marginTop: 10,
        marginLeft: 5
    },

    modalDetalhes:{
        // backgroundColor: '#695b5b',
        marginTop: 350,
        alignItems: "center"
    },
    
    containerNomeTrefaBtnDetales:{
        //backgroundColor: '#000',
        position: 'absolute'
    }
})