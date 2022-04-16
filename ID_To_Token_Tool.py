import random
from random import *
from random import randrange, choice
from string import ascii_letters, digits
from threading import Thread as thr
from itertools import cycle
from datetime import date
from colorama import Fore
from time import sleep
import os

os.system("title $ystem$quad")
print(f"""
{Fore.RED}
$ystem$quad
                                       {Fore.WHITE}         Instalando...
""")
print(f"{Fore.RED}")

import base64, pyperclip


os.system("title ID To Token Tool")
os.system("cls")
print(f"""
{Fore.BLUE}
 __     _____        ______   ______        ______   ______     __  __     ______     __   __    
/\ \   /\  __-.     /\__  _\ /\  __ \      /\__  _\ /\  __ \   /\ \/ /    /\  ___\   /\ "-.\ \   
\ \ \  \ \ \/\ \    \/_/\ \/ \ \ \/\ \     \/_/\ \/ \ \ \/\ \  \ \  _"-.  \ \  __\   \ \ \-.  \ 
 \ \_\  \ \____-       \ \_\  \ \_____\       \ \_\  \ \_____\  \ \_\ \_\  \ \_____\  \ \_\\"\_\ 
  \/_/   \/____/        \/_/   \/_____/        \/_/   \/_____/   \/_/\/_/   \/_____/   \/_/ \/_/ 
                                                                                                 
                                    {Fore.WHITE}         Created by $ystem$quad
""")

id = input(Fore.RED+" root" + Fore.WHITE+"@" + Fore.RED+"$ystem$quad" + Fore.WHITE+":" + Fore.CYAN+"~" + Fore.RED+"ID :" + Fore.WHITE+" ")

try:
    check = int(id)
    print('')
    print(f'{Fore.WHITE} [{Fore.GREEN}+{Fore.WHITE}] ID VÃ¡lida.')
    data = f'{id}'
    encodedBytes = base64.b64encode(data.encode("utf-8"))
    encodedStr = str(encodedBytes, "utf-8")
    print('')
    print(f'{Fore.RED} [{Fore.WHITE}+{Fore.RED}] {encodedStr}')
    print('')
    copy = input(f'{Fore.WHITE} [{Fore.GREEN}+{Fore.WHITE}] quieres copiar al el token? (y/n){Fore.WHITE} ')

    if copy == "y":
        pyperclip.copy(encodedStr)
        print('')
        print(f'{Fore.WHITE} [{Fore.GREEN}+{Fore.WHITE}] Texto Copiado !')

    if copy == "Y":
        pyperclip.copy(encodedStr)
        print('')
        print(f'{Fore.WHITE} [{Fore.GREEN}+{Fore.WHITE}] Texto Copiado !')

    else:
        print('')
        print(f'{Fore.RED} [{Fore.YELLOW}+{Fore.BLUE}] Pulsa enter para salir')
        input()

except ValueError:
    print('')
    print(f'{Fore.WHITE} [{Fore.RED}+{Fore.WHITE}] ID InvÃ¡lida')
    print('')
    print(f'{Fore.WHITE} [{Fore.RED}+{Fore.WHITE}] Pulsa enter para salir')
    input()