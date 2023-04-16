# 1. Raw Django

## Django project 구조
```
project/
    manage.py
    project/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

* 프로젝트를 생성하면 다음과 같은 파일구조로 만들어진다. 
* 프로젝트와 같은 이름의 폴더가 내부에 생기고, `manage.py` 파일이 생긴다. 
* 해당 폴더는 프로젝트의 실제 패키지 폴더이다. 그 안에 `settings.py` 파일을 비롯한 기본 파일이 생성된다.

## `manage.py` 파일
### 사용 예시 
1. migrate
```bash
python manage.py migrate
```

2. runserver
```bash
python manage.py runserver
```

3. startapp
```bash
python manage.py startapp <new-app-name>
```
## Concepts in Django
### Serialization?
> 하나의 포맷으로 정리된 데이터를 다른 데이터 포맷으로 'translate' 하는것. 
> 예) sql 형식? 으로 정리된 텍스트 데이터를 Django format 으로 만들기.  

### migration?
> Django model 을 database schema 형식으로 변환해 db에 적용하는 작업.

### model?
>the single, definitive source of information about your data. 

It contains the essential fields and behaviors of the data you’re storing. 

* 보통, 한 model이 하나의 db table의 형식을 대변하다. 
* 각 모델은 django.db.models.Model 클래스를 상속받아 작성된다.
* 모델의 attribute 는 db 의 각 field를 대변한다.
* Django는 db 에서 각 데이터필드를 query 로 접근할 수 있는 API를 생성, 제공한다. 


## Concepts in Python

### `globals()`
global scope parameter를 알려준다. 
```python
y = 30
>>> globals()
{..., 'y': 30} #Python이 자동적으로 만들 글로벌 변수도 표시되지만 생략
```

### namespace?
> a collection of currently defined symbolic names along with information about the object that each name references. 

You can think of a namespace as a **dictionary** in which the keys are the object names and the values are the objects themselves. 

namespace 는 4가지 종류가 있다. 각 종류에 따라 변수의 lifetime이 다르다.

* Built-In
console에 `dir(__builtins__)` 치면 볼 수 있는, Python 자체의 object들. 
실행될 때 만들어지고, interpreter가 종료될 때 까지 살아있음. 
```
[
  'ArithmeticError', 'AssertionError', 'AttributeError', ... 
  'False', ...,'RuntimeError', ..., 'True', ... 
  '_', '__build_class__', '__debug__', '__doc__', '__import__', 
  '__loader__', '__name__', '__package__','__spec__', ..., 
  'dict', ...,  'super', 'tuple', ...
]
```
* Global
main program 수준에서 정의된 변수들. 
program body가 실행될 때 만들어지고, interpreter가 종료될 때 까지 살아있음.

* Enclosing, Local
어딘가 안에 enclosed 되어 정의된 변수들. 
그 공간이 전부 실행되면 사라진다. 

#### see also. scope
각 변수는 해당 설정된 공간에서만 찾을 수 있다. 
예를 들어, local 한 namespace는 그 local 을 빠져나와선 찾을 수 없다. 
반대로, global한 namespace는 어디에서든 찾을 수 있다. 
**NOTE.해당 scope에서 찾을 수 없으면 그 다음 외부 scope 로 넓혀서 찾는다!**


### 함수의 중첩
```python
def outer(x):
    def inner():
        print x
    return inner

print1 = outer(1)
print2 = outer(2)

print1() #1
print2() #2
```

Python은 Function closure 기능을 가지고 있어, **함수가 선언 될 때의 scope를 기억하고 있는다.**


### Decorator?
> 적절히 조정하어 함수를 생성하는 함수.
> parameter전달된 함수에 맞추어 새로운 함수를 리턴해준다. 

```python
>>> def outer(some_func):
...     def inner():
...         print "before some_func"
...         ret = some_func() #1
...         return ret + 1
...     return inner
>>> def foo():
...     return 1
>>> decorated = outer(foo) #2
>>> decorated()
before some_func
2
```
foo를 실행하면 1이 반환되지만 outer에을 씌운 foo는 그것에 +1을 하여 2를 반환하고 있다. 말하자면 decorated는 foo의 데코레이터판(foo + 어떠한 처리)라고 할 수 있다. [출처](https://engineer-mole.tistory.com/181)

> 변수로 준 함수에 어떤 것을 입혀(decorate)해서 다시 반환하는 함수.

#### @ 표현법.
@를 붙여 wrapper 이름을 써준다. 
```python
decorated = outer(foo)

#위의 표현을 다음과 같이 쓴다. 
@outer
def decorated(foo):
	...

```



### `for in if`?

### `r''`?

### `*args`?
  Python에서, 그 수가 정해져 있지 않은 parameter들을 받을 때 asterisk를 붙여 전부 받을 수 있다. 
```py
def two(x, y, *args):
	print x, y, args

two('a', 'b', 'c') # a b ('c',)
```

#### see also. `**kwargs`
> "명시적으로 지정하지 않은 파라미터는 kwargs이라는 이름의 사전으로 저장된다."

리스트형이 아니고, 사전형으로 전달됨.

```py
def foo(**kwargs):
     print kwargs

foo() # {}
foo(x=1, y=2) # {'y': 2, 'x': 1}

```
