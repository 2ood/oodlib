# Typescript

# installation

* 패키지 설치
```bash
npm install -g typescript
```
* `tsconfig.json` 파일 만들기. 
```json
{
    "compilerOptions": {
        "target":"es5",
        "module":"commonjs",
    }
}
```

* `tsc -w` 명령어로 ts 파일 계속 js로 변환해서 쓰기.
```
tsc -w
```


