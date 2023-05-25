from django.contrib import admin
from .models import Admin, Course, Department,Student, Studentcourse

# Register your models here.
admin.site.register(Admin)
admin.site.register(Course)
admin.site.register(Department)
admin.site.register(Student)
admin.site.register(Studentcourse)
