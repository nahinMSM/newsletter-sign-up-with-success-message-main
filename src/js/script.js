document.getElementById('btEnvia').addEventListener('click', (e) => {
  e.preventDefault()
  if (email.value == "") {
    document.getElementById('result').innerText = "Valid email required"
    document.getElementById('email').classList.add('error')
    document.getElementById('email').placeholder = "ash#loremcompany.com"

  } else {
    document.getElementById('result').innerText = ""
    document.getElementById('email').classList.remove('error')
    document.getElementById('email').value = ""
    document.getElementById('email').placeholder = "email@company.com"
    document.querySelector('main').style.display = "none"
    document.querySelector('.sectionThanks').style.display = "block"
  }
})

document.querySelector('.sectionThanks').addEventListener('click', () => {
  location.reload()
})