// COLORS
// '#243e96', '#c61b75', '#12a1d3', '#e13f26', '#f5aa1c', '#1faa51';

const colors = ['blue', 'pink'];

const nextEvents = [...document.querySelectorAll('.next-event')];

nextEvents.map((nextEvent) => {
  const colorIndex = Math.floor(Math.random() * colors.length);
  nextEvent.classList.add(colors[colorIndex]);
});
