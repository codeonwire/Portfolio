const dumsidashInfoBtn = document.querySelector('.dumsidashInfoBtn')
const dumsidashInfo = document.querySelector('.dumsidashInfo')
const dumsidashInfoCloseBtn = document.querySelector('.dumsidashInfoCloseBtn')



dumsidashInfoBtn.addEventListener('click', () => {
    dumsidashInfo.classList.remove('invisible')
    dumsidashInfo.classList.remove('w-0')
    dumsidashInfo.classList.remove('p-0')
    dumsidashInfo.classList.remove('opacity-0')
    dumsidashInfo.classList.remove('h-0')
    dumsidashInfo.classList.add('p-20')
    dumsidashInfo.classList.add('w-5/12')
    dumsidashInfo.classList.add('max-sm:w-1/2')
    dumsidashInfo.classList.add('max-md:w-2/3')
    dumsidashInfo.querySelector('h3').classList.remove('opacity-0')
})

dumsidashInfoCloseBtn.addEventListener('click', () => {
    dumsidashInfo.querySelector('h3').classList.remove('duration-1000')
    dumsidashInfo.querySelector('h3').classList.add('duration-0')
    dumsidashInfo.classList.add('invisible')
    dumsidashInfo.classList.add('w-0')
    dumsidashInfo.classList.add('p-0')
    dumsidashInfo.classList.add('opacity-0')
    dumsidashInfo.classList.add('h-0')
    dumsidashInfo.classList.remove('p-20')
    dumsidashInfo.classList.remove('w-5/12')
    dumsidashInfo.classList.remove('max-sm:w-1/2')
    dumsidashInfo.classList.remove('max-md:w-2/3')
    dumsidashInfo.querySelector('h3').classList.add('opacity-0')
})