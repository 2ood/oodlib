# 3. What is JSX?

# [React] III. JSX - 정의와 역할, 장점, 사용법

## 1. JSX 의 정의
> A **syntax extension** to JavaScript

JS 문법을 확장한 것.
Javascript + XML

```jsx
const element = <h1>Hello, World!</h1>;
```

## 2. JSX 의 역할
내부적으로 XML 코드를 JS 코드로 바꾸어 줌. 아래는 예시.

```jsx
class Hello extends React.Component {
  render() {
  	return <div>Hello {this.props.toWhat}</div>; # 내부적으로 React.createElement로 변환됨.
  }
}

ReactDOM.render {
  <Hello toWhat="World" />,
    document.getElementById('root')
};
```

React.createElement 의 parameter
```
React.createElement(type,[props],[...children])
```

## 3. JSX 의 장점
### 1) 간결한 코드
```
<div>hello {name}</div> #JSX 버전
React.createElement('div',null,`hello ${name}`); #JS 버전
```
### 2) 가독성 향상
### 3) Injection Attack 방어
injection attack 이란,
입력창에 문자, 숫자가 아닌 **소스코드를 입력하여 해당 코드가 실행되게 하는** 해킹방법

기본적으로 ReactDOM 은 렌더링 하기 전에 임베딩할 값들을 모두 문자열로 변환한다. 
-> XSS 공격 방어 가능. 

## 4. JSX의 사용법
> XML/HTML ... Javascript 코드... XML/HTML

* JSX에서 HTML안의 중괄호 안은 JS라 생각하면 됨.

* 속성 넣기
```js
const element = <div tabIndex="0"></div>;

const element = <img src={user.avatarUrl}></img>;
```
* 자식 넣기
```js
const element = (
	<div>
  		<h1>자식</h1>
  	</div>  
);
```
