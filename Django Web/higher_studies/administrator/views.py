from django.shortcuts import render
from django.http import JsonResponse
from .models import Admin, Course, Department,Student, Studentcourse

# Create your views here.

def add_course(request):
    return render(request, 'add_course.html')


def add_department(request):
    return render(request, 'add-department.html')


def admin_panel(request):
    return render(request, 'admin-panel.html')


def all_projects(request):
    return render(request, 'all-projects.html')


def all_students(request):
    return render(request, 'all-students-page.html')


def edit_page(request):
    return render(request, 'edit-page.html')


def login_page(request):
    if request.method == 'POST':
        print("POST")
        password = request.POST.get('password')
        id = request.POST.get('id')
        admins = Admin.objects.all()

        for admin in admins:
            if (admin.id == id and admin.password == password):
                return render(request, 'admin-panel.html')

        return JsonResponse({'success': False})
    else: 
        return render(request, 'login-page-admin.html')


def main_page(request):
    return render(request, 'main-page.html')


def registration(request):
    return render(request, 'registration.html')


def registration_admin(request):
    if request.method == 'POST':
        print("POST")
        firstName = request.POST.get('firstName')
        lastName = request.POST.get('lastName')
        gender = request.POST.get('Gender')
        password = request.POST.get('password')
        id = request.POST.get('id')


        admin_instance = Admin(id = id, name = firstName + " " + lastName, gender = gender, password = password)
        admin_instance.save()

        return JsonResponse({'success': True})
    
        return JsonResponse({'success': False})
    else:
        return render(request, 'registration-admin.html')



def search_page(request):
    return render(request, 'search-page.html')


def student_profile(request):
    return render(request, 'student-profile.html')