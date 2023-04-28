# 2. React Practice

# [React] II. 리액트 최초 실습

## 1. 직접 연결
### 1) 기본 HTML 구조 만들자.
index.html
```html
<html lang="kr">
    <head>
        <title>use Component</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Hello!</h1>
    </body>
</html>
```
### 2) DOM 컨테이너가 될 div 만들기
index.html
```html
    <body>
        ...
      	<div id=”root”></div>
    </body>
```

### 3) React.js 불러오기
index.html
```html
	<head>
      ...
      <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    </head>
```

       

### 4) 우리가 만들 JS 파일 넣기

index.html
```html
<body>
	...
  	<script src=”MyButton.js”></script>
</body>
```


### 5) 새 파일로 MyButton.js  만들기
MyButton.js
```js
function MyButton(props) {
   const [isClicked, setIsClicked] = React.useState(false);
 
   return React.createElement(
       'button',
       {onClick : ()=> setIsClicked(true)},
       isClicked ? 'Clicked!' : 'Click here!'
   )
}
 
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton),domContainer);
```
### 짜잔!
![](/img/5ee4a255-78e3-4d12-88e5-178c857ec969_image.png)
![](/img/dc98cd0b-e0bf-43d5-9d29-0a30a677ed06_image.png)


## 2. Create-react-app(CRA) 사용하기
```sh
#리액트 프로젝트 자동 생성
npx create-react-app <project-name> 
```
쓸 수 있는 명령어
```sh
#해당 폴더의 react 앱을 localhost:3000에서 열어줌.
npm start 
```


## 부록. 전체 파일
[직접 연결 - see in github](https://github.com/2ood/sandbox/tree/main/learn_react/101)
[CRA 생성 결과- see in github](https://github.com/2ood/sandbox/tree/main/learn_react/102)