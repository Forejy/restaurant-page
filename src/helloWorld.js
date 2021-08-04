const helloWorld = () => console.log('Hello World !')

function appendTest() {
  var test = document.createElement("div")
  test.innerHTML = "TEST APPEND"
  document.getElementsByClassName("content")[0].appendChild(test)
  document.getElementsByClassName("content")[0].innerHTML = "innerHTML"
}

export { helloWorld }
export { appendTest }