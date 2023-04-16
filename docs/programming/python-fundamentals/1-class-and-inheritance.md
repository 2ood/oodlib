# 1. Class and Inheritance

## 0. Overview
* class
* inheritance

## 1. Class
### 선언하는 방법
```py
class MyClass:
  x = 5
```
### 변수 사용하는 방법
```py
p1 = MyClass()
print(p1.x)
```
* Note. new 연산자 사용하지 않음. 

### functions
1. `__init__()`
처음 instance가 생성될 때 실행되는 함수. 
생성자 함수와 비슷한 개념. 

2. `__str__()`
Java의 `toString()` 함수와 비슷한 개념. 
이 instance 를 string 으로 표현함. 

3. user-defined methods
첫번째 변수는 `self`로 배정됨. 

### `self` parameter
현재 인스턴스를 나타내는 변수. `this` 와 비슷한 개념?
굳이 parameter name을 `self`로 할 필요는 없다. 다만, 사용하려면 **메서드의 첫번째 parameter이어야 한다.** 

```py
class Person:
  def __init__(mysillyobject, name, age):
    mysillyobject.name = name
    mysillyobject.age = age

  def myfunc(abc):
    print("Hello my name is " + abc.name)

p1 = Person("John", 36)
p1.myfunc()
```

### pass
내용이 빈 class를 만들때, 에러 안나게 하는 keyword. 
```py
class Student(Person):
	pass
```
## 2. Inheritance
### 상속하는 방법
`Student`(child) - `Person`(parent) 의 경우
(Java에서 `class Student Extends Person(){}`)
```py
class Student(Person):
  pass
```

### super()
부모의 것들을 다 가지고옴. 
```py
class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)
```

### 변수 추가하는 방법
부모의 함수를 실행하고(`super().__init__()`), 새로운 거 추가하면 됨. 
```py
class Student(Person):
  def __init__(self, fname, lname, year):
    super().__init__(fname, lname)
    self.graduationyear = year
    
  def welcome(self):
    print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear)
```


## 3. Mixin
to be continued.. [https://www.pythontutorial.net/python-oop/python-mixin/](https://www.pythontutorial.net/python-oop/python-mixin/)