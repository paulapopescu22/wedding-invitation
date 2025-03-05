from rest_framework import serializers
from .models import RSVP


class RSVPSerializer(serializers.ModelSerializer):
    """
    Serializer pentru modelul RSVP.

    Această clasă se ocupă cu transformarea obiectelor RSVP în format JSON
    și conversia datelor JSON în obiecte RSVP, facilitând astfel
    interacțiunea cu API-ul.

    Este utilizată pentru a valida și serializa datele atunci când
    sunt efectuate cereri de tip GET (pentru a returna datele)
    sau POST/PUT/PATCH (pentru a crea sau actualiza obiecte RSVP).

    Parametri:
        model: RSVP
        fields: Toate câmpurile modelului RSVP vor fi incluse în serializare.

    Exemple de utilizare:
        - Serializarea unei instanțe RSVP:
            serializer = RSVPSerializer(rsvp_instance)
            data = serializer.data  # Obține un dicționar JSON

        - Deserializarea datelor dintr-un request POST:
            serializer = RSVPSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()  # Salvează instanța RSVP
    """

    class Meta:
        model = RSVP
        fields = '__all__'
