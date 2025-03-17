# **CSS i el seu paper en el desenvolupament web**

## Índex:

1. [Introducció: Història i Evolució del CSS](#1-introducció-història-i-evolució-del-css)  
2. [Conceptes Bàsics de CSS](#2-conceptes-bàsics-de-css)  
   2.1 [Sintaxi de CSS](#21-sintaxi-de-css)  
   2.2 [Selectores i Tipus](#22-selectores-i-tipus)  
   2.3 [Integració de CSS: Inline, Intern i Extern](#23-integració-de-css-inline-intern-i-extern)  
3. [Propietats CSS: Explicació i Opcions](#3-propietats-css-explicació-i-opcions)  
   3.1 [Propietats de Text](#31-propietats-de-text)  
   3.2 [Propietats de Color i Fons](#32-propietats-de-color-i-fons)  
   3.3 [Propietats de Caixes i Marges](#33-propietats-de-caixes-i-marges)  
   3.4 [Propietats de Disposició i Posicionament](#34-propietats-de-disposició-i-posicionament)  
4. [Propietats de Posicionament i Flotació](#4-propietats-de-posicionament-i-flotació)  
   4.1 [Propietat `position`](#41-propietat-position)  
   4.2 [Propietat `float`](#42-propietat-float)  
   4.3 [Problemes comuns amb `float` i solucions](#43-problemes-comuns-amb-float-i-solucions)  
5. [Disposició Avançada: Flexbox i Grid](#5-disposició-avançada-flexbox-i-grid)  
6. [Interactivitat i Estils Dinàmics](#6-interactivitat-i-estils-dinàmics)  
   6.1 [Pseudo-classes i Pseudo-elements](#61-pseudo-classes-i-pseudo-elements)  
   6.2 [Transicions i Transformacions](#62-transicions-i-transformacions)  
   6.3 [Animacions amb Keyframes](#63-animacions-amb-keyframes)  
7. [Responsive Design amb Media Queries](#7-responsive-design-amb-media-queries)  
   7.1 [Media Queries](#71-media-queries)  
   7.2 [Unitats Relatives i Absolutes](#72-unitats-relatives-i-absolutes)  
   7.3 [Noves Característiques de les Últimes Versions de CSS](#73-noves-característiques-de-les-últimes-versions-de-css)  
8. [Preprocessadors CSS i Eines](#8-preprocessadors-css-i-eines)  
   8.1 [SASS i LESS](#81-sass-i-less)  
   8.2 [Autoprefixing i Minificació](#82-autoprefixing-i-minificació)  
9. [Bones Pràctiques i Optimització de CSS](#9-bones-pràctiques-i-optimització-de-css)  


## 1. Introducció: Història i Evolució del CSS  

[CSS in 100 Seconds](https://www.youtube.com/watch?v=OEV8gMkCHXQ&pp=ygULY3NzIGhpc3Rvcnk%3D)

CSS (Cascading Style Sheets) es va introduir el 1996 per la W3C com una manera d’estilitzar els elements HTML, separant l’estil del contingut. Al llarg dels anys, ha evolucionat considerablement, passant de simples opcions d’estil a eines potents per a la creació de dissenys responsius i animacions complexes.

---

### 1.1 CSS1: Els inicis  

CSS1 va ser la primera versió i incloïa propietats bàsiques per a l’estilització de text i marges.  

**Propietats destacades:**  
- Fonts: `font-family`, `font-size`, `font-weight`.  
- Colors: `color`, `background-color`.  
- Marges i espaiat: `margin`, `padding`.  

**Exemple d'ús de CSS1:**  

```css
body {
  font-family: Arial, sans-serif;
  color: black;
  background-color: white;
}

h1 {
  font-size: 24px;
  font-weight: bold;
}

p {
  margin: 10px;
  padding: 5px;
}
```

[Exemple CSS1 en CodePen](https://codepen.io/hectorPascualComin/pen/rNXgZYd)

---

### 1.2 CSS2: Posicionament i Taules  

CSS2 va afegir funcions més avançades, com ara el **posicionament** i el suport per a mitjans de sortida diferents (pantalla, impressora).  

**Novetats principals:**  
- **Posicionament absolut i relatiu:** `position: absolute`, `relative`.  
- **Control de visualització:** `display`.  
- **Suport per a taules:** `border-collapse`, `border-spacing`.

**Exemple amb posicionament:**  

```css
div {
  position: relative;
  top: 20px;
  left: 30px;
  background-color: lightblue;
}
```

[Exemple CSS2 en CodePen](https://codepen.io/hectorPascualComin/pen/KKOLxQv)

---

### 1.3 CSS3: Modularització i Estils Avançats  

CSS3 es va dividir en mòduls per facilitar la seva adopció. Cada mòdul es va centrar en àrees específiques com **animacions**, **transicions**, **Flexbox**, **Grid Layout**, i **Media Queries** per al disseny responsiu.

### 1.3.1 **Transicions i Animacions**  

```css
button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: green;
}
```

[Transicions en CodePen](https://codepen.io/hectorPascualComin/pen/KKOLxRv)

### 1.3.2 **Media Queries per Responsive Design**  

```css
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
```

[Media Queries en CodePen](https://codepen.io/hectorPascualComin/pen/GRVaXGp)

### 1.3.3 **Flexbox per a dissenys flexibles**  

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

[Flexbox en CodePen](https://codepen.io/hectorPascualComin/pen/zYgQJaJ)

### 1.3.4 **Grid Layout per a estructures més complexes**  

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

[Grid en CodePen](https://codepen.io/hectorPascualComin/pen/PoMvdBN)

---

### 1.4 CSS4 (En desenvolupament): El futur del CSS  

CSS4 no és una versió formal com CSS3, sinó una continuació i expansió dels mòduls existents amb noves funcionalitats:

### 1.4.1 **Selectors Avançats**  
CSS4 introdueix selectores més complexos com `:is` i `:where` per simplificar regles complexes:

```css
:is(h1, h2, h3) {
  color: blue;
}
```

### 1.4.2 **Cascade Layers**  
Permet estructurar millor la cascada d’estils:

```css
@layer utilities {
  .text-center {
    text-align: center;
  }
}
```

[Selectors avançats en CodePen](https://codepen.io/hectorPascualComin/pen/zYgQMNK)

---

### 1.5 Resum històric
Les **dates de sortida al mercat** de les diferents versions de CSS (quan van començar a ser utilitzades àmpliament i suportades pels navegadors) són una mica més difuses, ja que depenen de la implementació en els navegadors més comuns de l'època. Aquí tens una estimació basada en l'adopció pràctica:

---

#### **CSS1**  
- **Sortida al mercat:** **1997**
- Tot i que es va publicar oficialment el desembre de 1996, la seva adopció pràctica va començar el 1997 amb suport parcial en navegadors com Internet Explorer 3 i Netscape Navigator 4.

---

#### **CSS2**
- **Sortida al mercat:** **1999-2000**
- Els primers navegadors a donar suport parcial a CSS2 van ser **Internet Explorer 5** i **Netscape 6** (1999-2000). No obstant això, el suport complet no va ser pràctic fins a principis dels 2000 amb navegadors com **Mozilla Firefox 1.0** (2004).

---

#### **CSS2.1**
- **Sortida al mercat:** **2004-2005**
- Tot i que es va començar a desenvolupar a finals dels anys 90, **CSS2.1** no es va implementar de forma consistent fins al suport complet per navegadors com **Mozilla Firefox 1.0**, **Internet Explorer 6** (parcial), i **Opera 7** entre el 2004 i el 2005.

---

#### **CSS3**
- **Sortida al mercat:** **2012-2014**
- Encara que el treball modular de CSS3 va començar molt abans, les funcionalitats més importants com **Flexbox**, **transicions**, i **animacions** van començar a ser àmpliament utilitzades i compatibles amb els navegadors principals entre el **2012 i el 2014**:
  - **Google Chrome** i **Safari** van adoptar ràpidament CSS3 entre el 2011-2012.
  - **Firefox 10** (2012) va afegir un suport estable.
  - **Internet Explorer 10** (2012) va ser el primer navegador de Microsoft amb suport ampli a CSS3.

---

#### **CSS Grid (Nivell 1)**
- **Sortida al mercat:** **2017**
- El suport ampli a **CSS Grid** va arribar amb les versions de **Chrome 57**, **Firefox 52**, i **Edge 16**, totes el **2017**. Això va marcar un gran avanç en el disseny web modern.

---

#### **CSS Variables (Custom Properties)**
- **Sortida al mercat:** **2017**
- Les **CSS Variables** van començar a ser àmpliament utilitzades a partir del 2017 amb el suport de Chrome, Firefox i Safari.

---

#### **CSS4**
- **Sortida al mercat:** **2019-actualitat**
- No hi ha una "versió completa" de CSS4, però mòduls com **Media Queries Level 4**, **Selectors Level 4** i altres característiques modernes comencen a ser àmpliament suportades pels navegadors des del 2019 i continuen evolucionant.

---

### 1.6 Cas d'Ús Real: Evolució d'un Lloc Web  

Un lloc web senzill estilitzat amb CSS1 es veuria així:

```html
<h1>Benvingut al meu lloc</h1>
<p>Aquest és un paràgraf estilitzat amb CSS1.</p>
```

Amb CSS3 i CSS4, podem afegir disseny responsiu, animacions i una estructura moderna:

```html
<div class="container">
  <h1>Benvingut al meu lloc</h1>
  <p>Aquest és un paràgraf estilitzat amb Flexbox i Media Queries.</p>
</div>
```

[Exemple complet d'evolució en CodePen](https://codepen.io/hectorPascualComin/pen/VwoOVyX)


## 2. Conceptes Bàsics de CSS  

### 2.1 Sintaxi de CSS  

La sintaxi de CSS està formada per **selectors**, **propietats** i **valors**.  

**Estructura d’una regla CSS:**  

```css
selector {
  propietat: valor;
}
``` 
- **Propietat:** Defineix l'aspecte que volem canviar (ex: color, mida de font).  
- **Valor:** Assigna un valor específic a la propietat.  

**Exemple:**  

```css
p {
  color: blue;
  font-size: 18px;
}
```

Aquest estil aplicarà el color blau i una mida de font de 18px a tots els paràgrafs (`<p>`).



```html
<p>Aquest és un text estilitzat.</p>
```

[Veure exemple a CodePen](https://codepen.io/hectorPascualComin/pen/xxvNQjL)


---

### 2.2 Selectors i Tipus  

Els **selectors** identifiquen quins elements HTML seran afectats per les regles CSS. A continuació es presenten els tipus més utilitzats:

### 2.2.1 **Selectores bàsics**  

- **Per etiqueta:** Aplica l'estil a tots els elements d'una etiqueta específica.  

  ```css
  h1 {
    color: red;
  }
  ```

  ```html
  <h1>Encapçalament en vermell</h1>
  <h1>Un altre encapçalament en vermell</h1>
  ```

### 2.2.2 **Selectores de classe**  

Aplica l'estil a tots els elements que comparteixen una classe. Les classes es defineixen amb un punt (`.`).

```css
.intro {
  font-weight: bold;
  color: green;
}
```

```html
<p class="intro">Aquest és un paràgraf destacat.</p>
<p>No està destacat.</p>
```

### 2.2.3 **Selectores d’ID**  

Aplica l'estil a un element específic identificat per un ID únic. Es defineixen amb un coixinet (`#`).

```css
#header {
  background-color: lightblue;
  padding: 10px;
}
```

```html
<div id="header">Aquest és l'encapçalament de la pàgina.</div>
```

### 2.2.4 **Selectores combinats**  

Permet aplicar estils a elements en funció de la seva relació dins de l'estructura HTML.

- **Fill directe (`>`):** Aplica l'estil només als fills immediats.  

  ```css
  div > p {
    color: purple;
  }
  ```

  ```html
  <div>
    <p>Estilitzat</p>
    <span>
      <p>No estilitzat</p>
    </span>
  </div>
  ```

- **Descendent (espai):** Aplica l'estil a tots els descendents dins de la jerarquia.  

  ```css
  div p {
    font-size: 14px;
  }
  ```

  ```html
  <div>
    <p>Estilitzat</p>
    <span>
      <p>També estilitzat</p>
    </span>
  </div>
  ```

### 2.2.5 **Selectores pseudo-classes**  

Defineixen estats especials o parts específiques d'un element.

- **`:hover`:** Aplica estils quan el cursor passa per sobre de l'element.  

  ```css
  a:hover {
    color: red;
  }
  ```

  ```html
  <a href="#">Enllaç amb efecte hover</a>
  ```

### 2.2.6 **Selectores pseudo-elements**  

Estilitzen parts específiques del contingut d’un element.  

- **`::first-line`:** Aplica estils només a la primera línia.  

  ```css
  p::first-line {
    font-weight: bold;
  }
  ```

  

  ```html
  <p>Aquesta és la primera línia. La resta del text no està afectat.</p>
  ```

[Veure exemple a CodePen](https://codepen.io/hectorPascualComin/pen/KKOLrJV)

---

### 2.3 Integració de CSS: Inline, Intern i Extern  

Hi ha diverses maneres d'integrar CSS a una pàgina HTML.

### 2.3.1 **CSS Inline**  

L'estil s'aplica directament a l'element HTML mitjançant l'atribut `style`.

```html
<p style="color: red;">Aquest text és vermell.</p>
```

### 2.3.2 **CSS Intern**  

Es defineixen estils dins d'un bloc `<style>` situat dins del `<head>` del document HTML.

```html
<head>
  <style>
    h1 {
      font-size: 24px;
      color: navy;
    }
  </style>
</head>
<body>
  <h1>Encapçalament estilitzat amb CSS intern</h1>
</body>
```

### 2.3.3 **CSS Extern**  

Es guarda un fitxer `.css` extern i es vincula amb la pàgina HTML mitjançant `<link>`.

**`styles.css`:**

```css
body {
  background-color: #f0f0f0;
}
```

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>Estilitzat amb CSS extern</p>
</body>
```

[Veure exemple a CodePen](https://codepen.io/hectorPascualComin/pen/LYwoXam)


## 3. Propietats CSS: Explicació i Opcions  

Les propietats CSS són les eines principals per aplicar estils als elements HTML. Aquesta secció inclou una explicació detallada de cadascuna de les propietats, els seus valors possibles, el significat de cada valor i exemples pràctics.


### 3.1 Propietats de Text  

### **`color`**  

Defineix el color del text d'un element.  

**Valors possibles i el seu significat:**  
- **Noms de colors** (`red`, `blue`, `green`, etc.):** Assigna un color predefinit pel navegador.  
- **Hexadecimal** (`#FF5733`):** Defineix el color utilitzant la representació hexadecimal (RGB).  
- **RGB** (`rgb(255, 87, 51)`):** Defineix el color utilitzant valors d'intensitat de vermell, verd i blau.  
- **HSL** (`hsl(12, 100%, 60%)`):** Defineix el color utilitzant tonalitat, saturació i lluminositat.  
- **`transparent`:** Fa que el text no tingui color visible.  

```css
p {
  color: #333; /* Color gris fosc */
}
```

### **`font-family`**  

Defineix la família de fonts a utilitzar en un element.  

**Valors possibles i el seu significat:**  
- **Nom de la font** (`"Arial"`, `"Times New Roman"`):Assigna una font específica.  
- **Fonts generiques** (`serif`, `sans-serif`, `monospace`):Assigna un tipus de font genèric en cas que la font específica no estigui disponible.  

```css
p {
  font-family: "Arial", sans-serif; /* Usa Arial i si no està disponible, usa una font sans-serif */
}
```

### **`font-size`**  

Controla la mida de la lletra.  

**Valors possibles i el seu significat:**  
- **Unitats absolutes** (`px`, `pt`, `cm`): Defineixen una mida fixa, independent del context.  
- **Unitats relatives** (`em`, `rem`, `%`, `vw`, `vh`): Defineixen una mida en relació amb altres elements o amb la mida de la finestra.  
- **Paraules clau** (`small`, `medium`, `large`): Assignen mides predefinides pel navegador.  

```css
p {
  font-size: 16px; /* Text amb mida de 16 píxels */
}
```

### **`font-weight`**  

Controla el gruix del text.  

**Valors possibles i el seu significat:**  
- **Paraules clau** (`normal`, `bold`, `lighter`, `bolder`):** Indiquen el gruix general del text.  
- **Valors numèrics** (`100` a `900`):** Permet ajustar el gruix del text amb més precisió.  

```css
p {
  font-weight: 700; /* Text amb gruix molt destacat */
}
```

### **`text-align`**  

Controla l'alineació del text dins del contenidor.  

**Valors possibles i el seu significat:**  
- **`left`:** Alinea el text a l'esquerra.  
- **`right`:** Alinea el text a la dreta.  
- **`center`:** Centra el text dins del contenidor.  
- **`justify`:** Alinea el text per ambdós costats, ajustant l'espaiat.  

```css
p {
  text-align: justify; /* Text alineat als dos costats */
}
```

[Veure exemple a CodePen]()

---

### 3.2 Propietats de Color i Fons  

### **`background-color`**  

Defineix el color de fons d'un element.  

**Valors possibles:** Iguals que `color`.  

```css
div {
  background-color: lightgray; /* Fons gris clar */
}
```



### **`background-image`**  

Defineix una imatge com a fons.  

**Valors possibles i el seu significat:**  
- **`url('path/to/image.jpg')`:** Especifica la imatge a utilitzar com a fons.  
- **`none`:** No s'utilitza cap imatge de fons (valor per defecte).  

```css
div {
  background-image: url('background.jpg'); /* Imatge de fons */
}
```

### **`background-repeat`**  

Controla com es repeteix la imatge de fons.  

**Valors possibles i el seu significat:**  
- **`repeat` (per defecte):** La imatge es repeteix tant horitzontalment com verticalment.  
- **`repeat-x`:** La imatge es repeteix només horitzontalment.  
- **`repeat-y`:** La imatge es repeteix només verticalment.  
- **`no-repeat`:** La imatge no es repeteix.  

```css
div {
  background-repeat: no-repeat; /* Imatge de fons no repetida */
}
```

[Veure exemple a CodePen](https://codepen.io/hectorPascualComin/pen/qBeGLzz)


## 4. Propietats de Posicionament i Flotació  

### 4.1 Propietat `position`  

La propietat `position` defineix com es posiciona un element dins del flux del document o en relació a altres elements.

**Valors i exemples:**  

- **`static` (per defecte):**  
  No permet l'ús de `top`, `left`, `right`, `bottom`.  

- **`relative`:**  
  Posiciona l'element en relació a la seva posició inicial.  
  ```css
  .box {
    position: relative;
    top: 10px;
  }
  ```

- **`absolute`:**  
  Posiciona l'element en relació al contenidor més proper amb posicionament diferent de `static`.  
  ```css
  .box {
    position: absolute;
    top: 50px;
  }
  ```

- **`fixed`:**  
  Posiciona l'element en relació a la finestra del navegador, no canvia en fer scroll.  
  ```css
  .header {
    position: fixed;
    top: 0;
  }
  ```

- **`sticky`:**  
  L'element es mou amb l'scroll fins a un límit, després queda fix.  
  ```css
  .nav {
    position: sticky;
    top: 0;
  }
  ```

---

### 4.2 Propietat `float`  

La propietat `float` permet que un element floti a l'esquerra o a la dreta dins del seu contenidor, mentre altres elements poden fluir al seu costat.

**Valors possibles:**  

- **`none` (per defecte):**  
  Cap flotació.

- **`left`:**  
  Flota l'element a l'esquerra.  
  ```css
  .image {
    float: left;
    margin-right: 10px;
  }
  ```

- **`right`:**  
  Flota l'element a la dreta.  
  ```css
  .image {
    float: right;
    margin-left: 10px;
  }
  ```

---

### 4.3 Problemes comuns amb `float` i solucions  

Els elements flotants poden causar que el contenidor no s'ajusti correctament al contingut.

**Solució amb `clear`:**  
Permet evitar que altres elements es col·loquin al costat d'elements flotants.  
```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

[Veure exemple a CodePen](https://codepen.io/hectorPascualComin/pen/gOVJqOL)


## 5. Disposició Avançada: Flexbox i Grid  

El disseny web modern requereix eines flexibles per estructurar i distribuir contingut de manera eficient. **Flexbox** i **Grid Layout** són els sistemes de disseny més utilitzats per aconseguir aquest objectiu.

### 5.1 Flexbox: Propietats Clau  

Flexbox ofereix una manera eficient de disposar i alinear elements dins d'un contenidor. Les seves propietats es divideixen en dos grups: propietats del contenidor i propietats dels elements fills.

### Propietats del Contenidor (Flex Container)  

#### **`display: flex`**  
Activa el mode Flexbox en un contenidor.  

#### **`flex-direction`**  
Defineix la direcció principal de l'eix.  
- **`row` (per defecte):** Els elements es disposen horitzontalment d'esquerra a dreta.  
- **`row-reverse`:** Els elements es disposen de dreta a esquerra.  
- **`column`:** Els elements es disposen verticalment de dalt a baix.  
- **`column-reverse`:** Els elements es disposen de baix a dalt.  

```css
.container {
  display: flex;
  flex-direction: row;
}
```

[Exemple Flex Direction en CodePen](https://codepen.io/hectorPascualComin/pen/LYwqaeq)


#### **`justify-content`**  
Alinea els elements al llarg de l'eix principal.  
- **`flex-start` (per defecte):** Els elements s'alineen al començament.  
- **`flex-end`:** Els elements s'alineen al final.  
- **`center`:** Els elements es centren.  
- **`space-between`:** Espai igual entre elements.  
- **`space-around`:** Espai igual al voltant dels elements.  

```css
.container {
  justify-content: center;
}
```

[Exemple Justify Content en CodePen](https://codepen.io/hectorPascualComin/pen/vYobPjB)


#### **`align-items`**  
Alinea els elements al llarg de l'eix transversal.  
- **`stretch` (per defecte):** Els elements s'estiren per omplir l'alçada.  
- **`flex-start`:** Alinea al començament.  
- **`flex-end`:** Alinea al final.  
- **`center`:** Centra els elements.  
- **`baseline`:** Alinea segons la línia de base del text.  

```css
.container {
  align-items: center;
}
```

[Exemple Align Items en CodePen](https://codepen.io/hectorPascualComin/pen/poMGYxd)


### Propietats dels Elements Fills (Flex Items)  

#### **`flex-grow`**  
Defineix la proporció de creixement d'un element.  
- **Valors possibles:** Nombre positiu (ex: `0`, `1`, `2`).  
- **`0` (per defecte):** L'element no creix.  
- **`1`:** L'element creix proporcionalment.  

```css
.item {
  flex-grow: 1;
}
```

[Exemple Flex Grow en CodePen](https://codepen.io/hectorPascualComin/pen/bGXzZQg)


#### **`flex-shrink`**  
Defineix la proporció de reducció d'un element.  
- **Valors possibles:** Nombre positiu (ex: `0`, `1`, `2`).  
- **`0`:** L'element no es redueix.  
- **`1` (per defecte):** L'element es redueix proporcionalment.  

```css
.item {
  flex-shrink: 1;
}
```

[Exemple Flex Shrink en CodePen](https://codepen.io/hectorPascualComin/pen/vYobPvE)


#### **`align-self`**  
Permet sobrescriure l'alineació definida per `align-items` per a un element específic.  
- **Valors possibles:** Iguals que `align-items`.  

```css
.item {
  align-self: flex-end;
}
```

[Exemple Align Self en CodePen](https://codepen.io/hectorPascualComin/pen/Jjgxzwz)


### 5.2 Grid: Propietats Clau  

El sistema de disseny Grid ofereix una manera avançada de disposar elements en files i columnes.

---

### Propietats del Contenidor (Grid Container)  

#### **`display: grid`**  
Activa el mode Grid en un contenidor.  

#### **`grid-template-columns` i `grid-template-rows`**  
Defineixen el nombre i la mida de les columnes i files.  
- **Valors possibles:**  
  - Unitat absoluta: `px`, `em`.  
  - Relativa: `%`, `fr` (fraccions).  
  - Paraula clau: `auto`.  

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px auto;
}
```

[Exemple Grid Template Columns en CodePen](https://codepen.io/hectorPascualComin/pen/rNXPRRZ)


#### **`gap`**  
Defineix l'espai entre les files i les columnes.  
- **Valors possibles:** Unitat de mesura (`px`, `%`, `em`).  

```css
.container {
  gap: 20px;
}
```

[Exemple Grid Gap en CodePen](https://codepen.io/hectorPascualComin/pen/RwXvdOW)


### Propietats dels Elements Fills (Grid Items)  

#### **`grid-column` i `grid-row`**  
Defineixen l'àrea que ocupa un element.  
- **Valors possibles:**  
  - Nombre específic: `1`, `2`.  
  - Interval: `1 / 3`.  

```css
.item {
  grid-column: 1 / 3;
  grid-row: 2;
}
```


### **`align-self` i `justify-self`**  
Permeten ajustar l'alineació individual d'un element dins de la seva cel·la.  
- **Valors possibles:** `start`, `end`, `center`, `stretch`.  

```css
.item {
  align-self: center;
  justify-self: end;
}
```

[Exemple a CodePen](https://codepen.io/hectorPascualComin/pen/QWeRYwa)


## 6. Interactivitat i Estils Dinàmics  

CSS permet crear interaccions i efectes visuals mitjançant pseudo-classes, transicions i animacions.

### 6.2 Transicions i Transformacions  

### **Propietat `transition`**  

La propietat `transition` s'utilitza per aplicar un canvi gradual en una o diverses propietats CSS durant un període de temps específic. 

**Subpropietats de `transition`:**  

1. **`transition-property`:** Defineix les propietats CSS que es veuran afectades per la transició.  
   - **Valors:**  
     - `all` (per defecte): Aplica la transició a totes les propietats que puguin canviar.  
     - `specific-property`: Per exemple, `background-color`, `transform`, `opacity`.  

2. **`transition-duration`:** Defineix la durada de la transició.  
   - **Valors:** Temps en segons (`s`) o mil·lisegons (`ms`).  
   - Exemple: `1s`, `500ms`.  

3. **`transition-timing-function`:** Defineix com es distribueix la velocitat de la transició.  
   - **Valors:**  
     - `ease` (per defecte): Canvi suau d'inici a final.  
     - `linear`: Velocitat constant.  
     - `ease-in`: Comença lentament.  
     - `ease-out`: Acaba lentament.  
     - `ease-in-out`: Comença i acaba lentament.  
     - `cubic-bezier(n,n,n,n)`: Definició personalitzada.  

4. **`transition-delay`:** Defineix el retard abans que comenci la transició.  
   - **Valors:** Temps en segons o mil·lisegons.  
   - Exemple: `0s`, `2s`.  

**Exemple complet de transició:**  

```css
button {
  background-color: blue;
  color: white;
  transition: background-color 0.5s ease, color 0.3s ease-in;
}

button:hover {
  background-color: green;
  color: yellow;
}
```

[Exemple de Transicions en CodePen](https://codepen.io/hectorPascualComin/pen/vYowbyK)

---

### **Propietat `transform`**  

La propietat `transform` s'utilitza per aplicar transformacions visuals com girs, escalats, translacions i deformacions a un element.

**Valors possibles per a `transform`:**  

1. **`translate(x, y)`:** Desplaça un element en les coordenades x i y.  
   - Exemple: `translate(50px, 100px)`.  

2. **`scale(x, y)`:** Escala l'element horitzontalment (`x`) i verticalment (`y`).  
   - Exemple: `scale(1.5, 2)`.  

3. **`rotate(angle)`:** Gira l'element segons un angle especificat.  
   - Exemple: `rotate(45deg)`.  

4. **`skew(x-angle, y-angle)`:** Inclina l'element segons els angles `x` i `y`.  
   - Exemple: `skew(30deg, 10deg)`.  

5. **`matrix(n, n, n, n, n, n)`:** Aplica una transformació combinada mitjançant una matriu.  

**Exemple de transformació:**  

```css
div {
  transform: translate(50px, 100px) scale(1.2) rotate(45deg);
  transition: transform 0.5s ease;
}
```

[Exemple de Transformacions en CodePen](https://codepen.io/hectorPascualComin/pen/yLmWZbR)

---

### 6.3 Animacions amb Keyframes  

### **Propietat `animation`**  

La propietat `animation` permet animar elements amb canvis definits en diferents punts d'un període de temps.

**Subpropietats de `animation`:**  

1. **`animation-name`:** Defineix el nom de l'animació, que ha de coincidir amb un conjunt de `@keyframes`.  
2. **`animation-duration`:** Especifica la durada de l'animació.  
   - Exemple: `2s`, `500ms`.  
3. **`animation-timing-function`:** Controla com canvia la velocitat de l'animació.  
   - Valors: Igual que `transition-timing-function`.  
4. **`animation-delay`:** Retarda l'inici de l'animació.  
   - Exemple: `1s`.  
5. **`animation-iteration-count`:** Defineix quantes vegades es repeteix l'animació.  
   - Valors: Número (`1`, `infinite`).  
6. **`animation-direction`:** Defineix si l'animació es juga cap endavant, enrere o alternant.  
   - Valors: `normal`, `reverse`, `alternate`.  
7. **`animation-fill-mode`:** Defineix si l'animació manté el seu estat després d'acabar-se.  
   - Valors: `none`, `forwards`, `backwards`, `both`.  

**Exemple d'animació amb keyframes:**  

```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

div {
  animation: bounce 2s infinite alternate;
}
```

[Exemple d'Animacions amb Keyframes en CodePen](https://codepen.io/hectorPascualComin/pen/rNXgPwb)



## 7. Responsive Design amb Media Queries  

El disseny responsiu permet que les pàgines web s'adaptin a diferents mides i tipus de dispositius. Les **Media Queries** són una eina fonamental en aquesta adaptació.


### 7.1 **Media Queries**

Les **Media Queries** permeten aplicar estils condicionalment, basant-se en les característiques del dispositiu.

### **Sintaxi bàsica:**  

```css
@media (condició) {
  /* Regles CSS */
}
```

### **Propietats més utilitzades amb `@media`:**  

1. **`max-width` i `min-width`:**  
   Apliquen estils quan l'amplada de la finestra del navegador és menor o major que un valor determinat.  

   **Exemple:**  

   ```css
   @media (max-width: 768px) {
     body {
       font-size: 14px;
     }
   }

   @media (min-width: 1200px) {
     body {
       font-size: 18px;
     }
   }
   ```

[Exemple de Media Queries en CodePen](https://codepen.io/hectorPascualComin/pen/bGXzwgv)

2. **`max-height` i `min-height`:**  
   Apliquen estils segons l'alçada de la finestra.  

   **Exemple:**  

   ```css
   @media (max-height: 600px) {
     div {
       display: none;
     }
   }
   ```

[Exemple de Media Queries en CodePen](https://codepen.io/hectorPascualComin/pen/ExqrgmY)

3. **`orientation`:**  
   Detecta l'orientació del dispositiu.  
   - **Valors possibles:** `portrait`, `landscape`.  

   **Exemple:**  

   ```css
   @media (orientation: landscape) {
     body {
       background-color: lightblue;
     }
   }
   ```

[Exemple de Media Queries en CodePen](https://codepen.io/hectorPascualComin/pen/gOVqwRG)

4. **`aspect-ratio`:**  
   Apliquen estils segons la relació d'aspecte de la finestra.  

   **Exemple:**  

   ```css
   @media (aspect-ratio: 16/9) {
     video {
       width: 100%;
     }
   }
   ```

[Exemple de Media Queries en CodePen](https://codepen.io/hectorPascualComin/pen/JjgxRyY)

5. **Combinació de condicions (`and`, `or`, `not`):**  

   **Exemple:**  

   ```css
   @media (min-width: 600px) and (max-width: 1200px) {
     body {
       background-color: beige;
     }
   }

   @media not all and (min-resolution: 300dpi) {
     p {
       color: red;
     }
   }
   ```

[Exemple de Media Queries en CodePen](https://codepen.io/hectorPascualComin/pen/oNKmLyK)

---

### 7.2 **Unitats Relatives i Absolutes**

Les unitats són clau per al disseny responsiu. Les unitats relatives permeten adaptar-se millor a les dimensions del dispositiu.

### **Unitats Absolutes:**  

- **`px`:** Píxels.  
- **`cm`, `mm`, `in`:** Centímetres, mil·límetres, polzades.  

### **Unitats Relatives:**  

1. **`%`:** Percentatge en relació a l'element pare.  
2. **`em` i `rem`:** Relatius a la mida de la font del pare (`em`) o del `root` (`rem`).  
3. **`vw`, `vh`:** Percentatge de l'amplada i l'alçada de la finestra.  

**Exemple amb unitats relatives:**  

```css
.container {
  width: 50vw;
  height: 50vh;
  font-size: 2em;
}
```

[Exemple d'Unitats Relatives en CodePen](https://codepen.io/hectorPascualComin/pen/RwXvGLV)

---

### 7.3 **Noves Característiques de les Últimes Versions de CSS**

Les versions més recents de CSS han afegit característiques com **Container Queries** i **@supports**.

### **Container Queries**  

Permeten aplicar estils basant-se en la mida d'un contenidor específic.

```css
@container (min-width: 400px) {
  .element {
    font-size: 18px;
  }
}
```

### **@supports**  

Permet verificar si el navegador suporta una característica específica.

```css
@supports (display: grid) {
  .grid {
    display: grid;
  }
}
```

[Exemple de Noves Característiques en CodePen](https://codepen.io/hectorPascualComin/pen/XWvOjzr)


## 8. Preprocessadors CSS i Eines  

Els preprocessadors com **SASS** i **LESS** augmenten la potència de CSS amb funcionalitats com variables, mixins i anidació.

### 8.1 **SASS**  

### **Funcions clau de SASS:**  

1. **Variables:**  

   ```scss
   $primary-color: #3498db;

   body {
     background-color: $primary-color;
   }
   ```

2. **Mixins:**  
   Definició d'estils reutilitzables.  

   ```scss
   @mixin box-shadow($x, $y, $blur) {
     box-shadow: $x $y $blur black;
   }

   .card {
     @include box-shadow(2px, 2px, 5px);
   }
   ```

---

### 8.2 **Autoprefixing i Minificació**  

### **Autoprefixing:**  
Genera automàticament prefixos per garantir la compatibilitat amb navegadors antics.  

**Entrada:**  

```css
.display {
  display: flex;
}
```

**Sortida autoprefixed:**  

```css
.display {
  display: -webkit-flex;
  display: flex;
}
```

[Exemple de SASS en CodePen](https://codepen.io/hectorPascualComin/pen/mdNvEpJ)

---
   

## 9. Bones Pràctiques i Optimització de CSS  

### 9.1 **Estructura i Organització**  

1. **Estructura modular:**  
   - Divideix els estils en fitxers segons seccions del lloc (`header.css`, `footer.css`).  
2. **Utilitza variables i funcions (amb preprocessadors):**  

   ```scss
   $base-color: #333;

   body {
     color: $base-color;
   }
   ```

---

### 9.2 **Prohibicions i Errors Comuns**  

1. **Evita el mal ús de `!important`:** Només utilitza'l en casos crítics.  
2. **No repeteixis estils:** Utilitza classes reutilitzables.  
3. **Evita selectors massa específics:**  

   ```css
   div > p > span {
     color: red;
   }
   ```

[Exemple de Bones Pràctiques en CodePen](https://codepen.io/hectorPascualComin/pen/ZEgwWyO)
