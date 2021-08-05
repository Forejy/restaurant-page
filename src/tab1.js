export { articleHome }

function articleHome() {
  let article = document.getElementsByClassName("article")[0]

  function createContent() {
    let h1 = document.createElement("h1")
    h1.innerText = "L'Ambroise"

    let h2 = document.createElement("h2")
    h2.innerText = "Les tendances passent. Les classiques restent."

    let section = document.createElement("section")
    section.innerText =
    "Sed quid est quod in hac causa maxime homines admirentur et reprehendant meum consilium, cum ego idem antea multa decreverim, que magis ad hominis dignitatem quam ad rei publicae necessitatem pertinerent? Supplicationem quindecim dierum decrevi sententia mea. Rei publicae satis erat tot dierum quot C. Mario ; dis immortalibus non erat exigua eadem gratulatio quae ex maximis bellis. Ergo ille cumulus dierum hominis est dignitati tributus."

    article.appendChild(h1)
    article.appendChild(h2)
    article.appendChild(section)
  }

  createContent()
}
