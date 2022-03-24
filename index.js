/*
1. 함수만들기 - 센서값 생성함수

- 1) temp가 랜덤으로 만들어지는 함수를 이용해서 25 ~ 30정도의 랜덤 온도를 생성 + 반환값이 integer, Number이어야 함. 

- 2) humi가 랜덤으로 만들어지는 함수를 이용해서 70 ~ 90정도의 랜덤 습도를 생성 + 반환값이 70%, 90% 등 String 이어야 함. 

- 3) 위 함수들을 이용해 10개의 요소를 담는 배열을 만드는 함수. `({temp : x, humi : y})` 이런꼴이 되겠죠? 

​
2. 함수만들기 - 센서값 추출함수

- 1) 10개의 센서값들을 이용해 그 배열 중 최대 온도와 습도를 가진 값을 각각 출력해보자. 출력형식은 `최대온도 : x`와 `최대습도 : y`가 되어야 한다. 

- 2) 총 3가지의 함수를 만든다. 이 때 1. reduce를 이용할 것. 2. for문을 이용할 것. 3.forEach를 이용한 함수를 이용해서 다양하게 만들어야 한다. 


3. 바인딩

- 이 값들을 만들었다면 이제 이 것들을 화면에 표출하는 것을 만들어보자. 

- html에 이쁘게 표기가 되어야 한다.
 */


function temp(){
  let min = 25;
  let max = 30;
  return Math.floor(Math.random() * (max - min)) + min; 
}

function humi(){
  let min = 60;
  let max = 70;
  return Math.floor(Math.random() * (max - min)) + min;
}

const table = [];

for(let i=0; i < 10; i++){
  table.push({temp:temp(),humi:humi()});
}


const tempArr = [];
const humiArr = [];

table.forEach(e => {
  tempArr.push(e.temp);
  humiArr.push(e.humi);
});

// const maxTemp = tempArr.reduce(1);
// const maxHumi = humiArr.reduce(1);

// console.log(maxTemp);
// console.log(maxHumi);