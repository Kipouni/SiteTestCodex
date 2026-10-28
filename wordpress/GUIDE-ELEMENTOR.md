# Refaire la maquette SPA Oyonnax avec Elementor

Ce guide est prévu pour débuter avec **Elementor gratuit**, en utilisant les **conteneurs Flexbox**. Il construit une page dont les textes, photos et boutons restent modifiables dans Elementor.

Les noms et l’emplacement de certains boutons varient selon la version et la langue. Le thème et la configuration du site actuel n’ont pas été vérifiés : les réglages ci-dessous sont un point de départ précis, à contrôler en prévisualisation.

**Objectif de la première séance : construire uniquement le haut de page avec son titre, sa photo arrondie et ses deux boutons.** Une fois cette partie réussie, les gestes se répètent pour les autres sections.

## 1. Ce dont tu as besoin

- Un accès WordPress permettant de modifier les pages.
- Elementor installé et activé. S’il est déjà présent, inutile de le réinstaller. Sinon, sur un site de test : **Extensions → Ajouter une extension**, cherche **Elementor Website Builder**, vérifie que l’auteur est Elementor, puis installe et active l’extension.
- Le logo original et quelques photos dans **Médias → Ajouter un fichier média**.
- Idéalement une **copie de test du site**, souvent appelée « staging » dans l’espace de l’hébergeur.

Commence sur la copie de test. Si tu n’en as pas, tu peux préparer une nouvelle page **brouillon** sur le site existant. Les changements de thème, d’en-tête et de réglages globaux peuvent affecter les pages publiques : réserve-les à la copie de test.

**Pas besoin d’Elementor Pro pour les sections de cette page.** Pro peut servir ensuite à construire l’en-tête global, des modèles dynamiques ou certains formulaires. Les filtres d’animaux ne sont pas créés automatiquement par cette méthode, ni par le simple achat de Pro.

Ne change pas le thème actif pour suivre ce tutoriel.

## 2. Créer ta page d’essai

1. Va dans **Pages → Ajouter une page**.
2. Donne-lui le titre « Essai — nouvel accueil SPA ».
3. Enregistre-la en **brouillon**.
4. Clique sur **Modifier avec Elementor**.
5. Ouvre les **Réglages de la page** : suivant la version, ils se trouvent dans la barre supérieure ou derrière l’ancienne roue dentée en bas à gauche.
6. Pour la **Mise en page**, choisis **Elementor pleine largeur / Elementor Full Width**, si disponible.
7. Active **Masquer le titre** si le titre « Essai — nouvel accueil SPA » s’affiche au-dessus du contenu.

### Quel modèle de page choisir ?

| Modèle | Résultat |
|---|---|
| Elementor pleine largeur | Garde généralement l’en-tête et le pied de page du thème, tout en permettant une page large. C’est le choix conseillé ici. |
| Elementor Canvas | Retire l’en-tête et le pied de page du thème. Utile pour une page entièrement indépendante, mais il faudrait aussi recréer la navigation. |
| Modèle par défaut | Peut imposer la largeur du thème ou une barre latérale. |

Si « Masquer le titre » ne fonctionne pas, le thème peut utiliser un autre affichage : regarde ses options de page. Évite de masquer tous les titres du site avec une règle CSS générale.

Utilise **Enregistrer le brouillon**, **Enregistrer** ou la flèche à côté du bouton principal selon la version. Ne clique pas sur « Publier » pour une simple sauvegarde de travail. Pour regarder le résultat, utilise l’aperçu, souvent représenté par un œil.

## 3. Comprendre l’interface avant de construire

Dans Elementor, tu manipules deux choses :

- **Conteneur** : une boîte qui contient des éléments. Elle peut placer son contenu à côté ou en dessous.
- **Widget** : un élément comme un titre, un texte, une image ou un bouton.

Quand tu sélectionnes un élément, les réglages sont généralement répartis en :

| Onglet | Ce que tu y règles |
|---|---|
| Mise en page, pour les conteneurs | Direction, largeur, alignement et écart entre les éléments |
| Contenu, pour les widgets | Texte, photo, lien et niveau du titre |
| Style | Couleurs, typographie, bordures et apparence |
| Avancé | Marges, espacement interne, identifiant CSS et réglages complémentaires |

Ouvre le **Navigateur / Structure**, accessible depuis l’icône de structure ou par clic droit sur un élément. Il affiche les conteneurs et widgets comme une arborescence. Renomme les conteneurs, par exemple « Accueil », « Animaux », « Refuge » : tu retrouveras beaucoup plus facilement les éléments.

### Quatre notions utiles

- **Direction Ligne / Row** : les éléments sont côte à côte.
- **Direction Colonne / Column** : ils sont les uns sous les autres.
- **Padding / Marge interne** : l’espace entre le bord d’une boîte et son contenu.
- **Margin / Marge externe** : l’espace autour de la boîte.

Le petit symbole de chaîne relie les quatre valeurs haut/droite/bas/gauche. Désactive-le lorsque les valeurs doivent être différentes.

### Si ton interface montre des « sections » et des « colonnes »

Tu es peut-être dans une ancienne mise en page Elementor. Vérifie si l’ajout d’un nouvel élément propose **Conteneur**. Si l’option n’existe pas, envoie une capture de l’éditeur avant de continuer ; n’essaie pas de convertir les pages existantes ni de changer des fonctionnalités au hasard. Le guide ci-dessous utilise les conteneurs.

## 4. Garder la palette sous les yeux

Tu peux recopier ces valeurs dans les réglages **Style** de chaque élément. Cela évite de modifier tout de suite les couleurs globales des pages existantes.

| Usage | Valeur |
|---|---|
| Bleu principal, inspiré du logo | `#207AAD` |
| Bleu profond, section « Nous aider » | `#155A82` |
| Titres et texte foncé | `#183D55` |
| Fond blanc cassé | `#FAF9F5` |
| Fond bleu très pâle | `#EAF3F8` |
| Texte secondaire | `#586D79` |
| Texte sur fond foncé | `#FFFFFF` |

Le bleu est une approximation visuelle de l’image du logo, pas une référence officielle de charte.

**Polices :** « Playfair Display » pour les grands titres, « DM Sans » pour les paragraphes et boutons. Dans **Style → Typographie**, ouvre le réglage avec l’icône crayon. Si ces polices ne sont pas disponibles ou si leur chargement est désactivé sur le site, utilise temporairement Georgia et Arial. Aucun achat n’est nécessaire pour commencer.

Sur le site de test, tu pourras ensuite enregistrer la palette dans **Réglages du site → Couleurs globales** et les polices dans **Polices globales**. Ces réglages peuvent toucher les autres pages Elementor qui utilisent les mêmes valeurs globales.

**N’utilise pas `style-wordpress.css` de l’ancien guide : ce fichier est destiné aux blocs WordPress natifs. Ce guide Elementor n’a pas besoin de CSS personnalisé pour les sections principales.** Le panneau « CSS personnalisé » d’Elementor Pro n’est donc pas requis.

## 5. Créer le conteneur principal de la page

1. Clique sur **+** dans la zone vide et ajoute un **Conteneur**, en choisissant Flexbox si Elementor propose aussi Grid.
2. Renomme-le « Page SPA » dans Structure.
3. Dans **Mise en page**, règle : direction **Colonne**, largeur du contenu **Pleine largeur**, largeur **100 %**, écart **0 px**.
4. Dans **Style → Arrière-plan → Classique**, choisis `#FAF9F5`.
5. Dans **Avancé**, règle sa marge externe et son padding à **0**.
6. Ajoute toutes les sections suivantes **dans** ce conteneur. Vérifie leur imbrication dans Structure.

Ce conteneur couvre le contenu Elementor ; il ne change pas automatiquement l’en-tête et le pied de page conservés par le thème.

### La structure qui sera répétée

Chaque grande section aura deux niveaux :

```text
Page SPA
  Section Accueil — fond et espace autour
    Intérieur Accueil — contenu limité à 1 200 px
      Texte
      Photo
  Section Animaux
    Intérieur Animaux
      Titres
      Rangée de cartes
```

Le conteneur **extérieur** prend toute la largeur et reçoit le fond coloré. Le conteneur **intérieur** évite que le contenu s’étale sur les très grands écrans.

Pour les sections, utilise ces réglages de base :

| Réglage | Conteneur extérieur | Conteneur intérieur |
|---|---|---|
| Direction | Colonne | Colonne, sauf quand on indique Ligne |
| Largeur du contenu | Pleine largeur | Encadrée / Boxed |
| Largeur | 100 % | 100 %, contenu encadré à 1 200 px |
| Padding ordinateur | 64 px haut/bas, 24 px gauche/droite | 0 |
| Padding mobile | 36 px haut/bas, 20 px gauche/droite | 0 |
| Marge externe | 0 | 0 |
| Écart entre éléments | 0 | 24 px |

Ces valeurs se renseignent dans Mise en page et Avancé. Le champ « 1 200 px » correspond à la largeur du contenu encadré, pas à une largeur fixe du conteneur sur téléphone.

## 6. Construire l’accueil : le premier vrai exercice

### A. Les deux colonnes

1. Dans « Page SPA », crée « Section Accueil », avec les réglages extérieurs du tableau précédent.
2. Ajoute dedans « Intérieur Accueil », avec les réglages intérieurs.
3. Passe « Intérieur Accueil » en direction **Ligne**.
4. Règle **Justifier le contenu : Espace entre / Space between** et **Aligner les éléments : Centre**. Écart : **24 px**.
5. Ajoute deux conteneurs enfants : « Texte accueil » et « Photo accueil ».
6. Pour chacun : direction **Colonne**, largeur **48 %**, padding **0**. Pour « Texte accueil », écart **20 px**.

### B. Le petit texte au-dessus du titre

Dans « Texte accueil », glisse le widget **Éditeur de texte**.

- Texte : « REFUGE SPA D’OYONNAX ».
- Couleur : `#183D55`.
- Police : DM Sans, taille **12 px**, graisse **600**, espacement des lettres **1,5 px**.
- Alignement : gauche.

Si le widget ajoute beaucoup d’espace sous le paragraphe, vérifie la marge du widget et l’espacement des paragraphes proposé par ta version.

### C. Le grand titre

Ajoute le widget **Titre**.

- Texte : « Une rencontre peut tout changer. ».
- Balise HTML : **H1**.
- Couleur : `#183D55`.
- Police : Playfair Display.
- Taille ordinateur : **76 px**, graisse **500**, hauteur de ligne **1,05 em**, espacement des lettres **−2 px**.

Pour des retours à la ligne proches de la maquette, le champ Titre accepte généralement un balisage simple :

```html
Une rencontre<br>peut <em>tout</em><br>changer.
```

`<br>` crée un retour à la ligne, `<em>` met le mot en italique. Il n’est pas nécessaire de comprendre davantage de HTML à ce stade. Si ta version affiche le code tel quel, conserve le texte simple et les retours automatiques.

Le bleu limité à un mot est un détail de finition : garde d’abord le titre entier en bleu foncé. Cela ne bloque pas la construction. On pourra ensuite appliquer une couleur au mot avec un balisage ciblé adapté à ton éditeur.

### D. Le texte de présentation

Ajoute un widget **Éditeur de texte** :

> Pour eux, une nouvelle vie.  
> Pour vous, une histoire qui commence.

Dans Style : DM Sans, **18 px**, hauteur de ligne **1,7 em**, couleur `#586D79`.

### E. Les deux boutons

1. Ajoute un conteneur « Boutons accueil » dans « Texte accueil ».
2. Direction **Ligne**, écart **16 px**, retour à la ligne **Wrap** si nécessaire, padding **0**.
3. Ajoute un widget **Bouton**.
4. Texte : « Trouver mon compagnon » ; lien : `#animaux`.
5. Style : texte blanc, fond `#207AAD`, DM Sans **15 px**, graisse **600**, rayon de bordure **5 px**.
6. Padding du bouton : **16 px haut/bas, 22 px gauche/droite**. Ce réglage se trouve généralement dans le Style du bouton.
7. Dans l’état **Au survol**, fond `#155A82`, texte blanc.
8. Duplique le bouton par clic droit → **Dupliquer**.
9. Sur la copie : texte « Découvrir le refuge », lien `#refuge`, fond transparent, texte `#207AAD`, bordure pleine **1 px** de cette même couleur.

Les liens qui commencent par `#` feront défiler la page jusqu’à une section dont on définira l’identifiant plus loin.

### F. La grande photo

1. Dans « Photo accueil », ajoute un widget **Image**.
2. Choisis ta photo dans la médiathèque ; utilise une résolution assez grande, par exemple « Grande » ou l’original selon le fichier.
3. Style : largeur **100 %**, hauteur **560 px** sur ordinateur.
4. Ajustement de l’objet / Object fit : **Cover / Couvrir**, si ce réglage est proposé.
5. Position de l’objet : commence par **Centre centre** ; adapte pour garder le visage de l’animal visible.
6. Rayon de bordure : délie les valeurs et règle **100 / 8 / 8 / 8 px**, dans l’ordre haut gauche, haut droit, bas droit, bas gauche.
7. Dans Contenu, lien de l’image : **Aucun**, si tu ne souhaites pas ouvrir une visionneuse au clic.

« Couvrir » recadre la photo pour remplir la zone sans la déformer. Si le réglage n’est pas disponible, prépare un recadrage portrait dans la médiathèque et conserve une hauteur automatique ; n’étire pas manuellement la photo.

### G. Vérifier immédiatement sur mobile

Dans la barre de l’éditeur, utilise les icônes ordinateur/tablette/mobile. Certains réglages ont aussi leur propre icône d’appareil : elle indique qu’ils peuvent avoir une valeur différente selon l’écran.

En mode **mobile** :

- « Intérieur Accueil » : direction **Colonne**.
- « Texte accueil » et « Photo accueil » : largeur **100 %**.
- Titre : **46 px**, hauteur de ligne **1,08 em**, espacement des lettres **−1 px**.
- Texte courant : **16 px**.
- Image : hauteur **380 px**, rayon haut gauche **70 px**.
- Boutons : autorise le retour à la ligne, ou passe leur conteneur en direction Colonne.

En mode **tablette**, si l’accueil est trop serré, passe aussi en Colonne, largeur 100 %, avec un titre à **60 px**. Règle explicitement les appareils nécessaires : certaines valeurs tablette peuvent être héritées sur mobile.

Enregistre le brouillon puis ouvre l’aperçu. **Tu peux t’arrêter ici pour la première séance.**

## 7. Ajouter la bande bleu pâle

1. Crée une nouvelle section extérieure et son conteneur intérieur dans « Page SPA ».
2. Fond de la section : `#EAF3F8`.
3. Padding extérieur : **22 px haut/bas**, **24 px gauche/droite**.
4. Conteneur intérieur : direction **Ligne**, justification **Espace entre**, écart **20 px**, retour à la ligne activé.
5. Ajoute trois widgets Texte : « Adopter, c’est s’engager », « Chaque histoire compte », « Un refuge à taille humaine ».
6. Police DM Sans **14 px**, couleur `#183D55`.
7. Sur mobile, passe en Colonne et centre les textes.

Les petits symboles décoratifs de la maquette sont facultatifs. Si tu en ajoutes avec le widget Icône, choisis une forme simple et la couleur bleue principale.

## 8. Construire la section des animaux

### A. La section et son titre

1. Ajoute une section standard et son intérieur, nommé « Intérieur Animaux ».
2. Sélectionne le conteneur extérieur → **Avancé → ID CSS** : écris `animaux`, **sans #**.
3. Dans l’intérieur, ajoute le petit texte « DE BELLES HISTOIRES À ÉCRIRE », en reprenant le style du petit texte d’accueil.
4. Ajoute un Titre **H2** : « Et si c’était vous ? ».
5. Style H2 : Playfair Display, **44 px** ordinateur, **34 px** mobile, graisse 500, couleur `#183D55`.
6. Ajoute un Éditeur de texte avec une ou deux phrases de présentation.

### B. La première carte

1. Ajoute un conteneur « Rangée animaux » : direction Ligne, écart **24 px**, justification Espace entre, padding 0.
2. Ajoute dedans un conteneur « Carte animal 1 » : direction Colonne, largeur **31 %**, écart **12 px**, padding 0.
3. Ajoute une Image : largeur 100 %, hauteur **300 px**, ajustement Cover, rayon **6 px**.
4. Ajoute un Titre **H3** : le prénom, Playfair Display **28 px**, couleur `#183D55`.
5. Ajoute un Texte : espèce, âge et informations utiles, DM Sans **14 px**, couleur `#586D79`.
6. Ajoute un Bouton « Découvrir son histoire » avec un lien vers la vraie fiche de cet animal.

### C. Les deux autres cartes

Duplique **le conteneur de carte entier** deux fois, puis remplace photo, prénom, description et lien. Vérifie dans Structure que les trois cartes sont dans « Rangée animaux ».

Sur mobile : direction Colonne pour « Rangée animaux », largeur 100 % pour chaque carte, hauteur de photo environ 300 px. Sur tablette, tu peux également les empiler pour commencer.

### Ce qui change par rapport à la maquette interactive

La première version utilise des liens vers des fiches individuelles. Les boutons de filtre « chiens/chats » et les fenêtres de portrait de la maquette nécessitent une solution complémentaire.

Ne crée pas de faux boutons de filtre qui ne font rien. Il faut d’abord identifier comment les fiches d’animaux sont enregistrées sur le site actuel, puis choisir une liste dynamique et un filtrage compatibles. **N’achète pas Elementor Pro uniquement dans l’espoir d’obtenir automatiquement ces filtres.**

## 9. Présenter le refuge

1. Crée une section standard avec un intérieur en direction **Ligne**, écart **40 px**, alignement vertical Centre.
2. Donne à la section l’ID CSS `refuge`.
3. Ajoute deux conteneurs enfants, chacun à **48 %**, direction Colonne, padding 0.
4. À gauche : une Image du refuge ou de l’équipe, largeur 100 %, rayon **8 / 80 / 8 / 8 px**.
5. À droite : petit texte « BIENVENUE CHEZ EUX », Titre H2 « Un abri aujourd’hui. Une famille demain. », deux courts paragraphes et un bouton ou lien vers la présentation du refuge.
6. Réutilise les tailles de titres et paragraphes déjà réglées. Le clic droit **Copier**, puis **Coller le style** sur un widget de même type peut faire gagner du temps ; vérifie ensuite ses réglages mobile.
7. Sur mobile : intérieur en Colonne, enfants à 100 %, écart 28 px.

Les textes et images doivent décrire le vrai refuge. Les contenus de démonstration de la maquette ne sont pas des informations vérifiées sur l’association.

## 10. Créer le grand bloc bleu « Nous aider »

1. Ajoute une section standard, fond `#155A82`, ID CSS `aider`.
2. Dans son intérieur, ajoute le petit texte « CHACUN PEUT FAIRE LA DIFFÉRENCE », couleur blanche.
3. Ajoute un Titre H2 « À chacun son coup de patte. », couleur blanche.
4. Ajoute un conteneur en Ligne, écart 32 px, justification Espace entre.
5. Ajoute trois conteneurs enfants de largeur **30 %**, direction Colonne, écart 16 px, padding 0.
6. Chaque enfant contient une **Icône**, un **Titre H3**, un **Éditeur de texte** et un **Bouton**.

| Colonne | Icône suggérée | Titre | Destination du bouton |
|---|---|---|---|
| 1 | Cœur | Soutenir le refuge | Dispositif de don officiel utilisé par le refuge |
| 2 | Soleil ou mains | Donner de son temps | Page bénévolat ou contact |
| 3 | Maison | Ouvrir sa porte | Page famille d’accueil ou contact |

Icônes : environ **36 px**, couleur `#BBDEF3`. Titres et textes : blanc. Boutons : fond blanc, texte `#155A82` ; au survol, fond `#EAF3F8` et texte toujours bleu profond.

Sur mobile, passe la rangée en Colonne et les trois enfants à 100 %. Un espace de 32 px entre les enfants suffit ; les séparations verticales de la version ordinateur ne sont pas indispensables.

Un bouton de don est un lien vers le système officiel : ce tutoriel n’installe aucun paiement.

## 11. Ajouter la section de contact

1. Crée une section standard avec l’ID CSS `rencontre`.
2. Dans son intérieur, ajoute deux conteneurs côte à côte, chacun à 48 %.
3. À gauche : petit texte, H2 « Faisons connaissance. », puis adresse et horaires vérifiés.
4. À droite : bouton « Contacter le refuge », avec le style bleu du premier bouton.
5. Relie-le à la page de contact existante.
6. Sur mobile : direction Colonne et largeur 100 % pour les enfants.

Elementor gratuit ne fournit pas le widget Formulaire d’Elementor Pro. Si le site a déjà un formulaire fonctionnel, réutilise son bloc, son widget ou son code court suivant l’extension existante. Pour cette première page, un simple lien vers le contact suffit.

## 12. Intégrer le logo, le menu et le pied de page

Avec **Elementor pleine largeur**, l’en-tête du thème reste généralement visible. **Modifier le corps de la page avec Elementor ne modifie pas cet en-tête.**

### Avec Elementor gratuit : garder l’en-tête du thème

- Thème classique : cherche **Apparence → Personnaliser → Identité du site** pour le logo, et **Apparence → Menus** pour la navigation.
- Thème de blocs : ces réglages peuvent être dans **Apparence → Éditeur**, dans la partie de modèle En-tête.
- Certains thèmes ont leur propre constructeur d’en-tête : utilise ses réglages existants.

Sur la copie de test, remplace le logo par le fichier original. Commence avec une largeur d’environ **80 px**, puis ajuste selon ses marges blanches. Garde les proportions ; si le fichier contient beaucoup de blanc autour, prépare une copie recadrée sans couper le cadre ni les silhouettes.

Privilégie un fond blanc cassé ou blanc, des liens bleus, et les rubriques **Adopter, Le refuge, Nous aider, Contact**. Vérifie le menu sur téléphone.

Pour une navigation partagée par toutes les pages, utilise l’adresse complète de l’accueil suivie de l’ancre, par exemple `https://ton-site.fr/#animaux`. Remplace bien le domaine de cet exemple par le vrai. Un simple `#animaux` fonctionne dans la page d’accueil, mais ne ramène pas à l’accueil depuis une fiche animal.

### Si tu disposes déjà d’Elementor Pro

Le **Theme Builder / Constructeur de thème**, accessible selon la version depuis Modèles ou le menu Elementor, permet de créer un modèle En-tête et un modèle Pied de page. Les conditions d’affichage déterminent où ils apparaissent : à régler sur le site de test d’abord.

Si tu n’as pas Pro, n’achète rien pour commencer. Les options du thème peuvent suffire. Le widget de navigation avancée et le Theme Builder peuvent dépendre de la version ou de l’offre ; une rangée de simples boutons ne remplace pas automatiquement un menu mobile avec bouton d’ouverture.

Pour le pied de page : conserve les mentions légales et liens utiles existants, puis adapte les couleurs et le logo avec les outils du thème.

## 13. Ajouter les finitions seulement après la structure

Les éléments suivants sont optionnels pour une première version : le macaron rond superposé à la photo, le texte posé sur l’image, les petits traits décoratifs et la couleur différente d’un seul mot du titre.

Ils demandent un placement plus précis et une vérification mobile. Ils pourront être ajoutés quand les sections principales seront en place. **Le guide reproduit la composition, les couleurs et la typographie ; il ne promet pas une copie pixel pour pixel sur tous les thèmes.**

Évite les marges négatives importantes pour forcer une disposition : une image bien placée dans un conteneur résiste mieux aux changements d’écran.

## 14. Vérifier ta page

Avant publication :

- Ouvre l’aperçu ordinateur, tablette et mobile, puis teste sur un vrai téléphone si possible.
- Vérifie que les colonnes s’empilent, que les images ne sont pas étirées et qu’aucun élément ne dépasse horizontalement.
- Clique sur les liens `#animaux`, `#refuge`, `#aider` et `#rencontre`. Chaque ID doit exister une seule fois sur la page.
- Vérifie les boutons de chaque fiche, du don et du contact.
- Si l’en-tête est fixe et masque le début d’une section après un clic, note-le : il faudra ajuster le décalage de défilement selon sa hauteur.
- Vérifie un seul H1 principal, puis les H2 de section et H3 des cartes.
- Renseigne les textes alternatifs des photos dans la médiathèque.
- Remplace les animaux fictifs et valide les horaires, textes et liens avec l’association.
- Si un formulaire est présent, fais un envoi d’essai et vérifie la réception réelle.

Ce guide décrit une construction dans Elementor ; il n’a pas été exécuté sur ton WordPress, dont le thème et les extensions restent à identifier.

## 15. Mettre la page en ligne quand elle est validée

1. Prévois une sauvegarde du site avant la mise en ligne.
2. Si tu as travaillé sur une copie de test, fais transférer les changements avec le processus de l’hébergeur. Une copie globale peut écraser de nouveaux animaux ou messages ajoutés entre-temps sur le site public : coordonne ce transfert avec le responsable du site.
3. Publie la page validée.
4. Va dans **Réglages → Lecture**.
5. Choisis **Une page statique**, puis sélectionne la nouvelle page comme page d’accueil. Conserve le réglage de la page des articles si le site en utilise une.
6. Vérifie les menus, l’accueil et les autres pages. Si une extension de cache est présente, purge son cache.
7. Garde l’ancienne page d’accueil pour pouvoir revenir au réglage précédent.

## Si quelque chose ne ressemble pas à la maquette

| Problème | Première vérification |
|---|---|
| La page est étroite | Modèle Elementor pleine largeur ; conteneur extérieur à 100 % ; seul le contenu intérieur est encadré à 1 200 px |
| Le titre de la page apparaît deux fois | Réglage « Masquer le titre » ou option de titre du thème |
| Les deux colonnes ne tiennent pas | Largeurs des enfants, écart, padding et présence d’un troisième élément dans la même rangée |
| Une photo est déformée | Object fit « Cover » ou hauteur automatique avec une image déjà recadrée |
| Les blocs restent côte à côte sur téléphone | Direction Colonne du parent et largeur 100 % de chaque enfant en mode mobile |
| Une couleur revient à une autre valeur | Réglage global lié au widget, état au survol ou style du thème |
| Le logo ne change pas | Il appartient probablement à l’en-tête du thème, pas au contenu de la page Elementor |
| Un lien d’ancre ne fonctionne pas | ID sans `#` sur la section, lien avec `#`, orthographe identique et ID unique |

Pour une aide adaptée : envoie une capture de l’éditeur avec le panneau de réglages ouvert, le nom du thème actif et l’élément qui te bloque. Ne transmets pas de mot de passe.
