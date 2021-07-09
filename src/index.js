// Variáveis

var div
const urls = []

fetch('https://main-menu-api.herokuapp.com/')
    .then(response => response.json())
    .then(response => {
        for (var c = 0; c < response.length; c++) {
            urls.push(response[c].url)
            if (c % 2 == 0) {
                div = document.createElement('div')
                div.classList.add("content")
                document.getElementById('container').appendChild(div)
            }
            const span = document.createElement('span')
            span.classList.add('span')
            span.innerHTML = response[c].name
            div.appendChild(span)
            setLinks(c)
        }
    })

// fetch('https://main-menu-api.herokuapp.com/')
//     .then(response => response.json())
//     .then(response => {
//         console.log(response)
//     })

function setLinks(param) {
    document.getElementsByClassName('span')[param].addEventListener('click', () => {
        window.location.href = urls[param]
    })
}

document.getElementById('footer').addEventListener('click', () => {
    window.location.href = "https://github.com/ViniciusRossii"
})