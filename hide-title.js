const DivContainer = document.querySelector('.title');

let isClicked = true;

let Hide_Show = function(){
    if(isClicked){
        DivContainer.style.display = 'none';
        isClicked = false;
    }else{
        DivContainer.style.display = 'block';
        isClicked = true;
    }

}