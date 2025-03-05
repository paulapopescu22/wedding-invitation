"""
Configurarea URL-urilor pentru proiectul 'nunta'.

Această configurare definește maparea URL-urilor către diferite view-uri ale aplicației Django.

În acest fișier:
- `urlpatterns` este o listă de rute URL care leagă URL-urile de funcțiile de view corespunzătoare.
- Se folosesc atât URL-uri pentru panoul de administrare Django, cât și pentru API-ul RSVP, folosind Django REST Framework.

Detalii de configurare:
    - Setăm un router pentru API-ul RSVP, care va gestiona cererile HTTP legate de confirmările de participare (RSVP).
    - Adăugăm rutele URL pentru pagina principală a invitației și pentru API-ul RSVP.
    - Configurăm ruta URL pentru panoul de administrare Django.

Exemple:
    - Vizualizarea panoului de administrare Django: `admin/`
    - Vizualizarea paginii principale a invitației de nuntă: `''` (root-ul aplicației)
    - Accesarea API-ului pentru RSVP: `api/`

Pentru mai multe informații, consultați documentația oficială Django:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from wedding.views import RSVPViewSet, invitation_view  # Import corect

# Setăm router-ul pentru API-ul RSVP
router = DefaultRouter()
router.register(r'rsvp', RSVPViewSet)  # API-ul RSVP

urlpatterns = [
    path('admin/', admin.site.urls),  # URL-ul pentru panoul de administrare
    path('', invitation_view, name='invitation'),  # Pagina principală a invitației
    path('api/', include(router.urls)),  # URL-ul pentru API-ul RSVP
]
