# Flask-Vue-Full-Stack

This is a template that I use to create a full stack application with Vue.js as frontend and Flask as backend.

I use Vite to create the Vue application

# Setup Steps

```bash
$ mkdir flask-vue-project && cd flask-vue-project
```

## Backend

```bash
$ mkdir backend
$ cd backend
$ python3 -m venv .venv
$ source .venv/bin/activate
$ touch requirements.txt
```

`requirements.txt`

```txt
flask
flask-cors
```

```bash
$ pip install -r requirements.txt
$ touch main.py
```

## Frontend

```bash
$ cd ..
$ npm create vite@latest frontend -- --template vue
$ cd frontend
$ npm install
$ npm install axios
```

# Run the Application

Run Flask backend

```bash
$ cd backend
$ source .venv/bin/activate
$ python main.py
```

Run Vue frontend

```bash
$ cd frontend
$ npm run dev
```
