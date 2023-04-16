# 5. Components and Props

# [React] V. Components and Props

>" 붕어빵 재료(props)를 붕어빵틀(component)에 넣으면 붕어빵(element)가 나온다. "

## 1. Components
>리액트는 컴포넌트 기반의 구조이다. **그만큼 중요하다!**

input(props)을 받으면 output(element)을 내놓는다. 
function, OOP의 Class의 개념에 비유된다. 

component 는 두가지 종류가 있다. 
Function component, class component.

## 2. Props
>property + s. component의 속성
component 에 전달할 다양한 정보를 담고 있는 JS object.

슈붕, 팥붕을 만들기 위해 다른 재료를 넣듯, 결과물 element를 다양하게 만들기 위해 넣는 속성.

### 1) Props의 특징 - **Read-only**

>모든 react component 는 props에 대해 pure 함수 처럼 행동해야 한다.

pure 함수 : **받은 변수를 변경하지 않고**, 같은 input에 같은 output을 내뱉는 함수. 
ex) 덧셈 함수

impure 함수 : **받은 변수를 수정하는 함수**. 
ex) 객체를 받아 그 안의 속성을 바꾸는 함수

### 2) props의 사용법
```jsx
	<Profile name="2ood" viewCount={1500}"/>
```
위의 JSX는 다음과 같이 props 로 정리된다. 
```jsx
React.creatElement(
  Profile,
  {
    name: "2ood"
    viewCount : 1500
  },
  null
)
```

## 3. Component 만들기
### 1) Function component 만들기
```jsx
function Welcome(props) {
	return <h1>안녕, {props.name}</h1>;
}

```
### 2) Class component 만들기
Component class 를 상속받아 만든다. 
```jsx
class Welcome extends React.Component {
	render() {
      return <h1>hello, {this.props.name}</h1>;
    }
}
```

### 4) Rendering 
>**주의. Component 이름은 항상 대문자로 시작해야 한다!**

소문자로 시작하는 태그는 dom element 로 간주함.
```jsx
const element <div />;
```
아래는 React component로 인식.
```jsx
const element = <Welcome name="인제"/>
```

## 4. Component 합성, 추출
아래의 코드를 component 단위로 막 쪼개 보자!
```jsx
function Comment(props) {
  return (
  	<div className="comment">
      <div className="user-info">
        <img className="avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
      	<div className="user-info-name">
          {props.author.name}
        </div>
      </div>
      
      <div className="comment-date">
        {formatDate(props.date)}
      </div>
  );
}
```

쪼개면 다음과 같다.
```jsx
function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author}/>
      
      <div className="comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function UserInfo(props){
	return (
      <div className="user-info">
      	<Avatar user={props.user} />
        <div className="user-info-name">
          {props.user.name}
        </div>
      </div>
    );
}

function Avatar(props) {
	return (
    	<img className="avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
    );
}
```
