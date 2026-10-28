# Refaire la maquette SPA Oyonnax avec Elementor

Ce guide est prévu pour débuter avec **Elementor gratuit**, en utilisant les **Flexbox Containers**. Il construit une page dont les textes, photos et boutons restent modifiables dans Elementor.

Les explications restent en français ; les noms de menus, boutons, widgets et réglages sont ceux de l’interface **en anglais**. Les textes à écrire dans le site et les noms que tu donnes toi-même aux conteneurs restent en français. L’emplacement de certains boutons peut varier selon la version. Le thème et la configuration du site actuel n’ont pas été vérifiés : les réglages ci-dessous sont un point de départ précis, à contrôler en prévisualisation.

**Objectif de la première séance : construire uniquement le haut de page avec son titre, sa photo arrondie et ses deux boutons.** Une fois cette partie réussie, les gestes se répètent pour les autres sections.

## 0. Démarrer ton WordPress sur l’ordinateur avec Local

Si ton site Local fonctionne déjà et qu’Elementor est installé, passe directement à l’étape 2.

1. Ouvre **Local**, puis clique sur **Create a new site** ou **+**.
2. Choisis **Create a new site**, puis **Continue**.
3. Dans **What’s your site’s name?**, saisis `SPA Oyonnax`, puis **Continue**.
4. Dans **Choose your environment**, garde **Preferred**, puis **Continue**.
5. Dans **Set up WordPress**, renseigne **WordPress username**, **WordPress password** et **WordPress email**. Note tes identifiants.
6. Clique sur **Add site** et accepte les autorisations demandées par ton ordinateur.
7. Sélectionne ton site dans Local ; clique sur **Start site** s’il est arrêté.
8. Clique sur **WP Admin**. Dans le navigateur, utilise **Username or Email Address**, **Password**, puis **Log In**.
9. Le **Dashboard** est l’administration WordPress ; **Open site**, dans Local, ouvre le site côté visiteur.

Pour installer Elementor dans ce nouveau site : **Plugins → Add New Plugin** (parfois **Add New**) → recherche `Elementor Website Builder`, par Elementor → **Install Now** → **Activate**. Dans son parcours d’accueil, utilise **Skip** ou **Skip setup** lorsque proposé ; ignore les offres **Go Pro** ou **Upgrade** pour cet exercice.

Pour ce site neuf sur ton ordinateur, tu peux utiliser **Hello Elementor** : **Appearance → Themes → Add New Theme** (parfois **Add New**) → recherche `Hello Elementor` → **Install** → **Activate**. Ce choix concerne le site local neuf ; il n’est pas nécessaire de remplacer le thème du site public du refuge.

Un clic sur **Publish** dans ce WordPress local rend la page visible sur ton site local, pas sur Internet. La mise en ligne sur l’hébergement du refuge sera une opération distincte.

## 1. Ce dont tu as besoin

- Un accès WordPress permettant de modifier les pages.
- Elementor installé et activé. S’il est déjà présent, inutile de le réinstaller. Sinon, sur un site de test : **Plugins → Add New Plugin** (ou **Add New**), cherche **Elementor Website Builder**, vérifie que l’auteur est Elementor, puis clique sur **Install Now**, puis **Activate**.
- Le logo original et quelques photos dans **Media → Add New Media File** (ou **Add New**).
- Idéalement une **copie de test du site**, souvent appelée « staging » dans l’espace de l’hébergeur.

Commence sur la copie de test. Si tu n’en as pas, tu peux préparer une nouvelle page **brouillon** sur le site existant. Les changements de thème, d’en-tête et de réglages globaux peuvent affecter les pages publiques : réserve-les à la copie de test.

**Pas besoin d’Elementor Pro pour les sections de cette page.** Pro peut servir ensuite à construire l’en-tête global, des modèles dynamiques ou certains formulaires. Les filtres d’animaux ne sont pas créés automatiquement par cette méthode, ni par le simple achat de Pro.

Si tu travailles sur une copie d’un site existant, garde son thème actif. Pour le nouveau site local, Hello Elementor convient comme indiqué à l’étape 0.

## 2. Créer ta page d’essai

1. Va dans **Pages → Add New Page** (ou **Add New**).
2. Donne-lui le titre « Essai — nouvel accueil SPA ».
3. Clique sur **Save draft**.
4. Clique sur **Edit with Elementor**.
5. Ouvre les **Page Settings** : suivant la version, ils se trouvent dans la barre supérieure ou derrière l’ancienne roue dentée en bas à gauche.
6. Pour **Page Layout**, choisis **Elementor Full Width**, si disponible.
7. Règle **Hide Title** sur **Yes** si le titre « Essai — nouvel accueil SPA » s’affiche au-dessus du contenu.

### Quel modèle de page choisir ?

| Modèle | Résultat |
|---|---|
| Elementor Full Width | Garde généralement l’en-tête et le pied de page du thème, tout en permettant une page large. C’est le choix conseillé ici. |
| Elementor Canvas | Retire l’en-tête et le pied de page du thème. Utile pour une page entièrement indépendante, mais il faudrait aussi recréer la navigation. |
| Default | Peut imposer la largeur du thème ou une barre latérale. |

Si **Hide Title** ne fonctionne pas, le thème peut utiliser un autre affichage : regarde ses options de page. Évite de masquer tous les titres du site avec une règle CSS générale.

Utilise **Save Draft**, **Save** ou la flèche à côté du bouton principal selon la version. Ne clique pas sur **Publish** pour une simple sauvegarde de travail. Pour regarder le résultat, utilise **Preview Changes**, souvent représenté par un œil.

## 3. Comprendre l’interface avant de construire

Dans Elementor, tu manipules deux choses :

- **Container** : une boîte qui contient des éléments. Elle peut placer son contenu à côté ou en dessous.
- **Widget** : un élément comme un titre, un texte, une image ou un bouton.

Quand tu sélectionnes un élément, les réglages sont généralement répartis en :

| Onglet | Ce que tu y règles |
|---|---|
| Layout, pour les conteneurs | Direction, largeur, alignement et écart entre les éléments |
| Content, pour les widgets | Texte, photo, lien et niveau du titre |
| Style | Couleurs, typographie, bordures et apparence |
| Advanced | Marges, espacement interne, identifiant CSS et réglages complémentaires |

Ouvre le **Navigator / Structure**, accessible depuis l’icône de structure ou par clic droit sur un élément. Il affiche les conteneurs et widgets comme une arborescence. Renomme les conteneurs, par exemple « Accueil », « Animaux », « Refuge » : tu retrouveras beaucoup plus facilement les éléments.

### Repères des champs en anglais

| Champ dans l’interface | Ce que tu règles |
|---|---|
| Content | Le contenu du widget |
| Title / Text / Link | Le titre, le texte ou l’adresse du lien |
| HTML Tag | Le niveau du titre : H1, H2 ou H3 |
| Layout / Direction | La disposition du conteneur et son orientation |
| Content Width / Width / Height | La largeur du contenu, la largeur et la hauteur |
| Justify Content / Align Items | L’alignement dans l’axe principal / transversal |
| Gaps / Gap | L’espace entre éléments ; certains panneaux séparent Column et Row |
| Wrap | Le retour à la ligne des éléments |
| Typography → Family / Size / Weight | La police, sa taille et sa graisse |
| Line Height / Letter Spacing | La hauteur des lignes et l’espacement des lettres |
| Text Color / Color | La couleur du texte, selon le widget |
| Background / Background Color | Le fond du conteneur ou du widget |
| Border Type / Border Radius | Le type de bordure et les arrondis |
| Normal / Hover | L’apparence habituelle et celle au passage de la souris |
| Advanced → Margin / Padding | L’espace extérieur / intérieur |
| Advanced → CSS ID | L’identifiant unique d’une section pour les liens d’ancrage |
| Desktop / Tablet / Mobile | Les réglages selon la taille d’écran |
| Save Draft / Preview Changes | Enregistrer le brouillon / voir le résultat |

Les noms « Page SPA », « Texte accueil » ou « Rangée animaux » sont des noms que **tu donnes** aux éléments dans **Structure** : ils ne sont pas à chercher dans la bibliothèque de widgets. Les valeurs décimales peuvent nécessiter un point dans l’interface anglaise : saisis par exemple `1.05` pour une hauteur de ligne de 1,05 em.

### Quatre notions utiles

- **Direction → Row** : les éléments sont côte à côte.
- **Direction → Column** : ils sont les uns sous les autres.
- **Padding** : l’espace entre le bord d’une boîte et son contenu.
- **Margin** : l’espace autour de la boîte.

Le petit symbole de chaîne relie les quatre valeurs **Top / Right / Bottom / Left** (haut / droite / bas / gauche). Désactive-le lorsque les valeurs doivent être différentes.

### Si ton interface montre des **Sections** et des **Columns**

Tu es peut-être dans une ancienne mise en page Elementor. Vérifie si l’ajout d’un nouvel élément propose **Container**. Si l’option n’existe pas, envoie une capture de l’éditeur avant de continuer ; n’essaie pas de convertir les pages existantes ni de changer des fonctionnalités au hasard. Le guide ci-dessous utilise les conteneurs.

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

**Polices :** « Playfair Display » pour les grands titres, « DM Sans » pour les paragraphes et boutons. Dans **Style → Typography**, ouvre le réglage avec l’icône crayon. Si ces polices ne sont pas disponibles ou si leur chargement est désactivé sur le site, utilise temporairement Georgia et Arial. Aucun achat n’est nécessaire pour commencer.

Sur le site de test, tu pourras ensuite enregistrer la palette dans **Site Settings → Global Colors** et les polices dans **Global Fonts**. Ces réglages peuvent toucher les autres pages Elementor qui utilisent les mêmes valeurs globales.

**N’utilise pas `style-wordpress.css` de l’ancien guide : ce fichier est destiné aux blocs WordPress natifs. Ce guide Elementor n’a pas besoin de CSS personnalisé pour les sections principales.** Le panneau **Custom CSS** d’Elementor Pro n’est donc pas requis.

## 5. Ajouter la boîte qui va contenir la page

### Ce qu’on cherche à faire

Pour l’instant, on ajoute **un seul élément : `Container`**. Il sera vide au début, et c’est normal.

Un **Container** est une boîte invisible dans laquelle tu ranges les éléments de la page. Un **Heading** affiche un titre, un **Text Editor** affiche du texte, un **Image** affiche une photo, un **Button** affiche un bouton. Ces éléments se placent **dans** les boîtes.

Les noms « Page SPA », « Section Accueil » et « Texte accueil » sont des étiquettes que nous donnerons aux boîtes pour nous repérer. **Ce ne sont pas des widgets à rechercher.** Chaque fois que le guide te demande de créer une de ces boîtes, l’élément à ajouter est **Container**.

### 5.1 — Afficher les éléments disponibles

1. Tu dois être dans ta page, ouverte avec **Edit with Elementor**.
2. À gauche, tu dois voir une liste d’éléments comme **Heading**, **Image** et **Text Editor**, avec un champ de recherche.
3. Si tu vois à la place les réglages d’un élément, clique sur **Add Element** pour revenir à la liste. Selon la version, ce bouton est représenté par **+** dans la barre supérieure ou une petite grille dans le panneau.
4. Dans la recherche, saisis `Container`.

### 5.2 — Ajouter le premier Container

1. Fais glisser **Container** depuis la liste de gauche vers la grande zone vide de la page à droite.
2. Relâche quand Elementor indique l’emplacement de dépôt.
3. Si Elementor te demande **Flexbox** ou **Grid**, choisis **Flexbox**. Si ce choix n’apparaît pas, continue.
4. Tu dois maintenant voir une zone vide entourée d’un cadre lorsque tu la sélectionnes.

**Autre chemin possible :** le **+** de la zone vide peut proposer directement **Flexbox**, puis une structure. Dans ce cas, choisis une structure simple à **un seul conteneur**. Utilise l’un de ces deux chemins ; il ne faut pas créer deux conteneurs à cette étape.

### 5.3 — Donner un nom à cette boîte

1. Fais un clic droit sur la poignée du conteneur et cherche **Structure** ou **Navigator**. Tu peux aussi ouvrir ce panneau avec son icône dans la barre d’Elementor.
2. Dans ce panneau, tu dois voir une ligne **Container**.
3. Double-clique sur son nom pour le renommer `Page SPA`. Selon la version, tu peux aussi trouver **Rename** dans le menu du clic droit.
4. Clique sur la ligne `Page SPA` pour sélectionner cette boîte.

**Structure** sert de plan de la page. Cliquer sur une ligne sélectionne l’élément correspondant, même s’il est difficile à attraper dans l’aperçu.

### 5.4 — Régler la boîte Page SPA

Vérifie que le panneau de réglages indique **Edit Container**, et non **Edit Heading** ou **Edit Image**.

1. Dans **Layout**, choisis **Direction → Column**. Si tu vois des flèches, survole-les pour lire leur nom : **Column** correspond à l’empilement vertical.
2. Règle **Content Width → Full Width**.
3. Si un réglage distinct **Width** est disponible, mets-le à **100 %**. Vérifie bien l’unité **%**, pas **px**.
4. Dans **Gaps**, mets **0**. Si deux champs **Column** et **Row** apparaissent, mets les deux à **0**.
5. Dans **Advanced**, trouve **Margin** et mets les quatre côtés à **0**. Fais la même chose pour **Padding**.
6. Dans **Style → Background**, choisis le type **Classic** (souvent une icône de pinceau), puis dans **Color**, colle `#FAF9F5`.
7. Enregistre avec **Save Draft**.

**Résultat attendu :** une seule boîte vide nommée `Page SPA`, avec un fond blanc cassé. Tu n’as encore ajouté ni titre, ni photo, ni bouton. C’est tout ce qu’il fallait faire dans la partie 5.

```text
Page SPA                 ← élément Container
```

**Si tu n’arrives pas à ce résultat, arrête-toi ici et envoie une capture de l’éditeur avec le panneau Structure ouvert.** Il n’est pas nécessaire d’essayer la suite avant d’avoir cette première boîte.

## 6. Remplir le haut de page, un élément à la fois

### Ce que tu vas ajouter

On va construire le texte à gauche et la photo à droite. Voici les vrais éléments à rechercher dans Elementor :

| Ce qu’on veut afficher ou organiser | Élément à ajouter |
|---|---|
| Les boîtes qui organisent la page | **Container** |
| « REFUGE SPA D’OYONNAX » | **Text Editor** |
| « Une rencontre peut tout changer. » | **Heading** |
| Les deux phrases sous le titre | **Text Editor** |
| « Trouver mon compagnon » | **Button** |
| « Découvrir le refuge » | **Button** |
| La photo du chien | **Image** |

**Règle de dépôt :** fais glisser l’élément depuis la liste de gauche jusqu’à **l’intérieur de la boîte indiquée**. La surbrillance ou la ligne d’insertion montre l’endroit où il sera ajouté. Ensuite, vérifie dans **Structure** que sa ligne est décalée vers la droite sous la bonne boîte. Si l’emplacement est incorrect, déplace sa ligne dans **Structure** ; pas besoin de tout recommencer.

### 6.1 — Ajouter la boîte du haut de page

**À ajouter : Container. À déposer dans : Page SPA. Nom à lui donner : Section Accueil.**

1. Retourne dans **Add Element**, cherche `Container` et fais-le glisser **dans Page SPA**.
2. Renomme ce nouveau conteneur `Section Accueil` dans **Structure**.
3. Sélectionne `Section Accueil` et règle **Layout → Direction → Column**, puis **Content Width → Full Width**.
4. Dans **Advanced → Padding**, désactive la chaîne pour saisir des valeurs différentes :

| Champ | Valeur en px |
|---|---|
| Top | 64 |
| Right | 24 |
| Bottom | 64 |
| Left | 24 |

Ce réglage laisse de l’air autour du texte et de la photo. Laisse **Margin** à 0.

**Vérifie la structure :**

```text
Page SPA
  Section Accueil
```

### 6.2 — Ajouter la boîte qui réunira le texte et la photo

**À ajouter : Container. À déposer dans : Section Accueil. Nom : Intérieur Accueil.**

1. Ajoute encore un **Container**, cette fois **dans Section Accueil**.
2. Renomme-le `Intérieur Accueil`.
3. Dans **Layout**, règle **Content Width → Boxed** et la largeur du contenu encadré à **1200 px**. Cette limite empêche le texte et la photo de trop s’éloigner sur un grand écran.
4. Règle **Direction → Row** : c’est ce qui placera les deux boîtes suivantes côte à côte.
5. Règle **Justify Content → Space Between** et **Align Items → Center**.
6. Mets **Gaps → 24 px**. Si deux champs apparaissent, tu peux mettre 24 dans les deux.
7. Dans **Advanced**, mets **Padding** et **Margin** à 0.

**Vérifie la structure :**

```text
Page SPA
  Section Accueil
    Intérieur Accueil
```

Tu vois toujours surtout des zones vides : on prépare leurs emplacements avant d’ajouter le contenu.

### 6.3 — Ajouter les deux boîtes côte à côte

**À ajouter : deux éléments Container. À déposer tous les deux dans : Intérieur Accueil.**

1. Ajoute un **Container dans Intérieur Accueil**, puis nomme-le `Texte accueil`.
2. Sélectionne `Texte accueil`. Dans **Layout**, règle **Content Width → Full Width**, **Width → 48 %**, **Direction → Column**, **Gaps → 20 px**. Dans **Advanced**, mets **Padding** à 0.
3. Ajoute un **deuxième Container dans Intérieur Accueil**, puis nomme-le `Photo accueil`.
4. Pour `Photo accueil`, règle **Content Width → Full Width**, **Width → 48 %**, **Direction → Column** et **Padding → 0**.

Le réglage **Width** peut se présenter différemment suivant la version ; choisis l’unité **%**. Si tu ne le trouves pas, envoie une capture du panneau **Layout** du conteneur concerné.

**Important : Photo accueil doit être au même niveau que Texte accueil, pas à l’intérieur de Texte accueil.**

```text
Page SPA
  Section Accueil
    Intérieur Accueil
      Texte accueil
      Photo accueil
```

**Résultat attendu :** deux emplacements vides côte à côte. La boîte de gauche accueillera plusieurs widgets ; celle de droite accueillera une seule image.

### 6.4 — Mettre le petit texte dans la boîte de gauche

**Widget à ajouter : Text Editor. À déposer dans : Texte accueil.**

1. Dans **Add Element**, recherche `Text Editor`.
2. Fais glisser **Text Editor** dans la boîte `Texte accueil`.
3. Le panneau doit maintenant afficher **Edit Text Editor**.
4. Dans **Content**, remplace le texte d’exemple par `REFUGE SPA D’OYONNAX`.
5. Dans **Style**, règle **Text Color → #183D55**.
6. Ouvre **Typography** avec le crayon : **Family → DM Sans**, **Size → 12 px**, **Weight → 600**, **Letter Spacing → 1.5 px**.

Si la police n’est pas disponible, garde temporairement Arial. Tu dois maintenant voir le petit texte dans la partie gauche.

### 6.5 — Ajouter le grand titre juste en dessous

**Widget à ajouter : Heading. À déposer dans : Texte accueil, sous le Text Editor précédent.**

1. Reviens à **Add Element** et recherche `Heading`.
2. Glisse **Heading** sous « REFUGE SPA D’OYONNAX », en restant à l’intérieur de `Texte accueil`.
3. Vérifie que le panneau affiche **Edit Heading**.
4. Dans **Content → Title**, saisis `Une rencontre peut tout changer.`.
5. Dans **Content → HTML Tag**, choisis **H1**.
6. Dans **Style → Text Color**, colle `#183D55`.
7. Dans **Style → Typography**, règle **Family → Playfair Display**, **Size → 76 px**, **Weight → 500**, **Line Height → 1.05 em** et **Letter Spacing → -2 px**.

Si la police manque, utilise Georgia. Pour l’instant, laisse Elementor faire les retours à la ligne automatiquement. Le mot en italique et les retours exacts de la maquette viendront après.

### 6.6 — Ajouter les phrases sous le titre

**Widget à ajouter : Text Editor. À déposer dans : Texte accueil, sous le Heading.**

1. Ajoute un **nouveau Text Editor** sous le grand titre.
2. Dans **Content**, remplace le texte d’exemple par :

> Pour eux, une nouvelle vie.  
> Pour vous, une histoire qui commence.

3. Dans **Style**, mets **Text Color → #586D79**.
4. Dans **Typography**, mets **Family → DM Sans**, **Size → 18 px**, **Line Height → 1.7 em**.

**Vérifie la structure :**

```text
Texte accueil
  Text Editor            ← REFUGE SPA D’OYONNAX
  Heading                ← Une rencontre peut tout changer.
  Text Editor            ← Pour eux, une nouvelle vie…
```

### 6.7 — Préparer la rangée des deux boutons

**À ajouter : Container. À déposer dans : Texte accueil, sous le dernier Text Editor. Nom : Boutons accueil.**

1. Ajoute un **Container** sous le texte de présentation, toujours dans `Texte accueil`.
2. Renomme-le `Boutons accueil`.
3. Dans **Layout**, règle **Content Width → Full Width**, **Direction → Row**, **Gaps → 16 px** et **Wrap → Wrap**.
4. Dans **Advanced**, mets **Padding** à 0.

Cette petite boîte sert uniquement à mettre les deux boutons côte à côte. **Ce n’est pas encore un bouton : tu dois maintenant y ajouter les widgets Button.**

### 6.8 — Ajouter le premier bouton

**Widget à ajouter : Button. À déposer dans : Boutons accueil.**

1. Dans **Add Element**, recherche `Button` et glisse-le dans `Boutons accueil`.
2. Dans **Content → Text**, écris `Trouver mon compagnon`.
3. Dans **Content → Link**, écris `#animaux`.
4. Dans **Style**, sur l’état **Normal**, mets **Text Color → #FFFFFF** et **Background Color → #207AAD**. Selon la version, le fond apparaît sous **Background Type → Classic → Color**.
5. Dans **Typography** : **Family → DM Sans**, **Size → 15 px**, **Weight → 600**.
6. Mets **Border Radius → 5 px** pour les quatre coins.
7. Dans le **Padding du bouton**, mets **Top / Bottom → 16 px** et **Right / Left → 22 px**.
8. Passe dans **Hover** et règle le fond sur `#155A82`, avec le texte toujours blanc.

Le lien `#animaux` ne mènera à une section qu’après sa création dans la partie 8. Pour le moment, c’est normal qu’il ne fasse pas défiler la page.

### 6.9 — Ajouter le deuxième bouton

**Widget à ajouter : Button, en dupliquant le premier. Il reste dans : Boutons accueil.**

1. Fais clic droit sur le premier bouton → **Duplicate**.
2. Sélectionne la copie, puis mets **Content → Text → Découvrir le refuge**.
3. Mets **Content → Link → #refuge**.
4. Dans **Style → Normal**, choisis un fond transparent et **Text Color → #207AAD**.
5. Choisis **Border Type → Solid**, largeur de bordure **1 px** et couleur `#207AAD`.
6. Dans **Hover**, choisis un fond `#EAF3F8` et **Text Color → #207AAD**. La copie a hérité des réglages au survol du premier bouton : il faut donc les ajuster aussi.

**Résultat attendu :** sous le texte de présentation, un bouton bleu et un bouton à contour bleu. Ils peuvent passer sur deux lignes si la place manque.

### 6.10 — Ajouter la photo dans la boîte de droite

**Widget à ajouter : Image. À déposer dans : Photo accueil.**

1. Dans **Add Element**, recherche `Image` et glisse-le dans `Photo accueil`.
2. Le panneau doit afficher **Edit Image**.
3. Dans **Content**, clique sur l’emplacement de l’image ou sur **Choose Image**.
4. Dans la fenêtre qui s’ouvre, utilise **Media Library** pour une photo déjà importée, ou **Upload Files → Select Files** pour prendre une photo sur ton ordinateur.
5. Sélectionne la photo, renseigne **Alt Text**, puis clique sur **Insert Media** ou **Select**, selon la fenêtre affichée.
6. Dans **Style**, règle **Width → 100 %**, puis **Height → 560 px**.
7. Si disponible, règle **Object Fit → Cover** : cela recadre la photo au lieu de l’étirer. Ajuste **Object Position** pour garder la tête de l’animal visible.
8. Dans **Border Radius**, désactive la chaîne et mets **100 / 8 / 8 / 8 px** pour les coins **Top Left / Top Right / Bottom Right / Bottom Left**.
9. Dans **Content**, laisse **Link → None**.

Si **Object Fit** n’est pas disponible, garde une hauteur automatique et une photo déjà recadrée en portrait. Ne force pas une hauteur qui déforme l’animal.

### 6.11 — Vérifier que tout est au bon endroit

Voici le plan complet du haut de page. Le nom entre parenthèses est **le vrai élément Elementor** ; les noms français servent à te repérer.

```text
Page SPA (Container)
  Section Accueil (Container)
    Intérieur Accueil (Container)
      Texte accueil (Container)
        Text Editor — REFUGE SPA D’OYONNAX
        Heading — Une rencontre peut tout changer.
        Text Editor — Pour eux, une nouvelle vie…
        Boutons accueil (Container)
          Button — Trouver mon compagnon
          Button — Découvrir le refuge
      Photo accueil (Container)
        Image — photo du chien
```

Clique sur **Save Draft**, puis sur **Preview Changes**.

**Résultat attendu sur ordinateur :** les textes et les deux boutons à gauche, une grande photo arrondie à droite. Si tu obtiens cela, la structure principale est réussie. Les détails décoratifs peuvent attendre.

### 6.12 — Adapter au téléphone

1. Clique sur le mode **Mobile** dans la barre d’Elementor.
2. Dans **Structure**, sélectionne `Intérieur Accueil`. Règle **Layout → Direction → Column**.
3. Sélectionne `Texte accueil`, puis règle **Width → 100 %**. Fais la même chose pour `Photo accueil`.
4. Sélectionne `Section Accueil`. Dans **Advanced → Padding**, mets **Top / Bottom → 36 px** et **Right / Left → 20 px**.
5. Sélectionne le widget **Heading**. Dans **Style → Typography**, mets **Size → 46 px**, **Line Height → 1.08 em** et **Letter Spacing → -1 px**.
6. Sélectionne le **Text Editor** des phrases de présentation, puis mets **Size → 16 px**.
7. Sélectionne le widget **Image**, puis mets **Height → 380 px**. Tu peux réduire l’arrondi du coin haut gauche à **70 px**.
8. Si les boutons sont trop serrés, sélectionne `Boutons accueil` et passe **Direction → Column**.
9. Reviens en mode **Desktop** pour vérifier que le texte et la photo y restent côte à côte.

Les propriétés accompagnées d’une icône d’appareil peuvent avoir une valeur par écran. Si une modification mobile change aussi l’ordinateur, vérifie l’icône d’appareil du réglage avant de continuer.

En mode **Tablet**, si les colonnes sont trop serrées, règle aussi `Intérieur Accueil` sur **Column**, ses deux enfants sur **Width → 100 %**, et le titre sur **Size → 60 px**. Recontrôle ensuite le mode Mobile, qui peut hériter de valeurs Tablet.

**Enregistre. Tu peux maintenant t’arrêter et comparer cette première section à la maquette avant de construire la suite.**

### Pour comprendre les sections suivantes

Quand la suite du guide demande une « section standard », il s’agit de **deux éléments Container** :

- Le premier, placé **dans Page SPA**, est la boîte extérieure : **Content Width → Full Width**, **Direction → Column**, **Padding → 64 px haut/bas et 24 px gauche/droite** sur ordinateur.
- Le second est placé **dans le premier** : **Content Width → Boxed**, contenu limité à **1200 px**, **Direction → Column**, **Gaps → 24 px**, **Padding → 0**. C’est dans ce second conteneur que tu ajoutes les widgets de la section.

Sur mobile, réduis le padding de la boîte extérieure à **36 px haut/bas et 20 px gauche/droite**. Les sections suivantes sont ajoutées **après Section Accueil, au même niveau dans Page SPA**, pas à l’intérieur de la boîte du texte ou de la photo.

## 7. Ajouter la bande bleu pâle

1. Crée une nouvelle section extérieure et son conteneur intérieur dans « Page SPA ».
2. **Style → Background → Classic → Color** : `#EAF3F8`.
3. **Padding** extérieur : **22 px haut/bas**, **24 px gauche/droite**.
4. Conteneur intérieur : **Direction → Row**, **Justify Content → Space Between**, **Gaps → 20 px**, **Wrap → Wrap**.
5. Ajoute trois widgets **Text Editor** : « Adopter, c’est s’engager », « Chaque histoire compte », « Un refuge à taille humaine ».
6. **Typography → Family** DM Sans, **Size** 14 px, **Text Color** `#183D55`.
7. Sur mobile, choisis **Direction → Column**, puis **Alignment → Center** sur les textes.

Les petits symboles décoratifs de la maquette sont facultatifs. Si tu en ajoutes avec le widget **Icon**, choisis une forme simple et la couleur bleue principale.

## 8. Construire la section des animaux

### A. La section et son titre

1. Ajoute une section standard et son intérieur, nommé « Intérieur Animaux ».
2. Sélectionne le conteneur extérieur → **Advanced → CSS ID** : écris `animaux`, **sans #**.
3. Dans l’intérieur, ajoute le petit texte « DE BELLES HISTOIRES À ÉCRIRE », en reprenant le style du petit texte d’accueil.
4. Ajoute un widget **Heading**, avec **HTML Tag → H2** : « Et si c’était vous ? ».
5. Dans **Style → Typography** : **Family** Playfair Display, **Size** 44 px en **Desktop** et 34 px en **Mobile**, **Weight** 500 ; **Text Color** `#183D55`.
6. Ajoute un widget **Text Editor** avec une ou deux phrases de présentation.

### B. La première carte

1. Ajoute un conteneur « Rangée animaux » : **Direction → Row**, **Gaps → 24 px**, **Justify Content → Space Between**, **Padding → 0**.
2. Ajoute dedans un conteneur « Carte animal 1 » : **Direction → Column**, **Width → 31 %**, **Gaps → 12 px**, **Padding → 0**.
3. Ajoute un widget **Image** : **Width → 100 %**, **Height → 300 px**, **Object Fit → Cover**, **Border Radius → 6 px**.
4. Ajoute un widget **Heading** : **Title** = le prénom, **HTML Tag → H3**, **Family** Playfair Display, **Size** 28 px, **Text Color** `#183D55`.
5. Ajoute un widget **Text Editor** : espèce, âge et informations utiles, **Family** DM Sans, **Size** 14 px, **Text Color** `#586D79`.
6. Ajoute un widget **Button** « Découvrir son histoire » avec un lien vers la vraie fiche de cet animal.

### C. Les deux autres cartes

Sur **le conteneur de carte entier**, fais clic droit → **Duplicate**, deux fois, puis remplace photo, prénom, description et lien. Vérifie dans Structure que les trois cartes sont dans « Rangée animaux ».

Sur mobile : **Direction → Column** pour « Rangée animaux », **Width → 100 %** pour chaque carte, **Height → 300 px** environ pour les photos. Sur tablette, tu peux également les empiler pour commencer.

### Ce qui change par rapport à la maquette interactive

La première version utilise des liens vers des fiches individuelles. Les boutons de filtre « chiens/chats » et les fenêtres de portrait de la maquette nécessitent une solution complémentaire.

Ne crée pas de faux boutons de filtre qui ne font rien. Il faut d’abord identifier comment les fiches d’animaux sont enregistrées sur le site actuel, puis choisir une liste dynamique et un filtrage compatibles. **N’achète pas Elementor Pro uniquement dans l’espoir d’obtenir automatiquement ces filtres.**

## 9. Présenter le refuge

1. Crée une section standard avec un conteneur intérieur réglé sur **Direction → Row**, **Gaps → 40 px**, **Align Items → Center**.
2. Donne à la section le **CSS ID** `refuge`.
3. Ajoute deux conteneurs enfants, chacun avec **Width → 48 %**, **Direction → Column**, **Padding → 0**.
4. À gauche : un widget **Image** du refuge ou de l’équipe, **Width → 100 %**, **Border Radius → 8 / 80 / 8 / 8 px**.
5. À droite : petit texte « BIENVENUE CHEZ EUX », widget **Heading** avec **HTML Tag → H2**, « Un abri aujourd’hui. Une famille demain. », deux courts paragraphes et un bouton ou lien vers la présentation du refuge.
6. Réutilise les tailles de titres et paragraphes déjà réglées. Le clic droit **Copy**, puis **Paste Style** sur un widget de même type peut faire gagner du temps ; vérifie ensuite ses réglages mobile.
7. Sur mobile : **Direction → Column** sur l’intérieur, **Width → 100 %** sur les enfants, **Gaps → 28 px**.

Les textes et images doivent décrire le vrai refuge. Les contenus de démonstration de la maquette ne sont pas des informations vérifiées sur l’association.

## 10. Créer le grand bloc bleu « Nous aider »

1. Ajoute une section standard, **Background → Classic → Color** `#155A82`, **CSS ID** `aider`.
2. Dans son intérieur, ajoute le petit texte « CHACUN PEUT FAIRE LA DIFFÉRENCE », couleur blanche.
3. Ajoute un widget **Heading** avec **HTML Tag → H2**, « À chacun son coup de patte. », couleur blanche.
4. Ajoute un conteneur avec **Direction → Row**, **Gaps → 32 px**, **Justify Content → Space Between**.
5. Ajoute trois conteneurs enfants avec **Width → 30 %**, **Direction → Column**, **Gaps → 16 px**, **Padding → 0**.
6. Chaque enfant contient un widget **Icon**, un **Heading** avec **HTML Tag → H3**, un **Text Editor** et un **Button**.

| Colonne | Icône suggérée | Titre | Destination du bouton |
|---|---|---|---|
| 1 | Heart (cœur) | Soutenir le refuge | Dispositif de don officiel utilisé par le refuge |
| 2 | Sun ou Hands (soleil ou mains) | Donner de son temps | Page bénévolat ou contact |
| 3 | Home ou House (maison) | Ouvrir sa porte | Page famille d’accueil ou contact |

Widgets **Icon** : **Size → 36 px**, **Primary Color** `#BBDEF3`. Titres et textes : blanc. Boutons : fond blanc, texte `#155A82` ; dans **Hover**, fond `#EAF3F8` et texte toujours bleu profond.

Sur mobile, règle **Direction → Column** sur la rangée et **Width → 100 %** sur les trois enfants. Un espace de 32 px entre les enfants suffit ; les séparations verticales de la version ordinateur ne sont pas indispensables.

Un bouton de don est un lien vers le système officiel : ce tutoriel n’installe aucun paiement.

## 11. Ajouter la section de contact

1. Crée une section standard avec le **CSS ID** `rencontre`.
2. Dans son intérieur, ajoute deux conteneurs côte à côte, chacun avec **Width → 48 %**.
3. À gauche : petit texte, widget **Heading** avec **HTML Tag → H2**, « Faisons connaissance. », puis adresse et horaires vérifiés.
4. À droite : widget **Button**, **Text** « Contacter le refuge », avec le style bleu du premier bouton.
5. Relie-le à la page de contact existante.
6. Sur mobile : **Direction → Column** sur le parent et **Width → 100 %** sur les enfants.

Elementor gratuit ne fournit pas le widget **Form** d’Elementor Pro. Si le site a déjà un formulaire fonctionnel, réutilise son bloc, son widget ou son code court suivant l’extension existante. Pour cette première page, un simple lien vers le contact suffit.

## 12. Intégrer le logo, le menu et le pied de page

Avec **Elementor Full Width**, l’en-tête du thème reste généralement visible. **Modifier le corps de la page avec Elementor ne modifie pas cet en-tête.**

### Avec Elementor gratuit : garder l’en-tête du thème

- Thème classique : cherche **Appearance → Customize → Site Identity** pour le logo, et **Appearance → Menus** pour la navigation.
- Thème de blocs : ces réglages peuvent être dans **Appearance → Editor**, dans la partie de modèle **Header**.
- Certains thèmes ont leur propre constructeur d’en-tête : utilise ses réglages existants.

Sur la copie de test, remplace le logo par le fichier original. Commence avec une largeur d’environ **80 px**, puis ajuste selon ses marges blanches. Garde les proportions ; si le fichier contient beaucoup de blanc autour, prépare une copie recadrée sans couper le cadre ni les silhouettes.

Privilégie un fond blanc cassé ou blanc, des liens bleus, et les rubriques **Adopter, Le refuge, Nous aider, Contact**. Vérifie le menu sur téléphone.

Pour une navigation partagée par toutes les pages, utilise l’adresse complète de l’accueil suivie de l’ancre, par exemple `https://ton-site.fr/#animaux`. Remplace bien le domaine de cet exemple par le vrai. Un simple `#animaux` fonctionne dans la page d’accueil, mais ne ramène pas à l’accueil depuis une fiche animal.

### Si tu disposes déjà d’Elementor Pro

Le **Theme Builder**, accessible selon la version depuis **Templates** ou le menu **Elementor**, permet de créer un modèle **Header** et un modèle **Footer**. Les **Display Conditions** déterminent où ils apparaissent : à régler sur le site de test d’abord.

Si tu n’as pas Pro, n’achète rien pour commencer. Les options du thème peuvent suffire. Le widget de navigation avancée et le Theme Builder peuvent dépendre de la version ou de l’offre ; une rangée de simples boutons ne remplace pas automatiquement un menu mobile avec bouton d’ouverture.

Pour le pied de page : conserve les mentions légales et liens utiles existants, puis adapte les couleurs et le logo avec les outils du thème.

## 13. Ajouter les finitions seulement après la structure

Les éléments suivants sont optionnels pour une première version : le macaron rond superposé à la photo, le texte posé sur l’image, les petits traits décoratifs et la couleur différente d’un seul mot du titre.

Ils demandent un placement plus précis et une vérification mobile. Ils pourront être ajoutés quand les sections principales seront en place. **Le guide reproduit la composition, les couleurs et la typographie ; il ne promet pas une copie pixel pour pixel sur tous les thèmes.**

Évite les marges négatives importantes pour forcer une disposition : une image bien placée dans un conteneur résiste mieux aux changements d’écran.

## 14. Vérifier ta page

Avant publication, utilise **Preview Changes** :

- Ouvre l’aperçu ordinateur, tablette et mobile, puis teste sur un vrai téléphone si possible.
- Vérifie que les colonnes s’empilent, que les images ne sont pas étirées et qu’aucun élément ne dépasse horizontalement.
- Clique sur les liens `#animaux`, `#refuge`, `#aider` et `#rencontre`. Chaque ID doit exister une seule fois sur la page.
- Vérifie les boutons de chaque fiche, du don et du contact.
- Si l’en-tête est fixe et masque le début d’une section après un clic, note-le : il faudra ajuster le décalage de défilement selon sa hauteur.
- Vérifie un seul H1 principal, puis les H2 de section et H3 des cartes.
- Renseigne les textes alternatifs des photos dans le champ **Alt Text** de **Media Library**.
- Remplace les animaux fictifs et valide les horaires, textes et liens avec l’association.
- Si un formulaire est présent, fais un envoi d’essai et vérifie la réception réelle.

Ce guide décrit une construction dans Elementor ; il n’a pas été exécuté sur ton WordPress, dont le thème et les extensions restent à identifier.

## 15. Mettre la page en ligne quand elle est validée

1. Prévois une sauvegarde du site avant la mise en ligne.
2. Si tu as travaillé sur une copie de test, fais transférer les changements avec le processus de l’hébergeur. Une copie globale peut écraser de nouveaux animaux ou messages ajoutés entre-temps sur le site public : coordonne ce transfert avec le responsable du site.
3. Clique sur **Publish** pour la page validée.
4. Va dans **Settings → Reading**.
5. Choisis **A static page** sous **Your homepage displays**, puis sélectionne la nouvelle page dans **Homepage** et clique sur **Save Changes**. Conserve le réglage **Posts page** si le site en utilise une.
6. Vérifie les menus, l’accueil et les autres pages. Si une extension de cache est présente, purge son cache.
7. Garde l’ancienne page d’accueil pour pouvoir revenir au réglage précédent.

## Si quelque chose ne ressemble pas à la maquette

| Problème | Première vérification |
|---|---|
| La page est étroite | **Page Layout → Elementor Full Width** ; conteneur extérieur à 100 % ; seul le contenu intérieur est encadré à 1 200 px |
| Le titre de la page apparaît deux fois | Réglage **Hide Title** ou option de titre du thème |
| Les deux colonnes ne tiennent pas | Largeurs des enfants, écart, padding et présence d’un troisième élément dans la même rangée |
| Une photo est déformée | **Object Fit → Cover** ou hauteur automatique avec une image déjà recadrée |
| Les blocs restent côte à côte sur téléphone | **Direction → Column** du parent et largeur 100 % de chaque enfant en mode mobile |
| Une couleur revient à une autre valeur | Réglage global lié au widget, état au survol ou style du thème |
| Le logo ne change pas | Il appartient probablement à l’en-tête du thème, pas au contenu de la page Elementor |
| Un lien d’ancre ne fonctionne pas | ID sans `#` sur la section, lien avec `#`, orthographe identique et ID unique |

Pour une aide adaptée : envoie une capture de l’éditeur avec le panneau de réglages ouvert, le nom du thème actif et l’élément qui te bloque. Ne transmets pas de mot de passe.
