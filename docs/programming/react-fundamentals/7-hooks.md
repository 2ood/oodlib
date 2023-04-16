# 7. Hooks

# [React] VII. Hooks

## recap : component 의 종류
||Function component|Class component|
|---|---|---|
|state|state 사용 불가|생성자에서 state 정의|
|||setState()함수를 통해 state 업데이트|
|lifecycle|Lifecycle에 따른 기능구현 불가 | lifecycle 메서드 제공

## Hook이란?
function component가 가지는 구현 불가한 부분들을 가능하게 하는 함수.
state와 생명주기에 따라 코드를 실행할 수 있게 하는 함수. 
* state 관련 함수
* lifecycle 관련 함수
* 최적화 관련 함수

함수 이름 앞에 use 를 붙여 hook 함수임을 명시해야 함. 

## Hook의 규칙
1. 최상위 레벨에서만 호출해야 한다. 
	if문이나 for문 안에 넣지 않는다. 

2. 리액트 함수 컴포넌트에서만 호출해야 한다.


코드 분석 도구. hook이 잘못 사용되었을 때 알려주는 플러그인.
eslint-plugin-react-hooks


## Hook 의 종류 및 사용례

### useState()
state를 사용하기 위한 Hook. 
배열을 반환함. 
변수 각각에 대해 set함수가 따로 존재한다. 

```jsx
const [변수명, set함수명] = useState(초기값);
```
```jsx
import React, {useState} from "react";

function Counter(props) {
	const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>총 {count}번 클릭했습니다. </p>
      <button onClick={()=>setCount(count+1)}>click</button>
    </div>
    );
}
```

### useEffect()
side effect를 수행하기 위한 Hook. 

#### side effect = 효과 
다른 컴포넌트에 영향을 미칠 수 있는 것들. 
렌더링이 끝난 이후에 일어나야 하는 것들. 
이런 것들이 side에서 일어나야 한다는 점에서 이름에 side 가 붙음. 

**생명주기 함수와 동일한 일을 실행. **

```jsx
useEffect(이펙트 함수, 의존성 배열);
```
의존성 배열에 적혀있는 파라미터들이 하나라도 바뀌면 이펙트 함수가 실행됨. 
mount, unmount시에만 실행되게 하려면 의존성 배열에 [] 넣기. 
의존성 배열 생략하면 컴포넌트가 업데이트 될 때마다 실행됨. 

useEffect의 이펙트 함수가 리턴하는 함수는 unmount될 때 호출됨. 
```jsx
import React, {useState, useEffect} from "react";

function Counter(props) {
	const [count, setCount] = useState(0);
  
    useEffect(
      ()=>{ //이펙트 함수
        document.title = `총 ${count}번 클릭됨.`;
        return ()=>{}; //unmount시 실행되는 함수
      },
      [count] //의존성 배열
    );
}
```
### `useMemo()`
Memoization 하기 위한 Hook. 

#### memoization
Memoization 이란, 계산량이 많이 필요한 값에 대해 '메모'해두고 저장해 사용하는 것. => 렌더링 속도 향상. 

```jsx
const memoizedValue = useMemo(memo 생성 함수, 의존성 배열);
```

#### memo 생성함수
연산량이 높은 작업을 수행하여 결과를 반환.
의존성 변수가 변했을 때에만 memo생성함수가 실행되며, 그렇지 않을 경우 `memoizedValue`는 그대로. 

* **memo 생성함수는 렌더링하는 동안 같이 실행됨. **
렌더링에 영향을 주면 안되는 것들은 `useMemo()` 대신 `useEffect()`에 담아야 함. 

* 의존성 배열 생략할 경우 매 렌더링마다 실행됨. 
* 의존성 배열에 빈 배열을 줄 경우 mount시에만 실행됨. 

### `useCallback()`
`useMemo()`와 비슷하지만, 값 대신 함수를 반환한다. 
의존성 변수가 변했을 때 새로운 함수를 정의해 반환. 

* 함수가 렌더링 간에 재 랜더링 될 필요 없을 때 유용. => 렌더링 속도 향상.


```jsx
const memoizedCallback = useCallback(
	()=>{
    	doSomething(의존성 변수1,...);
    },
  [의존성 변수1, ...]
);
```
아래는 동일한 일을 하는 코드.

```jsx
useCallback (함수, 의존성 배열);
useMemo(()=>함수, 의존성 배열);
```

### `useRef()`
Reference 를 사용할 수 있게 하는 hook

#### reference
reference란, 특정 컴포넌트에 접근할 수 있게 하는 객체. 
* reference object에는 `current` 라는 속성이 있다. 이는 현재 참조하고 있는 element를 뜻한다.
* 변경가능한 current 를 가진 하나의 상자. 
* reference object 그 자체는 component lifetime 전체에 걸쳐 변하지 않음. 
렌더링 간에 그 ref object  자체는 재사용됨. 
그 안의 `current` 값이 계속 변할 수 있음. 
* `current`에 참조된 element가 변경되어도 렌더링이 다시 일어나거나 하지 않는다.  

```jsx
const refContainer = useRef(초깃값);
```
```jsx
functioon TextInputWithFocusButton(props) {
	const inputElem = useRef(null);
  
  	const onButtonClick = () => {
    	inputElem.current.focus();	
    };
  
  return (
  	<>
      <input ref={inputElem} type="text"/>
      <button onClick={onButtonClick}>
        focus button
      </button>
    </>
  );
}
```

## Hook의 규칙
1. 최상위 레벨에서만 호출해야 한다. 
	if문이나 for문 안에 넣지 않는다. 

2. 리액트 함수 컴포넌트에서만 호출해야 한다.


코드 분석 도구. hook이 잘못 사용되었을 때 알려주는 플러그인.
eslint-plugin-react-hooks


