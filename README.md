# WIK-DPS-TP01

J'ai d'abord créé mon dossier `/ynov/devSecops`, dedans j'ai fait `code .` et j'ai vérifié les versions de Node.js et npm avec la commande `-v`.

J'initie le projet TypeScript avec la commande :
`npm install -D typescript @types/node`

Ensuite je fais :
`npx tsc --init`

Ensuite j'ai créé le fichier `index.ts` pour accueillir mon code (ts pour TypeScript, qu'on va traduire en js afin que Node.js puisse l'exécuter).

Pour que TypeScript comprenne les outils de Node.js sans râler, j'ai modifié le fichier `tsconfig.json` pour activer cette ligne :
`"types": ["node"]`

---

## Le code du serveur

Dans mon fichier `index.ts`, j'ai écrit un code simple pour créer le serveur. Je n'ai pas installé Express pour respecter la consigne et avoir le moins de dépendances possibles. J'utilise juste le module `http` de base.


1. Je récupère la méthode et l'adresse demandée par le client.
2. Je vérifie si c'est strictement un `GET` et si le chemin est bien `/ping`.
3. Si c'est le cas, je récupère ses headers, je les transforme en texte JSON avec `JSON.stringify` et je lui renvoie ça avec un code 200 OK.
4. Si le client se trompe de route ou de méthode, mon bloc `else` s'active et lui renvoie un code 404 avec une réponse totalement vide pour la sécurité.

Tout à la fin du fichier, j'allume le serveur sur le port configuré (le port `3000` par défaut).