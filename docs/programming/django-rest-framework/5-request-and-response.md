# 5. Request and Response

## 0. Overview
* RESTful하게 request를 받고 response를 보내는 방법을 연습해본다.

## 1. Request, Response class
Django에서는 Request와 Response를 object로 정리해 제공한다. 

Request
* `Request`는 `HttpRequest`를 extend 받아 만들어짐. 
* `Request.data`로 바디를 넣을 수 있음. (기존 `request.POST`과 비슷)

Response
* `TemplateResponse`를 extend 받아 만들어짐. 
* 다음과 같이 사용하면 됨. 
```py
return Response(data)
```

## 2. 사용례
* `request.method`를 통해 현재 요청한 메서드 방식 알아내기.
* `Response(data, status=<status.HTTP...>)`형식으로 return하면 됨. 

```py
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from snippets.models import Snippet
from snippets.serializers import SnippetSerializer


@api_view(['GET', 'POST'])
def snippet_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = Snippet.objects.all()
        serializer = SnippetSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SnippetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
```



```py
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from snippets import views

urlpatterns = [
    path('snippets/', views.snippet_list),
    path('snippets/<int:pk>/', views.snippet_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)
```
