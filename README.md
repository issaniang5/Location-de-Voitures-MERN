
<h1 align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.herokuapp.com?font=Architects+Daughter&color=7AF79A&size=30&lines=🚗🔑+Location+de+Voitures+" alt="Typing SVG">
  </a>
</h1>


# 🛞 Aperçu

Une application MERN pour la location de voitures, intégrant des dépendances essentielles telles que Redux Toolkit, Stripe, Testing Library, Axios, React, React Router et Tailwind CSS.


<img src='https://github.com/issaniang5/Location-de-Voitures-MERN/blob/main/loader.gif' height=500px width=800px></img>

## 🔍 🔍 Table des Matières

* [📝 Résumé du Projet](#-résumé-du-projet)

* [💻 Pile Technologique](#-pile-technologique)

* [⚙️ Configuration](#-configuration)

* [🚀 Lancer Localement](#-lancer-localement)


## 📝 Résumé du Projet

- [client/src](client/src) : Contient le code source principal de l'application côté client.
- [client/src/api](client/src/api) : Gère les requêtes et réponses API.
- [client/src/app](client/src/app) : Contient les fichiers et composants principaux de l'application.
- [client/src/assets](client/src/assets) : Stocke les fichiers statiques utilisés dans l'application.
- [client/src/components](client/src/components) : Contient des composants d'interface utilisateur réutilisables.
- [client/src/features](client/src/features) : Contient des composants et logiques spécifiques aux fonctionnalités.
- [client/src/pages](client/src/pages) : Regroupe les différentes pages de l'application.
- [client/src/utils](client/src/utils) : Fournit des fonctions utilitaires et des méthodes d'aide.
- [server/controllers](server/controllers) : Implémente la logique pour gérer les requêtes HTTP.
- [server/models](server/models) : Définit les modèles de données utilisés par le serveur.

## 💻 Pile Technologique

- [reduxjs/toolkit](https://redux-toolkit.js.org/) : Une bibliothèque qui simplifie la gestion d'état avec Redux.
- [stripe/react-stripe-js](https://github.com/stripe/react-stripe-js) : Composants React pour intégrer les paiements Stripe.
- [testing-library/jest-dom](https://github.com/testing-library/jest-dom) : Matchers Jest personnalisés pour des tests simplifiés.
- [axios](https://axios-http.com/) : Un client HTTP basé sur des promesses pour effectuer des requêtes API.
- [react](https://reactjs.org/) : Une bibliothèque JavaScript pour créer des interfaces utilisateur.
- [react-dom](https://reactjs.org/docs/react-dom.html) : Fournit des méthodes spécifiques au DOM pour React.
- [react-redux](https://react-redux.js.org/) : Liaisons officielles entre React et Redux.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start) : Routage déclaratif pour les applications React.

## ⚙️ Setting Up

#### Environment Variables

Pour exécuter ce projet, vous devez ajouter les variables d'environnement suivantes dans votre fichier `.env` dans le dossier `server` :


`STRIPE_SECRET_TEST`

`JWT_SECRET`

`BUCKET_NAME`

`MONGO_URI`

## 🚀 🚀 Lancer Localement
1.Clonez le dépôt **Location de Voitures MERN**:
```sh
git clone https://github.com/fiskryeziu/rentacar
```
2.Pour le backend, accédez au répertoire "server":
```bash
cd server
npm install
npm run server
```

3.Pour le frontend, accédez au répertoire "client":
```bash
cd client
npm install
npm start
```

