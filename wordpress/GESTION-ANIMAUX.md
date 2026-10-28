# Gérer les animaux sans toucher au code

## L’idée : une fiche, plusieurs affichages

Le catalogue, la fiche détaillée et les animaux de l’accueil lisent désormais **la même base locale** dans la maquette. Une correction du prénom, de la photo ou de l’histoire se fait une seule fois.

- **Disponible** : visible au catalogue et éligible à l’accueil.
- **Adopté** : conservé dans la gestion, retiré des présentations publiques de la maquette.
- **Archivé** : conservé dans la gestion, également retiré des présentations publiques.
- **À l’accueil** : priorité dans les trois cartes de l’accueil. Les places libres se remplissent avec d’autres animaux disponibles.
- **Animal en grand à l’accueil** : choix de la grande photo et de son lien. Si cet animal n’est plus disponible, un autre est choisi automatiquement.

Le petit encart du catalogue consacré aux seniors utilise lui aussi une fiche disponible. Il disparaît s’il n’y a plus de senior.

## Ouvrir la gestion de la maquette

Dans le pied de page, clique sur **Gestion de la maquette**, ou ouvre `gestion.html` depuis la même adresse que les autres pages.

Pour un résultat fiable, utilise un serveur local à une adresse stable. Ouvrir les fichiers directement avec un double-clic peut fonctionner, mais le partage du stockage entre fichiers dépend du navigateur.

### Tu as déjà Local et WordPress sur ton ordinateur

Tu peux utiliser le serveur de Local sans intégrer la maquette à WordPress :

1. Télécharge le ZIP de la branche `maquette-spa-oyonnax` depuis GitHub et décompresse-le.
2. Dans Local, sélectionne ton site d’essai et ouvre son dossier. Selon la version, l’action s’appelle **Go to site folder**, **Open site folder** ou se trouve dans le menu du site.
3. Ouvre le dossier `app`, puis `public`.
4. Crée dedans un **nouveau dossier** nommé `maquette`. Ne remplace aucun fichier WordPress.
5. Copie dans `maquette` le contenu du dossier téléchargé : `index.html`, `gestion.html`, les autres fichiers HTML/CSS/JS et le dossier `assets` doivent se trouver directement dedans.
6. Dans Local, clique sur **Start site**, puis **Open site**.
7. Dans la barre d’adresse, garde l’adresse de ce site et ajoute `/maquette/index.html`. Exemple uniquement : `http://spa-oyonnax.local/maquette/index.html`. Utilise le domaine réellement indiqué par Local.
8. Le lien **Gestion de la maquette** se trouve en bas de page.

Garde le même navigateur, le même domaine et le même protocole (HTTP ou HTTPS). Changer d’adresse ou de profil de navigateur donne accès à un autre espace de stockage. Ce dossier de maquette n’ajoute aucun animal dans la base WordPress : il reste un prototype autonome.

Autre possibilité, si Python est installé : depuis le dossier de la maquette, lancer `python3 -m http.server 8000` (ou `py -m http.server 8000` sous Windows). Réutiliser la même adresse locale et le même port pour retrouver les données.

## Ajouter une fiche

1. Clique sur **Ajouter un animal**.
2. Choisis une photo JPG, PNG ou WebP de moins de 8 Mo. Elle est allégée automatiquement.
3. Renseigne le prénom, l’espèce, le sexe, l’âge (années ou mois), le gabarit et une courte phrase de caractère.
4. Ajoute les traits de caractère séparés par des virgules, l’histoire, le foyer souhaité et les besoins.
5. Précise ce qui est connu des ententes avec les chiens, chats et enfants. « À évaluer avec l’équipe » convient lorsqu’une information n’est pas encore connue.
6. Choisis **Disponible** pour afficher cette fiche dans la maquette.
7. Clique sur **Enregistrer la fiche**.

Le catalogue et sa page détaillée sont générés automatiquement. Les pages déjà ouvertes à la même adresse se mettent à jour lorsque les notifications entre onglets sont disponibles, ou quand tu reviens dans leur fenêtre.

## Modifier, retirer ou remettre un animal

- **Modifier [prénom]** ouvre le même formulaire prérempli. Laisser le champ Photo vide conserve la photo existante.
- **Marquer adopté** retire l’animal des listes publiques et de l’accueil.
- **Archiver** le retire également tout en gardant sa fiche.
- **Remettre disponible** permet de le réafficher.

Il n’y a pas de suppression définitive dans cette première version, pour permettre de récupérer une fiche retirée par erreur. Les filtres en haut de la gestion permettent de retrouver les adoptés et les archives.

## Choisir les animaux de l’accueil

### Les trois cartes

Coche **À l’accueil** à côté des fiches souhaitées. Trois fiches disponibles peuvent être prioritaires. Pour remplacer l’une d’elles, décoche-la, puis coche la nouvelle.

Si tu en choisis seulement une ou deux, la maquette complète les places avec les autres animaux disponibles, dans l’ordre du catalogue. Si moins de trois sont disponibles, elle affiche simplement ceux qui restent.

### La grande photo du haut

Dans **Animal en grand à l’accueil**, choisis une fiche, puis clique sur **Appliquer**. La photo, le prénom et le lien viennent de cette fiche. Il n’y a aucune deuxième image à importer sur la page d’accueil.

Le choix **automatique** utilise le premier animal disponible prioritaire sur l’accueil, ou le premier disponible à défaut.

## Sauvegarder et transporter le travail

Clique régulièrement sur **Exporter la sauvegarde**. Tu obtiens un fichier JSON contenant les fiches, les photos ajoutées et les choix d’accueil. Les photos générées de départ sont référencées depuis le dossier `assets` de la maquette : conserve aussi le dossier complet du site.

Sur un autre navigateur ou ordinateur, ouvre la même version de la maquette et utilise **Importer une sauvegarde**. Après lecture du fichier, la page demande confirmation avant de remplacer son catalogue local. Un fichier invalide est refusé sans remplacer les données.

Le fichier JSON est une sauvegarde à conserver ; tu n’as pas à l’ouvrir ou le modifier toi-même. Il n’est pas un format d’import WooCommerce prêt à l’emploi.

## Ce que cette version fait — et ce qu’il reste à faire pour un site public

Cette interface enregistre les fiches dans **IndexedDB, le stockage local du navigateur**. Elle ne modifie pas les fichiers du dépôt GitHub et ne publie pas tes changements pour les visiteurs d’autres appareils.

Effacer les données du navigateur peut effacer les modifications ; la navigation privée peut les rendre temporaires. Si le stockage est indisponible, l’interface signale le problème et bloque l’enregistrement au lieu d’annoncer un faux succès.

Le lien de gestion est discret, mais **ce n’est pas une authentification**. Aucun faux mot de passe n’a été ajouté au JavaScript. Pour permettre à plusieurs bénévoles de gérer un site public, il faut un stockage serveur, de vrais comptes et des permissions. WordPress apporte déjà ces éléments.

## Et sous WordPress ? Oui, cette organisation est transposable

Les mises en page de la maquette peuvent être reproduites dans un thème ou un constructeur compatible. Pour un usage quotidien, il faut remplacer les cartes créées manuellement pendant l’apprentissage d’Elementor par **des modèles qui affichent les données des fiches**.

On construit une seule fois :

1. Un modèle de carte : photo, prénom, âge, caractère, lien.
2. Un modèle de fiche détaillée : histoire, besoins, ententes, contact.
3. Une liste dynamique du catalogue, limitée aux animaux disponibles et reliée aux filtres.
4. Une liste dynamique sur l’accueil, limitée aux animaux disponibles et mis en avant.

Ensuite, le bénévole remplit une fiche dans WordPress. Il ne reconstruit ni carte ni page Elementor.

### Le site utilise déjà WooCommerce et BEAR

**BEAR est un outil de modification en masse des produits WooCommerce.** Si le refuge représente déjà ses animaux avec ces produits, les fiches existent dans WooCommerce ; BEAR facilite leur gestion, mais ne dessine pas le catalogue ou la page détaillée.

La piste recommandée en premier est donc de **conserver ces données et leur gestion**, puis de travailler les modèles d’affichage. Une extension plus récente n’améliore pas à elle seule le design et n’est pas automatiquement un meilleur choix.

Avant de choisir les outils, il faudra vérifier sur une copie du site :

- si chaque animal est bien un produit WooCommerce ;
- où sont stockés âge, sexe, espèce, histoire et ententes : attributs, catégories, description ou champs personnalisés ;
- comment le statut adopté/disponible est actuellement enregistré ;
- si la mise en avant WooCommerce est déjà utilisée ;
- quelles versions et extensions sont installées.

On pourra réutiliser la mise en avant WooCommerce si elle convient, ou ajouter un champ dédié. Toutes les listes devront appliquer la même règle de disponibilité ; la grande bannière devra elle aussi ignorer une fiche adoptée. Il ne faut pas modifier le fonctionnement actuel des statuts sans avoir compris les règles du site.

### Répartition des rôles possibles

| Besoin | Solution envisageable |
|---|---|
| Ajouter, modifier, archiver des animaux | Fiches WooCommerce existantes et leur éditeur ; BEAR pour les changements en masse |
| Ajouter des champs qui manquent | Champs personnalisés ; ACF est une possibilité, après vérification des données existantes |
| Reproduire le design | Modèles du thème ou constructeur avec prise en charge des données dynamiques / WooCommerce |
| Filtrer par espèce, âge, sexe | Solution de filtrage compatible avec la liste et les champs réellement utilisés |
| Choisir les animaux de l’accueil | Mise en avant ou champ dédié, puis sélection dynamique des fiches disponibles |
| Gérer à plusieurs | Comptes et permissions WordPress adaptés aux bénévoles |

**Elementor gratuit suffit à apprendre et à construire les sections statiques du guide.** Il ne fournit pas à lui seul tout le système de modèles WooCommerce, de champs dynamiques et de filtres décrit ici. Selon les fonctionnalités nécessaires, il faudra une offre Elementor adaptée ou une autre intégration au thème. N’achète pas un abonnement avant d’avoir identifié les besoins et les outils du site.

Une alternative serait de créer un type de contenu dédié **Animal**, avec ses champs. C’est cohérent pour un nouveau site, mais sur le refuge existant cela implique une migration des données et des liens. Il n’est pas nécessaire d’entreprendre cette migration simplement pour moderniser le design.

Aucune recommandation de remplacement de BEAR ne repose ici sur un audit des versions installées ou une comparaison actuelle de son catalogue d’extensions. La priorité est de vérifier l’existant, puis de choisir les outils compatibles.
