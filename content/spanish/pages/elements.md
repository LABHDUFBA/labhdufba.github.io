---
title: "Elementos"
# meta title
meta_title: ""
# meta description
description: "Esta es una meta descripción"
# save as draft
draft: false
---

{{< toc >}}

Aquí tienes un ejemplo de encabezados. Puedes usar estos encabezados siguiendo las reglas de Markdown. Por ejemplo: utiliza `#` para el encabezado 1 y `######` para el encabezado 6.

# Encabezado 1

## Encabezado 2

### Encabezado 3

#### Encabezado 4

##### Encabezado 5

###### Encabezado 6

<hr>

### Énfasis

El énfasis, también conocido como cursiva, con _asteriscos_ o _guiones bajos_.

Énfasis fuerte, también conocido como negrita, con **asteriscos** o **guiones bajos**.

El énfasis combinado con **asteriscos y _guiones bajos_**.

El tachado utiliza dos virgulillas. ~~Tacha esto.~~

<hr>

### Botón

{{< button label="Button" link="/" style="solid" >}}

<hr>

### Enlace

[Soy un enlace de estilo integrado](https://www.google.com)

[Soy un enlace de estilo integrado con título](https://www.google.com "Página de inicio de Google")

[Soy un enlace de estilo de referencia][Arbitrary case-insensitive reference text]

[Soy una referencia relativa a un archivo del repositorio](../blob/master/LICENSE)

[Puedes usar números para las definiciones de enlaces de estilo de referencia][1]

O déjalo vacío y usa el [texto del enlace].

Las URL y las URL entre corchetes angulares se convertirán automáticamente en enlaces.
<http://www.example.com> o <http://www.example.com> y, a veces,
example.com (pero no en Github, por ejemplo).

Un texto para mostrar que los enlaces de referencia pueden aparecer más adelante.

[arbitrary case-insensitive reference text]: https://www.themefisher.com
[1]: https://gethugothemes.com
[link text itself]: https://www.getjekyllthemes.com

<hr>

### Párrafo

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur! Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non, omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis voluptatum rerum laboriosam.

<hr>

### Lista ordenada

1. Elemento de lista
2. Elemento de lista
3. Elemento de lista
4. Elemento de lista
5. Elemento de lista

<hr>

### Lista sin ordenar

- Elemento de lista
- Elemento de lista
- Elemento de lista
- Elemento de lista
- Elemento de lista

<hr>

### Aviso

{{< notice "note" >}}
Esta es una nota sencilla.
{{< /notice >}}

{{< notice "tip" >}}
Este es un consejo sencillo.
{{< /notice >}}

{{< notice "info" >}}
Esta es una información sencilla.
{{< /notice >}}

{{< notice "warning" >}}
Esta es una advertencia sencilla.
{{< /notice >}}

<hr>

### Pestaña

{{< tabs >}}
{{< tab "Tab 1" >}}

#### Hola, estoy en una pestaña

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

{{< /tab >}}

{{< tab "Tab 2" >}}

#### Quiero hablar sobre el intento de asesinato

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

{{< /tab >}}

{{< tab "Tab 3" >}}

#### Sabemos que traficas con mineral robado

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo

{{< /tab >}}
{{< /tabs >}}

<hr>

### Acordeones

{{< accordion "Why should you need to do this?" >}}

- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur

{{< /accordion >}}

{{< accordion "How can I adjust Horizontal centering" >}}

- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur

{{< /accordion >}}

{{< accordion "Should you use Negative margin?" >}}

- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur

{{< /accordion >}}

<hr>

### Código y resaltado de sintaxis

Este es un ejemplo de `Inline code`.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

<hr>

### Cita en bloque

> ¿Viniste por algo en particular o solo para criticar a Riker? Y, al acelerar a máxima velocidad de curvatura, apareciste durante un instante en dos lugares a la vez.

<hr>

### Tablas

| Tablas        |      Son      |  Geniales |
| ------------- | :-----------: | ----: |
| la col. 3 está | alineada a la derecha | $1600 |
| la col. 2 está |   centrada    |   $12 |
| rayas de cebra |   son elegantes    |    $1 |

<hr>

### Imagen

{{< image src="images/image-placeholder.png" caption="" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="image title"  webp="false" >}}

<hr>

### Galería

{{< gallery dir="images/gallery" class="" height="400" width="400" webp="true" command="Fit" option="" zoomable="true" >}}

<hr>

### Carrusel

{{< slider dir="images/gallery" class="max-w-[600px] ml-0" height="400" width="400" webp="true" command="Fit" option="" zoomable="true" >}}

<hr>

### Vídeo de YouTube

{{< youtube ResipmZmpDU >}}

<hr>

### Vídeo personalizado

{{< video src="https://www.w3schools.com/html/mov_bbb.mp4" width="100%" height="auto" autoplay="false" loop="false" muted="false" controls="true" class="rounded-lg" >}}
