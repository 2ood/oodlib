# 2. Structure of DRF

## Django 프로젝트의 구조
```
project/
    manage.py            
    .venv/
    conf/
        __init__.py
        settings.py
   	    urls.py
        wsgi.py
```

* `manage.py` 파일은 프로젝트의 entrypoint 같은 느낌. 여기서 모든게 시작된다. 
```shell
python manage.py runserver
# localhost:8000/ 에 해당 프로젝트가 열린다. 

python manage.py migrate
# 이 프로젝트 내 어플리케이션들을 등록, 필요한 모듈 끌고온다. 
```
>`migrate` command **looks at the `INSTALLED_APPS` setting** and **creates any necessary database tables** according to the database settings in your mysite/settings.py file and the database migrations shipped with the app.

* conf/settings.py
모든 세팅값이 들어가 있는 파일.

## project vs. app


## conf/settings.py

### TIMEZONE
```python
TIME_ZONE = 'Asia/Seoul'  # 한국 시간 적용 
```

### DATABASES
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3', #엔진명을 적는다. 
        #'django.db.backends.postgresql', 'django.db.backends.mysql' 이런 것들이 될 수 있다. 
        'NAME': BASE_DIR / 'db.sqlite3',
        #메인 디렉토리에 sqlite 가 db 파일을 저장한다. 
    }
}
```

### INSTALLED_APPS

### 더 찾아볼 것들
* ORM