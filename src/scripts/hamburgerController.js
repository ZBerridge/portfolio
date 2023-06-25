// apply 'OPEN' status to mobile menu toggler, for updated SVG effect
export default {
    hamburgerFix() {

        function hamburgerListener(){
            let toggler = document.querySelector('.navbar-toggle-btn')
            let hamburger = document.querySelector('.hamburger-icon')
            let navMenu = document.querySelector('#navbarNav')
            document.addEventListener('click', function (e) {
                if(e.target === toggler && hamburger != null){
                    hamburger.classList.toggle('open')
                    navMenu.classList.toggle('open')
                }
            })
        }

        window.addEventListener('load', function () {
            hamburgerListener()
          }, false);

    }
}