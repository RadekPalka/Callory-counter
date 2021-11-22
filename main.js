const weight = document.querySelector(".weight")
const age = document.querySelector(".age")
const height = document.querySelector(".height")
const activity = document.querySelector(".activity")
const sex = document.querySelector("select")
const btn = document.querySelector("button")
const paragraph = document.querySelector("p")
const count = () =>{
  if ( !weight.value || !age.value || !height.value || !activity.value || !sex.value) {
    return console.log("Nie wypełniłeś formularza")
  }
  const bmr = sex.value ==="man"?
    66 + 13.7 * weight.value + 5 * height.value - 6.76 * age.value :
    655 + 9.6* weight.value + 1.8 * height.value - 4.7 * age.value
    const cpm = Math.floor(bmr * activity.value)
    console.log(bmr)
    paragraph.textContent= `Twoje CPM wynosi ${cpm} kcal`
}




btn.addEventListener("click", count)