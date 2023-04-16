# 6. Class based Views

## 0. Overview
* `APIView`를 사용해서 각 API를 클래스 형식으로 작성하는 방법을 배운다. 

## 1. `APIView`
`APIView`라는 클래스는 `rest_framework.views` 에서 import 해올 수 있다. 
이를 extend 하면 각각의 메서드를 함수로 작성할 수 있다. 

`views.py`
```py
from snippets.models import Snippet
from snippets.serializers import SnippetSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class SnippetList(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        snippets = Snippet.objects.all()
        serializer = SnippetSerializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = SnippetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
```

`urls.py`
```py
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from snippets import views

urlpatterns = [
    path('snippets/', views.SnippetList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
```

