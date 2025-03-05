from django.contrib import admin
from .models import RSVP

"""
Înregistrează modelul RSVP în panoul de administrare Django.

Această configurație permite ca modelul RSVP să fie gestionat din panoul de administrare al Django.
După ce modelul este înregistrat, utilizatorii pot adăuga, edita și șterge instanțe ale modelului RSVP direct din interfața de administrare Django.

Scop:
    - Permite gestionarea RSVP-urilor (confirmărilor de participare) din aplicația web.
    - Oferă o modalitate ușoară de administrare a confirmărilor de participare în cadrul aplicației de invitație la nuntă.

Cum funcționează:
    - `admin.site.register(RSVP)` înregistrează modelul RSVP în panoul de administrare.
    - După ce este înregistrat, modelul poate fi accesat și gestionat din interfața Django Admin.
"""
admin.site.register(RSVP)
