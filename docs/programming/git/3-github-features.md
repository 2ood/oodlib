# 3. github features

# Github features

## 1. branch 란
> 코드가 충돌하는 것을 막기 위해 branch 라는 개념 사용.

main branch 를 그대로 복사해서 new-branch 를 만든다. 
new-branch 에서 작업할 코드 수정을 하고
그것이 잘 돌아가는 게 검증이 되면
main branch 에 pull request->merge 순서로 업데이트 시킨다. 

```shell
git branch <new-branch-name>
# local 에 branch 생성

git checkout <new-branch-name>
# 현재 작업 branch를 <new-branch-name> 으로 갈아타기.

git push
# remote 에도 branch 똑같이 생성.

```

```shell
git branch -d <branch-name>
# local 에서 지우고 싶은 브랜치 지우기

git push origin --delete <branch-name>
# remote 에서 지우고 싶은 브랜치 지우기
```
## 2. issue
* github repo 페이지에서 issue 탭에서 issue 를 발행할 수 있다. 
* issue 는 개발하고 싶은 내용이 될 수도 있고, 수정해야 할 버그일 수도 있다. 
* 개발할 내용을 먼저 선언하는 것.