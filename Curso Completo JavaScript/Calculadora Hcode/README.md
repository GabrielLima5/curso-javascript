# Calculadora JavaScript

[![Hcode Treinamentos](https://www.hcode.com.br/res/img/hcode-200x100.png)](https://www.hcode.com.br)

Calculadora desenvolvida como exemplo do Curso Completo de JavaScript na Udemy.com.

### Projeto
![Calculadora](https://firebasestorage.googleapis.com/v0/b/hcode-com-br.appspot.com/o/calculadora-hcode.jpg?alt=media&token=5406aa3f-b965-401c-9b4e-654609c78b33)


## Coisas que aprendi desenvolvendo este projeto

1. Adicionar mais de um evento ao elemento
```js
    function addEventListenerAll(element, events, fn){
        events.split(" ").forEach((event) => {
            element.addEventListener(event, fn, false)
        })
    }

    let buttons = document.querySelectorAll("button");

    buttons.forEach((btn) => {
        addEventListenerAll(btn, 'click mouseover', e => {
            console.log("Oi")
        })
    })
```

2. Adicionar evento em mais de um elemento
```js
    let buttons = querySelectorAll("buttons");
    buttons.forEach((btn) => {
        btn.addEventListener('click', e => {
            console.log("Oi!")
        })
    })
```
