import BackgroundTimer from 'react-native-background-timer';

// Defina o horário de despertar
const targetDate = new Date('2023-06-07T17:52:00').getTime();

// Calcule o tempo restante em milissegundos
const remainingTime = targetDate - Date.now();

// Agende a execução do som após o tempo restante
const timerId = BackgroundTimer.setTimeout(() => {
  // Reproduza o som de despertar
//   playAlarmSound(); precisa ser implementada
    console.log("PESPERTOU")
    console.log("targetDate ", targetDate)
    console.log("remainingTime ", remainingTime)
    console.log("timerId ", timerId)


}, remainingTime);

export default timerId;
