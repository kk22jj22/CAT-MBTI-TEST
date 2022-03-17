const arry = [
    {
        q : "Q1. 어느날 갑자기 고양이로 변하면 어떨 것 같아?",
        a1 : "말도 안되는 소리 하네. 그런 고민을 왜 해?",
        a2 : "우리집 앞 길냥이랑 무슨 얘기부터 하지? 고양이가 되면 뭘 먹고 살아? 상상 시작!",
        r1 : "S",
        r2 : "N"
    }, {
        q : "Q2. 어라..? 자고 일어났는데 진짜 고양이로 변해버렸다! 나가서 상황을 파악해봐야 할 것 같은데..",
        a1 : "짐가방에 뭐가 필요할지 리스트를 작성하고, 챙겨 나간다",
        a2 : "일단 나가봐야 알지!",
        r1 : "J",
        r2 : "P"
    }, {
        q : "Q3. 저 멀리에 고양이로 변한 듯한 사람이 보인다. 어떻게 하지?",
        a1 : "곧장 가서 말을 걸어본다",
        a2 : "다가오길 기다린다",
        r1 : "E",
        r2 : "I"
    }, {
        q : "Q4. 얘기해보니 나와 똑같은 상황이다. 갑자기 내 앞의 고양이가 울기 시작하는데..?",
        a1 : "어떡하지.. 나도 돌아가고 싶어.. 수도꼭지 콸콸",
        a2 : "울 시간이 없어! 방법을 찾아보자",
        r1 : "F",
        r2 : "T"
    }, {
        q : "Q5. 일단 친구가 된 고양이와 밥부터 먹자. 메뉴 선정은..?",
        a1 : "나는 상관없어! 너 먹는거 따라갈래..",
        a2 : "촉촉한 참치캔 어때! 아니면 연어?!",
        r1 : "I",
        r2 : "E"
    }, {
        q : "Q6. 참치캔을 따서 먹는데 안에서 큰 가시가 나왔다",
        a1 : "가서 따져 묻고 환불 받아야지!",
        a2 : "가시 발라내고 그냥 먹자.. 얼굴 붉히기 싫어..",
        r1 : "T",
        r2 : "F"
    }, {
        q : "Q7. 다 먹고나서는 뭐할까?",
        a1 : "일단 날도 좋은데 나가서 생각하자!",
        a2 : "저 공원 앞 벤치에서 3시까지 일광욕좀 하고, 그다음에 쮸르쮸르 하나 먹으러 갈까?",
        r1 : "P",
        r2 : "J"
    }, {
        q : "Q8. 친구 고양이가 오늘 너무 즐거웠다고 말한다. 내일도 만나자고 하는데?",
        a1 : "아 내일은 좀 힘들 것 같아..(좀 쉬고싶어)",
        a2 : "엇 좋아좋아! 내일은 어디 가볼까?!",
        r1 : "I",
        r2 : "E"
    }, {
        q : "Q9. 일단 다시 집으로 왔다. 그런데 앞으로 어쩌지?",
        a1 : "자고 일어나면 해결되어있을지도! 일단 자자.",
        a2 : "만약 내일도 이 상태가 유지된다면, ... 계획을 짠다.",
        r1 : "P",
        r2 : "J"
    }, {
        q : "Q10. 멀리서 들려오는 알람소리! 이 모든게 꿈이었다니",
        a1 : "너무너무 생생한 꿈이었어! 재밌었지만 꿈이 아니었다면 큰일날 뻔 했어ㅠㅠ",
        a2 : "무슨 꿈을 꾼 것 같기도.. 빨리 씻어야지.",
        r1 : "F",
        r2 : "T"
    }, {
        q : ""
    }
]   

let pageIndex = 0;
let totresult = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let MBTIResult = [];
let opacity = 0;
let opacity2 = 0;
let interval;

const start = document.getElementById('main-start');
const progress = document.getElementById('test-progress');
const q = document.getElementById('test-question');
const a1 = document.getElementById('test-answer-1');
const a2 = document.getElementById('test-answer-2');
const mbti = document.getElementById('mbti-result-title');
const mbtides = document.getElementById('mbti-description');
const goodcouple = document.getElementById('goodcouple');
const badcouple = document.getElementById('badcouple');
const share = document.getElementById('share');
const restart = document.getElementById('restart');
const testcontainer = document.getElementById('test-container');
const resultPage = document.getElementById('result-page');

window.onload = function() {

    TestPage();
    hiddenView();

    let interval2 = setInterval(function() {
        if(opacity2 <= 1) {
            testcontainer.style.opacity = opacity2;
            opacity2 += 0.1;
        } else {
            clearTimeout(window.interval2);
        }
    }, 50);

    a1.addEventListener("click", function() {
        TestPage();

        totresult[pageIndex-2] = arry[pageIndex-2]['r1'];

        resultView();
        MBTICount();
    });

    a2.addEventListener("click", function() {
        TestPage();

        totresult[pageIndex-2] = arry[pageIndex-2]['r2'];

        resultView();
        MBTICount();
    }); 

    share.addEventListener("click", function() {        
        urlCopy();
    })
}

function TestPage(){
    pageIndex ++;   
    opacity2 = 0;
   
    if(pageIndex > 1) {
        let interval3 = setInterval(function() {
            progress.value = (pageIndex) * 10;
            q.textContent = arry[pageIndex-1]['q'];
            a1.textContent = arry[pageIndex-1]['a1'];
            a2.textContent = arry[pageIndex-1]['a2'];
        }, 100);
    }  
}

function MBTICount() {
    let Ifilter = totresult.filter(item => item === 'I');
    let Efilter = totresult.filter(item => item == 'E');
    let Nfilter = totresult.filter(item => item == 'N');
    let Sfilter = totresult.filter(item => item == 'S');
    let Tfilter = totresult.filter(item => item == 'T');
    let Ffilter = totresult.filter(item => item == 'F');
    let Pfilter = totresult.filter(item => item == 'P');
    let Jfilter = totresult.filter(item => item == 'J');
    let cat = ['코리안 숏헤어', '노르웨이숲', '아비시니안', '샴고양이'];

    mbti.style.fontWeight = 'bold';

    if (Efilter.length > Ifilter.length) {
        MBTIResult[0] = 'E';
    } else {
        MBTIResult[0] = 'I';
    }
    
    if (Nfilter.length > Sfilter.length) {
        MBTIResult[1] = 'N';
    } else {
        MBTIResult[1] = "S";
    }

    if (Ffilter.length > Tfilter.length) {
        MBTIResult[2] = 'F';
    } else {
        MBTIResult[2] = 'T';
    }

    if (Jfilter.length > Pfilter.length) {
        MBTIResult[3] = 'J';
    } else {
        MBTIResult[3] = 'P';
    }

    switch(MBTIResult[0]+MBTIResult[3]) {
        case 'IP' :
            mbti.textContent = '당신은 '+cat[0]+' 입니다';
            mbtides.textContent = '낯가림이 조금 있지만, 친해지면 누구보다 똥꼬발랄한 장난꾸러기에요!';
            goodcouple.textContent = '환상의 궁합\n'+cat[2];
            badcouple.textContent = '환장할 궁합\n'+cat[1];
            break;

        case 'IJ' :
            mbti.textContent = '당신은 '+cat[1]+' 입니다';
            mbtides.textContent = '영리하고 계획적이며, 과묵한 타입이에요. 조용히 혼자 일하는 것을 좋아해요';
            goodcouple.textContent = '환상의 궁합 '+cat[3];
            badcouple.textContent = '환장할 궁합 '+cat[2];
            break;

        case 'EP' :
            mbti.textContent = '당신은 '+cat[2]+' 입니다';
            mbtides.textContent = '낯가림 그게 뭐야? 활동적이고 애교가 많으며 즉흥적인 수다쟁이에요!';
            goodcouple.textContent = '환상의 궁합 '+cat[0];
            badcouple.textContent = '환장할 궁합 '+cat[1];
            break;

        case 'EJ' :
            mbti.textContent = '당신은 '+cat[3]+' 입니다';
            mbtides.textContent = '외향적이고 상냥하고, 모임 안에서 주도적으로 이끄는 멋진 리더에요!';
            goodcouple.textContent = '환상의 궁합 '+cat[1];
            badcouple.textContent = '환장할 궁합 '+cat[2];
            break;

        default :
            break; 
    }
}

function resultView() {    
    if(pageIndex >= 11) {
        progress.style.display = 'none';
        q.style.display = 'none';
        a1.style.display = 'none';
        a2.style.display = 'none';
        mbti.style.display = 'flex';
        mbtides.style.display = 'flex';
        goodcouple.style.display = 'flex';
        badcouple.style.display = 'flex';
        share.style.display = 'flex';
        restart.style.display = 'flex';

        opacityView();
    }
}

function hiddenView() {
    mbti.style.display = 'none';
    mbtides.style.display = 'none';
    goodcouple.style.display = 'none';
    badcouple.style.display = 'none';
    share.style.display = 'none';
    restart.style.display = 'none';
}

function opacityView() {
    interval = setInterval(function() {
        if(opacity <= 1) {
            resultPage.style.opacity = opacity;
            opacity += 0.1;
        } else {
            clearTimeout(window.interval);
        }
    }, 100);
}

function urlCopy() {
    let url = '';
    var textarea = document.createElement('textarea');
    document.body.appendChild(textarea);

    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('url이 복사되었습니다!');
}