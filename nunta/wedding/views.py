from django.shortcuts import render
from rest_framework import viewsets
from .models import RSVP
from .serializers import RSVPSerializer

class RSVPViewSet(viewsets.ModelViewSet):
    """
    API ViewSet pentru gestionarea confirmărilor de participare (RSVP).

    Acest ViewSet oferă funcționalități pentru a vizualiza, crea, actualiza
    și șterge instanțe ale modelului RSVP. Utilizând acest ViewSet, se poate
    accesa API-ul pentru a gestiona datele legate de invitațiile la nuntă
    și confirmările de participare ale invitaților.

    Funcționalități:
        - GET: Vizualizează lista confirmărilor de participare.
        - POST: Creează o nouă confirmare de participare (RSVP).
        - PUT/PATCH: Actualizează o confirmare existentă.
        - DELETE: Șterge o confirmare de participare.

    Queryset:
        - Toate instanțele modelului RSVP vor fi incluse în API.

    Serializer:
        - RSVPSerializer este utilizat pentru a serializa și deserializa obiectele RSVP.
    """
    queryset = RSVP.objects.all()
    serializer_class = RSVPSerializer

def invitation_view(request):
    """
    Vizuallizarea paginii de invitație pentru nuntă.

    Această funcție returnează pagina HTML principală a invitației de nuntă
    (de obicei o pagină simplă care conține invitația și opțiunea de RSVP).

    Utilizare:
        - Vizualizare în cadrul aplicației web pentru invitația nupțială.
    """
    return render(request, 'wedding/invite.html')
