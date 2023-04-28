# 8. Event Handling

# [React] VIII. Event handling

## Event 란?
> 사건.
클릭, 마우스 올리기, 스크롤 등등..

DOM의 event
```jsx
<button onclick = "activate()"></button>
```


React의 event
```jsx
<button onClick = {activate}></button>
```

* React 에서는 onclick을 camel case 로 쓰고, 함수도 중괄호안에 이름만 적는다.

camel case? CapitalizingAllTheFirstLetterOfEachWordAndConcatenating.


## Class component에서 event handler
JS class 내부의 함수는 그 instance 와 bind 되지 않고 global하게 실행되기 때문에, binding 을 해줘야 그 instance 의 state를 함수에서 사용할 수 있다.
```jsx
class Toggle extends React.component {
	constructor(props) {
    	super(props);
      	this.state = {isToggleOn: true};
      	this.handleClick = this.handleClick.bind(this);
    }
  
  	handleClick() {
    	this.setState(prevState=>({
        	isToggleOn : !prevstate.isToggleOn
        }));
    }
  
  	render() {
    	return  (
        	<button onClick={this.handleClick}>
            	{this.state.isToggleOn?'켜짐':'꺼짐'}
          	</button>
        );
    }
}

```


## Function component 에서 event handler
```jsx
function Toggle(props) {
	const [isToggleOn, setIsToggleOn] = useState(true);
  	
  	//방법1. setState함수를 부르는 새로운 함수 정의.
  	function handleClick(){
    	setIsToggleOn((isToggleOn)=>!isToggleOn);
    }
  	
  	//방법2. arrow function 사용
  	function handleClick = ()=>{
    	setIsToggleOn((isToggleOn)=>!isToggleOn);
    }
    
    return (
    	<button onClick={handleClick}>
        	{isToggleOn ? '켜짐':'꺼짐'}
        </button>
    );
}
```

## event handler 에게 args 전달하기
### class component
```jsx
<button onClick={(event)=>this.deleteItem(id,event)}>삭제하기</button>
<button onClick={this.deleteItem.bind(this.id)}>삭제하기</button>
```

### function component
```jsx
function MyButton(props) {
  const handleDelete = (id,event) =>{
  	console.log(id,event.target);
  };
  
  return (
  	<button onClick={(event)=>handleDelete(1,event)}>
      삭제하기
    </button>
  );
  
}
```