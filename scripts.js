const navbars = document.getElementsByClassName('externalBorderRadiusNavbar')

const navs_array = [...navbars]
navs_array.forEach(navbar => {
    navbar.addEventListener('click', (event)=>{
        
        const clickedOn = event.target
        if (clickedOn.nodeName === 'LI') {

            const already_actives = navbar.getElementsByClassName('active')
            const already_actives_array = [...already_actives]
            
            already_actives_array.forEach(already_active=>{
                already_active.classList.remove('active')
            })

            clickedOn.classList.add('active')

        }
    })
});