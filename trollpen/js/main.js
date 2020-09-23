//타임라인만들기

(function(){
    const sceneInfo = [
        //스크롤섹션 객체 4개
        //애니매이션효과  sticky, 없는애 normal
        {
            //0
            type:'sticky',
            heightNum:5, //브라우저높이의5배로 scrollheight세팅
            scrollHeight: 0,
            objs:{
                container: document.querySelector('#scroll-section-0')
            }

        
        },
        {
            //1
            type:'normal',
            heightNum:5, 
            scrollHeight: 0,
            objs:{
                container: document.querySelector('#scroll-section-1')
            }

        
        },
        
        {
            //2
            type:'sticky',
            heightNum:5, 
            scrollHeight: 0,
            objs:{
                container: document.querySelector('#scroll-section-2')
            }

        
        },
        {
            //3
            type:'sticky',
            heightNum:5, 
            scrollHeight: 0,
            objs:{
                container: document.querySelector('#scroll-section-3')
            }

        
        }
    ];

    function setLayout(){
        //각스크롤섹션 높이세팅
        for (let i=0; i< sceneInfo.length; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }
    }
    window.addEventListener('resize',setLayout);

    setLayout();

})();//감싸고,함수바로호출됨