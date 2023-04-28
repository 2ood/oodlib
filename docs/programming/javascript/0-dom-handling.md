# DOM handling

### JS 에서 id & class
js 에서 element 선택 함수들을 통해 HTML 상의 element들을 JS에서 지목할 수 있다. 

element 선택함수에는 대표적으로 5가지가 있다. 
* document.getElementById()
* document.getElementsByClassName()
* document.getElementsByTagName()
* document.querySelector()
* document.querySelectorAll()

사용법은 다음과 같다. 
```js
const main = document.getElementById("context");
//해당 id를 가진 element를 반환한다. 

const books = document.getElementsByClassName("book");
//해당 class를 가진 모든 element를 묶어 HTMLCollection으로 반환한다. 

const books = document.getElementsByClassName("div");
//해당 tag의 모든 element를 묶어 HTMLCollection으로 반환한다. 

for(i=0;i<books.length;i++) {
    books[i].classList.add("yellow-color");
}

const yellow_books = document.querySelector("#context");
//해당 query의 모든 element를 반환한다. 

const yellow_books = document.querySelectorAll(".yellow-color");
//해당 query의 모든 element를 묶어 NodeList로 반환한다. 
```

[source) [Javascript] 선택자, DOM 특정 요소(element) 찾기](https://hianna.tistory.com/485)