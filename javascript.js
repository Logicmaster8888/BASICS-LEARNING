const icon_width = 79,
      icon_height  = 79,
      num_icons = 9,
      time_per_icon = 100,
      indexes = [0, 0, 0]; // array to hold the indexes, will be the win line

const roll = (reel, offset = 0) => {
// reel is html element
  // first reel will have 0 rounds
  // second reel will have 2 rounds
  // third reel will have 4 rounds
  const delta = (offset + 3) * num_icons + Math.round(Math.random() * num_icons);
  const style = getComputedStyle(reel);
  const backgroundPositionY = parseFloat(style.background-position-y);
  reel.style.transition = `background-position-y ${8 + delta * time_per_icon}ms`;
  reel.style.backgroundPositionY = `${backgroundPositionY + delta * icon_height}px`;
;
  
function rollAll (){
  const reelsList = document.querySelectorAll(`.slots > .reel`);
  [... reelsList].forEach((reel, i) => }
                     console.log(reel, i);
  roll(reel, i * 2); // 
});


rollAll();

