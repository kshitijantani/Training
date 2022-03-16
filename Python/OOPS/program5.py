# Create class Person:
# --Name, DOB, City, Contact No

# Create class Employee (Inherit person class)
# --employee id, joining date, salary, department, post

# Employee manager class
# --Add/Remove Employee, Get all employees list, get employee by his name, 
#   get all employees by his/her department
# Task:
# Add few employees
# Print all the employees
# Find an employee with the name
# Print all employees with department Finance
# Find all employees whose salary is greater than 50000
# Find all employees whose salary is between 50000-100000
# Find a list of employees who are joined in the current year
# Find all employees who are from Mirzapur
# Find employees whose birthday in the current month
# Sort employee list with salary in descending order

from traceback import print_exc
import datetime

CurrentDate=datetime.date.today()  


class Person():
    def __init__(self, name, dob, city, contact_no):
        self.name = name
        self.dob = dob
        self.city = city
        self.contact_no = contact_no

class Employee(Person):
    def __init__(self, name, dob, city, contact_no, emp_id, join_date, salary, emp_dept, emp_post):
        self.id = emp_id
        self.date = join_date
        self.salary = salary
        self.dept = emp_dept
        self.post = emp_post
        
        super(Employee, self).__init__(name, dob, city, contact_no)

class Manager():
    def __init__(self):
        self.emp_list = []

    #To print list of all the employees
    def get_employee_list(self):
        if len(self.emp_list) == 0:
            print("There is no employee in the list!")
        else:
            count = 1
            for emp in self.emp_list:
                print("\nEmployee details: ({0}. Name: {1}, Date of birth: {2}, City: {3}, Contact No.: {4}, Id: {5}, Join Date: {6}, Salary: {7}, Department: {8}, Post: {9}".format(count,emp.name, emp.dob, emp.city, emp.contact_no, emp.id, emp.date, emp.salary, emp.dept, emp.post))
                count += 1

    #To find employee by name
    def get_employee(self,get_emp):
        count = 1 
        for employee in self.emp_list:
            if employee.name == get_emp:
                print("( \n{0}. Name: {1}, Date of birth: {2}, City: {3}, Contact No.: {4}, Id: {5}, Join Date: {6}, Salary: {7},\n Department: {8}, Post: {9} \n".format(count,employee.name, employee.dob, employee.city, employee.contact_no, employee.id, employee.date, employee.salary, employee.dept, employee.post))
            count += 1

    #To find employee by his/her department
    def get_employee_dept(self, get_emp):
        count = 1
        for employee in self.emp_list:
            if employee.dept == get_emp:
                print("( \n{0}. Name: {1}, Date of birth: {2}, City: {3}, Contact No.: {4}, Id: {5}, Join Date: {6}, Salary: {7},\n Department: {8}, Post: {9} \n".format(count,employee.name, employee.dob, employee.city, employee.contact_no, employee.id, employee.date, employee.salary, employee.dept, employee.post))
            count += 1

    #To find employee by city name
    def get_employee_place(self, get_emp):
        count = 1
        for employee in self.emp_list:
            if employee.city == get_emp:
                print(" \n{0}. Name: {1}, Date of birth: {2}, City: {3}, Contact No.: {4}, Id: {5}, Join Date: {6}, Salary: {7},\n Department: {8}, Post: {9} \n".format(count,employee.name, employee.dob, employee.city, employee.contact_no, employee.id, employee.date, employee.salary, employee.dept, employee.post))
            count += 1

    #List of employee whose Birthday is in current month
    def get_employee_dob(self):
        for employee in self.emp_list:
                if CurrentDate.month == employee.dob.month:
                    print(" \n{0}. Name: {1}".format(employee.name))

    #List of employees who have joined in current year 
    def get_employee_join_date(self):
        for employee in self.emp_list:
                if CurrentDate.year == employee.date.year:
                    print(" \n{0}. Name: {1}".format(employee.name))

    #Sorted list of employees by their descending salary
    def sorted_list(self):
        self.emp_list.sort(key = lambda yr : yr.salary, reverse = True)
        self.get_employee_list()


#Created an object of Manager class
manage = Manager()


#First line to be print on terminal
print("Employee Management")

#To run different tasks over employee list
while True:

    #Number of options given for performing task
    print("1. Add an employee \n2. Print list of employees \n3. Find an employee \n4. Find employee with its department \n5. Find employee whose salary is greater than 50000  \n6. Find list of employees whise salary is between 50000 - 100000\n7. Find employee by year \n8. Find employee by place \n9. Find employee from date of birth \n10. Sorted list of employees by salary \n0. Exit")
    
    #Take option from user
    val = int(input("Enter a option: "))
    try: 
        #Error if option selected is not in given options
        if val not in range(0,11):
            print("Please re-enter any option.")
            continue
        
        #If user wants to add any or few employees
        elif val == 1:
            name = str(input("Enter employee name:"))
            dob = str(input("Enter date of birth (DD/MM/YYYY): "))
            birthdate = datetime.datetime.strptime(dob,"%d/%m/%Y").date()
            city = str(input("Enter city: "))
            number = int(input("Enter contact number: "))
            id = str(input("Enter employee id: "))
            date = str(input("Enter joining date: "))
            joindate=datetime.datetime.strptime(date,"%d/%m/%Y").date()
            salary = float(input("Enter employee salary: "))
            department = str(input("Enter employee department: "))
            post = str(input("Enter employee post: "))

            #Created Employee object
            new_emp = Employee(name,birthdate,city,number,id,joindate,salary,department,post)
            manage.emp_list.append(new_emp)
            print("\n------Successfully, added to the list.------\n")

        #Print list of all employees 
        elif val == 2:
            if len(manage.emp_list) == 0:
                print("\nThere is no employee in the list!\n")
                continue
            else:
                manage.get_employee_list()

        #Find with employee name
        elif val == 3:
            get_emp = str(input("Enter employye name: "))
            manage.get_employee(get_emp)
            print("\nEmployee details: ")

        #Find with employee department
        elif val == 4:
            get_emp = str(input("\nEnter department of the employee: "))
            manage.get_employee_dept(get_emp)

        #Find with employee salary greater than 50000
        elif val == 5:
            print("\nEmployee details: ")
            count = 1
            for employee in manage.emp_list:
                if employee.salary >= 50000:
                        print("\n({0}. Name: {1}, Date of birth: {2}, City: {3}, Contact No.: {4}, Id: {5}, Join Date: {6}, Salary: {7}, Department: {8}, Post: {9} )\n".format(count,employee.name, employee.dob, employee.city, employee.contact_no, employee.id, employee.date, employee.salary, employee.dept, employee.post))
                        count += 1
                else:
                    print("\nSorry no employee above 50000 salary!\n")

        #Find employee with salary in between 50,000 - 1,00,000
        elif val == 6:
            count = 1
            print("\nEmployee details: ")
            for employee in manage.emp_list:
                if employee.salary >= 50000 or employee.salary <= 100000:
                        print(" \n{0} Name: {1}, Date of birth: {2}, City: {3}, Contact No.: {4}, Id: {5}, Join Date: {6}, Salary: {7},\n Department: {8}, Post: {9} \n".format(count,employee.name, employee.dob, employee.city, employee.contact_no, employee.id, employee.date, employee.salary, employee.dept, employee.post))
                        count += 1
                else:
                    print("\nSORRY! No employee between 50000 - 100000 salary.\n")
        
        #Find employee from current year
        elif val == 7:
            manage.get_employee_join_date()

        #Find employee with city
        elif val == 8:
            get_emp = str(input("Enter the city of employee: "))
            manage.get_employee_place(get_emp)
            
        #Find employee with current month
        elif val == 9:
            manage.get_employee_dob()

        #Sorted list of employees with salary in descending order
        elif val == 10:
            manage.sorted_list()

        elif val == 0:
            break

    except Exception as e:
        print("Try again!",e,type(e).__name__)
        print_exc()


