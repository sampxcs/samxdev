import React from 'react'
import Input from '@/components/Forms/Input'
import styles from './form.module.css'
import ButtonPrimary from '@/components/Buttons/ButtonPrimary'
import ButtonSecundary from '@/components/Buttons/ButtonSecundary'
import Container from '@/components/Sections/Container'

export default function NewsLetterForm () {
  return (
    <div className={styles.container}>
     <Container>
        <form action="" className={styles.form}>
          <fieldset>
            <h2>samxdev</h2>
            <h3>Hola de nuevo!, espero que te haya gustado mi trabajo.</h3>
            <p>Mi objetivo con este blog es crear contenido útil para desarrolladores web front-end y back-end, ¡y mi New’s Letter no es diferente! Te avisaré cuando publique contenido nuevo, e incluso compartiré contenido exclusivo.</p>
          </fieldset>
          <fieldset>
            <h3>Suscribete a mi New’s Letter. Sin spam, cancela tu suscripción en cualquier momento.</h3>
            <Input placeholder='Ingresa tu email...' style='light'/>
            <div className={styles.buttons}>
              <ButtonSecundary>Cancelar</ButtonSecundary>
              <ButtonPrimary>Suscribirse</ButtonPrimary>
            </div>
          </fieldset>
        </form>
     </Container>
    </div>
  )
}
