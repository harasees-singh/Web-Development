from django.http.response import HttpResponse
from django.shortcuts import render
from datetime import datetime
def index(request):
    now = datetime.now()
    if now.date == 1 and now.month == 1:
        return HttpResponse("YES")
    else:
        return HttpResponse("NO")
