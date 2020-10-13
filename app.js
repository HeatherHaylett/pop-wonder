import { events } from './events.js';


const eventSelector = document.querySelector('.events');
eventSelector.innerHTML = `
    <p class="event-name">${events[0].name}</p>
    <p class="event-date">${events[0].date}</P>
    <p class="event-name">${events[1].name}</p>
    <p class="event-date">${events[1].date}</P>
    <p class="event-name">${events[2].name}</p>
    <p class="event-date">${events[2].date}</P>
    `;


