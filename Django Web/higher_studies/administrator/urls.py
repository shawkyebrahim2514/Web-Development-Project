from . import views
from django.urls import path

urlpatterns = [
    path('', views.all_projects, name='all-projects'),
    path('main/', views.main_page, name='main-page'),
    path('login/', views.login_page, name='login-page'),
    path('registration/', views.registration, name='registration'),
    path('registration-admin/', views.registration_admin, name='registration-admin'),
    
    
    path('login/login-page-admin.html', views.admin_panel, name='login-page'),


    path('admin-panel/', views.admin_panel, name='admin-panel'),
    
    path('main/add-department/', views.add_department, name='add-department'),
    path('main/add-course/', views.add_course, name='add-course'),
    path('main/all-students/', views.all_students, name='all-students-page'),
    path('main/student-profile/<int:pk>/edit/', views.edit_page, name='edit-page'),
    path('main/search/', views.search_page, name='search-page'),
    path('main/student-profile/', views.student_profile, name='student-profile'),

    path('main/student-profile/<int:pk>/', views.student_profile, name='student-profile'),
]