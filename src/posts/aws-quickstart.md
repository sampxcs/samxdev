---
title: "Trucos para acceder a datos y variables de JS desde CSS nativo"
subtitle: "Create an AWS account and set up CLI/SDK access."
date: "27 jun 2022"
tags: [
  {
    title: "AWS",
    description: "Amazon Web Services es una colección de servicios de computación en la nube pública que en conjunto forman una plataforma de computación en la nube, ofrecidas a través de Internet por Amazon.com. Es usado en aplicaciones populares como Dropbox, Foursquare, HootSuite."
  }, 
  {
    title: "CLI",
    description: "Una interfaz de línea de comandos (CLI) es una interfaz de usuario (UI) basada en texto que se utiliza para ver y administrar archivos de computadora."
  }
]
---

Es una practica comun stylar nuestros componente directamente en JavaScript o con estilos en linea cuando necesitamos que esos estilos dependan de ciertos datos. Sin saber que podemos hacer exactamente lo mismo con CSS nativo sin ningun pre-procesador ni libreria.

### Funcion attr() de CSS

La funcion `attr()` en CSS nos permite acceder a los atributos de tus tags HTML directamente en CSS, este caso tiene varias limitaciones ya que esta funcion solo puede ser llamada dentro de un pseudo elemento `::before` o `::after`. Normalmente se usa para pasarle contenido dinamico al pseudo elemento mediante la propiedad `content`.
