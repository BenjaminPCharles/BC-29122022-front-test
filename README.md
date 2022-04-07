# Nexteneo - Test technique FRONT (React.js / TypeScript)

- [Installation](#installation-en-local)
- [Exercice 1](#exercice-1)
- [Exercice 2](#exercice-2)
- [Exercice 3](#exercice-3)

## Installation en local

### Copier le projet

```sh
git clone git@github.com:nexteneo/recrutement-test-front.git # Téléchargement du code
cd recrutement-test-front # Entrer dans le projet
```

### Installer les dépendances

```
npm install
```

### Lancer le projet

```
npm run dev
```

Vous pouvez ensuite vous rendre sur http://localhost:3000. Vous devriez voir cette page, qui liste les différents points de charge :

![Screenshot Projet](https://raw.githubusercontent.com/nexteneo/recrutement-test-front/main/instructions/evse-1.png)

## Règles

- Réalisez ce projet quand vous voulez, il n'y a pas de temps imparti.
- Vous avez absolument le droit d'utiliser tous les outils que vous voulez (Google, StackOverflow, MDN...)
- Lorsque vous avez terminé, vous pouvez uploader votre code sur votre github personnel et m'envoyer le lien. Nous nous panifierons ensuite une petite session de debrief.


**Bon courage ! 🙂 Si vous êtes vraiment coincés, par exemple si vous n'arrivez pas à installer le projet, n'hésitez surtout pas à me contacter.**
 

## Exercice 1

Si vous cliquez sur le lien "Sessions de charge" du menu de gauche, vous trouverez une page vide.

En vous inspirant du code de la page qui liste les points de charge, créez la page qui va lister les différentes sessions de charge. Voici à quoi elle devrait ressembler :

![Screenshot Exercice 1](https://raw.githubusercontent.com/nexteneo/recrutement-test-front/main/instructions/sessions-1.png)

**Bonus exercice 1** (facultatif) : Affichez les sessions dans l'ordre de la plus récente à la plus ancienne.

## Exercice 2

De retour sur la page qui liste les points de charge, utilisez le composant Chip de Material UI (https://mui.com/components/chips) pour mettre en relief les différents statuts des points de charge.

Votre page devrait ressembler à peu près à ça :

![Screenshot Exercice 2](https://raw.githubusercontent.com/nexteneo/recrutement-test-front/main/instructions/evse-2.png)

## Exercice 3

Ajouter une colonne "Durée" à la page qui liste les sessions de charge, qui doit afficher dans un format facilement lisible la durée d'une session de charge.

Par exemple :

![Screenshot Exercice 3](https://raw.githubusercontent.com/nexteneo/recrutement-test-front/main/instructions/sessions-2.png)

