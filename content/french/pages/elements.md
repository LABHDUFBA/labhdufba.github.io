---
title: "Éléments"
# meta title
meta_title: ""
# meta description
description: "Ceci est une méta-description"
# save as draft
draft: false
---

{{< toc >}}

Voici un exemple de titres. Vous pouvez utiliser ces titres selon les règles Markdown suivantes. Par exemple, utilisez `#` pour le titre 1 et `######` pour le titre 6.

# Titre 1

## Titre 2

### Titre 3

#### Titre 4

##### Titre 5

###### Titre 6

<hr>

### Mise en évidence

La mise en évidence, ou italique, s’obtient avec des _astérisques_ ou des _traits de soulignement_.

La mise en évidence forte, ou gras, s’obtient avec des **astérisques** ou des **traits de soulignement**.

La mise en évidence combinée s’obtient avec des **astérisques et des _traits de soulignement_**.

Le texte barré s’obtient avec deux tildes. ~~Rayez ceci.~~

<hr>

### Bouton

{{< button label="Bouton" link="/" style="solid" >}}

<hr>

### Lien

[Je suis un lien en ligne](https://www.google.com)

[Je suis un lien en ligne avec un titre](https://www.google.com "Page d’accueil de Google")

[Je suis un lien de type référence][Texte de référence arbitraire insensible à la casse]

[Je suis une référence relative à un fichier du dépôt](../blob/master/LICENSE)

[Vous pouvez utiliser des nombres pour les définitions de liens de type référence][1]

Ou laissez-le vide et utilisez le [texte du lien lui-même].

Les URL et les URL entre chevrons sont automatiquement transformées en liens.
<http://www.example.com> ou <http://www.example.com>, et parfois
example.com (mais pas sur GitHub, par exemple).

Un texte montrant que les liens de référence peuvent apparaître plus loin.

[texte de référence arbitraire insensible à la casse]: https://www.themefisher.com
[1]: https://gethugothemes.com
[texte du lien lui-même]: https://www.getjekyllthemes.com

<hr>

### Paragraphe

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur! Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non, omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis voluptatum rerum laboriosam.

<hr>

### Liste ordonnée

1. Élément de liste
2. Élément de liste
3. Élément de liste
4. Élément de liste
5. Élément de liste

<hr>

### Liste non ordonnée

- Élément de liste
- Élément de liste
- Élément de liste
- Élément de liste
- Élément de liste

<hr>

### Note

{{< notice "note" >}}
Ceci est une simple note.
{{< /notice >}}

{{< notice "tip" >}}
Ceci est une simple astuce.
{{< /notice >}}

{{< notice "info" >}}
Ceci est une simple information.
{{< /notice >}}

{{< notice "warning" >}}
Ceci est un simple avertissement.
{{< /notice >}}

<hr>

### Onglet

{{< tabs >}}
{{< tab "Onglet 1" >}}

#### Bonjour, je suis un onglet

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

{{< /tab >}}

{{< tab "Onglet 2" >}}

#### Je souhaite parler de la tentative d’assassinat

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

{{< /tab >}}

{{< tab "Onglet 3" >}}

#### Nous savons que vous trafiquez du minerai volé

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo

{{< /tab >}}
{{< /tabs >}}

<hr>

### Accordéons

{{< accordion "Pourquoi devriez-vous faire cela ?" >}}

- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur

{{< /accordion >}}

{{< accordion "Comment ajuster le centrage horizontal ?" >}}

- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur

{{< /accordion >}}

{{< accordion "Devriez-vous utiliser une marge négative ?" >}}

- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur

{{< /accordion >}}

<hr>

### Code et coloration syntaxique

Voici un exemple de `code en ligne`.

```javascript
var s = "Coloration syntaxique JavaScript";
alert(s);
```

```python
s = "Coloration syntaxique Python"
print s
```

<hr>

### Citation en bloc

> Êtes-vous venu ici pour quelque chose de précis ou seulement pour dénigrer Riker ? Et, en passant à la vitesse de distorsion maximale, vous avez semblé, un instant, être à deux endroits à la fois.

<hr>

### Tableaux

| Tableaux       |        Sont        | Intéressants |
| -------------- | :----------------: | -----------: |
| colonne 3 est  | alignée à droite   |        $1600 |
| colonne 2 est  |     centrée        |          $12 |
| rayures zébrées | sont élégantes     |           $1 |

<hr>

### Image

{{< image src="images/image-placeholder.png" caption="" alt="texte-alternatif" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="titre de l’image"  webp="false" >}}

<hr>

### Galerie

{{< gallery dir="images/gallery" class="" height="400" width="400" webp="true" command="Fit" option="" zoomable="true" >}}

<hr>

### Curseur

{{< slider dir="images/gallery" class="max-w-[600px] ml-0" height="400" width="400" webp="true" command="Fit" option="" zoomable="true" >}}

<hr>

### Vidéo YouTube

{{< youtube ResipmZmpDU >}}

<hr>

### Vidéo personnalisée

{{< video src="https://www.w3schools.com/html/mov_bbb.mp4" width="100%" height="auto" autoplay="false" loop="false" muted="false" controls="true" class="rounded-lg" >}}
