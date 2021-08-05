import "./styles.css"

function sectionTabs() {

  function createHeader () {
    let header = document.createElement("header")
    let content = ["Home", "Menu", "Contact"]

    let tab = document.createElement("div")

    tab.className = "tab"
    for (let i = 0; i <= 2; i++) {
      tab.innerHTML = content[i]
      header.appendChild(tab)
      tab = tab.cloneNode()
    }

    return header
  }

  function createArticles() {
    let article = document.createElement("article")
    let content = ["Content 1", "Content 2", "Content 3"]
    let fragment = document.createDocumentFragment()

    article.className = "article d-hidden"
    for (let i = 0; i <= 2; i++) {
      article.innerHTML = content[i]
      fragment.appendChild(article)
      article = article.cloneNode()
    }
    fragment.firstChild.className = "article"

    return fragment
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
    for(let i = 0; i < 3; i++)
    {
      tabs[i].addEventListener("click", function(){
        if (articles[i].classList.contains("d-hidden")) {
          for(let j = 0; j < 3; j++) {
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


