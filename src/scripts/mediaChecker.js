export default {
    showBody() {
        let pageBody = document.querySelector('body')
        let mainCss = document.querySelector('#main_css')
        
        let startCheck = setInterval(mediaCheck, 100)
        function mediaCheck(){
            let mediaCss = mainCss.getAttribute('media')
            if(mediaCss == 'all'){
                clearInterval(startCheck)
                pageBody.style.removeProperty('display')
            }
        }
    }
}