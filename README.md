# MP Services — Site Web

Site vitrine statique en français pour **MP Services**, entreprise de rénovation à Bruxelles et alentours.

## Démo locale

Le site est développé en **HTML + CSS + JavaScript**, sans framework, backend ni base de données. Pour le visualiser en local :

```bash
python3 -m http.server 8080
```

Puis ouvrir http://localhost:8080

### Mise à jour et dépannage

Si vous avez déjà cloné le dépôt, lancez `git pull origin main` avant de tester. Exécutez le serveur **à la racine du dépôt**, dans le dossier qui contient `index.html` et `assets/`.

```bash
git clone https://github.com/SergioPacheco/mp-services.git
cd mp-services
python3 -m http.server 8080
```

Le navigateur peut ensuite ouvrir `http://localhost:8080/`. Les chemins des images sont relatifs et sont aussi compatibles avec une ouverture directe de `index.html`. Si le port 8080 est occupé, essayez `python3 -m http.server 8081` et `http://localhost:8081/`.

## Déploiement sur Cloudflare Pages

1. Dans Cloudflare : **Workers & Pages → Create → Pages → Import an existing Git repository**.
2. Choisir **SergioPacheco/mp-services**, branche **main**.
3. **Framework preset : None**.
4. **Build command :** laisser vide.
5. **Build output directory : `.`** (racine du dépôt).
6. Déployer puis associer le domaine personnalisé **www.mp-services.be**.
7. Vérifier et configurer les enregistrements DNS requis dans Cloudflare.

> Le dépôt GitHub n'est pas un site en ligne tant que le déploiement Cloudflare n'est pas réalisé.

## Contacts officiels

- Téléphone / WhatsApp : **+32 475 50 17 29**
- E-mail : **info@mp-services.be**
- Adresse du site : **https://www.mp-services.be**

## Visuels

Les images du dossier `assets` sont des illustrations **SVG originales** créées pour le nouveau site, en s'inspirant des supports de présentation remis pour MP Services. Elles ne doivent pas être présentées comme des photos de chantiers effectivement réalisés. Les fichiers JPG publicitaires d'origine pourront être ajoutés ultérieurement.

## Informations importantes

Le formulaire **n'enregistre pas de données** : il compose simplement un message via WhatsApp pour que le visiteur puisse l'envoyer lui-même. Aucun témoignage, expérience chiffrée ou photo de chantier non vérifiés n'ont été inventés.

Le numéro d'entreprise, l'adresse légale et les informations juridiques doivent être validés avant une publication commerciale complète. Ajouter les mentions légales et une politique de confidentialité adaptée avant le lancement définitif.
