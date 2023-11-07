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
    const dataTabs = document.querySelectorAll('[data-element="tab"]');

    dataTabs.forEach(function(dataTab){
      const btnTabs = dataTab.querySelectorAll('.tab-list>li>a');

      btnTabs.forEach(function(btnTab){
        btnTab.addEventListener('click', function(e){
          const target = e.target;
          const tabPanel = target.closest('.tab').querySelectorAll('.tab-panel');

          target.closest('.tab-list').querySelectorAll('li').forEach(function(li){
            li.classList.remove('is-active');
            li.querySelector('a').setAttribute('aria-selected', 'false');
            li.querySelector('a').setAttribute('tabindex', -1)
          })
          
          target.setAttribute('aria-selected', 'true');
          target.closest('li').classList.add('is-active');
          li.querySelector('a').setAttribute('tabindex', 0)

          const nodes = [...e.target.closest('.tab-list').querySelectorAll('li')];
          const idx = nodes.findIndex(node=>node.classList.contains('is-active'));

          tabPanel.forEach(function(panel){
            panel.classList.remove('is-active');
          })
          tabPanel[idx].classList.add('is-active');
        });


        //탭 포커스 이동
        let keyIdx = 0;
        btnTab.addEventListener('keydown', function(e){
          console.log(e.keyCode);

          if( e.keyCode === 39 ){
            const target = e.target;
            const nodes = [...e.target.closest('.tab-list').querySelectorAll('li')];
            nodes[keyIdx].classList.add('is-active');
            nodes[keyIdx].querySelector('a').setAttribute('tabindex', 0);
            nodes[keyIdx].querySelector('a').focus();
            keyIdx = keyIdx+=1;

            return;
          } 

          if( e.keyCode === 37 ){
            const target = e.target;
            const nodes = [...e.target.closest('.tab-list').querySelectorAll('li')];
            nodes[keyIdx].classList.add('is-active');
            nodes[keyIdx].querySelector('a').focus();
            keyIdx = keyIdx-=1;

            return;
          } 
        })
      })

     
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
  tabAction();//탭메뉴
  //fixedBottom(); //하단 고정 영역시 높이 값 설정
  

});