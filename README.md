# Web Development Project
 # Higher Studies Website

This project is a Higher Studies website built using Django, SQLite, and Bootstrap. The website allows users to manage student information, courses, and course registrations. Users can add, update, and delete student data, add new courses, view active/inactive students, search for students by name or department, and register courses for individual students. The website also includes a login functionality for user authentication.

## Functionalities

1. **User Registration and Login**: Users can create an account and log in to access the website's features.

2. **Add New Student**: Authenticated users can add a new student to the system by providing the student's ID, name, date of birth, university, gender, department, status (active/inactive), and course information (course1, course2, course3).

3. **Update Student Information**: Authenticated users can update the information of an existing student. This functionality allows users to modify the student's details such as name, date of birth, university, gender, department, status, and course information.

4. **Delete Student Data**: Authenticated users can delete an existing student's data through the delete button on the student's edit page. A confirmation dialogue is displayed to confirm the deletion before it occurs.

5. **Add New Course**: Authenticated users can add a new course and link it to a specific department. This functionality requires entering the course's ID, department, course name, number of hours, lecture's day, and hall number.

6. **View Active/Inactive Students**: Authenticated users can view all active or inactive students in a separate page. The student information is rendered in a table format, displaying relevant attributes only.

7. **Search for Students**: Authenticated users can search for active students by name or department. The search functionality retrieves students with similar names who have an active status and displays them in a table format.

8. **Course Registration**: Authenticated users can select a specific student after searching and register courses for that student. The course registration page includes the student's ID, name, and a dropdown list for available courses in three course fields. Users can select three different courses for the fields, and upon submission, the selected courses are registered for the student. If the user attempts to select the same course for multiple fields, an error message is displayed.

9. **Navigation Bar**: The website includes a well-designed navigation bar that allows users to navigate through all pages and return to the home page.

## Technologies Used

The Higher Studies website is built using the following technologies:

- Django
- SQLite
- HTML
- CSS
- JavaScript
- Bootstrap (for responsive design)

## Installation and Setup

To run the Higher Studies website locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your/repository.git`
2. Set up a virtual environment: `python -m venv env` (optional, but recommended)
3. Activate the virtual environment: `source env/bin/activate` (Linux/Mac) or `.\env\Scripts\activate` (Windows)
4. Install the required packages: `pip install -r requirements.txt`
5. Install white noise packages: `pip install whitenoise`
6. Apply the database migrations: `python manage.py migrate`
7. Start the local server: `python manage.py runserver`
8. Access the website through a web browser by entering `http://localhost:8000` in the address bar.

## Contribution

Contributions to this project are welcome. If you find any issues or have suggestions for improvement, please create a new issue or submit a pull request.


## Credits
| Name | ID | Email | LinkedIn |
|------|----|-------|----------|
| Shawky Ebrahim Ahmed | 20210184 | shawky.ebrahim2514@gmail.com | <a href = "https://www.linkedin.com/in/shawkyebrahim2514/">shawkyebrahim2514</a> |
| Youssef Mohammed Morad | 20210485 | youssefmohammed747@gmail.com | <a href = "https://www.linkedin.com/in/youssef-morad/">youssef-morad</a> |
| Mohamed Essam Mahmoud Osman | 20210346 | messam.sde@gmail.com | <a href = "https://www.linkedin.com/in/mohamed-essam71/">mohamed-essam71</a> |
| Mahmoud Hosam Ahmed Sakr | 20210368 | msakr200417@gmail.com | <a href = "https://www.linkedin.com/in/mahmoudhsakr/">mahmoudhsakr</a> |
| Khaled Salah | 20211033 | khaleds.obaid@gmail.com | <a href = "https://www.linkedin.com/in/khaledsa1ah/">khaledsa1ah</a> |
| Alan Samir Hakoun  | 20210755 | alanhakoun@gmail.com | <a href = "https://www.linkedin.com/in/alan-hakoun">alan-hakoun</a> |

