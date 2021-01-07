const time = document.getElementById('time');

const targetDate = new Date().getTime()+15*1000;
timer();

function timer(){
  const currentDate = new Date();
  const leftTime = ((targetDate - currentDate.getTime())/1000).toFixed(0) ;

  if(leftTime <= 0){
    time.textContent ='15초가 지났습니다';
    return;
  }
  time.textContent = `${leftTime}`;

  requestAnimationFrame(timer);
}