const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const eur = document.querySelector("#eur")

const convert = (elem, target) => {
    elem.addEventListener("input", ()=>{
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.addEventListener("load", ()=> {
            const data = JSON.parse(request.response)
            if (elem === som) {
                usd.value = (elem.value / data.usd).toFixed(2)
                eur.value = (elem.value / data.eur).toFixed(2)}
            if (elem === usd) {
                som.value = (elem.value * data.usd).toFixed(2)
                eur.value = (elem.value * data.eurU).toFixed(2)}
            if (elem === eur) {
                usd.value = (elem.value * data.usdU).toFixed(2)
                som.value = (elem.value * data.eur).toFixed(2)
            }
            
        })
    })
}
convert(som, usd)
convert(usd, som)
convert(som, eur)
convert(eur, usd)
convert(usd, eur)
convert(eur, som)



/////

const forms = document.querySelector("form")

const postData = (form) => {
    form.addEventListener("submit", (e)=>{
        e.preventDefault()

        const request = new XMLHttpRequest()
        request.open("POST", "server.php")
        request.setRequestHeader("Content-type", "application/json")

        const formData = new FormData(form)
        const object = {}

        formData.forEach((item, i) =>{
            object[i] = item
        })
        const json = JSON.stringify(object)

        request.send(json)
    })
}