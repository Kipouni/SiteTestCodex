# Refaire la maquette dans WordPress, pas à pas

Ce guide part de l’éditeur de blocs natif de WordPress (Gutenberg). Il permet de construire une page dont les textes, images et boutons resteront modifiables visuellement. Aucun constructeur payant n’est nécessaire pour cette méthode.

Le thème, la version de WordPress et les droits du compte peuvent modifier les menus disponibles. Les étapes ne supposent pas que le site actuel a déjà été inspecté. Si vous utilisez Elementor ou Divi, arrêtez-vous au repérage de l’éditeur : les principes restent les mêmes mais les clics doivent être adaptés.

Le fichier `style-wordpress.css` de ce dossier fournit les styles de la page. Le CSS de la maquette HTML d’origine ne doit pas être collé tel quel dans WordPress : il cible aussi l’en-tête et le pied de page de tout le site.

## 1. Préparer un espace d’essai

La solution recommandée est une copie de test du site, souvent appelée « staging » ou « préproduction » dans l’espace de l’hébergeur. C’est une copie indépendante sur laquelle on peut faire des essais avant la mise en ligne.

1. Connectez-vous à l’espace de gestion de l’hébergement.
2. Cherchez une fonction « Staging », « Site de test » ou « Cloner ».
3. Si elle existe, créez une copie et ouvrez l’administration WordPress de cette copie. Vérifiez l’adresse avant de travailler.
4. Si elle n’existe pas, demandez au responsable de l’hébergement de préparer cette copie avec sauvegarde de la base et des fichiers.
5. En attendant, vous pouvez commencer **Pages → Ajouter une page**, nommée « Nouvelle page d’accueil — essai », et l’enregistrer en **brouillon**. Une nouvelle page brouillon permet d’essayer son contenu, mais les modifications du thème, des styles globaux, de l’en-tête ou du pied de page affectent aussi les autres pages du site. Réservez ces changements à la copie de test.

Ne changez pas le thème actif simplement pour suivre ce guide. Ne faites pas de cette page l’accueil public pendant sa construction.

## 2. Reconnaître votre éditeur

Ouvrez **Pages**, puis la page brouillon.

- Des blocs, un bouton **+** et une barre d’outils apparaissent : c’est probablement l’éditeur natif, continuez.
- Vous voyez **Modifier avec Elementor** : le site peut employer Elementor. Vérifiez comment la page d’accueil actuelle a été construite avant de choisir votre méthode.
- Vous voyez **Utiliser Divi Builder** : même principe, adaptez le guide à Divi.
- Vous voyez un grand champ de texte avec les onglets « Visuel / Texte » : il peut s’agir de l’éditeur classique.

Dans **Apparence → Thèmes**, relevez le nom du thème actif. Avec certains thèmes, **Apparence → Éditeur** permet de modifier les modèles et l’en-tête ; avec d’autres, les réglages passent par **Personnaliser**. L’absence d’un menu peut aussi venir des droits du compte.

## 3. Comprendre les cinq blocs utiles

| Bloc | Rôle dans la maquette |
|---|---|
| Groupe | Une boîte qui rassemble plusieurs blocs : une section entière, par exemple |
| Colonnes | Deux contenus côte à côte, comme le texte et la grande photo |
| Titre / Paragraphe | Les textes |
| Image | Une photo ou le logo |
| Boutons | Un ou plusieurs liens avec un aspect de bouton |

Cliquez sur **+**, puis cherchez le nom du bloc. Dans l’éditeur, ouvrez la **Vue en liste** (icône de lignes horizontales) : elle affiche les blocs et leur imbrication. C’est la meilleure manière de sélectionner un Groupe plutôt qu’un texte à l’intérieur.

Pour ajouter une classe CSS : sélectionnez le bloc → panneau de droite → onglet **Bloc** → **Avancé** → **Classe(s) CSS additionnelle(s)**. Saisissez le nom sans point. Pour deux classes, séparez-les avec un espace, par exemple `spa-section spa-help`.

Le nom d’une classe est simplement une étiquette : elle permet au fichier de style de reconnaître le bloc à mettre en forme.

## 4. Préparer les photos et le logo

Dans **Médias → Ajouter un fichier média**, importez :

- le logo original, idéalement en PNG pour éviter les restrictions d’import SVG de WordPress ;
- une grande photo pour l’accueil ;
- trois photos d’animaux pour les cartes ;
- une photo du refuge ou de l’équipe.

Pour la grande photo, environ 1 200 à 1 600 pixels de large suffisent généralement. Préférez des images JPG ou WebP raisonnablement compressées. Conservez une bonne qualité et ne déformez pas les proportions du logo.

Renseignez un **texte alternatif** utile pour chaque image porteuse d’information, par exemple « Milo, chien au pelage doré, dans le jardin du refuge ». Les animaux de la maquette sont fictifs : utilisez des informations vérifiées avant de publier.

## 5. Créer le cadre de la page

1. Ouvrez votre brouillon « Nouvelle page d’accueil — essai ».
2. Si votre thème propose un modèle **Pleine largeur** ou **Sans barre latérale**, sélectionnez-le dans les réglages de la page. Les intitulés varient. Sinon, gardez le modèle existant pour commencer.
3. Ajoutez un bloc **Groupe**. Ce sera le parent de toute la page.
4. Dans **Avancé**, donnez-lui la classe `spa-maquette`.
5. Si l’option d’alignement **Pleine largeur** est proposée, sélectionnez-la.
6. Si le Groupe possède une option « Les blocs internes utilisent la largeur du contenu », désactivez-la pour que les bandes colorées puissent utiliser toute la largeur. La largeur du contenu sera limitée dans les sous-groupes.
7. Ajoutez toutes les sections suivantes **à l’intérieur** de ce Groupe. Vérifiez dans la Vue en liste qu’elles sont bien imbriquées sous lui.

Une barre latérale ou un titre de page ajouté par le thème peut rester visible. Cela se règle dans le modèle de page ou les options du thème, pas en effaçant des éléments au hasard. Dans un thème de blocs, créer un modèle réservé à cette page évite de modifier celui de toutes les pages. Ce réglage précis dépendra de votre thème.

## 6. Installer le style fourni

Ouvrez le fichier **style-wordpress.css** dans ce même dossier GitHub. Cliquez sur **Raw** pour afficher son contenu brut, puis copiez tout le texte.

Selon votre installation :

- thème classique : **Apparence → Personnaliser → CSS additionnel** ;
- thème de blocs récent : **Apparence → Éditeur → Styles**, puis cherchez **CSS additionnel** dans le menu **⋮** des styles ; l’emplacement peut varier suivant la version.

Collez le code **à la suite du CSS déjà présent**, puis enregistrez. N’effacez pas les autres règles. Le code fourni est limité aux blocs placés dans `spa-maquette`. Pour les futurs ajustements, modifiez ce même morceau de CSS au lieu de le coller plusieurs fois.

Si vous ne trouvez pas cette zone, relevez le thème et votre version de WordPress. Certaines offres WordPress.com limitent le CSS personnalisé selon l’abonnement ; un compte avec des droits insuffisants peut également ne pas voir le réglage. N’achetez pas une extension avant d’avoir identifié votre cas.

La prévisualisation de la page fait foi : le CSS additionnel n’apparaît pas toujours de la même façon dans le canevas de l’éditeur.

### Les polices

Le CSS prévoit **Playfair Display** pour les titres et **DM Sans** pour les textes, avec Georgia et Arial comme alternatives. Il ne télécharge pas lui-même les polices.

Si votre WordPress dispose de la bibliothèque de polices : **Éditeur → Styles → Typographie → Gérer les polices** ; installez ces familles depuis la bibliothèque disponible ou importez leurs fichiers WOFF2 autorisés. Les intitulés peuvent varier. Si cette fonction est absente, commencez avec Georgia et Arial : la page restera utilisable, puis nous adapterons les polices à votre thème. La comparaison exacte de la typographie attendra cette étape.

## 7. Construire la première section : texte et grande photo

Dans le Groupe principal :

1. Ajoutez un **Groupe**, classe `spa-section`.
2. À l’intérieur, ajoutez un **Groupe**, classe `spa-inner`.
3. Dans celui-ci, ajoutez **Colonnes → 50 / 50**. Activez « Empiler sur mobile » si l’option est disponible.
4. Dans la colonne de gauche, ajoutez un **Paragraphe** : « REFUGE SPA D’OYONNAX », classe `spa-eyebrow`.
5. Ajoutez un **Titre**, niveau **H1** : « Une rencontre peut tout changer. ». Sélectionnez « tout » et appliquez l’italique : le CSS le rendra bleu.
6. Ajoutez un **Paragraphe** : « Pour eux, une nouvelle vie. Pour vous, une histoire qui commence. ».
7. Ajoutez **Boutons**, puis un bouton « Trouver mon compagnon ». Dans son lien, saisissez `#animaux`.
8. Ajoutez un second bouton « Découvrir le refuge », lien `#refuge`. Sur ce bloc **Bouton**, ajoutez la classe `spa-button-outline`.
9. Dans la colonne de droite, ajoutez une **Image** depuis la médiathèque. Donnez au bloc Image la classe `spa-hero-photo`.
10. Enregistrez le brouillon, puis prévisualisez.

Vous devez voir le texte à gauche, la photo à droite, un grand angle arrondi et des boutons bleus. Les retours à la ligne du titre peuvent varier selon la police et la largeur : ce n’est pas une erreur. Le petit macaron superposé de la maquette pourra être ajouté ensuite ; il n’est pas nécessaire à cette première construction.

Si rien ne change, vérifiez d’abord : le Groupe parent porte-t-il bien `spa-maquette` ? Le CSS est-il enregistré ? Les classes sont-elles écrites sans point ? La page de prévisualisation a-t-elle été actualisée ?

## 8. Ajouter la bande de valeurs

Après la première section, toujours dans `spa-maquette` :

1. Ajoutez un **Groupe**, classes `spa-section spa-pale`.
2. Ajoutez dedans un **Groupe**, classe `spa-inner`.
3. Ajoutez un bloc **Colonnes** à trois colonnes.
4. Dans chaque colonne, placez un court Paragraphe : « Adopter, c’est s’engager », « Chaque histoire compte », « Un refuge à taille humaine ».

La classe `spa-pale` apporte le fond bleu très clair. Vous pourrez réduire l’espacement vertical dans le CSS plus tard si vous souhaitez une bande aussi fine que celle de la maquette.

## 9. Construire les trois cartes d’animaux

1. Ajoutez un Groupe `spa-section`, puis un Groupe `spa-inner` dedans.
2. Dans **Avancé → Ancre HTML** du Groupe extérieur, écrivez `animaux` **sans #**. Le bouton `#animaux` y mènera.
3. Ajoutez le petit texte « DE BELLES HISTOIRES À ÉCRIRE », classe `spa-eyebrow`.
4. Ajoutez un Titre **H2** : « Et si c’était vous ? », avec « vous » en italique.
5. Ajoutez un Paragraphe de présentation.
6. Ajoutez trois **Colonnes**.
7. Dans la première, ajoutez un Groupe `spa-animal-card` contenant une Image `spa-animal-photo`, un Titre **H3** avec le prénom, un Paragraphe `spa-meta` pour l’âge et les informations utiles, puis un Bouton « Découvrir son histoire ».
8. Dupliquez ce Groupe dans les deux autres colonnes. Remplacez chaque photo et chaque texte.
9. Pour chaque animal, créez une page de présentation avec ses vraies informations. Quand les pages sont accessibles, utilisez le sélecteur de lien du bouton pour les retrouver par titre.

### Les filtres et fenêtres de la maquette

Les filtres « chiens / chats » et les fenêtres de portrait fonctionnent grâce au JavaScript de la maquette. Les blocs décrits ici ne les créent pas automatiquement. Ne collez pas `script.js` dans un bloc Texte.

Pour cette première version, les cartes renvoient vers des pages individuelles. Si le refuge gère de nombreux animaux, la suite logique sera une collection de fiches structurées avec espèce, âge et statut, puis une liste filtrable. Il faut d’abord vérifier comment le site actuel stocke ses animaux pour réutiliser ses contenus. Le choix d’une extension ou d’un développement vient après ce repérage.

## 10. Présenter le refuge

1. Ajoutez Groupe `spa-section`, puis Groupe `spa-inner`.
2. Ajoutez l’ancre HTML `refuge` au Groupe extérieur.
3. Ajoutez deux Colonnes 50 / 50.
4. À gauche : une Image du refuge, classe `spa-refuge-photo`.
5. À droite : Paragraphe `spa-eyebrow`, Titre H2 « Un abri aujourd’hui. Une famille demain. », deux courts Paragraphes, puis un lien vers la page de présentation existante.

Mettez « Une famille demain. » en italique pour reprendre l’accent bleu. Utilisez les informations de l’association et une photo autorisée de l’équipe ou du lieu.

## 11. Créer la grande section bleue « Nous aider »

1. Ajoutez un Groupe avec **deux classes** : `spa-section spa-help`.
2. À l’intérieur, ajoutez un Groupe `spa-inner`.
3. Ajoutez l’ancre HTML `aider` sur le Groupe extérieur.
4. Ajoutez le petit texte « CHACUN PEUT FAIRE LA DIFFÉRENCE », classe `spa-eyebrow`.
5. Ajoutez un Titre H2 : « À chacun son coup de patte. », avec « coup de patte » en italique.
6. Ajoutez trois Colonnes.
7. Dans chaque colonne, ajoutez Titre H3, Paragraphe et Bouton : « Soutenir le refuge », « Donner de son temps », « Ouvrir sa porte ».
8. Reliez les boutons aux pages ou moyens de contact validés par l’association. Un bouton de don doit mener au dispositif officiel réellement utilisé par le refuge.

Le fond devient bleu profond et les textes blancs automatiquement. Aucun module de paiement n’est nécessaire pour créer le design.

## 12. Ajouter le contact

1. Ajoutez Groupe `spa-section`, puis Groupe `spa-inner`.
2. Donnez au Groupe extérieur l’ancre `rencontre`.
3. Ajoutez deux Colonnes.
4. À gauche : un Titre H2 « Faisons connaissance. », puis adresse, horaires et informations pratiques vérifiés.
5. À droite : un Bouton « Contacter le refuge » relié à la page de contact existante.

Pour une adresse e-mail, un lien peut commencer par `mailto:` ; pour un téléphone par `tel:`. Si le site possède déjà un formulaire fonctionnel, réutilisez-le. Un formulaire demande des réglages d’envoi et un test de réception : le dessin seul ne suffit pas.

## 13. Régler l’en-tête, le logo et le pied de page

À faire sur la copie de test, car ces éléments sont généralement partagés par toutes les pages.

**Thème de blocs avec Éditeur du site :**

1. Ouvrez **Apparence → Éditeur**.
2. Cherchez la partie de modèle **En-tête**, souvent dans **Compositions / Parties de modèle** ou depuis le modèle affiché.
3. Sélectionnez le bloc **Logo du site** et choisissez le logo original dans la médiathèque. S’il manque, ajoutez-le.
4. Commencez avec une largeur d’environ 75 à 90 px ; conservez les proportions. Le logo fourni est assez haut : laissez-le respirer plutôt que de le tasser dans une ligne trop basse.
5. Ajustez le bloc **Navigation** : Adopter, Le refuge, Nous aider, Contact.
6. Pour des liens d’ancrage dans une navigation globale, utilisez l’adresse complète de l’accueil suivie de `#animaux`, `#refuge`, etc. Un lien `#animaux` seul ne rejoint pas l’accueil depuis une autre page.
7. Contrôlez le menu mobile en prévisualisation.

**Thème classique :** cherchez **Apparence → Personnaliser → Identité du site** pour le logo et **Apparence → Menus** pour la navigation. Certains thèmes ont leur propre panneau d’en-tête.

Le CSS fourni ne remplace pas le style de l’en-tête global. Utilisez les réglages du thème pour un fond blanc cassé et des liens bleus ; si les options manquent, nous ajouterons des règles adaptées au thème identifié. Même principe pour le pied de page : logo, contact, liens utiles et mentions légales.

## 14. Vérifier avant de mettre en ligne

- Regardez la prévisualisation ordinateur, tablette et mobile, puis ouvrez si possible la page sur un vrai téléphone.
- Les colonnes doivent s’empiler ; aucun texte ou bouton ne doit dépasser sur les côtés.
- Vérifiez tous les boutons, notamment les trois ancres, les fiches animaux, le contact et le don.
- Vérifiez que le logo est lisible, les photos non déformées et les textes assez grands.
- Utilisez un seul titre H1 pour le contenu principal ; si le thème ajoute déjà le titre de page en H1, ajustez son modèle d’affichage.
- Vérifiez les informations publiques, les textes alternatifs et le fonctionnement du formulaire existant s’il est réutilisé.
- Faites relire la page à une personne du refuge.

Le CSS a été conçu pour les blocs natifs, mais il n’a pas été testé sur votre installation WordPress : le thème peut imposer des marges, des largeurs ou des styles à ajuster. Une capture de la prévisualisation et le nom du thème permettront de corriger précisément ces écarts.

## 15. Mettre la nouvelle page à l’accueil

Quand la page est validée et une sauvegarde disponible :

1. Si vous avez travaillé en préproduction, utilisez le processus de mise en ligne prévu par l’hébergeur ou transférez uniquement les changements nécessaires. Une copie globale peut écraser les nouveaux animaux ou messages ajoutés au site public entre-temps : faites valider ce transfert par le responsable technique.
2. Publiez la page d’accueil validée.
3. Ouvrez **Réglages → Lecture**.
4. Dans « La page d’accueil affiche », choisissez **Une page statique**, puis cette nouvelle page. Conservez la page d’articles existante si le site en utilise une.
5. Enregistrez. Vérifiez l’accueil, les liens du menu et les autres pages.
6. Si un système de cache est installé, purgez son cache et rechargez la page.

Conservez l’ancienne page pour pouvoir revenir facilement au réglage précédent.

## Le premier objectif

Ne construisez pas tout en une seule séance. Arrêtez-vous après l’étape 7 : un titre à gauche, une photo arrondie à droite, deux boutons bleus. Quand cette section ressemble à la maquette, vous avez appris les gestes nécessaires pour construire les autres.

Pour adapter ce guide à votre écran, il suffit de fournir le **nom du thème actif**, le **nom de l’éditeur** (ou une capture de l’édition de page) et de préciser si vous avez un **site de test**.
