#  Create a class for Users,
# username
# account no
# mobile no
# address
# account balance
# -> Create a class for user manager
# Manages user => Add new user, Get existing user, remove user
# -> Create a class for ATM,
# Enter account no and get user if not found then show a valid message
# Show options for user operations like creating new users, View Balance. Deposit, Withdraw, Close account, etc...
# Transaction charge: 0.5 for every operation
# Account balance limit: 10000

class Users():
    def __init__(self, user_name, account_no, mobile_no, address, account_bal):
        self.user_name = user_name
        self.account_no = account_no
        self.mobile_no = mobile_no
        self.address = address
        self.account_bal = account_bal

class Manager():
    def __init__(self):
        self.user_list = []

    def get_exist_user(self):
        if len(self.user_list) != 0:
            for u in self.user_list:
                print("Ac. Number {0}\n Ac. Balance{1} \n".format(u.account_no, u.account_bal))
        else:
            print("Account not found.")

class ATM():
    def display_account(user_list,get_account_no):
        for user in user_list:
            if user.account_no == get_account_no:
                return user
        return False


manage = Manager()

while True:
    print("1: Create an account \n2: View Balance \n3: Deposit \n4: Withdraw \n5: Close account \n6: Exit")
    val = int(input("Enter a value from above: "))
    try:
        if val == 1:                    #---------------CREATE AN ACCOUNT----------------------------------------
            name = str(input("Enter your name: "))
            account_no = int(input("Enter your account number: "))
            mobile_no = str(input("Enter your mobile number: "))
            address = str(input("Enter your address: "))
            while True:
                account_bal = int(input("Enter some account balance: "))
                if account_bal < 10000:
                    print("Sorry the minimum account balance required is 10000!")
                else:
                    break
            new_user = Users(name, account_no, mobile_no, address,account_bal)
            manage.user_list.append(new_user)
            print("Congrats!! You are member of this bank.")

        elif val == 2:                  #---------------VIEW BALANCE----------------------------------------
            get_account_no = int(input("Enter account number to view balance: "))
            get_user_account = ATM.display_account(manage.user_list, get_account_no)

            if get_user_account:
                print("Your bank account's balance is: {}".format(get_user_account.account_bal))
            else:
                print("There is no such account!")

        elif val == 3:                  #---------------DEPOSIT AMOUNT----------------------------------------
            get_account_no = int(input("Enter account number:  "))
            get_user_account = ATM.display_account(manage.user_list, get_account_no)
            if get_user_account:
                get_user_amount = int(input("Enter deposit amount: "))
                get_user_account.account_bal = int(get_user_account.account_bal) + get_user_amount
                print("Your current balance is {}".format(get_user_account.account_bal))
        
        elif val == 4:                  #---------------WITHDRAW AMOUNT----------------------------------------
            get_account_no = int(input("Enter account number:  "))
            if get_user_account:
                get_user_amount = int(input("Enter amount to be withdrawn: "))
                if get_user_account.account_bal >= 0:
                    get_user_account.account_bal = int(get_user_account.account_bal) - get_user_amount - 0.5
                    print("Curently your account has balance: {}".format(get_user_account.account_bal))
                else:
                    print("Can't withdraw. Zero amount in the account")

        elif val == 5:                  #---------------CLOSE ACCOUNT----------------------------------------
            get_account_no = int(input("Enter account number: "))
            if get_user_account:
                manage.user_list.remove(get_user_account)
                # break
        elif val == 6:
            break
    except Exception as e:
        print("Try again!",e,type(e).__name__)




        

