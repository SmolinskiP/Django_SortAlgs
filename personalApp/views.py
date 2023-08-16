from django.shortcuts import render
from django.http import HttpResponse

def index(request):
  return HttpResponse("Hello Geeks")
  
def algorithms(request):
    if request.method == "POST":
        data = request.POST

        time = data.get("time")
        elements = data.get("elements")
        print(elements)
    
        checkbox1 = data.get("checkbox1")
        if checkbox1 == None:
            worstcase = 0
            checked = ''
        else:
            worstcase = 1
            checked = "checked="
      
        checkbox2 = data.get("checkbox2")
        if checkbox2 == None:
            steps = 0
            checked2 = ''
        else:
            steps = 1
            checked2 = 'checked='
        
        alg_type = data.get("SortButton")

    else:
        time = 50
        elements = 1000
        worstcase = 0
        checked = ''
        checked2 = ''
        steps = 0
        alg_type = 'bubble'
    
    context = {
        'time': time,
        'elements': elements,
        'worstcase': worstcase,
        'checked': checked,
        'checked2': checked2,
        'steps': steps,
        'alg_type': alg_type,
    }
    print("\n\nSite requested with POST parameters:\nTime interval: %s\nNumber of elements: %s\nReversed array: %s\nStep array: %s\nAlgorithm type: %s\n\n" % (str(time), str(elements), str(worstcase), str(steps), str(alg_type)))
    return render(request, "personalApp/index.html", context)