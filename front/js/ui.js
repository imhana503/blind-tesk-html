document.addEventListener("DOMContentLoaded", (event) => {

  //https://codepen.io/inyoung/pen/pwBXxz
  const layerPopupAction = () => {
    const btnLayerOpen = document.querySelectorAll('.btn-open-popup');

    btnLayerOpen.forEach(function(_btnLayerOpens){
      _btnLayerOpens.addEventListener('click', function(e){
        targetId = e.target.getAttribute('data-popup-id');
        const btnLayerClose = document.querySelector(`#${targetId}`).querySelectorAll('.btn-popup-close');

        document.querySelector(`#${targetId}`).classList.add('is-active');
        //팝업답기
        btnLayerClose.forEach(function(_btnLayerCloses){
          _btnLayerCloses.addEventListener('click', function(){
            document.querySelector(`#${targetId}`).classList.remove('is-active');
          })
        })
      });
    });
  }


  //탭메뉴
  const tabAction = () => {
    const dataTabs = document.querySelectorAll('[data-element="tab"]');

    dataTabs.forEach(function(dataTab){
      const btnTabs = dataTab.querySelectorAll('.tab-list>li>a');

      btnTabs.forEach(function(_btnTabs){
        _btnTabs.addEventListener('click', function(e){    
          if( e.target.closest('li').classList.contains('is-active') ){
            return;
          }

          e.target.closest('.tab-list').querySelectorAll('li').forEach(function(_tabLists){
           
              if( !_tabLists.classList.contains('is-active') ){                
                _tabLists.classList.add('is-active');
                _tabLists.querySelector('a').setAttribute('aria-selected', true);
                _tabLists.querySelector('a').setAttribute('tabindex', 0);
              } else {
                _tabLists.classList.remove('is-active');
                _tabLists.querySelector('a').setAttribute('aria-selected', false);
                _tabLists.querySelector('a').setAttribute('tabindex', -1);
              }             
          });

          const tabPanel = e.target.closest('.tab').querySelectorAll('.tab-panel');
          const arrayTabList = [...e.target.closest('.tab-list').querySelectorAll('li')];
          const idx = arrayTabList.findIndex(node=>node.classList.contains('is-active'));

          tabPanel.forEach(function(_tabPanels){
            _tabPanels.classList.remove('is-active');
            console.log(_tabPanels,idx)
          });
          tabPanel[idx].classList.add('is-active');
        });
      });
    })
  }

  //하단고정  
  const fixedBottomAction = () => {  
    const fixedBot = document.querySelector('.fixed-bottom');
    const content = document.querySelector('#content');
    const introSection = document.querySelectorAll('.section.intro');

    if( fixedBot ){  
      const fixedBotHeight = fixedBot.offsetHeight;
      content.style.paddingBottom = fixedBotHeight+'px';

      console.log(introSection.length)

      if( introSection.length < 0 ){
        content.style.paddingBottom = 0;
        introSection.forEach(function(_introItems, _idx){
          _introItems.style.paddingBottom = fixedBotHeight+'px';
        })
      }
    }
  }

  //관심상품 
  const favorAction = () => {
    const btnFavor = document.querySelectorAll('.btn-favor');

    btnFavor.forEach(function(_btnFavorItems, _idx){
      const parentLink = _btnFavorItems.closest('.product-list-link');

      _btnFavorItems.addEventListener('click', function(e){
        e.preventDefault();
        if( !parentLink.classList.contains('is-active') ){
            parentLink.classList.add('is-active');
            _btnFavorItems.setAttribute('aria-pressed', true);
            
        } else {
            parentLink.classList.remove('is-active');
            _btnFavorItems.setAttribute('aria-pressed', false);
        }
      });
    })
  } 

  //수량버튼
  const controlQtyAction = () => {
    const controlQty = document.querySelectorAll('.control-qty');

    controlQty.forEach(function(_controlQtys){
      const btnMinus = _controlQtys.querySelector('.btn-minus');
      const btnPlus = _controlQtys.querySelector('.btn-plus');
      const inputNum = _controlQtys.querySelector('input');

      btnMinus.addEventListener('click', function(){
        const min = parseInt(inputNum.getAttribute('min'));
        let value = parseInt(inputNum.getAttribute('value'));
        min+1 < value ? value -= 1 : min;
        inputNum.setAttribute('value', value);
        inputNum.setAttribute('aria-label', `현재 수량 ${value}개`);
      });

      btnPlus.addEventListener('click', function(){
        const max = parseInt(inputNum.getAttribute('max'));
        let value = parseInt(inputNum.getAttribute('value'));
        max > value ? value += 1 : max;
        inputNum.setAttribute('value', value);
        inputNum.setAttribute('aria-label', `현재 수량 ${value}개`);
      });
    })
  }

  
  tabAction();//탭메뉴
  fixedBottomAction(); //하단 고정 영역시 높이 값 설정
  favorAction(); //관심상품
  layerPopupAction();//팝업
  controlQtyAction();//수량버튼
});