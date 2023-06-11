# Semanic Versioning

[Semantic Versioning - 공식 문서](https://semver.org/lang/ko/)

주,부,수 순서. 
Major 가 올라가면 Minor, patch 값은 0으로 리셋.
Minor 가 올라가면 Patch 값은 0으로 리셋.  

주 Major : 이전 버전과 API 호환 안되는 경우. 
부 Minor : 이전 버전과 호환이 되는데, 기능이 추가된 경우. API 들이 deprecate 되는 경우도 포함. 패치들도 한번에 포함해도 된다. 
수 Patch : 이전 버전과 호환되고 기능 같고, 버그만 수정된 경우.

## 중요한 부분 발췌
* 하나의 버전 번호를 받은 이상 코드를 변경할 수 없다. 변경하려면 새로운 버전 번호로.
* Major 번호가 0인 버전은 **개발버전**이다. 이 때의 API는 무조건 불안정이라 판단한다. 
* Major 번호가 1이상인 버전은 public API 라고 정의한다. 

* pre-release 관련해서 알파벳 대문자 붙이는 용례도 있는데, 아직 신경쓸 바는 아닌듯. 

## changelog boilerplate (template)

[keepchangelog.com](https://keepachangelog.com/en/1.1.0/)

[changelog template -on Github Gist](https://gist.github.com/juampynr/4c18214a8eb554084e21d6e288a18a2c)

## changelog 와 release 자동으로 해주는 패키지

[release-please - on github](https://github.com/googleapis/release-please)