---
title: "Accede a variables de JS desde CSS nativo"
subtitle: "Es una practica comun añadirle estilos a nuestros componente directamente en JavaScript con estilos en linea cuando necesitamos que estos dependan de ciertos datos. Sin saber que podemos hacer exactamente lo mismo con CSS nativo sin ningun pre-procesador ni libreria. Aca te muestro algunos trucos que puedes hacer para acceder a variables dentro de CSS. Usa 'attr()' y 'var()'."
date: "24 may 2023"
tags: [
  {
    title: "HTML",
    description: "Siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web."
  }, 
  {
    title: "CSS",
    description: "En español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado."
  }, 
  {
    title: "JavaScript",
    description: "Lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico."
  }
]
---

Es una practica comun añadirle estilos a nuestros componente directamente en JavaScript con estilos en linea cuando necesitamos que estos dependan de ciertos datos. Sin saber que podemos hacer exactamente lo mismo con CSS nativo sin ningun pre-procesador ni libreria. Aca te muestro algunos trucos que puedes hacer para acceder a variables dentro de CSS.

## Funcion attr()

### Segun [MDN](https://developer.mozilla.org/es/docs/Web/CSS/attr):

*La función `attr()` de CSS se usa para recuperar el valor de un atributo del elemento seleccionado y usarlo en la hoja de estilos. Se puede usar también en un pseudo-elemento y, en este caso, el valor del atributo en el elemento originado del pseudo-elemento es devuelto.*

*La función `attr()` de CSS se puede usar con cualquier propiedad de CSS.*

### Sistaxis

```css
attr( attribute-name <type-or-unit>? [, <fallback> ]? )
```

### Ejemplos

```css
/* Simple usage */
attr(data-count);
attr(title);

/* With type */
attr(src url);
attr(data-count number);
attr(data-width px);

/* With fallback */
attr(data-count number, 0);
attr(src url, "");
attr(data-width px, inherit);
attr(data-something, "default");
```

#### Importante: Los valores 'type' y 'fallback' son tecnologias experimentales, verifica la [tabla de compatibilidad del navegador](https://developer.mozilla.org/en-US/docs/Web/CSS/attr#browser_compatibility) antes de usarla en produccion.

La funcion `attr()` permite acceder a los atributos de tus tags HTML directamente en CSS, un caso frecuente es ser llamada dentro de un pseudo elemento `::before` o `::after`  para pasarle contenido dinamico al pseudo elemento mediante la propiedad `content`.

En este ejemplo creamos el atributo `data-content`, (tienes que agregarle siempre el prefijo `data-` para que lo tome correctamente), en el HTML, y le asignamos el valor que querramos usar dentro de CSS, en este caso el string 'before content'.

```html
<div class='element' data-content='before content'>
  Childrens 
</div>
```

Luego en CSS podemos acceder al valor de este atributo usando la funcion `attr( <atribute-name> )`.

```css
.element::before {
  content: attr( data-content )
}
```

### Casos de uso:

## Crear Tooltips automaticos

**Podemos crear tooltips personalizados que se generen automaticamente solo con agregarle un atributo al elemento en HTML**

Tenemos un botton (o cualquier otro elemento HTML) y le agregamos el atributo `data-tooltip` con el mensaje que queremos que tenga el Tooltip.

```html
<button data-tooltip='Hello World!'>
  Hover me
</button>
```

En CSS seleccionamos todos los elementos con el atributo `data-tooltip` declarado y creamos el pseudo elemento.

```css
*[data-tooltip] {
  position: relative;
}

*[data-tooltip]::before {
  background-color: #1B1F23;
  border-radius: 0.25rem;
  bottom: 115%;
  color: #ffffff;
  content: attr(data-tooltip); /* Agregamos el contenido del atributo 'data-tooltip' */
  font-size: 0.75rem;
  padding: .5rem .75rem;
  position: absolute;
  width: max-content;
}

*[data-tooltip]:hover::before {
  animation: fadeIn;
}
```

Y de esta forma podemos estilar y estandarizar todos los Tooltips de nuestra pagina, y para agregar uno nuevo a algun elemento solo bastaria con agregarle el atributo `data-tooltip` y pasarle el contenido que queramos que tenga.

## Usa Data Colors

#### Importante: Los valores 'type' y 'fallback' son tecnologias experimentales, verifica la [tabla de compatibilidad del navegador](https://developer.mozilla.org/en-US/docs/Web/CSS/attr#browser_compatibility) antes de usarla en produccin.

Podemos usar colores como variables y pasarlas como atributo HTML al CSS, esto es interesante si esos datos vienen desde una base de datos y queremos que nuestra UI dependa de ellos.

Imagina que tenemos una lista de Superheroes y queremos asignarle a cada uno un color en especifico, podemos hacer algo como esto:

Teniendo un array con los datos de nuestros Superheroes donde declaramos su nombre y le asignamos un color:
  
```javascript
const heroes = [
  {
    name: 'Batman',
    color: 'yellow'
  },
  {
    name: 'Superman',
    color: 'blue'
  },
  {
    name: 'Spiderman',
    color: 'red'
  }
]
```

En HTML tenemos un ul con el id = 'list'
  
```html
<ul id='list'>
</ul>
```  

Podemos iterar este array y pasarle el color que le corresponda a cada uno mediante un atributo personalizado `data-color`
  
```javascript
// Funcion para insertar la data
function renderHeroes(heroes) {
  // iteramos el array de heroes y renderizamos un elemento <li> por cada heroe con sus datos
  return heroes.map(({name, color}) => (`
    <li data-color='${color}'>
       ${name}
    </li>
  `))
}
  
const list = document.querySelector('#list') // seleccionamos la lista
  
list.innerHTML = renderHeroes(heroes) // Renderizamos los <li> dentro de la lista
```
Por ultimo en CSS seleccionamos los elementos `<li>` y les agregamos el color que corresponda:
  
```css
#list li {
  background: attr(data-color color);
}
```

  
