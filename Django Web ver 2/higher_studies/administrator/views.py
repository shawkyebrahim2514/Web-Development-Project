from django.shortcuts import render
from django.http import JsonResponse
from .models import Admin, Course, Department,Student, Studentcourse
from django.http import HttpResponse
from django.template import loader
# Create your views here.

def add_course(request):
    return render(request, 'add-course.html')


def add_department(request):
    return render(request, 'add-department.html')


def admin_panel(request):
    print("dkheeeel")
    return render(request, 'admin-panel.html')


def all_projects(request):
    return render(request, 'all-projects.html')


def all_students(request):
    data = Student.objects.all()
    return render(request, 'all-students-page.html', {'data': data})



def edit_page(request):
    return render(request, 'edit-page.html')


def login_page(request):
    if request.method == 'POST':
        password = request.POST.get('password')
        id = request.POST.get('id')
        admins = Admin.objects.all()
        print(password)
        print(admins.get(id=id).password)
        ## REMEMBER TRY CATCH in EXITS
        if admins.filter(id=id, password = password).exists():
            firstName = admins.get(id=id).name.split(" ")[0]
            lastName = admins.get(id=id).name.split(" ")[1]
            request.session['loggedAdmin'] = {'firstName' : firstName, 'lastName':lastName}
            return JsonResponse({'success' : True, 'firstName': firstName, 'lastName':lastName})
        else:
            return JsonResponse({'success' : False})
    else: 
        return render(request, 'login-page-admin.html')


def main_page(request):
    return render(request, 'main-page.html')


def registration(request):
    return render(request, 'registration.html')


def registration_admin(request):
    if request.method == 'POST':
        firstName = request.POST.get('firstName')
        lastName = request.POST.get('lastName')
        gender = request.POST.get('Gender')
        password = request.POST.get('password')
        id = request.POST.get('id')

        if Admin.objects.filter(id = id).exists():
            return JsonResponse({'success': False})
        else:
            admin_instance = Admin(id = id, name = firstName + " " + lastName, gender = gender, password = password)
            admin_instance.save()
            return JsonResponse({'success': True})
    else:
        return render(request, 'registration-admin.html')



def search_page(request):
    return render(request, 'search-page.html')


def student_profile(request):
    return render(request, 'student-profile.html')