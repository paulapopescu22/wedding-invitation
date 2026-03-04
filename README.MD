# Wedding Invitation - Django Project

## Description

This project is a web application built with Django that allows sending online wedding invitations. Users can fill out an RSVP form to confirm their attendance and view images in an interactive slider.

## Features

- Main invitation page

- RSVP form (Name, Email, Message, Attendance Checkbox)

- Image slider with 3 images

- Django admin panel for managing guests

- API for retrieving and submitting RSVPs

## Installation and Running

1. Clone the repository

```sh
git clone https://github.com/utilizator/invitatie-nunta.git
cd invitatie-nunta
```
2. Create and activate a virtual environment
```sh
python -m venv venv
source venv/bin/activate  
```

3. Install dependencies
```sh
pip install -r requirements.txt
```

4.Apply database migrations
```sh
python manage.py migrate
```

5. Create a Django superuser (for Admin access)
```sh
python manage.py createsuperuser
```

6. Start the Django server
```sh
python manage.py runserver
```

## API Usage

- RSVP endpoint: /api/rsvp/

- Supported methods: GET, POST

## Author

- Popescu Paula
