# 9. Conditional Rendering

# [React] IX. Conditional Rendering

## 컨디셔널 렌더링
조건에 따라 다른 렌더링을 수행하는 것. 
조건문을 통해 다른 렌더링을 구현함.

```jsx
function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
  	
  	if(isLoggedIn) {
      return <UserGreeting />;
    }
  	return <GuestGreeting />;
}
```

### JS 의 Truthy, Falsy
>truthy : true 는 아니지만 true로 여겨지는 값.

```
truthy :
true
{}(빈 객체)
[](빈 배열)
1(nonzero 숫자)
"0","false"(nonempty string) 
```
>falsy : false 는 아니지만 false로 여겨지는 값.

```
falsy :
false
0, -0 (zeros)
On (BigInt zero)
"", '', `` (empty string)
null
undefined
NaN (Not a Number)
```

## element variable
하나의 엘리먼트를 변수에 저장해서 사용하는 것.
아래 예시에서 `{button}`이 이에 해당. 

```jsx
function LoginButton(props) {
	return (
    	<button onClick={props.onClick}>
        	로그인
        </button>
    );
}

function LogoutButton(props) {
	return (
    	<button onClick={props.onClick}>
        	로그아웃
        </button>
    );
}

function LoginControl(props) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
  	
  	const handleLoginClick = () =>{
    	setIsLoggedIn(true);
    }
    
    const handloeLogoutClick = ()=> {
    	setIsLoggedIn(false);
    }
    
    let button;
  	if (isLoggedIn) {
    	button = <LogoutButton onClick={handleLogoutClick}/>;
    } else {
      button = <LoginButton onClick={handleLoginClick}/>
    }
  
  	return {
    	<div>
        	<Greeting isLoggedIn = {isLoggedIn}/>
        	{button}	
        </div>
    }
}
```

## inline conditions
조건문을 코드 안에 집어넣는 것. 

### 1) &&

**short circuit evaluation** 이 일어남. 
`(조건1) && (조건2)` 에서 
조건1이 `false`이면, 나머지 계산하지 않고 바로 전체 `false`라고 판단함. 

아래는 사용례.
```jsx
function Counter(props) {
  const count = 0;
  
  return (
  	<div>
      {count && <h1>현재 카운트 : {count} </h1>}
      //
    </div>
  );
```

### 2) ? : 
삼항 연산자. 
```jsx
function LoginControl(props) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
  	
  	return (
    	(isLoggedIn)?<LogoutButton/>:<LoginButton />
    );
}
```

## 렌더링 막는 방법
> function component가 null 을 리턴하면 렌더링 되지 않음. 

```jsx
function WarningBanner(props) {
	if(!props.warning) {
    	return null;
    }
  
  	return  (
      	<div>경고!</div>
    );
}
```

