fa l si pe asta engleza # Invitatie de Nunta - Django Project

## Descriere

Acest proiect este o aplicație web realizată în Django, care permite trimiterea unei invitații de nuntă online. Utilizatorii pot completa un formular RSVP pentru a confirma participarea și pot vizualiza imagini într-un slider interactiv.

## Funcționalități

- **Pagina principală cu invitația**
- **Formular RSVP** (Nume, Email, Mesaj, Bifare Participare)
- **Slider cu 3 imagini**
- **Panou de administrare Django** pentru gestionarea invitaților
- **API pentru a obține și trimite RSVP-uri**

## Instalare și rulare

### 1. Clonare repository

```sh
git clone https://github.com/utilizator/invitatie-nunta.git
cd invitatie-nunta
```

### 2. Crearea și activarea unui mediu virtual

```sh
python -m venv venv
source venv/bin/activate  
```

### 3. Instalarea dependențelor

```sh
pip install -r requirements.txt
```

### 4. Aplicarea migrărilor bazei de date

```sh
python manage.py migrate
```

### 5. Crearea unui utilizator Django (pentru acces la Admin)

```sh
python manage.py createsuperuser
```

### 6. Pornirea serverului Django

```sh
python manage.py runserver
```



## Utilizare API

- Endpoint pentru RSVP: `/api/rsvp/`
- Metode acceptate: GET, POST

## Autori

- Popescu Paula



