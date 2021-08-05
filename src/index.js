import "./styles.css"
import { articleHome } from "./tab1"
import { articleMenu } from "./tab2"

function sectionTabs() {

  function createHeader () {
    let header = document.createElement("header")
    let content = ["Home", "Menu", "L'Histoire", "Emplacement", "Contact"]
    let len = content.length
    let tab = document.createElement("div")

    header.className = "tab-bars"
    tab.className = "tab"
    for (let i = 0; i < len; i++) {
      tab.innerHTML = content[i]
      header.appendChild(tab)
      tab = tab.cloneNode()
    }

    return header
  }

  function createArticles() {
    let section = document.createElement("section")
    let article = document.createElement("article")
    let content = ["Content 1", "Content 2", "Content 3", "Content 4", "Content 5",]
    let len = content.length

    section.className = "section-articles"
    article.className = "article d-hidden"
    for (let i = 0; i < len; i++) {
      article.innerText = content[i]
      section.appendChild(article)
      article = article.cloneNode()
    }
    section.firstChild.className = "article"

    return section
  }

  function appendElements () {
    let section = document.createElement("section")
    section.className = "sectionTabs"

    section.appendChild(createHeader())
    section.appendChild(createArticles())
    document.getElementsByTagName("main")[0].appendChild(section)
  }

  function handleClick() {
    let tabs = document.getElementsByClassName("tab");
    let articles = document.getElementsByClassName("article");
    let len = tabs.length

    for(let i = 0; i < len; i++)
    {
      tabs[i].addEventListener("click", function(){
        if (articles[i].classList.contains("d-hidden")) {
          for(let j = 0; j < len; j++) {
            articles[j].classList.add("d-hidden")
          }
          articles[i].classList.remove("d-hidden")
        }
      })
    }
  }

  appendElements()
  handleClick()
}


sectionTabs()



articleHome()
articleMenu()


// TODO: Vérifier que j'ai besoin de section.sectionTabs