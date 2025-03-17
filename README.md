# Environnement de Développement pour Application Node.js

## 📌 Objectif
Ce projet vise à configurer un environnement de développement structuré et professionnel pour une application Node.js en respectant les bonnes pratiques :
- **Tests unitaires** avec Jest
- **Documentation automatique** avec JSDoc
- **Conventions de commits** avec Husky
- **Gestion des variables d'environnement** avec `.env`
- **Linting** avec ESLint (standard Airbnb)
- **Bundling** avec Webpack
- **Transpilation** avec Babel
- **Utilisation de SASS** pour la gestion des styles
- **Développement React.js**

---



### Installer les dépendances
```bash
npm install
```


### Lancer le projet en mode développement
```bash
npm run dev
```
Cela démarre Webpack avec hot reload.

---

## 🛠️ Scripts NPM

| Commande | Description |
|----------|------------|
| `npm run dev` | Démarre le serveur Webpack en mode développement |
| `npm run prod` | Génère un build optimisé pour la production |
| `npm run lint` | Vérifie et corrige les erreurs de syntaxe avec ESLint |
| `npm run test` | Exécute les tests unitaires avec Jest |
| `npm run doc` | Génère la documentation avec JSDoc |

---

## 📝 Conventions de Commits avec Husky

Nous utilisons [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) pour structurer nos messages de commit. Voici quelques exemples :

| Type | Description | Exemple |
|------|------------|---------|
| `feat` | Ajout d'une nouvelle fonctionnalité | `git commit -m "feat: ajouter un formulaire d'inscription"` |
| `fix` | Correction de bug | `git commit -m "fix: correction de l'affichage du bouton"` |
| `chore` | Tâches de maintenance | `git commit -m "chore: mise à jour des dépendances"` |
| `docs` | Documentation | `git commit -m "docs: mise à jour du README"` |

---

## 🏗️ Technologies utilisées

- **Node.js** : Environnement d'exécution JavaScript
- **Webpack** : Bundler de modules pour JavaScript
- **Babel** : Transpilation du code ES6+
- **ESLint** : Vérification de la syntaxe et des bonnes pratiques (Airbnb)
- **SASS** : Préprocesseur CSS
- **React.js** : Bibliothèque pour les interfaces utilisateur
- **Jest** : Framework de tests unitaires
- **Husky** : Outil pour forcer les conventions de commit

---

## 📚 Génération de la documentation
La documentation est générée automatiquement avec JSDoc.
```bash
npm run doc
```
Les fichiers HTML de la documentation sont créés dans le dossier `docs/`.

---

## 📂 Structure du projet

```
.env-app-ensitech/
│── src/
│   ├── index.js          # Point d'entrée principal
|   ├── sample.test.ts    # fichier test
│   ├── components/       # Composants React
│   ├── styles/           # Fichiers SASS/CSS
│   ├── tests/            # Tests unitaires
│── public/
│   ├── index.html        # Fichier HTML principal
│── docs/                 # Documentation générée
│── webpack.config.js      # Configuration de Webpack
│── babel.config.js        # Configuration de Babel
│── eslint.config.mjs      # Configuration d'ESLint
│── package.json          # Fichier de configuration du projet
│── README.md             # Documentation du projet
│── .gitignore            # Fichiers à ignorer par Git
```

---




## 📄 Licence

Ce projet est sous licence MIT.

