//tabs

const tabs = document.querySelectorAll('.tab')
const contents = document.querySelectorAll('.content')
const tabsLabels = document.querySelectorAll('.nav__link')

contents[contents.length-1].style.display = 'block';
tabsLabels[contents.length-1].classList.add('label-active');


tabs.forEach((tab, i) => {
    tab.addEventListener('change', (ev) => {
        if (tab.checked) {
            contents.forEach((el, j) => {
                if (j === i) {
                    el.style.display = 'block'
                    tabsLabels.forEach(label => {
                        label.classList.remove('label-active')
                    })
                    tabsLabels[i].classList.add('label-active')
                } else {
                    el.style.display = 'none'
                }
            })
        }
    })
})

contents[0].setAttribute('checked', 'checked')

//filters

const filtersChoose = document.querySelector('.filters__choose')
const filtersChooseBtn = document.querySelector('.filters__choose-btn')
const filtersCurrent = document.querySelector('.filters__current')

const hideOrShowBlock = (block, btn) => {
    btn.addEventListener('click', () => {
        block.classList.toggle('hide')
    })
}

hideOrShowBlock(filtersCurrent, filtersChoose)
hideOrShowBlock(filtersCurrent, filtersChooseBtn)

//table
const check = document.querySelectorAll('.form-check-input')
const table = document.querySelector('.events__table')
const tr = table.querySelectorAll('tr')

check.forEach((el, i) => {
    el.addEventListener('change', () => {
        tr[i].classList.toggle('checked')
    })
})
