# Table tag

## table tag - html

`<table>` 테이블을 만드는 태그  
`<th>` 테이블의 헤더부분을 만드는 태그  
`<tr>` 테이블의 행을 만드는 태그  
`<td>` 테이블의 열을 만드는 태그

## merge table cells [\[1\]](#References)

### 1) `colspan` attribute

```
    <table>
 <tr>
  <td colspan="2">&nbsp;</td>
  <td>&nbsp;</td>
 </tr>
 <tr>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
 </tr>
</table>
```

### 2) `rowspan` attribute

```
<table>
 <tr>
  <td rowspan="2">&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
 </tr>
 <tr>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
 </tr>
</table>
```

### `rowspan`\=0

0을 쓰면 전체 열 갯수, 행 갯수가 어떻든 그 방향으로 다 merge한 하나의 셀이 나온다.

# References

[\[1\] merge cells](https://www.computerhope.com/issues/ch001655.htm)