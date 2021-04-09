(function(){

    let prevActiveContent = 1;
    let activeContent = 1;

    const links = document.querySelectorAll('.nav-btn')
    links.forEach(link => {
        link.onclick = function(e) {
            e.preventDefault()
            activeContent = this.getAttribute('data-target')
            showContent()
        }
    })

    function showContent() {
        if(document.querySelector(`.content.active`)) {
            document.querySelector(`.content.active`).classList.remove('active')
        }
        document.querySelector(`.content[data-page="${activeContent}"]`).classList.add('active')

        document.querySelector('.container').classList.remove(`state-${prevActiveContent}`)
        document.querySelector('.container').classList.add(`state-${activeContent}`)
        prevActiveContent = activeContent
    }

    showContent()

})();