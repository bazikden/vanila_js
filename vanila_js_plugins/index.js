let cards = $.getFruits(fruits)
let modal = $.modal({
    footerButtons: [
        {name: "Ok", type: "secondary",handler(){
            modal.close()
            }}
        ],

})

let modalDel = $.modal({
    footerButtons: [
        {name: "Ok", type: "primary",handler(){
                modalDel.close()
            }},
        {name: "Ok", type: "danger",handler(){
                modalDel.close()
            }}
    ],

})