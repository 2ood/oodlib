# 2. git commands

# Git Commands

## 1. Git repository 클론하는 방법 - zip 파일 다운로드
1) 원하는 github repository 페이지로 이동
2) 초록색 code 버튼 > Download zip
3) zip 파일 풀어서 폴더 만들기

## 2. push 란
> 우리는 코드를 수정한 내용을 
> 박스에 담아서 (add)
> 박스에 운송장을 붙여서 (commit)
> 배송을 보낸다. (push)

```shell
git fetch 
# 지금 내 컴퓨터(local)의 코드가 깃헙서버의 repo (remote)의 내용과 같은지(up-to-date) 확인

git pull 
# up-to-date 하지 않다면 내용 불러와서 덮어쓰기. 

git status 
# 내가 어느 파일 코드를 얼만큼 수정했는지 확인 

git add -A 
# 수정 내용을 박스에 담기. -A 는 모두 담는다는 뜻.

git commit -m "<your commmit introduction>" 
# commit 이라는 박스에 적당한 제목을 붙여 포장하기.
# commit message 라고 하는데, 간략하게 어떤 수정사항이 들어있는지 쓰면 된다. 

git push
# remote 에 내 수정사항(commit) 업데이트하기. 

```