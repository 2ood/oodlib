# Event Listener

### addEventListener
선택한 element 가 사람이 행하는 event 에 반응하게 하는 함수. 
해당 event를 기다리고 있다가, 해당 event 가 들리면 명시된 함수를 실행시키라는 명령문. 

형식은 다음과 같다. 
```
<element>.addEventListener("<event-name>",<name of function to be executed>);
```
```js
const button = document.querySelector("#button");
button.addEventListener("click",onclickfunction);

function onclickfunction(evt) {
    const src = evt.srcElement;
    if(src.classList.contains("white-font")) src.classList.remove("white-font");
    else src.classList.add("white-font");
    
    //src.classList.toggle("white-font");
}
```