const dataList = [
    {
        id:1,
        menuName:'인트로 - 첫화면 진입(비회원)',
        menuUrl:'intro',
        menuState:'완료'
    },
    {
        id:2,
        menuName:'인트로 - 첫화면 회원가입 방법 선택',
        menuUrl:'intro=member',
        menuState:'완료'
    },
];

const table = document.querySelector('#data-table');
const tr = document.createElement('tr');
const td = document.createElement('td');


const test = dataList.map(function(item){
    table.appendChild(tr);
    table.querySelector('tr').append(td);
 
    console.log()
})

console.log(table)


    
       
   
