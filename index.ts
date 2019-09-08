// Import stylesheets
import './style.css';

import { Component , AbstractComponent } from './components'


const c = new AbstractComponent();
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
appDiv.appendChild(c.component());