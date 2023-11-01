document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    const allMenu = () => {
      const btnAllMenu = document.querySelector('.all-menu');
      console.log(btnAllMenu);
      btnAllMenu.addEventListener('click', function(){
        console.log('aa')
      });
    }


    allMenu(); //전체메뉴
    
});