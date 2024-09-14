const reviewPage = document.querySelectorAll('.control');
const reviewer = document.querySelectorAll('.reviewer');


//page changing logic
reviewPage.forEach((control, index) => {
    control.addEventListener('click', () => {

        for (let i = 0; i < reviewPage.length; i++) {
            if (reviewPage[i].classList.contains('control-active')) {
                reviewPage[i].classList.remove('control-active');
            }
        }
        //display color at current page 
        control.classList.add('control-active');


        //display content of the current page
        reviewer.forEach(() => {
            for (let i = 0; i < reviewer.length; i++) {
                reviewer[i].classList.remove('current');
            }
        });
        reviewer[index].classList.add('current');
    });
});
