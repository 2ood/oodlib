# HTML CSS JS 

## 1. HTML
>HTML은 **웹문서의 구조**를 나타내는데 사용하는 언어이다.

* 태그(Tag) 라는 단위로 만들어진다. 

* 태그는 다음과 같은 규칙으로 쓴다.
```html
<태그이름>내용</태그이름>
<h1>Hello world!</h1>
```

* 종종 닫는 태그가 없는 것도 있다.
```html
<link rel="stylesheet" href="style.css"> <!--css 파일을 연결-->
<hr/> <!--얇은 가로줄 하나 긋기-->
```

* 많이 사용돼 이미 정의되어 있는 태그가 몇몇 있다.
```html
<html>
  <head> <!--헤드 태그 안에는 문서를 정의하는 내용이 들어간다-->
    <title>문서의 탭 부분에 나타나는 이름</title>
    <link rel="stylesheet" href="style.css"> 
  </head>
  <body>
    <h1>큰 제목</h1>
    <h2>h태그는 h6 정도까지 있다</h2>
    <center>내용을 중앙정렬할 수 있다</center>
    <p>p는 문단,<b>b 는 볼드체</b></p>
    <a href="https://www.naver.com">anchor 태그는 하이퍼링크</a>
  </body>
</html>
```

* div 태그와 span 태그는 가장 기본적인 태그이다.
```html
<div>div 태그는 그 줄에서 가능한 가장 큰 폭으로 크기잡힌다.</div>
<span>span 태그는 내용에 맞춰서만 잡힌다.</span>
```
## 2. CSS
> css 파일은 html로 써진 각 태그들의 스타일을 적는다.

* css 상의 규칙을 적는 방법은 다음과 같다.
```css
원하는 태그 {
	속성명 : 원하는 속성정보;
}

body {
	background-color : beige;
}
```

* css 는 저 위에 코드에서 보듯이 `<link>` 태그로 HTML에 연결한다.  

## 3. JS

### id와 class
> element들을 지목하기 위해 붙이는 속성

하나의 element를 지목하거나 (id) 
여러 공통적인 element들을 한번에 묶어서 지목 (class) 할 때 사용한다. 

### id
```html
<main id="context">...</main>
```
오직 하나의 element 를 지목할 때 쓰는 이름. 
하나의 id는 하나의 element에서만 사용된다. 
(겹칠 경우 가장 처음 등장하는 element만을 지목한다.)

### class
```html
  <div class="book">1</div>
  <div class="book">2</div>
  <div class="book">3</div>
```
비슷한 element들을 모아서 지목할 때 쓰는 이름. 
class 는 여러 element에 붙여도 된다. 


### CSS 에서 id & class
css 에서 selector문을 통해 각 id, class를 가진 element들을 한번에 꾸밀 수 있다. 

> class 는 앞에 온점(.) , id는 앞에 #

```css
.book {
	background-color : skyblue;
}

#context {
    background-color : beige;
    padding : 20px;
}

```

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

### 참고문서
* [CSS: 선택자의 이해](https://www.nextree.co.kr/p8468/)
* [[Javascript] 선택자, DOM 특정 요소(element) 찾기](https://hianna.tistory.com/485)
* 

## 부록. 기타
웹 브라우저에서 개발자 도구 여는 방법
Windows : F12
Mac : cmd + option + c