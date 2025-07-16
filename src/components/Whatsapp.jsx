import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Whatsapp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+5534991954278"
      accountName="Érica - Vitrine Uberlândia"
      chatMessage="Olá! 👋 Como posso ajudá-lo hoje? Vamos conversar sobre como impulsionar sua marca?"
      statusMessage="Normalmente responde em 1 hora"
      placeholder="Digite sua mensagem..."
      allowClickAway={true}
      allowEsc={true}
      avatar="/logoVitrineUberlandia.png" 
      darkMode={false}
      notification={true}
      notificationDelay={60000} 
      notificationSound={true}
    />
  )
}

export default Whatsapp