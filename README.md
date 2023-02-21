# MyTodoList Google Chrome Extension

A solo project challenge to build an interactive Todo List Google Chrome Extension.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add and delete all tasks
- See hover states for all interactive elements on the page
- Receive an error message when trying to add an empty task
- Able to see all their tasks stored in the extension after refreshing the page or closing the application

### Screenshot

![](/assets/img/screenshot.png)


### Links

- Solution URL: [Github](https://github.com/ffernandocosta/to-do-list)
- Live Site URL: [Live version](https://ffernandocosta.github.io/to-do-list/)
- Download: [Google Chrome Extension](https://chrome.google.com/webstore/detail/mytodolist/eadifgenlolnemlmkipaadphfdgfjnfe?hl=pt-br)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS custom variables
- Flexbox
- Vanilla JavaScript
- if statments
- for loops
- JSON and localStorage


### What I learned

What I learned the most in this project was manipulating the DOM using JavaScript, writing if and else statements to check if a value is truthy or falsey. Creating HTML elements using JavaScript 'createElement' method and also adding a class to that element using 'className' method. It was my first time working with JSON and LocalStorage, I had to do research and learn how to fetch and manipulate dada from the LocalStorage. I learned how to use the 'setItem' method to set an key to the data I want to fetch using the 'getItem' method. Also learned how to manipulate that data changing to a string or an array using 'JSON.parse' and 'JSON.stringify'. Overall this project helped me build the skills I needed to feel more confidant and build more challenging projects in the future.


```html
  <h1>Some HTML I am proud of</h1>
  
  <form class="todo-form">
    
    <div class="flex-group">
      <input type="text" id="addtask-input" placeholder="e.g Go to the gym">
      <span class="empty-field-error">Your task cannot be empty</span>
    </div>

    <button id="addtask-btn">Add task</button>
  </form>
```
```css
.proud-of-this-css {

  body {
    font-family: var(--ff-primary);
    font-size: var(--fs-regular);
    font-weight: var(--fw-regular-400);
    color: var(--clr-primary-800);
    background-color: var(--clr-neutral-200);
    display: grid;
    align-items: center;
    margin: 1rem;
  }
}
```
```js
const proudOfThisFunc = () => {
  
  const verifyTaskInputField = (field) => {
    if (field.value === "") {
        field.nextElementSibling.classList.add('empty-field-error__showError');
    } else {
        myTasks.push(taskInputEl.value)
        field.nextElementSibling.classList.remove('empty-field-error__showError');
    }
}
```

### Continued development

I want to use all the knowldge I gained from this project and apply to my next one, my goal is to make a more complex and challenging project that tests my abilities as a web developer.


### Useful resources

- [Scrimba course](https://scrimba.com/playlist/pPD7Kt4) - This course laid the foundation for me to complete this challenge, made me understand all of the core concepts that I used on this project. If statements, for loop, parameters and arguments in a function, localStorage and JSON as well.


## Author


- Linkedin - [Fernando Costa](https://www.linkedin.com/in/ffernando-costa/)
