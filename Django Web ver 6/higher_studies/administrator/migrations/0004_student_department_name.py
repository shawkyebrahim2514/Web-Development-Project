# Generated by Django 4.2.1 on 2023-05-25 00:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('administrator', '0003_alter_student_date_of_birth'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='department_name',
            field=models.ForeignKey(db_column='department_name', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='administrator.department'),
        ),
    ]
