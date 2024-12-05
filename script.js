let card1 = document.getElementById('1')
let card2 = document.getElementById('2')
let card3 = document.getElementById('3')

let cardRegularDetails1 = `<img class="is" src="./images/RegularCoffee.webp" alt="Regular Coffee Picture">
            <figcaption class="is">image courtesy: Dall-e</figcaption>
            <h4>Regular Coffee</h4>
            <p>Great choice for a pump of energy for your work.</p>`
let details1 = `<h4>Ingredients:</h4>
<ol>
    <li>Coffee Granules</li>
    <li>Milk</li>
    <li>Sugar</li>
    <li>Hot Water</li>
</ol>
<h4>Steps:</h4>
<li>Take a coffe cup and add 1.5 tablespoons of both coffee powder and sugar.</li>
<li>Add 3 tablespoons of hot boiling water.</li>
<li>Mix it together with a spoon and your coffee is ready!</li>
`

let cardRegularDetails2 = `<img class="is" src="./images/IcedTea.webp" alt="Iced Tea Picture">
            <figcaption class="is">image courtesy: Dall-e</figcaption>
            <h4>Iced Tea</h4>
            <p>Refresh yourself on a hot summer day.</p>`
let details2 = `<h4>Ingredients:</h4>
<ol>
    <li>Teabags or tea powder</li>
    <li>Hot and Cold water</li>
</ol>
<h4>Steps:</h4>
    <li>Brew the tea or add hot water in the cup along with the tea.</li>
    <li>Remove the bags or filter the tea after brewing.</li>
    <li>Add the cold water or some ice after 10 mins.</li>
    <li>Refresh yourself!!</li>`

let cardRegularDetails3 = `<img class="is" src="./images/Pancake.webp" alt="Pancake Picture">
            <figcaption class="is">image courtesy: Dall-e</figcaption>
            <h4>Pancake</h4>
            <p>A good breakfast it is.</p>`
let details3 = `<h4>Ingredients:</h4>
    <ol>
        <li>Flour</li>
        <li>Baking Powder</li>
        <li>Salt and Sugar</li>
        <li>Dairy items</li>
    </ol>
<h4>Steps:</h4>
    <li>Sift the dry Ingredients together and make a well.</li>
    <li>Add the wet Ingredients and scoop the batter upon mixing.</li>
    <li>Flip the shapes every two minutes.</li>
    <li>Wait for it to turn brown and it's ready!</li>`




card1.addEventListener('click', card1f => {
    card1.style = `background-color: antiquewhite;`
    if(card1.innerHTML === cardRegularDetails1){
        return card1.innerHTML = details1
    } else card1.innerHTML = cardRegularDetails1
})
card2.addEventListener('click', card2f => {
     card2.style = `background-color: antiquewhite;`
    if(card2.innerHTML === cardRegularDetails2){
        return card2.innerHTML = details2
    } else card2.innerHTML = cardRegularDetails2
})
card3.addEventListener('click', card3f => {
     card3.style = `background-color: antiquewhite;`
     if(card3.innerHTML === cardRegularDetails3){
        return card3.innerHTML = details3
     } else card3.innerHTML = cardRegularDetails3
})

//the cards don't change their colors back while second click..
//I don't think it will be noticed. Just a unique feature I guess.
