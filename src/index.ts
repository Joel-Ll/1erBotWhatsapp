import BotWhatsapp from '@bot-whatsapp/bot'
import database from './database';
import provider from './provider';

// Primer Flujo
const flujoDeSaludar = BotWhatsapp.addKeyword(['Hola', 'Buenas', 'por favor', 'porfavor', 'tardes', 'tarde',
	'dia', 'días' , 'día', 'dias', 'noche', 'noches', 'info', 'cursos', 'catalogo', 'información','informacion', 'convocatorias', 'catálogo',
	'convocatoria', 'precio', 'grupo', 'whatsapp', 'enlace', 'certificado', 'certificados', 'curso'
])
	.addAnswer(`👋 Hola 🤓 Gracias por comunicarte con la Consultora Multidisciplinaria Quimeras - Icarus Consultores \n \n✅ Si requieres mas información de los cursos, convocatorias o deseas unirte a nuestros grupos de whatsapp, por favor comunícate con uno de los siguientes números: \n \n👉🏻 69616052 Lic. Carla Vargas  \n \n👉🏻 68413858 Atención al Cliente`)

/**
 * Funcion Principal del bot
 */
const main = async () => {
	// Instanciando el bot
	await BotWhatsapp.createBot({
		database,
		provider,
		flow: BotWhatsapp.createFlow([flujoDeSaludar]),
	})
}

main();