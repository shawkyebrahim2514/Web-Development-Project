from django.shortcuts import render
from django.http import JsonResponse
from .models import Admin, Course, Department, Student, Studentcourse
from django.http import HttpResponse
from django.template import loader

# Create your views here.

def add_course(request):
    if request.method == 'POST':
        departmentName = request.POST.get('departmentName')
        newCourseName = request.POST.get('newCourseName')
        courseHours = request.POST.get('courseHours')
        courseDay = request.POST.get('courseDay')
        courseHall = request.POST.get('courseHall')
        allCourses = Course.objects.all()
        if allCourses.filter(name=newCourseName).exists():
            msg = "The Course " + newCourseName + " is already exist, Please try again"
            return JsonResponse({'success': False, 'warning_message': msg})
        else:
            course_instance = Course(newCourseName, departmentName, courseHours, courseDay, courseHall)
            course_instance.save()
            msg = 'Successfully Added Course ' + course_instance.name
            return JsonResponse({'success': True, 'successful_message': msg})
    else:
        return render(request, 'add-course.html', {'allDepartments': Department.objects.all()})


def add_department(request):
    if request.method == 'POST':
        newDepartment = request.POST.get('newDepartment')
        departments = Department.objects.all()
        if departments.filter(name=newDepartment).exists():
            msg = "The Department " + newDepartment + " is already exist, Please try again"
            return JsonResponse({'success': False, 'warning_message': msg})
        else:
            department_instance = Department(newDepartment)
            department_instance.save()
            msg = 'Successfully Added Department ' + department_instance.name
            return JsonResponse({'success': True, 'successful_message': msg})
    else:
        return render(request, 'add-department.html')


def admin_panel(request):
    print("dkheeeel")
    return render(request, 'admin-panel.html')


def all_projects(request):
    return render(request, 'all-projects.html')


def all_students(request):
    return render(request, 'all-students-page.html')


def edit_page(request, id):
    if request.method == 'POST':
        
        fullname = request.POST.get('fullNameInput')
        idInput = request.POST.get('idNumberInput')
        dobInput = request.POST.get('dobInput')
        genderSelect = request.POST.get('genderSelect')
        universityInput = request.POST.get('universityInput')
        statusSelect = request.POST.get('statusSelect')
        departmentSelect = request.POST.get('departmentSelect')
        course1Select = request.POST.get('course1Select')
        course2Select = request.POST.get('course2Select')
        course3Select = request.POST.get('course3Select')
        print(id, idInput)
        if str(idInput) != str(id) and Student.objects.filter(id = idInput).exists() :
            return JsonResponse({'success' : False})
        else:
            student_instance = Student.objects.get(id=id)
            student_instance.delete()

            student_instance = Student(id, departmentSelect, fullname, genderSelect, universityInput, statusSelect, dobInput,
                                        course1Select, course2Select, course3Select)
            student_instance.save()
            return JsonResponse({'success' : True})

    else:
        student_info = Student.objects.get(id=id)
        allDepartments = Department.objects.all()
        load_student = {'name' : student_info.name, 'id' : id, 'university' : student_info.university,
                        'gender':student_info.gender, 'status':student_info.status, 'course1' : student_info.course1,
                        'course2':student_info.course2, 'course3':student_info.course3,
                        'department':student_info.department_name, 'dob' : student_info.date_of_birth
                        , 'allDepartments': allDepartments}
        
        return render(request, 'edit-page.html', load_student)

# Wait PILLOW
# def save_photo(request, id):
#     if request.method == 'POST':
#         profile_pic = request.FILES.get('profile_pic')
#         try:
#             student = Student.objects.get(id=id)
#             student.profile_pic = profile_pic
#             student.save()
#             return JsonResponse({'success' : True})
#         except Student.DoesNotExist:
#             return JsonResponse({'success' : False})
#     else:
#         return JsonResponse({'success' : False})

def delete_student(request,id):
    if request.method == 'POST':
        studnet_instance = Student.objects.get(id=id)
        studnet_instance.delete()
        return JsonResponse({'success':True})

def login_page(request):
    if request.method == 'POST':
        password = request.POST.get('password')
        id = request.POST.get('id')
        admins = Admin.objects.all()
        print(password)
        print(admins.get(id=id).password)
        ## REMEMBER TRY CATCH in EXITS
        if admins.filter(id=id, password=password).exists():
            firstName = admins.get(id=id).name.split(" ")[0]
            lastName = admins.get(id=id).name.split(" ")[1]
            request.session['loggedAdmin'] = {'firstName': firstName, 'lastName': lastName}
            return JsonResponse({'success': True, 'firstName': firstName, 'lastName': lastName})
        else:
            return JsonResponse({'success': False})
    else:
        return render(request, 'login-page-admin.html')


def main_page(request):
    return render(request, 'main-page.html')


def registration(request):
    if request.method == 'POST':
        fullname = request.POST.get('fullNameInput')
        id = request.POST.get('idNumberInput')
        dobInput = request.POST.get('dobInput')
        genderSelect = request.POST.get('genderSelect')
        universityInput = request.POST.get('universityInput')
        statusSelect = request.POST.get('statusSelect')
        departmentSelect = request.POST.get('departmentSelect')
        course1Select = request.POST.get('course1Select')
        course2Select = request.POST.get('course2Select')
        course3Select = request.POST.get('course3Select')

        print(fullname)

        students = Student.objects.all()
        if students.filter(id=id).exists():
            return JsonResponse({'success': False})
        else:
            student_instance = Student(id, departmentSelect, fullname, genderSelect, universityInput, statusSelect, dobInput,
                                        course1Select, course2Select, course3Select)
            student_instance.save()
            return JsonResponse({'success': True, })
    else:
        allDepartments = Department.objects.all()
        return render(request, 'registration.html', {'allDepartments': allDepartments})


def get_courses(request, department):
    courses = Course.objects.filter(department_name=department)
    courses_list = [course.name for course in courses]
    return JsonResponse(courses_list, safe=False)


def registration_admin(request):
    if request.method == 'POST':
        firstName = request.POST.get('firstName')
        lastName = request.POST.get('lastName')
        gender = request.POST.get('Gender')
        password = request.POST.get('password')
        id = request.POST.get('id')

        if Admin.objects.filter(id=id).exists():
            return JsonResponse({'success': False})
        else:
            admin_instance = Admin(id=id, name=firstName + " " + lastName, gender=gender, password=password)
            admin_instance.save()
            return JsonResponse({'success': True})
    else:
        return render(request, 'registration-admin.html')


def search_page(request):
    return render(request, 'search-page.html')


def student_profile(request, id):
    student_info = Student.objects.get(id=id)
    load_student = {'name' : student_info.name, 'id' : id, 'university' : student_info.university,
                    'gender':student_info.gender, 'status':student_info.status, 'course1' : student_info.course1,
                    'course2':student_info.course2, 'course3':student_info.course3,
                    'department':student_info.department_name, 'dob' : student_info.date_of_birth}
    return render(request, 'student-profile.html',load_student)
