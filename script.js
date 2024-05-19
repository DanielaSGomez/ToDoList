const divEnter = document.getElementById('welcome');
const divMenu = document.getElementById('app');
const enterOption = document.getElementById('enter');
const quitOption = document.getElementById('quit');
const classHide = 'hide';


enterOption.addEventListener('click', function(){
    divEnter.classList.add(classHide);
    divMenu.classList.remove(classHide);
});

quitOption.addEventListener('click', function(){
    divMenu.classList.add(classHide);
    divEnter.classList.remove(classHide);
});