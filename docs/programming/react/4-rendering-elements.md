# 4. Rendering Elements

# [React] IV. Rendering Elements

## 1. Element란?
>리액트 앱을 구성하는 가장 작은 블록들.

### 1) React element
React의 virtual DOM Element. DOM element의 가상 표현
DOM element 는 React보다 담고 있는 정보가 많아 더 크고 무겁다. 
**caution. DOM element와 다르다!**

### 2) React element의 형태
JS 객체의 형태로 존재. 
```js
{
  type: Button, #리액트 컴포넌트의 이름, 혹은 html 태그 이름 'button'
  props: {
  	className: 'hey',
    children:{
    	type:'b',
        props: {
        	children:'Hello, element!'
        }
    }
  }
}
```
위의 React element는 다음과 같이 렌더링 됨
```html
<button class='hey'>
	<b>
      Hello, element!
  	</b>
</button>
```

sidenote. 
props는 attribute 같은 것. 그거보다 상위, 복잡한 개념?

## 2. React Element의 특징
### Immutable, 불변성을 가진다.
한번 생성된 element는 변하지 않는다. 
생성 후에는 children과 attribute를 바꿀 수 없다.
화면의 내용이 바뀔 필요가 있으면, **(1) 생성 전에 바꾸거나, (2) 새로 만들어야 한다. ** 


## 3. element 렌더링
### Root DOM Node
```html
<div id="root"></div>
```
이 안에 리액트 element들이 렌더링 된다. 
React DOM tree 의 가장 최상단 element.
```js
const element = <h1>Hello world</h1>;
ReactDOM.render(element,document.getElementById('id'));
// React root DOM 안에 element 라는 JSX를 렌더링하여 넣는다. 
```
내용이 바뀔 때, ReactDOM.render() 함수로 다시 렌더링해서 바꿔치기 한다. 


