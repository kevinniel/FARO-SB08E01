const deleteFlash = () => {
    const buttonElement = document.querySelector('.delete');
    const containerElement = document.querySelector('.notification');

    if(containerElement && buttonElement){
        buttonElement.addEventListener('click', () => {
            containerElement.remove();
        });
    }
}

// dom content loaded
document.addEventListener('DOMContentLoaded', () => {
    deleteFlash();
});