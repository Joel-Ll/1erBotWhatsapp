import BotWhatsaap from '@bot-whatsapp/bot'; 
import ProviderWS from '@bot-whatsapp/provider/baileys';

export default BotWhatsaap.createProvider(ProviderWS);