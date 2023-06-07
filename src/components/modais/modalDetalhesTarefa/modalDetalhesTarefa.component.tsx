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
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { openModalDetailsTarefa } from "../../testes/redux/todosSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ModalDetalhesTarefa(props: any) {

    console.log("detalhes ", props.returnIdClicado)

    const dispatch = useDispatch();

    const byInformationStore = useSelector((state: any) => {
        return state;
    })

    function mudaEstado(){
        dispatch(openModalDetailsTarefa({}));
    }

  
  return (
    <SafeAreaView >
        
        <View style={styles.containerGeral}>
        <Image style={styles.imgTriangulo}
            source={require('../../../img/ponteiroparaLista.png')} 
            resizeMode="contain"
        /> 
            <View style={styles.containerBtnClose}>
                <TouchableOpacity style={styles.btnFechaTela} onPress={mudaEstado}>
                        <Image style={styles.imgFechaTela}
                            source={require('../../../img/x.png')} 
                            resizeMode="contain"
                        /> 
                    </TouchableOpacity>
            </View>  
                
            <View style={styles.containerTitulo}>

                <Text style={styles.tituloTarefa}> Detalhes da Tarefa  </Text>

            </View> 

            <View style={styles.containerAreaDetalhes}>
                <View style={styles.areaDetalhes}>
                    <Text> {byInformationStore.todos.listTarefas[props.returnIdClicado].detalheDaTarefa} </Text>
                </View> 
            </View>

            <View style={styles.containerAreaDetalhesDataHora}>
                <View style={styles.containerDentroAreaDetalhesDataHora}>
               
                    <View style={styles.containerdata}>
                            <Text> Data </Text>
                            <View style={styles.areaDetalheData}>
                                <Text> {byInformationStore.todos.listTarefas[props.returnIdClicado].dataTarefa} </Text>
                            </View> 
                    </View>
                        
                    <View style={styles.containerdataHora}>
                        <Text> Hora </Text>
                        <View style={styles.areaDetalheHora}>
                            <Text>{byInformationStore.todos.listTarefas[props.returnIdClicado].hora} : {byInformationStore.todos.listTarefas[props.returnIdClicado].minuto} </Text>
                        </View> 
                    </View>
                   
                </View>
            </View>
            
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    containerGeral: {
        //flex: 1, //pega tela inteira
        backgroundColor: '#9F7BDB',
        width: 300,
        height: 300,
        // marginLeft: 20,
        // marginTop: 60,
        borderRadius: 20, 
        borderTopEndRadius: 0,
        borderColor: 'rgba(31, 29, 29, 0.2)',
        borderBottomWidth: 3,
        borderRightWidth: 3,
        //elevation: 25,
        //justifyContent: 'center',
        //alignItems: 'flex-start',
    },

    triangulo:{
        width: 100,
        height: 50,
        border: 50 , //solid
        borderColor: ' #da090954',
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
    },

    containerTitulo:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
    },
    tituloTarefa:{
        color: '#000',
        fontFamily: 'roboto',
        fontWeight: '400',
        fontSize: 18,
        marginTop: 10
    },

    containerBtnClose:{
        width: '92%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: "row",
        marginLeft: 50,
        marginTop: -10,
    },
    containerInputNomeTarefa:{
        // fontFamily: "roboto",
        // fontSize: 15,
        // fontWeight: '700',
        // color: '#000',
    },

    btnFechaTela:{
        marginTop: -20,
        marginBottom: 1,
        marginLeft: 20,
       // backgroundColor: '#fff',
        // width: 150,
       
    },

    imgFechaTela:{
        // backgroundColor: '#8EFF9F',
        // borderColor: 'rgba(31, 29, 29, 1)',
        // borderBottomWidth: 20,   colocar uma borda fina escura
    //     borderRadius: 100,
        width: 40,
        height: 40,
    //     marginBottom: 10
    },

 containerAreaDetalhes:{
        width: '100%',
        alignItems: 'center',
    },

    areaDetalhes:{
        width: '80%',
        backgroundColor: '#D9D9D980',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        marginTop: 10,
        borderRadius: 10,
        borderColor: 'rgba(31, 29, 29, 0.2)',
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
    },
    areaDetalheData:{
        width: '100%',
        height: 35,
        backgroundColor: '#D9D9D980',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: -15,
        borderColor: 'rgba(31, 29, 29, 0.2)',
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
    },

areaDetalheHora:{
        width: '100%',
        height: 35,
        backgroundColor: '#D9D9D980',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(31, 29, 29, 0.2)',
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
    },

    containerdata:{
        width: '40%',
        alignItems: 'center',
    },

    containerdataHora:{
        width: '40%',
        alignItems: 'center',
    },

    
    containerAreaDetalhesDataHora:{
        width: '100%',
        height: 50,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20,
       // backgroundColor: '#000'
    },
    containerDentroAreaDetalhesDataHora:{
        width: '80%',
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    imgTriangulo:{
         position: 'absolute',
         marginTop: -35,
         marginLeft: '35%',
         //backgroundColor: '#000'
    },
})