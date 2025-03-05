from django.db import models


class RSVP(models.Model):
    """
    Modelul pentru gestionarea confirmărilor de participare la eveniment.

    Acest model reprezintă o invitație la un eveniment și permite stocarea
    informațiilor despre persoanele care confirmă participarea sau nu.

    Atribute:
        - name: Numele persoanei care confirmă sau refuză participarea.
        - email: Adresa de email a persoanei care confirmă sau refuză participarea.
        - attending: Confirmarea participării. Este un câmp boolean care indică dacă persoana va participa.
        - created_at: Data și ora la care a fost creată înregistrarea (generată automat la crearea instanței).

    Metode:
        - __str__: Returnează numele persoanei ca reprezentare a obiectului.
    """

    name = models.CharField(max_length=100)
    email = models.EmailField()
    attending = models.BooleanField(default=False)  # Confirmare de participare
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        """
        Returnează o reprezentare a obiectului RSVP, în acest caz numele persoanei.

        Utilizat pentru a afișa numele persoanei în panoul de administrare și
        în alte locații unde este afișat acest obiect.
        """
        return self.name
