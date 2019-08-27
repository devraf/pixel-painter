//color panel colors
const colors = [
  'hsla(0, 100%, 50%, 1)',
  'hsla(25, 100%, 50%, 1)',
  'hsla(60, 100%, 50%, 1)',
  'hsla(100, 100%, 50%, 1)',
  'hsla(180, 100%, 50%, 1)',
  'hsla(240, 100%, 50%, 1)',
  'hsla(280, 100%, 50%, 1)',
  'hsla(305, 100%, 50%, 1)',
  'hsla(26, 100%, 80%, 1)',
  'hsla(360, 100%, 100% 1)',
  'hsla(1, 0%, 0%, 1)'
]
//array of colors on screen
const paints = document.querySelector('.colors')
const paintList = Array.from(paints.children)

//add colors to background color for color panel
paintList.forEach(function(element, index) {
  element.style.background = colors[index]
})

//create a single pixel
function createPixel() {
  const grid = document.querySelector('.grid')
  const pixel = document.createElement('div')
  pixel.classList.add('pixel')
  grid.appendChild(pixel)
}

//create the grid based on input
function createGrid(func, pixels) {
  for (let i = 0; i < pixels; i++) {
    func()
  }
}
//user input for grid size
const input = document.querySelector('input')

//validates user input to default value if no number is selected
function getInputValue() {
  if (!input.value) {
    return 100
  } else {
    return parseInt(input.value)
  }
}

//create grid button
const createGridButton = document.querySelector('button')

//create grid
createGridButton.addEventListener('click', function() {
  createGrid(createPixel, getInputValue())
})

// click to paint section

const currentColor = document.querySelector('.current-color')

// function changecolor() {
//   paints.addEventListener('click', function(event) {
//     currentColor.style.background = event.target.style.background
//     return event.target.id
//   })
// }
paints.addEventListener('click', function(event) {
  currentColor.style.background = event.target.style.background
  showColorShades(event.target.id)
})

const gridsPixels = document.querySelector('.grid')

gridsPixels.addEventListener('click', function(event) {
  event.target.style.background = currentColor.style.background
})
//create custom grid size
//create custome pixel size
//add shader panel based on selected color
const shades = document.querySelector('.shades')
const shadesList = Array.from(shades.children)

// function hueColorSelector() {
//   paints.addEventListener('click', function(event) {
//     showColorShades(event.target.id)
//   })
// }

function showColorShades(hue) {
  let lightness = 10
  let saturation = 100
  // write function to update black to shades of grey and white to be
  //all white
  // let saturation = updateSaturation()
  shadesList.forEach(function(element) {
    element.style.background = `hsla(${hue}, ${saturation}%, ${lightness}%, 1)`
    lightness += 10
  })
}

// hueColorSelector()
