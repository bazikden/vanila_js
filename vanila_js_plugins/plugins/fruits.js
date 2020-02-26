const delCard = (id) => {
    fruits = fruits.filter(fruit =>fruit.id !== id)
    cards.destroy()
    cards = $.getFruits(fruits)
}

const _createCard = (fruit,elem) =>{
    const card = document.createElement('div')
    card.classList.add('fruit-card')
    card.insertAdjacentHTML('afterbegin',`
        <div class="card" style="width: 18rem;">
          <img src= ${fruit.img} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${fruit.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button class="btn btn-primary">Look a price</button>
            <button class="btn btn-danger">Delete</button>
          </div>
        </div>
    `)
    const deleteCard = () => {
        delCard(fruit.id)
        delListener(deleteCard)
    }
    const btnDel = card.querySelector('.btn.btn-danger')
        btnDel.addEventListener('click',deleteCard)
    elem.appendChild(card)

    const delListener = (listener) =>{
        btnDel.removeEventListener('click',listener)
    }

    const lookPrice = () =>{
        const item = cards.getInfo(fruit.id)
        console.log(item)
        modal.setInfo(`Цена ${item.title} равна ${item.price}`)
        modal.open()
    }

    const btnLookPrice = card.querySelector('.btn.btn-primary')
    btnLookPrice.addEventListener('click',lookPrice)




}
$.getFruits = function (options) {
        const container = _('div')
        container.classList.add('container')
        document.body.appendChild(container)
        options.forEach(fruit =>{
            const card = _createCard(fruit,container)
        })

    const actions = {
        destroy(){
            container.remove()

        }
    }
    return  Object.assign( actions,{
        getInfo(id){
            const fruit = fruits.find(f => f.id ===id)
            console.log(fruit)
            return fruit
        }
    })

 }