//IA 리스트
function iaListAction(){
    const dataTable = document.querySelector('#data-table tbody');

    if( dataTable !== null ){
        dataHtmlList.map(function(_dataHtmlList, _idx){
            //tr 태그 생성
            const createTagTr = document.createElement('tr');
            dataTable.append(createTagTr);

            //dataHtmlList 값
            const objValue = Object.values(_dataHtmlList);
            objValue.map(function(_objValue, _objIdx){
                //td 태그 생성
                const createTagTd = document.createElement('td');
                createTagTd.textContent = _objValue;

                const targetTr = dataTable.querySelectorAll('tr');
                targetTr.forEach(function(_targetTrs){
                    _targetTrs.append(createTagTd);
                });
            });

            //a 태그 생성
            const targetTr = dataTable.querySelectorAll('tr');
            const createTagA = document.createElement('a');
            const tdValue = targetTr[_idx].querySelectorAll('td')[2].textContent;
            targetTr[_idx].querySelectorAll('td')[2].innerHTML = '';
            targetTr[_idx].querySelectorAll('td')[2].append(createTagA);    
            targetTr[_idx].querySelectorAll('td')[2].querySelector('a').setAttribute('href', tdValue);
            targetTr[_idx].querySelectorAll('td')[2].querySelector('a').setAttribute('target', '_blank');
            targetTr[_idx].querySelectorAll('td')[2].querySelector('a').textContent = tdValue;

            
            targetTr[_idx].insertAdjacentHTML('afterbegin', `<td>${_idx+1}</td>`);

            //td태그 클래스 'align-left' 정렬 추가  
            const dataTh = document.querySelectorAll('#data-table thead th');
            
            dataTh.forEach(function(_dataThs, _dIdx){
                if( _dataThs.textContent == '메뉴' || _dataThs.textContent == '화면ID' ||   _dataThs.textContent == '링크' ||  _dataThs.textContent == '비고' ){
                    targetTr[_idx].querySelectorAll('td')[_dIdx].classList.add('align-left')
                }
            })
        });

        
        
    }

    
}

//IA 리스트 필터링
function progressAction(){
    const dataFilter = document.querySelector('#data-filter');
    if( dataFilter !== null ){
        const total = dataFilter.querySelector('.total>em');
        const state = dataFilter.querySelector('.state>em');
        const progress = dataFilter.querySelector('.progress>em');
        
        let array = [];
        let complete;

        dataHtmlList.map(function(_dataHtmlLists,_idx){
            array.push(_dataHtmlLists.menuState);
            complete = array.filter( completes => completes === '완료' )
        });
     
        total.textContent = dataHtmlList.length; //총 페이지
        state.textContent = complete.length; // 완료 페이지
        progress.textContent = `${(complete.length/dataHtmlList.length) * 100} %`; //진척률
    }
} 

//aside menu
function asideMenuAction(){
    const btnAside = document.querySelector('.guide-aside .btn-menu');

    if( btnAside !== null ){
       
        btnAside.addEventListener('click', function(e){
            const container = e.target.closest('#guide-container');            
            container.classList.toggle('is-active');
        });

        const btnMenu = document.querySelectorAll('.guide-aside .list-sub>li>a');
        const headerHeight = document.querySelector('.guide-header').offsetHeight;

        btnMenu.forEach(function(_btnMenus){
            _btnMenus.addEventListener('click', function(e){
                targetSection = e.target.getAttribute('data-id');
                targetPso = document.querySelector(`#${targetSection}`).offsetTop;
               
                window.scroll({
                    left: 0,
                    top: targetPso - headerHeight,
                    behavior: "smooth"
                });
            })
        })

      
    }
}  

iaListAction();//IA 리스트
progressAction();//IA 리스트 필터링
asideMenuAction(); //왼쪽메뉴

   
