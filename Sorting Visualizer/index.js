let randomizeArrayBtn = document.getElementById("randomize-arr-btn")
let sortBtn = document.getElementById("sort-btn")
let barsContainerEl = document.getElementById("bar-container")
let minRange = 1
let maxRange = 100
let numOfBars = 100
let unsorted_array = new Array(numOfBars)

function randomNumber(min,max) {
  return Math.floor(Math.random()*(max-min+1)) + min
}

function createRandomArray() {
  for(let i=0;i<numOfBars;i++) {
    unsorted_array[i]=randomNumber(minRange,maxRange)
  }
}

document.addEventListener("DOMContentLoaded",function(){
  createRandomArray()
  renderBars(unsorted_array)
})

function renderBars(array) {
  for(let i=0;i<array.length;i++) {
    let bar = document.createElement("div")
    bar.classList.add("bar")
    bar.style.height = `${array[i]*6}px`
    barsContainerEl.appendChild(bar)
  }
}

randomizeArrayBtn.addEventListener("click",function() {
  createRandomArray()
  barsContainerEl.innerHTML = ""
  renderBars(unsorted_array)
})

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve,ms))
}

async function bubbleSort(array) {
  let bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        for (let k = 0; k < bars.length; k++) {
          if (k < j) {
            bars[k].style.backgroundColor = "aqua"
          }
        }
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        bars[j].style.height = `${array[j]*6}px`
        bars[j].style.backgroundColor = "lightgreen"
        bars[j + 1].style.height = `${array[j + 1]*6}px`
        bars[j + 1].style.backgroundColor = "lightgreen"
        await sleep(60)
        bars[j].style.backgroundColor = "aqua"
        bars[j+1].style.backgroundColor = "orange"
      }
      else {
        bars[j].style.backgroundColor = "orange"
        bars[j+1].style.backgroundColor = "orange"
      }
    }
    await sleep(30)
  }
  for (let k = 0; k < bars.length; k++) {
    await sleep(30)
    bars[k].style.backgroundColor = "aqua"
  }
}

sortBtn.addEventListener("click",function(){
  bubbleSort(unsorted_array)
})