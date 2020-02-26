function none() {}

const _createFooter = function (options) {
    if(options.footerButtons){
        const footer = document.createElement('div')
        footer.classList.add('modal-footer')
        options.footerButtons.forEach(btn =>{
            const $btn = document.createElement('button')
            $btn.innerText = btn.name
            $btn.classList.add('btn')
            $btn.classList.add('btn-'+btn.type)
            $btn.onclick = btn.handler || none
            footer.appendChild($btn)
        })
        return footer
    }

}

const _createModal = function(options){
    const wrapper = document.createElement('div')
    wrapper.classList.add('my-modal')
    wrapper.insertAdjacentHTML('afterbegin',`
        <div class="modal-wrapper" data-close="true">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">Modal Title</span>
                    <div class="modal-close-wrapper" >
                        <span class="modal-close" data-close= "true">&times;</span>                    
                    </div>

                </div>
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

        </div>
    `)
    const footer = _createFooter(options)
    wrapper.firstElementChild.firstElementChild.appendChild(footer)
    document.body.appendChild(wrapper)
    return wrapper
}


$.modal = function (options) {
    const $modal = _createModal(options)
    const add =  function (className) {
        $modal.classList.add(className)
    }

    const remove =  function (className) {
        $modal.classList.remove(className)
    }
    const modal = {
        open(){
            add('open')
        },
        close(){
            const ANIMATION_TIME = 1000
            remove('open')
            add('hiding')
            setTimeout(()=>{
                $modal.classList.remove('hiding')
            },ANIMATION_TIME)
        },
        swing(){
            add('rotate-left')
            setTimeout(()=>{
                remove('rotate-left')
                add('rotate-right')
                setTimeout(()=>{
                    remove('rotate-right')
                    add('rotate-end')
                    setTimeout(()=>{remove('rotate-end')},300)
                },300)
            },300)

        },
        setInfo(options){
            const modal = $modal.querySelector('.modal-body')
            modal.innerHTML = options
        }
    }

    const listener = e =>{
        e.target.dataset.close  && modal.close()
    }
    $modal.addEventListener('click',listener)
    return modal

}