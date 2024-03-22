import BotWhatsapp from '@bot-whatsapp/bot'
import helloFlow from './hello.flow';

/**
 * Se debe implementar todos los flujos 
 */
export default BotWhatsapp.createFlow([
	helloFlow
]);