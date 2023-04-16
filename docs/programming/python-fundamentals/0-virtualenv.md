# 0. virtualenv

# virtualenv 는 왜 필요한가?
협업할 때, 각자 다 다른 개발환경이 있을 수 있기 때문에, 
python 버전을 비롯한 parameter, module 등을 팀 안에서 통일할 필요가 있다. 
이런 동의된 환경을 virtualenv 로 저장해서 그 안에서 개발하는 것이다. 

```shell
python -m venv .venv 
# project 디렉터리에 .venv 숨김 폴더가 생김. 
# 이 안에 .venv/bin/activate 명령어로 virtualenv를 켤 수 있다. 

.venv/bin/activate
#.venv 켜기

(.venv) $ 
#이런 식으로 뜬다. 여기서 나가려면
(.venv) $ deactivate


```
