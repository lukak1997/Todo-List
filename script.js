const input = document.querySelector('.main-input')
const addBtn = document.querySelector('.btn-one')
const mainDiv = document.querySelector('.row-box')
const btn = document.querySelectorAll('.fa-solid')
const clearBtn = document.querySelector('.btn-two')

window.addEventListener('click', (e) => {

    if (e.target.className.includes('btn-one')) {
        if (input.value) {

            let newRow = document.createElement('div')
            mainDiv.prepend(newRow)
            newRow.classList.add('row')

            let newInput = document.createElement('input')

            newInput.setAttribute('type', 'text')
            newInput.classList.add('edit-input')
            newInput.setAttribute('value', input.value)
            newInput.setAttribute('readonly', 'readonly')
            newRow.prepend(newInput)

            let iconDiv = document.createElement('div')
            iconDiv.classList.add('.box-two')
            newRow.append(iconDiv)
            let iconAdd = document.createElement('i')
            let iconEdit = document.createElement('i')
            let iconRemove = document.createElement('i')
            iconAdd.classList.add('fa-solid')
            iconAdd.classList.add('fa-circle-check')
            iconEdit.classList.add('fa-solid')
            iconEdit.classList.add('fa-pen-to-square')
            iconEdit.classList.add('firstClick')
            iconRemove.classList.add('fa-solid')
            iconRemove.classList.add('fa-circle-xmark')


            iconDiv.prepend(iconAdd, iconEdit, iconRemove)
            input.value = ''
        }
    }

    if (e.target.className.includes('fa-circle-check')) {
        e.target.parentElement.parentElement.firstChild.classList.toggle('underlined')
    }

    if (e.target.className.includes('fa-circle-xmark')) {
        e.target.parentElement.parentElement.remove()
    }

    if (e.target.className.includes("firstClick")) {
        let finalInput = e.target.parentElement.parentElement.firstChild
        finalInput.removeAttribute('readonly')
        finalInput.setAttribute('value', finalInput.value)
        e.target.classList.remove('firstClick')
        e.target.classList.add('secondClick')



    } else if (e.target.className.includes('secondClick')) {
        let finalInput = e.target.parentElement.parentElement.firstChild

        finalInput.setAttribute('readonly', 'readonly')
        e.target.classList.remove('secondClick')
        e.target.classList.add('firstClick')


    }

    if (e.target.className.includes('btn-two')) {
        document.querySelectorAll('.row').forEach(el => {
            el.remove()
        })
    }

})