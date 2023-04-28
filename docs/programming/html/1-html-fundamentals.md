# HTML fundamentals

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

### id와 class
> element들을 지목하기 위해 붙이는 속성

하나의 element를 지목하거나 (id) 
여러 공통적인 element들을 한번에 묶어서 지목 (class) 할 때 사용한다. 