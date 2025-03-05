import os
from django.core.wsgi import get_wsgi_application

# Setează variabila de mediu DJANGO_SETTINGS_MODULE cu calea către fișierul de setări
# al aplicației Django. Acest pas este necesar pentru a configura corect aplicația Django.
# În acest caz, fișierul de setări este 'nunta.settings'.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'nunta.settings')

# Crează aplicația WSGI pentru serverul web, care va permite interacțiunea dintre server
# și aplicația Django, gestionând cererile HTTP.
application = get_wsgi_application()
