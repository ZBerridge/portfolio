export const navCloser = {
    methods: {
        closeNav: function() {
            if (document.querySelector('#navbarNav').classList.contains('show')) {
                let navToggle = document.querySelector('[data-target="#navbarNav"');
                navToggle.click();
            }
        }
    }
}