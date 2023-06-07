import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: 
    {
        id: 1,
        text:'',
        completed: true,
        estado: false,
        modalTipoTarefa: false,
        modaDetalhesTarefa: false,
        tipoDeTarefas: 'Todas as Tarefas',

        listTarefas: [{
          id: '',
          nameTarefa: '',
          // dataTarefa: Date,
          dataTarefa: '',
         // hora: Date,
         hora: 0,
         minuto: 0,
          detalheDaTarefa: ''
        }],

        listTarefasConcluidas: [{
          id: '',
          nameTarefa: '',
          detalheDaTarefa: ''
        }],

        listaTarefasVencidas: [{}],
        listTarefasDeHoje: [{}]
    },

  reducers: {
    todoAdded(state, action) {
    //   state.push({
    //     id: action.payload.id,
    //     text: action.payload.text,
    //     completed: false
    //   })
        // atualizaNumero: (state, mensagem) => { // so pra atualizar para buscar olhar arquivo numeral-editor.component
           
        //     (state as any).conteudo = mensagem.payload.conteudo;
            
        // },

        (state as any).text = 'deu certo'

    },

    openModalAddTarefa(state, action) {
      state.estado = state.estado == true ? false : true;
      //  state.estado = true;
    },

    openModalTipoDeTarefa(state, action) {
      state.modalTipoTarefa = state.modalTipoTarefa == true ? false : true;
      //  state.estado = true;
    },

    selectTypeTarefas(state, action) {
      state.tipoDeTarefas = action.payload.tipoDeTarefas;
      state.modalTipoTarefa = state.modalTipoTarefa == true ? false : true;
      console.log("##############################################################################################")
      console.log("dentro Slice ", state.tipoDeTarefas)
    },

    openModalDetailsTarefa(state, action) {
      state.modaDetalhesTarefa = state.modaDetalhesTarefa == true ? false : true;
    },

    addItemNaListaTarefa(state, action) {
        state.listTarefas.push({
          //id: state.id++,
          id: '' + (state.id++),
          nameTarefa: action.payload.nameTarefa,
          //dataTarefa: action.payload.date,
         // hora: action.payload.time,

          dataTarefa: action.payload.testeDeData,
          hora: action.payload.hora,
          minuto: action.payload.minuto,

          detalheDaTarefa: action.payload.detalheDaTarefa
      })

    },

    concludedTask(state, action){
      let taskConcluded = state.listTarefas.splice(action.payload.id, 1);
      state.listTarefasConcluidas.push(taskConcluded[0]);
    },

    deleteItemInListTask(state, action) {
      state.listTarefas.splice(action.payload.id, 1);
    },

    deleteItemInListConcluded(state, action) {
      state.listTarefasConcluidas.splice(action.payload.id, 1);
    },

    updateItemInListTask(state,  action){
    // let positionItem = state.listTarefas.findIndex((item: any) => item.id === itemClicado.id)
      let objtSeraEditado = state.listTarefas[action.payload.id];
      let objtEditado = { ...objtSeraEditado, nameTarefa: action.payload.nameTarefa, detalheDaTarefa: action.payload.detalheDaTarefa }
      state.listTarefas.splice(action.payload.id, 1, objtEditado); 
      // dataTarefa: Date,
      // hora: Date,
    },

    // todoToggled(state, action) {
    //   //const todo = state.find(todo => todo.id === action.payload)  Só funciona quando se coloca o initial state como uma lista [{}]
    //  // todo.completed = !todo.completed
    // }
  }
})

export const { todoAdded, openModalAddTarefa, openModalTipoDeTarefa, selectTypeTarefas, addItemNaListaTarefa, openModalDetailsTarefa, deleteItemInListTask, deleteItemInListConcluded, updateItemInListTask, concludedTask } = todosSlice.actions
export default todosSlice.reducer


// obs: deu certo graças a Deus 
