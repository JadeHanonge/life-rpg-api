# Life RPG API 🎮

API REST en **Node.js / Express** avec base de données **MySQL**, servant de back-end à une application de gamification de la vie quotidienne : les tâches du quotidien deviennent des **quêtes** qui rapportent de l'**XP** et font monter en **niveaux**.

> Projet personnel — le but est de transformer la gestion de ses tâches en une expérience type RPG (quêtes, progression, récompenses). Le développement s'est surtout concentré sur la partie **quêtes**, pour un usage personnel au quotidien.

## Fonctionnalités

- Gestion complète des quêtes (création, suivi, changement de statut, suppression)
- Suivi du joueur : statistiques, XP, niveau
- Base pour un système de compétences (skills), encore peu développée
- Logique métier (calcul XP/niveaux) centralisée dans `services/`

## Stack technique

- **Back-end :** Node.js, Express
- **Base de données :** MySQL
- **Architecture :** séparation routes / logique métier (`backend/`, `services/`)

## Architecture du projet
life-rpg-api/
├── backend/
│ ├── config/ → configuration de la connexion à la base de données
│ ├── controllers/ → logique des routes, un fichier par entité (player, quest, skill)
│ └── routes/ → définition des routes, un fichier par entité (player, quest, skill)
├── services/ → logique métier (calcul d'XP, gestion des niveaux, etc.)
└── server.js → point d'entrée du serveur


Le front-end associé à cette API est développé séparément (React).

## Installation

```bash
git clone https://github.com/JadeHanonge/life-rpg-api.git
cd life-rpg-api
npm install
```

Configurer un fichier `.env` à la racine avec les identifiants de connexion à ta base MySQL :
DB_HOST=localhost  
DB_USER=user  
DB_PASSWORD=mot_de_passe  
DB_NAME=life_rpg  
PORT=3000  


Lancer le serveur :
```bash
npm start
```

## Endpoints

### Quêtes
| Méthode | Route                        | Description                     |
|---------|-------------------------------|----------------------------------|
| GET     | `/quests`                    | Récupère toutes les quêtes       |
| GET     | `/questType`                 | Récupère les types de quêtes     |
| POST    | `/addQuest`                  | Crée une nouvelle quête          |
| PUT     | `/updateStateQuest/:id`      | Met à jour le statut d'une quête |
| DELETE  | `/deleteQuest/:id`           | Supprime une quête               |

### Joueur
| Méthode | Route                        | Description                        |
|---------|-------------------------------|--------------------------------------|
| GET     | `/player/:id`                | Récupère un joueur par son ID        |
| GET     | `/player-stat`                | Récupère les statistiques du joueur  |
| PUT     | `/updateXp/:id`               | Met à jour l'XP du joueur            |
| PUT     | `/updateStat/:id`             | Met à jour les statistiques          |
| PUT     | `/updatePlayerLevel/:id`      | Met à jour le niveau du joueur       |

### Compétences (skills)
| Méthode | Route      | Description                  |
|---------|------------|-------------------------------|
| GET     | `/skills`  | Récupère toutes les compétences (fonctionnalité encore peu développée) |

## Statut du projet

Le système de quêtes (CRUD + progression) est fonctionnel. La gestion du joueur (XP, niveaux) est en place. Les compétences (skills) sont pour l'instant un point d'entrée minimal, à développer davantage.

## Auteure

**Jade Hanonge**
[GitHub](https://github.com/JadeHanonge)