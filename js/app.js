let txtHour = document.querySelector('#hours')
let txtMinutes = document.querySelector('#minutes')
let txtSeconds = document.querySelector('#seconds')
let txtZona = document.querySelector('#zona')



function moveClock(){
  const now = new Date();

  const hours =  now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds()

  /*Proximo cambio (other function)*/
  let zona = 'PM'
    if(hours >= 12 && hours < 24){
      zona = 'PM';
    }else{
      zona = 'AM'
    }

  txtHour.innerHTML = hours;
  txtMinutes.innerHTML = minutes
  txtSeconds.innerHTML = seconds
  txtZona.innerHTML = zona;

  setTimeout("moveClock()", 1000);
}
