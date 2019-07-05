let completeBtns = Array.from(document.getElementsByClassName("btn-complete"));
completeBtns.forEach(element => {
    element.addEventListener("click", deleteItem);
});

function deleteItem() {
    this.parentElement.parentElement.style.display = 'none';
}


//onclick="this.parentElement.parentElement.style.display = 'none';"