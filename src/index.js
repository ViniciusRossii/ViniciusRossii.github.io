// Variáveis

var div
const links = []

fetch('src/repo.json')
    .then(response => response.json())
    .then(response => {
        for (var c = 0; c < response.sites.length; c++) {
            links.push(response.sites[c].link)
            if (c % 2 == 0) {
                div = document.createElement('div')
                div.classList.add("content")
                document.getElementById('container').appendChild(div)
            }
            const span = document.createElement('span')
            span.classList.add('span')
            span.innerHTML = response.sites[c].name
            div.appendChild(span)
            setLinks(c)
        }
    })

function setLinks(param) {
    document.getElementsByClassName('span')[param].addEventListener('click', () => {
        window.location.href = links[param]
    })
}

document.getElementById('footer').addEventListener('click', () => {
    window.location.href = "https://github.com/ViniciusRossii"
})