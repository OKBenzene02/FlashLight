import FlashLight from "./smolContent.js";

const FlashLightContents = new FlashLight(
  "Coloured Flash light",
    "14 Feb 2022",
    false
)

const main = document.querySelector('main')

const div1 = document.createElement('div')
div1.setAttribute('class', 'box')

const article = document.createElement('article')

const div2 = document.createElement('div')
div2.setAttribute('class', 'parent_container')

const div3 = document.createElement('div')
div3.setAttribute('class', 'container')

const div4 = document.createElement('div')
div4.setAttribute('class', 'items')

const paragragh = document.createElement('p')
paragragh.setAttribute('class', 'container_details')

const footer = document.createElement("footer")


article.innerHTML = `
<figure class="torch">
<img src="light.svg" alt="light" class="light">
<img src="torch.svg" alt="torch" class="torch">
<figcaption>This is a torch light, with a cell. The button below can toggle the visibility of the light.</figcaption>
</figure>
<div class="form">
<button class="button">Switch On</button>
</div>`


div3.innerHTML = `
<ul class="grid">
<li class="cell cell1"></li>
<li class="cell cell2"></li>
<li class="cell cell3"></li>
<li class="cell cell4"></li>
<li class="cell cell5"></li>
<li class="cell cell6"></li>
</ul>
`

div4.innerHTML = `
<ul class="list_items">
            <li class="nameTorch"><b>Name</b>: <span class="nametorch">${FlashLightContents.name}</span></li>
            <li class="daysAcquired">
              <b>Days</b>: <span class="days">${FlashLightContents.DaysAcquired()}</span>
            </li>
            <li class="lightToggle">
              <b>Switch</b>: <span class="toggle">${FlashLightContents.lightToggle ? "Switched On" : "Switched Off"}</span>
            </li>
          </ul>`

paragragh.innerHTML = `<p>Container with colour changing events when on clicked on the cell.</p>`

footer.innerHTML = `<code class="footer">Event listeners practice &copy-(02-20-2022)</code>`


div2.append(paragragh)
div2.append(div3)
div2.append(div4)

div1.append(article)
div1.append(div2)

main.append(div1)
document.body.append(footer)


const switchToggle = document.querySelector('.button')
const textToggle = document.querySelector('.toggle')
const cells = document.querySelectorAll(".cell")
const nametorch = document.querySelector('.nametorch')
const light = document.querySelector('.light')
const heading = document.querySelector('header')


switchToggle.addEventListener('click', (e)=> {
    switchToggle.innerHTML == 'Switch On' ? 
    (switchToggle.innerHTML = 'Switch Off') : (switchToggle.innerHTML = 'Switch On')

    const lightImg = document.querySelector('.light')
    
    if (switchToggle.innerHTML == 'Switch On'){
      lightImg.style.visibility = "hidden"
      textToggle.innerHTML = 'Switched Off'
      nametorch.style.color = "black"
      textToggle.style.color = "black"
      heading.style.color = "black"
      light.style.backgroundColor = "white"
    }
    else{
      lightImg.style.visibility = "visible"
      textToggle.innerHTML = 'Switched On'
      cells.forEach((cell) => {
        cell.addEventListener('click', (e) =>
        {
          if (cell.classList[1] == "cell1")
          {
            nametorch.style.color = "#00e600"
            light.style.backgroundColor = "#00e600"
            textToggle.style.color = "#00e600"
            heading.style.color = "#00e600"
          }
          if (cell.classList[1] == "cell2")
          {
            nametorch.style.color = "#00bd00"
            light.style.backgroundColor = "#00bd00"
            textToggle.style.color = "#00bd00"
            heading.style.color = "#00bd00"
          }
          if (cell.classList[1] == "cell3")
          {
            nametorch.style.color = "#96cc00"
            light.style.backgroundColor = "#96cc00"
            textToggle.style.color = "#96cc00"
            heading.style.color = "#96cc00"
          }
          if (cell.classList[1] == "cell4")
          {
            nametorch.style.color = "#ccfa00"
            light.style.backgroundColor = "#ccfa00"
            textToggle.style.color = "#ccfa00"
            heading.style.color = "#ccfa00"
          }
          if (cell.classList[1] == "cell5")
          {
            nametorch.style.color = "#e07b08"
            light.style.backgroundColor = "#e07b08"
            textToggle.style.color = "#e07b08"
            heading.style.color = "#e07b08"
          }
          if (cell.classList[1] == "cell6")
          {
            nametorch.style.color = "#ff0101"
            light.style.backgroundColor = "#ff0101"
            textToggle.style.color = "#ff0101"
            heading.style.color = "#ff0101"
          }
          }
          )
        })

    }

})


cells.forEach((cell) => {
  cell.addEventListener('click', (e) =>
  {
    if (cell.style.visibility == "visible")
    {
      cell.style.visibility = "hidden"
      }
    }
    )
    setInterval(() => {
      cell.style.visibility = "visible"
    }, 1000);
  })
  


