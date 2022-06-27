export const initModalToggling = () =>{
    const openModal = document.querySelector(".open-modal-btn")
    openModal?.addEventListener("click", function () {
            hideModalWindow();
            showModalWindow(this);
            console.log('123')
        });

    document.querySelector(".modal-hide-btn").addEventListener("click", function () {
            hideModalWindow();
        });

    document.querySelector('.modal-window').addEventListener(
        "click",
        function (event) {
            if (
                event.target.matches(".button-close-modal") ||
                !event.target.closest(".modal-window__modal-form")
            ) {
                hideModalWindow();
            };
        },
        false 
    );
    
    function showModalWindow () {
        document.body.style.overflow='hidden';
        document.querySelector(".modal-window").style.display='flex';
    };
    
    function hideModalWindow () {
        document.body.style.overflow='scroll';
        document.querySelector(".modal-window").style.display='none';
        document.querySelector('.success-text').style = 'display: none';
        document.querySelector(".mail-input-error").innerHTML = '';
        document.querySelector(".mail-modal-input").style = 'background: #F2F2F2';
        document.querySelector(".name-input-error").innerHTML = '';
        document.querySelector(".name-modal-input").style = 'background: #F2F2F2';
        document.querySelector(".text-input-error").innerHTML = '';
        document.querySelector(".text-modal-input").style = 'background: #F2F2F2';
    };
};



