---
tags : [DevOps, Deploy]
title: Deployment strategy
description: Different examples of Deployment Strategies 
keywords:
  - Rolling
  - Blue/Green
  - Canary
---

# Deployment strategy

[source](https://onlywis.tistory.com/10) / [source](https://www.plutora.com/blog/deployment-strategies-6-explained-in-depth)

## 1. Rolling
서버를 한대씩 새 버전으로 교체하는 전략. 한 서버를 절체하고 그 서버에 새로운 버전을 올린다. 다 올리면 이 서버를 다시 붙이고 그 다음 서버를 교체한다.

## 2. Blue/Green
구버전과 신버전이 동시에 돌아가게 하는 전략. 안정적인 구버전이 Blue, 새로운 버전이 Green.
두 버전을 동시에 돌리면서, 신버전이 어느정도 테스팅 검증이 되면 로드밸런서에서 트래픽을 Green으로 모두 돌린다. 
두 버전을 동시에 돌려야하기 때문에 자원이 많이 든다. 


## 3. Canary
구버전과 신버전이 동시에 돌아가되, 트래픽을 천천히 올리는 전략. 
새 버전에 트래픽을 10%, 20%, 30% 이렇게 점진적으로 증가시키며 문제가 발생하는지 관찰. 시간이 좀 들긴 하지만, 롤백도 빠르고 실패에 빠르게 대처할 수 있다. 

## Other

A/B testing deployment, ...
