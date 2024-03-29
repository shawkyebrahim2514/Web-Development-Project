from . import views
from django.urls import path

urlpatterns = [
    path('', views.all_projects, name='all-projects'),
    path('main/', views.main_page, name='main-page'),
    path('login/', views.login_page, name='login-page'),
    path('registration-admin/', views.registration_admin, name='registration-admin'),
    path('get-courses/<str:department>/', views.get_courses, name='get-courses'),
    
    path('main/admin-panel/', views.admin_panel, name='admin-panel'),
    
    path('main/registration/', views.registration, name='registration'),
    path('main/add-department/', views.add_department, name='add-department'),
    path('main/add-course/', views.add_course, name='add-course'),
    path('main/all-students/', views.all_students, name='all-students-page'),
    path('main/all-students/<int:id>/edit/', views.edit_page, name='edit-page'),
    path('main/all-students/<int:id>/edit/delete/', views.delete_student, name='delete'),
    path('main/search/', views.search_page, name='search-page'),

    path('main/all-students/<int:id>/', views.student_profile, name='student-profile'),
    # Wait Pillow
    # path('main/all-students/<int:id>/save-photo', views.save_photo, name='save-photo'),
]