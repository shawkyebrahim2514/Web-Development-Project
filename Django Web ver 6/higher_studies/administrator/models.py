# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Admin(models.Model):
    id = models.IntegerField(primary_key=True, auto_created=True)
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    gender = models.CharField(max_length=6)

    def __str__(self):
        return str(self.id)
    
    class Meta:
        managed = False
        db_table = 'Admin'


class Course(models.Model):
    name = models.CharField(primary_key=True, max_length=255)
    department_name = models.ForeignKey('Department', models.DO_NOTHING, db_column='department_name')
    hours = models.IntegerField()
    days = models.IntegerField()
    hall_number = models.IntegerField()

    def __str__(self):
        return self.name
    
    class Meta:
        managed = False
        db_table = 'Course'


class Department(models.Model):
    name = models.CharField(primary_key=True, max_length=255)
    def __str__(self):
        return self.name
    class Meta:
        managed = False
        db_table = 'Department'


class Student(models.Model):
    id = models.IntegerField(primary_key=True, auto_created=True)
    department_name = models.ForeignKey(Department, models.DO_NOTHING, db_column='department_name', null=True)
    name = models.CharField(max_length=255)
    gender = models.CharField(max_length=6)
    university = models.CharField(max_length=255)
    status = models.CharField(max_length=255)
    date_of_birth = models.DateField(null=True)
    course1 = models.ForeignKey(Course, related_name='student_course1', on_delete=models.CASCADE, null=True)
    course2 = models.ForeignKey(Course, related_name='student_course2', on_delete=models.CASCADE, null=True)
    course3 = models.ForeignKey(Course, related_name='student_course3', on_delete=models.CASCADE, null=True)
    # UNTILL Install Pillow
    # profile_pic = models.ImageField(upload_to='svg/')

    def __str__ (self):
        return str(self.id)
    
    class Meta:
        managed = False
        db_table = 'Student'


class Studentcourse(models.Model):
    student_id = models.OneToOneField(Student, models.DO_NOTHING, db_column='student_id')  # The composite primary key (student_id, course_name) found, that is not supported. The first column is selected.
    course_name = models.ForeignKey(Course, models.DO_NOTHING, db_column='course_name')
    
    class Meta:
        managed = False        
        unique_together = (('student_id', 'course_name'),)
        
        # constraints = [
        #     models.UniqueConstraint(fields=['student_id', 'course_name'], name='composite_key')
        # ]

        db_table = 'StudentCourse'
    student_id = models.IntegerField(primary_key=True)
    course_name = models.IntegerField()






class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)
    name = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()
    first_name = models.CharField(max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    action_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class MembersMembers(models.Model):
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'members_members'
