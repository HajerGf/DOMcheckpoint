
let likes= document.querySelectorAll('.like')
let minus= document.querySelectorAll('.minus-btn')
let plus= document.querySelectorAll('.plus-btn')
let quantity= document.querySelectorAll('.Quant')
let close= document.querySelectorAll('.delete')
let unitprices= document.querySelectorAll('.price')
let totalPrice= document.querySelector('#finalPrice')

total()
for (let i = 0; i < likes.length; i++) {
    // like
    likes[i].addEventListener('click', function() {
        if (likes[i].style.color === "red") {
            likes[i].style.color = "black"
        }
        else {likes[i].style.color = "red"}
    })
    
    // plus
    plus[i].addEventListener('click', function() {
        quantity[i].value++
        total()
    })

    // moins
    minus[i].addEventListener('click',function(){
        if (quantity[i].value > 1) {quantity[i].value--}
        total()
    })

    // delete
    close[i].addEventListener('click', function(){
        close[i].parentElement.remove()
        total()
    })
}

function total() {
    let unitprices = document.querySelectorAll('.price')
    let quantity = document.querySelectorAll('.Quant')

    let sum = 0
    for (let i = 0; i < quantity.length; i++) {
        sum+= quantity[i].value * unitprices[i].innerText
    }
    totalPrice.value=sum
}

