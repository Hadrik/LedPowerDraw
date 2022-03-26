const list = document.querySelector('#selectionList')
const length = document.querySelector('#length')
const Voltoutput = document.querySelector('#Vout')
const Ampoutput = document.querySelector('#Aout')
const Wattoutput = document.querySelector('#Wout')

// draw in A
const powerDraw = {
  "ws2812b": {
    "voltage": 5,
    "draw": 0.043333,
    "name": "WS 2812b",
  },
  "ws2812b-eco": {
    "voltage": 5,
    "draw": 0.0312,
    "name": "WS 2812b - ECO",
  },
  "sk6812": {
    "voltage": 5,
    "draw": 0.03266,
    "name": "SK 6812",
  },
  "ws2815": {
    "voltage": 12,
    "draw": 0.0675,
    "name": "WS 2815",
  },
  "ws2811": {
    "voltage": 12,
    "draw": 0.07813,
    "name": "WS 2811 (x3)",
  },
}

list.addEventListener('change', update)
length.addEventListener('change', update)
length.addEventListener('keyup', update)

fillSelectionList()
update()


function update() {
  const l = length.valueAsNumber
  const A = l * (powerDraw[list.value].draw)
  const V = powerDraw[list.value].voltage
  const W = V * A

  Voltoutput.innerText = `At ${V} Volts:`
  Ampoutput.innerText = `${A.toFixed(2)} Amps`
  Wattoutput.innerText = `${W.toFixed(2)} Watts`
}

function fillSelectionList() {
  for (const type in powerDraw) {
    const child = document.createElement('option')
    child.setAttribute('value', type)
    child.innerText = powerDraw[type].name
    
    list.appendChild(child)
  }
}