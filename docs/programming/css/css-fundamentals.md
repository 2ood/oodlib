# CSS fundamentals

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

* [source) CSS: 선택자의 이해](https://www.nextree.co.kr/p8468/)