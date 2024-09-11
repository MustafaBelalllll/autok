const autok = ['mercedes', 'bmw', 'audi', 'chevrolette', 'subaru', 'ferrai']
function init() {
    document.getElementById('car').innerHTML = autok.map( v =>
        `<div onclick="f('${v}')">${v}</div>`    
    ).join("")
}
function f (a) {
    console.log(a)
}