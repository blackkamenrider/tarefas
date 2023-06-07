/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */


/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { FlatList, Image, ImageBackground, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ModalAddTarefa from '../modais/modal-add-tarefa/modalAddTarefaComponent';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { addItemNaListaTarefa, concludedTask, deleteItemInListConcluded, deleteItemInListTask, openModalAddTarefa, openModalTipoDeTarefa, selectTypeTarefas, updateItemInListTask } from '../testes/redux/todosSlice';
import Tarefas from '../tarefas/tarefasComponent';
import ModalTipoDeTarefa from '../modais/modalTiposDeTarefas/modalTipoDeTarefa';
import timerId from '../../componenteFuncional/despertadorComponent';
import BackgroundTimer from 'react-native-background-timer';
// import { initialState, reducer } from '../testes/context/separandoAqruivoContext';

  //################################  INICIA REDUX  ##################### 
  
  //   const dispatch = useDispatch();
  
  //   useEffect(() => {
    //     dispatch(abreModalAddNaList({
      //         conteudo: abreModal,
//     }));
// });

//   const configuracao = useSelector((state: any) => {
//     return state.abreFechaModal;
//   })

//     let desconstrucao = {...configuracao};
//     desconstrucao.conteudo = false;
//     dispatch(abreModalAddNaList(desconstrucao));


//################################  TERMINO REDUX  ##################### 

enum typeTheList {
  LIST_OVERDUE   = 'Tarefas Vencidas',
  LIST_CONCLUDED = 'Tarefas Concluidas',
  LIST_TAREFAS   = 'Todas as Tarefas',
  LIST_TODAY     = 'Tarefas de Hoje'
}

export default function TelaInicial() {

  let [idSelect, setIdSelect] = useState('');
  let [listToday , setlistToday ] = useState(false);
  let [listOverdue, setListOverdue] = useState(false);
  let [listConcluded, setListConcluded] = useState(false);
  let [listAll, setListAll] = useState(false);

  
  
  const configuracao = useSelector((state: any) => {
    return state;
  })
  
 
  
  
  const [listEmpty, setListEmpty] = useState(true);
  
  useEffect( () => {
    // configuracao.todo.tipoDeTarefas === typeTheList.LIST_TAREFAS

    console.log(" timerId :", timerId )

    BackgroundTimer.start(timerId);

    let teste2 =  configuracao.todos.tipoDeTarefas;

    if( configuracao.todos.tipoDeTarefas === typeTheList.LIST_TAREFAS  ){
      setListAll(true);
      console.log(" dentro if todas tarefas: ", listAll)

    }else setListAll(false);

    if( configuracao.todos.tipoDeTarefas === typeTheList.LIST_CONCLUDED ){
      setListConcluded(true);
      console.log(" dentro if tarefas concluidas: ", listConcluded)

    }else setListConcluded(false);

    if( configuracao.todos.tipoDeTarefas === typeTheList.LIST_OVERDUE){
      setListOverdue(true);
      console.log(" dentro if todas atrasada: ", listOverdue)

    }else setListOverdue(false);

    if( configuracao.todos.tipoDeTarefas === typeTheList.LIST_TODAY ){
      setlistToday(true);
      console.log(" dentro if lista todos os dias: ", listToday)

    }else setlistToday(false);

    // console.log(" fora Do IF  : ", listAll, listConcluded, listOverdue, listToday)
    // console.log(" data vindo da store : ", configuracao.todos.listTarefas[9].testeDeData)
    // console.log(" data vindo da store : ", configuracao.todos.listTarefas[10].hora, configuracao.todos.listTarefas[10].minuto)

    // console.log("Name vindo da store : ", configuracao.todos.listTarefas[8].nameTarefa)


    if(configuracao.todos.listTarefas.length != 1){
      setListEmpty(false);
    }else{
      setListEmpty(true);
    }

  },[configuracao.todos.tipoDeTarefas, configuracao.todos.listTarefas, configuracao.todos.listTarefasConcluidas, configuracao.todos.listaTarefasVencidas, configuracao.todos.listTarefasDeHoje])

  const dispatch = useDispatch();

  function addItemListTarefa(){
    dispatch(addItemNaListaTarefa(
      {
        nameTarefa: "tentativa",
        detalheDaTarefa: "nada mais",
      }
    ));
  }

  let [teste, setTeste] = useState(false);

  useEffect(() => {
    // console.log("dentro useEffect(%${teste})")
  },[teste]);
  
  // console.log("TESTE ",configuracao.todos.tipoDeTarefas)
  
  function fTypeTheList(){
    dispatch(openModalAddTarefa({}));
    setTeste( teste === false ? true : false );
    console.log(teste)
  }

  function openModal(){
      dispatch(openModalAddTarefa({}));
  }

  
  function openModalTipoDeTarefas() {
    dispatch(openModalTipoDeTarefa({}));
  }


  function fDeleteItemList(itemClicado: any){
    let positionItem = configuracao.todos.listTarefas.findIndex((item: any) => item.id === itemClicado.id)

    dispatch( deleteItemInListTask({id: positionItem}))
  }

  function fDeleteItemListConcluded(itemClicado: any){
    let positionItem = configuracao.todos.listTarefasConcluidas.findIndex((item: any) => item.id === itemClicado.id)

    dispatch( deleteItemInListConcluded({id: positionItem}))
  }

  function fUpdateItemList(itemClicado: any){
    let positionItem = configuracao.todos.listTarefas.findIndex((item: any) => item.id === itemClicado.id)
        dispatch( updateItemInListTask({id: positionItem, nameTarefa: 'novo nome', detalheDaTarefa: 'Aqui virá insformação de um modal de edição'}))
        console.log("PosiçãoId ", positionItem)  
  }

  function fConcludedTask(itemClicado: any){
    // Esta função é acionada quando pressiona o botão de concluido, pega a tarefa concluida e passa para a lista de concluidos
    let positionItem = configuracao.todos.listTarefas.findIndex((item: any) => item.id === itemClicado.id)
    dispatch(concludedTask({id: positionItem}))
  }
  
 function openModalDetais(itemClicado: any){
  setIdSelect(itemClicado.id); 

  }

  if (listEmpty){
    return (
      <SafeAreaView style={styles.containerGeral}>
          <ImageBackground blurRadius={12} source={require('../../img/background.png')} resizeMode="contain"  style={styles.imageBackground} />

          <View style={styles.cabecalho}>
              <Image
                style={styles.imagePerfil}
                source={require('../../img/hosias.jpeg')} 
                resizeMode="contain"
                /> 

              <Text style={styles.textWelcome}> Ben vindo Hosias  </Text>
            </View> 
              
              <View style={styles.containerAreaCentral}>

                <Text style={ styles.subTitulo}> Adicionar uma tarefa na lista </Text>

                <TouchableOpacity style={styles.btnEstilizado} onPress={openModal} >
                  <Image
                    style={styles.imageAdd}
                    source={require('../../img/add.png')} 
                    resizeMode="contain"
                  /> 
                </TouchableOpacity>

                  <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={configuracao.todos.estado}
                    //  onRequestClose={() => {
                    //    Alert.alert('Modal has been closed.');
                    //    open();
                    //  }}
                    >
                    <View style={ styles.containerModalListSemTarefa }>
                      <ModalAddTarefa/>
                    </View>
                      {/* <Pressable 
                        style={[]}
                        onPress={() => open()
                        }
                        >
                        <Text >Fecha modal </Text>
                      </Pressable>   */}
                </Modal>


              </View>
              
              
              <View style={styles.footer}>

                <Image
                  style={styles.imagesFooter}
                  source={require('../../img/home.png')} 
                  resizeMode="contain"
                  /> 

                <Image
                  style={styles.imagesFooter}
                  source={require('../../img/compartilhar.png')} 
                  resizeMode="contain"
                  /> 

                <Image
                  style={styles.imagesFooter}
                  source={require('../../img/usuario.png')} 
                  resizeMode="contain"
                  /> 

              </View> 

        
      </SafeAreaView> 
    );
  }else{

    return (
      <SafeAreaView style={styles.containerGeralComTarefas}>
          <ImageBackground blurRadius={12} source={require('../../img/background.png')} resizeMode="contain"  style={styles.imageBackgroundComTarefas} />

          <View style={styles.cabecalhoComTarefas}>

              <Image
                style={styles.imagePerfilComTarefas}
                source={require('../../img/hosias.jpeg')} 
                resizeMode="contain"
                /> 

              <Text style={styles.textWelcomeComTarefas}> Ben vindo Hosias </Text>
          </View> 
              
              <View style={styles.containerAreaCentralComTarefas}>

                <View style={styles.containerAddTarefaNaLista}>
                  <Text style={ styles.subTitulo}>Adicionar uma tarefa na lista {configuracao.todos.tipoDeTarefas}</Text>

                  <TouchableOpacity style={styles.btnEstilizadoComTarefas} onPress={openModal} >
                    <Image
                      style={styles.imageAddComTarefas}
                      source={require('../../img/add.png')} 
                      resizeMode="contain"
                    /> 
                  </TouchableOpacity>

                    <Modal 
                      animationType="slide"
                      transparent={true}
                      visible={configuracao.todos.estado}
                      >

                      <View style={ styles.containerModalComTarefas }>
                        <ModalAddTarefa/>
                      </View>

                    </Modal>

                </View>

                <View style={styles.linhaHorizontar}/>

                <View style={styles.containerTarefasHojeVencidas}>
                      
                  <Text style={styles.textoTarefasConcluidasVencidas}> {configuracao.todos.tipoDeTarefas} </Text>  

                  <TouchableOpacity style={{}} onPress={openModalTipoDeTarefas}>
                    <Image
                      style={styles.imageSetaTarefasHojeVencidas}
                      source={require('../../img/seta.png')} 
                      resizeMode="contain"
                    /> 
                  </TouchableOpacity>

                  <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={configuracao.todos.modalTipoTarefa}
                    >
                    <View style={ styles.containerModalListComTarefa }>
                      <ModalTipoDeTarefa chamaFunction={ () => fTypeTheList()}/>
                    </View>
                  </Modal>
                </View>

                {/* {teste && 

                <Text> Deu certo </Text>
                
                }  */}

                {/* {teste && <Text> Deu certo </Text>}  */}

                  
                {/* <View>
                    <FlatList
                      data={configuracao.todos.listTarefas}
                      renderItem={({item: any}) => <Tarefas nome= {item.nameTarefa}/> />}
                      keyExtractor={item => item.id}
                    />
                  </View> */}

                



                <View style={styles.containerAreaRenderComponentTarefas}>
                  { listAll &&
                    <FlatList
                      data={configuracao.todos.listTarefas}
                      // extraData={configuracao.todos.listTarefas.id} 
                      keyExtractor={(item) => String(item.id)} //
                      style={styles.flatList}
                      renderItem={({item}) => 
                        <Text style={styles.containerInternoRender}> 
                          {item.nameTarefa && 
                            <Tarefas nome= {item.nameTarefa} 
                              deleteItemList = { () => fDeleteItemList(item)} 
                              updateItemList = {() => fUpdateItemList(item)}
                              concludedTask = {() => fConcludedTask(item)}
                              idItem = { () => openModalDetais(item)} 
                              returnIdClicado={idSelect}
                            />
                          } 
                        </Text>  }
                        
                    />
                    
                  }

                  { listToday &&
                    <FlatList
                      data={configuracao.todos.listTarefas}
                      // extraData={configuracao.todos.listTarefas.id} 
                      keyExtractor={(item) => String(item.id)} //
                      style={styles.flatList}
                      renderItem={({item}) => 
                        <Text style={styles.containerInternoRender}> 
                          {item.nameTarefa && 
                            <Tarefas nome= {item.nameTarefa} backgroundColor= {'#b3b2b2'}
                              deleteItemList = { () => fDeleteItemList(item)} 
                              updateItemList = {() => fUpdateItemList(item)}
                              concludedTask = {() => fConcludedTask(item)}
                              idItem = { () => openModalDetais(item)} 
                              returnIdClicado={idSelect}
                            />
                          } 
                        </Text>  }
                        
                    />
                    
                  }

                  { listOverdue &&
                    <FlatList
                      data={configuracao.todos.listTarefas}
                      // extraData={configuracao.todos.listTarefas.id} 
                      keyExtractor={(item) => String(item.id)} //
                      style={styles.flatList}
                      renderItem={({item}) => 
                        <Text style={styles.containerInternoRender}> 
                          {item.nameTarefa && 
                            <Tarefas nome= {item.nameTarefa} backgroundColor= {'#FF4848'}
                              deleteItemList = { () => fDeleteItemList(item)} 
                              updateItemList = {() => fUpdateItemList(item)}
                              concludedTask = {() => fConcludedTask(item)}
                              idItem = { () => openModalDetais(item)} 
                              returnIdClicado={idSelect}
                            />
                          } 
                        </Text>  }
                        
                    />
                    
                  }

                  { listConcluded &&
                    <FlatList
                      data={configuracao.todos.listTarefasConcluidas}
                      // extraData={configuracao.todos.listTarefas.id} 
                      keyExtractor={(item) => String(item.id)} //
                      style={styles.flatList}
                      renderItem={({item}) => 
                        <Text style={styles.containerInternoRender}> 
                          {item.nameTarefa && 
                            <Tarefas nome= {item.nameTarefa} backgroundColor= {'#8EFF9F'}
                              deleteItemList = { () => fDeleteItemListConcluded(item)} 
                              //updateItemList = {() => fUpdateItemList(item)}
                              //concludedTask = {() => fConcludedTask(item)}
                              idItem = { () => openModalDetais(item)} 
                              returnIdClicado={idSelect}
                            />
                          } 
                        </Text>  }
                        
                    />
                    
                  }

                  

                  {/* { configuracao.todos.listTarefas.map( (nada: any) => <Text> {nada.nameTarefa && <Tarefas nome= {nada.nameTarefa}/>} </Text>  )} */}

                  {/* key = { nada.toString() }  */}

                  {/* <Tarefas nome= {configuracao.todos.listTarefas[0].nameTarefa} /> */}

                </View>
                 
              </View>
              
              
              <View style={styles.footerComTarefas}>

                <Image
                  style={styles.imagesFooterComTarefas}
                  source={require('../../img/home.png')} 
                  resizeMode="contain"
                  /> 

                <Image
                  style={styles.imagesFooterComTarefas}
                  source={require('../../img/compartilhar.png')} 
                  resizeMode="contain"
                  /> 

                <Image
                  style={styles.imagesFooterComTarefas}
                  source={require('../../img/usuario.png')} 
                  resizeMode="contain"
                  /> 

              </View> 

        
      </SafeAreaView> 
    );
  }
 
 
}

const styles = StyleSheet.create({
    containerGeral: {
      flex: 1, //pega tela inteira
      backgroundColor: '#CFCAD1',     
    },

    containerGeralComTarefas: {
      flex: 1, //pega tela inteira
      backgroundColor: '#CFCAD1',     
    },

    cabecalho:{
      backgroundColor: '#388F48',
      width: '100%', //251
      height: 80, //652
      //borderRadius: 100,
      opacity: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'

    },

    cabecalhoComTarefas:{
      backgroundColor: '#388F48',
      width: '100%', //251
      height: 80, //652
      //borderRadius: 100,
      opacity: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'

    },

    imagePerfil: {
      backgroundColor: '#D9D9D9',
      width: 80, //251
      height: 80, //652
      borderRadius: 100,
      left: 5,
      opacity: 1,
    },

    imagePerfilComTarefas: {
      backgroundColor: '#D9D9D9',
      width: 80, //251
      height: 80, //652
      borderRadius: 100,
      left: 5,
      opacity: 1,
    },

    textWelcome:{
      marginEnd: 150,
      color: '#fff',
      fontSize: 20
    },

    textWelcomeComTarefas:{
      marginEnd: 150,
      color: '#fff',
      fontSize: 20
    },

    imageBackground: {
        width: 260, //251
        height:  680, //652
        opacity: 0.2,
         left: 70,
        // right: -50,
        //marginTop: -270,
       position: 'absolute',
      },

      imageBackgroundComTarefas: {
        width: 260, //251
        height:  680, //652
        opacity: 0.2,
         left: 70,
        // right: -50,
        //marginTop: -270,
       position: 'absolute',
      },

      containerAreaCentral:{
        //marginTop: 200,
        //backgroundColor: '#f6f',
        height: '82%',  //preciso consertar essa linha para ser responsivo
        justifyContent: 'center',
        alignItems: 'center'
      },

      containerAreaCentralComTarefas:{
        //marginTop: 200,
        //backgroundColor: '#f6f',
        height: '82%',  //preciso consertar essa linha para ser responsivo
        justifyContent: 'flex-start',
        alignItems: 'center'
      },

      containerAddTarefaNaLista:{
        // alignSelf: 'flex-start',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20
      },

      btnEstilizado:{//main
        backgroundColor: '#9F7BDB',
        width: 130,
        height: 40,
        marginTop: 10,
        borderRadius: 40,
        borderEndWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        //borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
      },

      btnEstilizadoComTarefas:{//main
        backgroundColor: '#9F7BDB',
        width: 130,
        height: 40,
        marginTop: 10,
        borderRadius: 40,
        borderEndWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        //borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
      },

      imageAdd:{
        width: 60,
      },

      imageAddComTarefas:{
        width: 60,
      },

      linhaHorizontar:{
        backgroundColor: "#ffffff80",
        width: '85%',
        height: 1,
        top: 10,
      },

      containerTarefasHojeVencidas:{
        backgroundColor: '#E6E6E6',
        width: 176,
        height: 33,
        borderRadius: 5,
        top: 25,
        justifyContent: 'center',
      },
 
      textoTarefasConcluidasVencidas:{
        // backgroundColor: '#8a8383',
        width: '80%',
        top: 10,
        left: 10,
        color: '#000',
        fontWeight: 'bold'
      },

      imageSetaTarefasHojeVencidas:{
        width: '20%',
        height: 25,

        alignSelf: 'flex-end',
        transform: [{rotate: '90deg'}],
        // backgroundColor: '#805c5c',
        top: -10
      },

     

      containerAreaRenderComponentTarefas:{
        alignSelf: 'center', //aqui redei o flatList para o end fim e assim posicionei o compoent tarefas no centro
        top: 40,
        marginBottom: 20,
      },

      flatList:{
        width: 450,
        marginBottom: 150,
        //  backgroundColor:'#000000'
      },

      containerInternoRender:{
        marginBottom: 25,
        alignSelf: 'center'
      },

      subTitulo:{
        color: '#000',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 15,
        fontWeight: '400',
      },

      subTituloComTarefas:{
        color: '#000',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 15,
        fontWeight: '400',
      },

      footer:{
        backgroundColor: '#388F48',
        width: '100%', //251
        height: 50, //652
       // borderRadius: 5,
        opacity: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },

      footerComTarefas:{
        backgroundColor: '#388F48',
        width: '100%', //251
        height: 50, //652
       // borderRadius: 5,
        opacity: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },

      imagesFooter:{
        // backgroundColor: '#D9D9D9',
        width: 40, //251
        height: 40, //652
        borderRadius: 100,
        left: 5,
        marginEnd: 5,
        opacity: 1,
      },

      imagesFooterComTarefas:{
        // backgroundColor: '#D9D9D9',
        width: 40, //251
        height: 40, //652
        borderRadius: 100,
        left: 5,
        marginEnd: 5,
        opacity: 1,
      },

      containerModalListComTarefa:{
        justifyContent: 'center',
        alignItems: 'center',
         backgroundColor:"#8a787870",
        top: 200,
      },

      containerModalListSemTarefa:{
        justifyContent: 'center',
        alignItems: 'center',
        //  backgroundColor:"#8a787870",
        top: 15,
      },

      containerModalComTarefas:{
        justifyContent: 'center',
        alignItems: 'center',
      },
})
