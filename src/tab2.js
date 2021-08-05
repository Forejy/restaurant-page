export { articleMenu }

function articleMenu() {
  let article = document.getElementsByClassName("article")[1]

  function createContent() {

    function createTitle() {
      let h1 = document.createElement("h1")
      h1.innerText = "Le Menu"

      return h1
    }

    function createMenuParts(title, text) {
      let section = document.createElement("section")
      let h2 = document.createElement("h2")
      let subSection = document.createElement("section")

      h2.innerText = title
      subSection.innerText = text

      section.appendChild(h2)
      section.appendChild(subSection)

      return section
    }

    let titles = ["Le Matin", "Le Midi", "Le Soir"]
    let texts =
    ["Sed quid est quod in hac causa maxime homines admirentur et reprehendant meum consilium, cum ego idem antea multa decreverim, que magis ad hominis dignitatem quam ad rei publicae necessitatem pertinerent? Supplicationem quindecim dierum decrevi sententia mea. Rei publicae satis erat tot dierum quot C. Mario ; dis immortalibus non erat exigua eadem gratulatio quae ex maximis bellis. Ergo ille cumulus dierum hominis est dignitati tributus.",
    "Sed quid est quod in hac causa maxime homines admirentur et reprehendant meum consilium, cum ego idem antea multa decreverim, que magis ad hominis dignitatem quam ad rei publicae necessitatem pertinerent? Supplicationem quindecim dierum decrevi sententia mea. Rei publicae satis erat tot dierum quot C. Mario ; dis immortalibus non erat exigua eadem gratulatio quae ex maximis bellis. Ergo ille cumulus dierum hominis est dignitati tributus.",
    "Sed quid est quod in hac causa maxime homines admirentur et reprehendant meum consilium, cum ego idem antea multa decreverim, que magis ad hominis dignitatem quam ad rei publicae necessitatem pertinerent? Supplicationem quindecim dierum decrevi sententia mea. Rei publicae satis erat tot dierum quot C. Mario ; dis immortalibus non erat exigua eadem gratulatio quae ex maximis bellis. Ergo ille cumulus dierum hominis est dignitati tributus."]

    function appendElements(){
      article.appendChild(createTitle())
      for (let i = 0; i < 3; i++) {
        article.appendChild(createMenuParts(titles[i], texts[i]))
      }
    }

    appendElements()
  }

  createContent()
}