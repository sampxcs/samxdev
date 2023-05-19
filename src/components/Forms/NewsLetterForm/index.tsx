import React from 'react'
import Input from '@/components/Forms/Input'
import styles from './form.module.css'
import ButtonPrimary from '@/components/Buttons/ButtonPrimary'
import ButtonSecundary from '@/components/Buttons/ButtonSecundary'

export default function NewsLetterForm () {
  return (
    <form action="" className={styles.form}>
      <h3>Hola de nuevo!, espero que te haya gustado mi trabajo. Suscribete a mi New’s Letter</h3>
      <p>Mi objetivo con este blog es crear contenido útil para desarrolladores web front-end y back-end, ¡y mi New’s Letter no es diferente! Te avisaré cuando publique contenido nuevo, e incluso compartiré contenido exclusivo.</p>
      <span>Sin spam, cancela tu suscripción en cualquier momento.</span>
      <Input placeholder='Ingresa tu email...' style='light'/>
      <div className={styles.buttons}>
        <ButtonSecundary>Cancelar</ButtonSecundary>
        <ButtonPrimary>Suscribirse</ButtonPrimary>
      </div>
    </form>
  )
}
