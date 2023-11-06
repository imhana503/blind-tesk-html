document.addEventListener("DOMContentLoaded", (event) => {
  //전체메뉴
  const allMenuAction = () => {
    const btnAllMenuOpen = document.querySelector('.btn-allmenu');
    const btnAllMenuClose = document.querySelector('.all-menu .btn-close');


    //전체메뉴 열기
    btnAllMenuOpen.addEventListener("click", function(e) {
      const allMenu = document.querySelector('.all-menu');
     
      this.setAttribute('aria-expanded', true);
      allMenu.classList.add('is-active');
      allMenu.setAttribute('aria-hidden', false);
    });

    //전체메뉴 닫기
    btnAllMenuClose.addEventListener("click", function() {
      const allMenu = this.closest('.all-menu');

      this.setAttribute('aria-expanded', false);
      allMenu.classList.remove('is-active');
      allMenu.setAttribute('aria-hidden', true);
    });
  }

  const layerPopup = () => {
    const btnLayerOpen = document.querySelectorAll('.openLayerPoup');

    btnLayerOpen.forEach(function(item){
      item.addEventListener('click', function(){
        
        console.log(this)
      });
    })
  }


  //탭메뉴
  const tabAction = () => {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(function(item){
      const array = new Array(item)
      console.log(array)
      array
      
    })
  }

  const fixedBottom = () => {
    console.log('fidxed');
    const fixedBot = document.querySelector('.fixed-bottom');
    const body = document.querySelector('body');

    if( fixedBot ){
      body.classList.add('is-fixed');
    }
    console.log(body);

  }

  //allMenuAction(); //전체메뉴
  // layerPopup();//팝업
  // tabAction();//탭메뉴


  fixedBottom(); //하단 고정 영역시 높이 값 설정
  

});