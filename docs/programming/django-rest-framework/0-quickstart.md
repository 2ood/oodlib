# 0. Quickstart

## O. Overview - Week2 
* read through Quickstart page
* 프로젝트를 하나 생성해본다. 
* serializer를 정의해본다. 
* view를 통해 endpoint API 를 정의해본다. 
* 서버와 시험 통신을 해본다. 

## 1. 프로젝트 만드는 과정
### 1) 프로젝트 생성
a) virtual environment 켜기
```shell
python3 -m venv env
source env/bin/activate
```
b) venv 에 django, djangorestframework 다운받기
```bash
pip install django
pip install djangorestframework
```

c) project 만들고 그 안에 application 하나 생성하기. 
```bash
django-admin startproject tutorial .  # Note the trailing '.' character
cd tutorial
django-admin startapp quickstart
```

d) database 최초연결. admin 계정 만들기.
```bash
python manage.py migrate
python manage.py createsuperuser --email admin@example.com --username admin
```

### 2) Serializer 정의
`tutorial/quickstart/serializers.py`
```python
from django.contrib.auth.models import User, Group
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url','username','email','groups']

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url','name']
```

### 3) view 만들기
`tutorial/quickstart/views.py`
```python 
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from tutorial.quickstart.serializers import UserSerializer, GroupSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]
```

### 4) URL wire up
`tutorial/urls.py`
```python
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from tutorial.quickstart import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)


urlpatterns = [
    path('',include(router.urls)),
    path('api-auth/',include('rest_framework.urls',namespace='rest_framework'))
    path('admin/', admin.site.urls),
]

```

### 5) 세팅
`tutorial/settings.py`
```python
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10
}

INSTALLED_APPS = [
    ...
    'rest_framework',
]

```

### 6) runserver
```bash
python manage.py runserver
```

## 2. 테스트
bash 에서 curl 날려본다. 
```bash
curl -H 'Accept: application/json; indent=4' -u admin:password123 http://127.0.0.1:8000/users/
```

response:
```
{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "url": "http://127.0.0.1:8000/users/1/",
            "username": "admin",
            "email": "admin@quickstart.com",
            "groups": []
        }
    ]
}
```
