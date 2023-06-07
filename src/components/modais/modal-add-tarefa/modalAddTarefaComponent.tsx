/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import TextArea from "@freakycoder/react-native-text-area";
import DatePicker from 'react-native-date-picker'
import { useEffect, useReducer, useState } from "react";
import { initialState, modificaGlobalTeste, reducer } from "../../testes/context/separandoAqruivoContext";
import { addItemNaListaTarefa, openModalAddTarefa, todoAdded } from "../../testes/redux/todosSlice";
import { useDispatch, useSelector } from "react-redux";


export default function ModalAddTarefa() {

    
    // ########################## AQUI PARA BAIXO VEM O REDUX############################  
    
    


    // ########################## AQUI TERMINA O REDUX ############################  


let [listTarefas, setListTarefas] =useState([{}]) 


const [date, setDate] = useState(new Date()); //
// const [time, setTime] = useState(date.getTime);
const hora = date.getHours();
const minuto = date.getMinutes();

let [horaTarefa, setHoraTarefa] = useState(new Date);//new Date()
let horaTarefaNumber = horaTarefa.getHours();
let minutosTarefaNumber = horaTarefa.getMinutes();

 const dataFormatada = date.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
 
 const [open, setOpen] = useState(false)//abre modal data
 const [openHora, setOpenHora] = useState(false)//abre modal Hora


// const [state, dispach] = useReducer(reducer, initialState);

const configuracao = useSelector((state: any) => {
    return state;
 })

useEffect(() => {
});

const dispatch = useDispatch();

let [nameTarefa, setNameTarefa] = useState('');
let [detalheTarefa, setDetalheTarefa] = useState('');


const addItem = () => {
   
    //console.log("date ", dataTarefa)
    // console.log("data Formatada ", dataFormatada)
    // console.log("HORA E MINUTO ", hora, minuto)
    // console.log("Hota Teste: ", horateste)
    // console.log("hora Tarefa ", horaTarefa)

 dispatch(addItemNaListaTarefa(
      {
        nameTarefa: nameTarefa,
        detalheDaTarefa: detalheTarefa,
        //dataTarefa: dataFormatada,
        testeDeData: dataFormatada, 
        hora: horaTarefaNumber,
        minuto: minutosTarefaNumber,
    }
    ));
    
    dispatch(openModalAddTarefa({ })); //fecha o modal
}


    useEffect(() => {
        //console.log("date ", dataTarefa)
    },[]);
    
    

  return (
    <SafeAreaView >
        <View style={styles.containerGeral}>
    
        {/* <DatePicker  
           // onChange={() => setStartDate('10/02/2022')} 
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            // className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
           /> */}

    {/* <View>
        <DatePicker 
            date={date} 
            onDateChange={setDate} 
            androidVariant=  "nativeAndroid"
            mode="date"
        /> 
    </View>
        */}

            <View style={styles.containerBtnClose}>
                <TouchableOpacity style={styles.btnFechaTela}  onPress={() =>  dispatch(openModalAddTarefa({ }))}>
                        <Image style={styles.imgFechaTela}
                            source={require('../../../img/x.png')} 
                            resizeMode="contain"
                        /> 
                    </TouchableOpacity>
            </View>  
                
            <View style={styles.containerTitulo}>

                    <Text style={styles.tituloTarefa}> Tarefa </Text>

            </View>  
            

            <View style={styles.containerTodosInputs}>
                <View style={styles.containerInputNameTarefa}>
                    <Text>Nome da tarefa</Text>
                     <TextInput
                        style={styles.input}
                        onChangeText={setNameTarefa}
                        value={nameTarefa}
                        placeholder="Qual o nome da sua Tarefa ?"
                        keyboardType="default"
                      />
                </View>

                <View style={styles.containerInputDataTarefa}>
                    <Text>Data</Text>
                    {/* <Button title="Open Modal data" onPress={() => setOpen(true)} />  */}
                    <TouchableOpacity onPress={() => setOpen(true)} > 
                        <View style={styles.ondeFicaAData}>
                            <View  style={styles.containerImgCalender}>

                                <Text style={styles.textCalendar} >{dataFormatada}</Text>

                                <Image style={styles.imgCalendar}
                                    source={require('../../../img/Calendar13.png')} 
                                    resizeMode="contain"
                                /> 
                            </View>
                            
                        </View>

                        <DatePicker
                            modal
                            open={open}
                            date={date}
                            mode="date" //"datetime" "date" "time" countdown
                           // locale='en' // recebe um id da localização 
                           textColor="#9F7BDB"
                           theme="dark" //"light", "dark", "auto". O padrão é "auto"
                           confirmText='Confirmar'
                           cancelText='Cancelar'
                           title='Escolha a data do compromisso' 
                            androidVariant="iosClone"//,"nativeAndroid"
                            fadeToColor="rgba(0,0,0,0.5)"
                            onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                            // setDataTarefa(date)
                            }}
                            style={styles.datePickerestilo}
                             onCancel={() => {
                             setOpen(false)
                             }}
                        /> 
                       
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.containerInputHoraTarefa}>
                    <Text>Hora</Text>
     
                    <TouchableOpacity onPress={() =>  setOpenHora(true)} > 
                        <View style={styles.ondeFicaAHora}>
                            <View  style={styles.containerImgtime}>

                                <Text style={styles.textTime} >{horaTarefaNumber} : {minutosTarefaNumber}</Text>

                                <Image style={styles.imgTime}
                                    source={require('../../../img/clock.png')} 
                                    resizeMode="contain"
                                /> 
                            </View>
                            
                        </View>

                        <DatePicker
                            modal
                            open={openHora}
                            date={horaTarefa}
                            mode="time" //"date" "datetime"
                           //locale='en'
                        //    is24hourSource="locale"
                            textColor="#9F7BDB"
                            theme="dark" //"light", "dark", "auto". O padrão é "auto"
                            confirmText='Confirmar'
                            cancelText='Cancelar'
                            title='Escolha a hora do compromisso' 
                            androidVariant="iosClone"//,"nativeAndroid"
                            fadeToColor="rgba(0,0,0,0.5)"
                            onConfirm={(horaTarefa) => {
                                setOpenHora(false)
                            // setDate(date)
                                setHoraTarefa(horaTarefa)
                            }}
                            style={styles.datePickerestilo}
                            onCancel={() => {
                                setOpenHora(false)
                            }}
                        /> 
                       
                    </TouchableOpacity>
                    
                </View>
                
                <View style={styles.containerInputDetalhesTarefa}>
                    <Text>Detalhes da Tarefa</Text>
                      <TextArea
                        style={styles.inputArea}
                        maxCharLimit={2}
                        placeholderTextColor="black"
                        exceedCharCountColor="#990606"
                        placeholder={"Coloque aqui os detalhes de sua tarefa..."}
                        onChangeText={setDetalheTarefa}
                        />
                </View>
    
            </View>

            <View style={styles.containerBtnAdd}>
                <TouchableOpacity style={styles.btnAdd} onPress={() =>  addItem()}>
                    <Image style={styles.imgAdd}
                        source={require('../../../img/add.png')} 
                        resizeMode="contain"
                    /> 
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    containerGeral: {
        //flex: 1, //pega tela inteira
        backgroundColor: '#9F7BDB',
        width: 300, // estava no 300
        height: 500,
        marginLeft: 20,
        marginTop: 60,
        borderRadius: 10, 
        borderTopEndRadius: 0,
        borderColor: 'rgba(31, 29, 29, 0.2)',
        borderBottomWidth: 2,
        borderRightWidth: 2,
        //elevation: 25,
        //justifyContent: 'center',
        //alignItems: 'flex-start',
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

    containerTodosInputs:{
        //justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '80%',
        marginLeft: '5%',
    },
    input:{
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderRadius: 7,
        width: '100%',
    },
    inputArea:{
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderRadius: 7,
        width: '100%',
        height: 150,
    },

    containerInputNameTarefa:{
        marginTop: 20,
        width: '100%',
        height: 35,
    },

    conatinerDatePicker:{
        width: 300,
        backgroundColor: '#000'
    },

    datePickerestilo:{
       
    },

    ondeFicaAData:{
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderRadius: 7,
        width: '70%',
        height: 30,
    },

    ondeFicaAHora:{
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderRadius: 7,
        width: '70%',
        height: 30,

    },

    containerImgCalender:{
        flexDirection: "row",   
    },

    containerImgtime:{
        flexDirection: "row",   
    },


    imgCalendar:{
        width: 25,
        height: 25,
        marginLeft: 5,
        marginEnd: -30
    },

    imgTime:{
        width: 25,
        height: 25,
        marginLeft: 5,
        marginEnd: -30
    },
    
    textCalendar:{
        paddingTop: 2,
        paddingEnd: 5,
    },

    textTime:{
        paddingTop: 2,
        paddingEnd: 5,
    },

    containerInputHoraTarefa:{
        marginTop: 30,
        width: '33%',
        height: 35,
    },

    containerInputDataTarefa:{
        marginTop: 30,
        width: '50%',
        height: 35,

    },

    containerInputDetalhesTarefa:{
        marginTop: 35,
        width: '100%',
        height: 150,
    },

    containerBtnAdd:{
        width: '100%',
        alignItems: 'center',
       // backgroundColor: '#02020253',
        marginTop: 60,
    },
    btnAdd:{
        width: 70,
        height: 70,
        //backgroundColor: '#fff',
    },

    imgAdd:{
        width: 60,
        height: 60,
    },
})