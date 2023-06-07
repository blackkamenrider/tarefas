
import { useReducer } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {initialState, reducer} from './separandoAqruivoContext'


// const initialState = {
//     cart: [],
//     products: [],
//     user: null,
//     number: 0,
// }

// function reducer(state: { number: number; }, action: { type: any; }) {

//     switch(action.type) {
//         case 'add2ToNumber':
//             return {...state, number: state.number + 2}

//         case 'retira-1-ToNmer':

//             return {...state, number: state.number - 1}

//             default: 
//                 return state
//     }
// }

// TODO ESTE codigo comentado A CIMA COLOQUEI EM UM ARQUIVO SEPARADO CAHAMDO SEPARANDO ARQUIVORedux


export const TextRedux = () => {

    const [state, exec] = useReducer(reducer, initialState);

    console.log("estado: ", state.estado );

  return (
    <SafeAreaView style={styles.containerGeral}>
        <View style={styles.containerIntern}>
            <Text style={styles.texto}>este é um titulo</Text>

            <View style={styles.containertwo}>
                <Text style={styles.textoTwo}> number: {state.number} </Text>

            <Button onPress={() => exec({type: 'mudaEstado'})} title='Acrescenta 2' color="#15841b"/>
            {/* <Button onPress={() => exec({type: 'retira-1-ToNmer'})} title='Diminui 1' color="#1aca23"/> */}

            </View>
            
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    containerGeral: {
      flex: 1, //pega tela inteira
      backgroundColor: '#5a1c72',   
      justifyContent: 'center',
      alignItems: 'center'  
    },

    containerIntern:{
        width: 350,
        height: 350,
      backgroundColor: '#a7a7a7',    
      //justifyContent: 'center',
      alignItems: 'center', 
      borderRadius: 50  
    },

    texto:{
        fontSize: 40,
        color: '#000'
    },

    textoTwo:{
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },

    containertwo:{
        width: 150,
        height: 150,
        backgroundColor: '#ffffff',    
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 30  ,
        marginTop: 80
    },

    estiloBUtton:{
        borderRadius: 50
    }
})
