# Portfólio real — MP Services

O álbum do Facebook informado pelo proprietário é:
https://www.facebook.com/profile.php?id=61589964924146&sk=photos

O álbum não pôde ser acessado automaticamente neste ambiente, portanto **nenhuma fotografia foi extraída**, validada ou publicada como obra real.

## Como fornecer as fotos

Envie os JPGs/PNGs originais por conversa (ou ZIP), separados por projeto e, quando possível, identificados como ANTES e DEPOIS. Para um comparador autêntico, as duas fotos devem ser do **mesmo espaço e da mesma intervenção**. Confirmar autorização de divulgação e evitar dados pessoais, placas e rostos de clientes.

## Widget preparado

Os arquivos `assets/before-after.css` e `assets/before-after.js` foram adicionados ao repositório. Eles **não exibem obras fictícias** e podem ser ativados quando chegarem imagens verificadas.

Exemplo de marcação para inserir na página **depois de enviar as fotos reais ao repositório**:

```html
<link rel="stylesheet" href="assets/before-after.css">
<figure class="before-after" data-before-after>
  <div class="before-after-viewport">
    <img src="assets/projets/obra-01/depois.webp" alt="Cômodo após os trabalhos">
    <img class="before-after-before" src="assets/projets/obra-01/antes.webp" alt="Mesmo cômodo antes dos trabalhos">
    <span class="before-after-divider" aria-hidden="true"></span>
    <span class="before-after-label is-before">Avant</span>
    <span class="before-after-label is-after">Après</span>
  </div>
  <label class="sr-only" for="compare-obra-01">Comparer avant et après</label>
  <input id="compare-obra-01" type="range" min="0" max="100" value="50">
  <figcaption>Projeto verificado: tipo de obra, comuna e data se autorizados.</figcaption>
</figure>
<script defer src="assets/before-after.js"></script>
```

A comparação funciona com teclado, mouse e toque. Se as fotos tiverem perspectivas diferentes, prefira exibir duas fotografias lado a lado em vez de insinuar correspondência perfeita.
