# Todo Management App Fullstack ✅

Application web fullstack de gestion de tâches — API REST Spring Boot + interface Angular.

---

## 🛠 Stack technique

| Côté | Technologies |
|------|-------------|
| **Backend** | Java · Spring Boot · Spring Data JPA · REST API |
| **Frontend** | Angular · TypeScript · HTML · CSS |
| **Outils** | Maven · npm · Git |

---

## ✨ Fonctionnalités

- ✅ Créer une tâche
- 📋 Lister toutes les tâches
- ✏️ Modifier une tâche existante
- 🗑️ Supprimer une tâche
- 🔗 Communication Frontend ↔ Backend via API REST

---

## 📁 Structure du projet

```
todo_management_app_fullstack/
├── backend/               # API REST Spring Boot
│   ├── src/
│   │   └── main/
│   │       ├── java/      # Controllers, Services, Repositories
│   │       └── resources/ # application.properties
│   └── pom.xml
├── frontend/              # Interface Angular
│   ├── src/
│   │   └── app/           # Components, Services
│   └── package.json
└── README.md
```

---

## 🚀 Lancer le projet

### Prérequis

- Java 17+
- Node.js 18+ & npm
- Angular CLI (`npm install -g @angular/cli`)
- Maven

### 1. Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
```

L'API démarre sur **http://localhost:8080**

### 2. Frontend (Angular)

```bash
cd frontend
npm install
ng serve
```

L'interface démarre sur **http://localhost:4200**

---

## 🔌 Endpoints API

Les tâches sont liées à un utilisateur via `{username}`.

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `GET` | `/jpa/users/{username}/todos` | Récupérer toutes les tâches d'un utilisateur |
| `GET` | `/jpa/users/{username}/todos/{id}` | Récupérer une tâche par ID |
| `POST` | `/jpa/users/{username}/todos` | Créer une nouvelle tâche |
| `PUT` | `/jpa/users/{username}/todos/{id}` | Modifier une tâche |
| `DELETE` | `/jpa/users/{username}/todos/{id}` | Supprimer une tâche |

### Exemple d'appel

```
GET http://localhost:8080/jpa/users/amal/todos
→ Liste de toutes les tâches de l'utilisateur "amal"

POST http://localhost:8080/jpa/users/amal/todos
Body: { "description": "Apprendre Spring Boot", "done": false }
→ 201 Created + Location header vers la nouvelle ressource
```

---

## 👤 Auteur

**Amal** — [GitHub](https://github.com/amalbld) · [LinkedIn](https://www.linkedin.com/in/amal-boulaaid-a976ba1b9/)
