from django.apps import AppConfig


class WeddingConfig(AppConfig):
    """
    Configurația aplicației 'wedding' în Django.

    Setează valoarea implicită pentru câmpul auto-incremental și numele aplicației.
    """
    default_auto_field = 'django.db.models.BigAutoField'  # Tipul implicit pentru câmpurile auto-generatoare
    name = 'wedding'  # Numele aplicației
