// poem
var words=[
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny',
    'destiny'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '今晚，整片星空将为你一人闪烁';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '从前有个沙雕';
        texttwo.innerHTML = '大家都以为她是沙雕';
        textthree.innerHTML = '其实她就是你哈哈哈哈哈哈';
      },112500)


 
