# 6. State

# [React] VI. State

## 1. State
> React component 의 변경 가능한 데이터

* state는 JS 객체로 구현됨. 개발자가 정하기 나름.
* 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야 한다. (불필요한 렌더링 방지)

```jsx
class LikeButton extends React.Component {
	constructor(props) {
    	super(props);
      
      	this.state = {
          	liked : false
        };
    }
}
```

* class component 에서는 state를 constructor 에서 정의.
* function component 에서는 state를 hook 에서 정의.

* state는 직접 수정할 수 없다. setState같이 함수 등을 통해 수정해야 한다. 
```jsx
//잘못된 사용법. 직접 수정
this.state = {
	name: 'Inje'
}

//올바른 사용법. setState함수를 통한 수정
this.setState({
	name: 'Inje'
});
```

## 2. Component 의 lifecyle
 ![](https://velog.velcdn.com/images/2ood/post/1dcc74c9-319d-4480-bbe9-9d691f6b2e86/image.png)

각 생명주기마다 생명주기함수가 있다. 
component가 계속 존재하는 것이 아니라, 시간의 흐름에 따라 생성되었다가, 업데이트 되었다가, 사라진다. 
 
 ### 출생
 생성자 실행, render됨. 
 그 후 componentDidMount 함수 실행됨.
 
 ### 인생
 내용이 바뀌면서 여러번 렌더링 됨.
 new props, setState(), forceUpdate() 등을 통해 새로 렌더링됨.
 매번 업데이트 되고 그 후 componentDidUpdate 함수 실행됨.
 
 ### 사망
 상위 컴포넌트에서 더이상 화면에 표시하지 않게 될때 unmount됨.
 unmount시 componentWillUnmount 함수 실행됨. 