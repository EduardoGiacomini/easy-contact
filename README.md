# :email: Easy Contact
**Live demo:** [https://eduardogiacomini.github.io/easy-contact/](https://eduardogiacomini.github.io/easy-contact/)

A simple application designed to store your contacts. This application was developed with HTML, CSS, Sass and JavaScript ES6+. All data is stored in LocalStorage

## Main feature

The application theme colors can be changed easily, as shown in the following image:

![befunky-collage](https://user-images.githubusercontent.com/31314944/52515522-7d457380-2bfb-11e9-8273-19ec61756bd6.jpg)

This feature can be easily implemented:
1. Create a variable to represent the color in your CSS file:
```css
:root {
    --color-primary: #2998FF ;
}
```
2. Use this variable as follows:
```css
p {
    color: var(--color-primary);
}
```
3. To change the contents of the variable with JavaScript, do the following:
```js
const root = document.documentElement;

root.style.setProperty('--color-primary', '#7ED56F');
```
4. Wow, this is awesome. All the paragraphs on your site has their colors changed dynamically.


## Usage

### Basic usage

1. Download or clone the repository;
2. Navigate to the project folder: `cd easy-content`;
3. Install the dependencies: `npm install`;
4. Run the project in developer server: `npm run dev`.

### Build process

1. Run: `npm run build`.

## Customization

You can use this application, but do not forget to give credits to the original author. **Copyright by @EduardoGiacomini**.
Questions, **carloseduardo.diasgiacomini@gmail.com**.
