const dumsidashInfoBtn = document.querySelector('.dumsidashInfoBtn')
const dumsidashInfo = document.querySelector('.dumsidashInfo')
const dumsidashInfoCloseBtn = document.querySelector('.dumsidashInfoCloseBtn')



dumsidashInfoBtn.addEventListener('click', () => {
    dumsidashInfo.classList.remove('invisible')
})

dumsidashInfoCloseBtn.addEventListener('click', () => {
    dumsidashInfo.classList.add('invisible')
})