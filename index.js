// Importamos la librería chalk
import chalk from 'chalk';

// Mensajes iniciales
console.log(chalk.blue('👋 ¡Bienvenido a la Terminal Parlante!'));
console.info(chalk.green('ℹ️ Esta terminal está viva... y tiene estilo.'));
console.warn(chalk.yellow('⚠️ Atención: Esto puede ponerse colorido.'));
console.error(chalk.red('❌ Error simulado: algo salió demasiado bien.'));
console.log(chalk.magenta('💡 Recuerda: la práctica hace al programador.'));

// BONUS: función básica
function saludar(nombre) {
  console.log(chalk.cyan(`Hola ${nombre}, ¡bienvenido al mundo JavaScript! 🌍`));
}

// Prueba de función
saludar("Equipo JS");


// 
function mostrarEstado() {
    console.log(chalk.bgGreen('🎉 ¡El programa ha iniciado exitosamente! 🎉'));
    console.info(chalk.bgBlue('🔧 El programa se está ejecutando 🔧'));
    console.info(chalk.bgYellowBright('🎇 El programa finalizó exitosamente 🎇'));
  return;
}
mostrarEstado()
// Función para simular un error
function simularError() {
  console.warn(chalk.yellow.bgYellow('⚠️  Advertencia: Se detectó un fallo en un subsistema. Intentando recuperar...'));
  console.error(chalk.red.inverse('❌  Error: Fallo crítico. Imposible continuar. Iniciando protocolo de reinicio.'));
  console.log(chalk.green.bgGreen('✅  Recuperación: El sistema se ha reiniciado y vuelve a estar operativo.'));
}

simularError();
