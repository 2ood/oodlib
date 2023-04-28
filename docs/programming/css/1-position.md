# position

## `Position` property

### `static`

정적인 위치. 대부분의 `tag`의 기본 설정.

```
.fixed {
  position: fixed;
  top: 99px;
  left: 155px;
  background: pink;
}
```

### `fixed`

뷰포트의 특정 좌표에 고정되어 표현됨. `absolute` 는 부모 기준 고정좌표.  
Whereas the position and dimensions of an element with `position:absolute` are **relative to its containing block**, the position and dimensions of an element with `position:fixed` are **always relative to the initial containing block**. This is **normally the `viewport`**: the browser window or the paper’s page box

```
.fixed {
  position: fixed;
  top: 99px;
  left: 155px;
  background: pink;
}
```

### `sticky`

`sticky` 속성은 `static`과 `fixed` 속성의 특징을 모두 가지고 있는 속성.  
`sticky` 영역의 `x` 또는 `y` 위치값이 설정한 위치에 도달하기 전까지는 `static`, 도달 이후에는 `fixed`처럼 행동.

**caution**  
' 부모 또는 조상 노드에 `overflow` 속성이 설정되어 있는지 확인 (`hidden`, `scroll`, `auto` 이면 안됨)  
' 부모 노드의 `height`가 설정되어 있는지 확인

```
.sticky {
  position: sticky;
  top: 0;
  background: #8a4baf;
}
```