# :email: Easy Contact
**Demonstração (sem conexão com banco de dados):** [https://eduardogiacomini.github.io/easy-contact/](https://eduardogiacomini.github.io/easy-contact/)

Uma simples aplicação criada para gerenciar os seus contatos. Esta aplicação foi desenvolvida utilizando HTML, CSS, Sass, JavaScript ES6+ no lado do cliente e JavaScript no lado do servidor com NodeJS e MongoDB como banco de dados.

## Visão Geral:

![mockup-easy-contact](https://user-images.githubusercontent.com/31314944/52521677-d647f280-2c61-11e9-82dc-dacd53d19a2d.png)

**Obrigado _[Jamboe](https://www.jamboe.net/)_ pelo incrível mockup.**

## Principais funcionalidades:

Com este projeto eu aprendi muitas coisas interessantes como:

* Definir o design do projeto a partir de um **diagrama de classes**;
* **Utilizar variáveis CSS** para alterar as cores da aplicação dinamicamente.

### Diagrama de classes

O Diagrama de Classes foi criado com o objetivo de identificar a estrutura básica da entidade que estava sendo tratada e as suas ações.
![EasyContact-ClassDiagram](https://user-images.githubusercontent.com/31314944/60825548-ea910c80-a179-11e9-89e6-7d0ac970af95.png)

### Utilizar variáveis CSS

Com a utilização de variáveis CSS, o tema da aplicação pode ser alterado de maneira muito fácil, tornando a experiência do usuário o melhor possível ao utilizar a aplicação. Veja na imagem abaixo:

![befunky-collage](https://user-images.githubusercontent.com/31314944/52515522-7d457380-2bfb-11e9-8273-19ec61756bd6.jpg)

Esta feature pode ser implementada facilmente em seus projetos:
1. Crie uma variável que represente uma cor no seu arquivo CSS:
```css
:root {
    --color-primary: #2998FF ;
}
```
2. Use esta variável onde desejar:
```css
p {
    color: var(--color-primary);
}
```
3. Para alterar o conteúdo da vaiável utilizamos um pouco de JavaScript, veja a seguir:
```js
const root = document.documentElement;

root.style.setProperty('--color-primary', '#7ED56F');
```
4. Wow, isto é incrível. Todos os parágrafos que utilizavam aquela variável foram alterados dinamicamente.

## Como executar a aplicação

### Uso básico

## Dependências:

* NodeJS;
* Nodemon;
* MongoDB.

1. Baixe ou clone o repositório em sua máquina;
2. Navegue para a pasta do projeto: `cd easy-content`;
3. Navegue para a pasta da API: `cd api`;
4. Instale as dependências: `npm install`;
5. Execute a API: `npm run dev`;
6. Em outra aba do terminal. Navegue para a pasta APP (é necessário estar na raiz do projeto): `cd app`;
7. Instale as dependências: `npm install`;
8. Execute o APP: `npm run dev`.

## Customização

Você pode usar esta aplicação, mas não se esqueça de dar os créditos ao autor original. **Copyright by @EduardoGiacomini**.
Perguntas, **carloseduardo.diasgiacomini@gmail.com**.
