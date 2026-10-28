# SPA Oyonnax — proposition d’identité visuelle

Maquette autonome en HTML, CSS et JavaScript, sans dépendance ni compilation. Ouvrir `index.html` dans un navigateur, ou lancer depuis ce dossier :

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

## Direction visuelle

Palette inspirée du logo transmis : bleu SPA approché `#207aad`, bleu profond `#155a82`, encre `#183d55`, blanc cassé `#faf9f5`, bleu très pâle `#eaf3f8`. Le bleu est une approximation visuelle du logo, pas une référence de charte officielle. Les tons chauds des photographies et illustrations préservent une ambiance accueillante. Titres Playfair Display et texte DM Sans (Google Fonts, avec alternatives Georgia et Arial sans réseau). Composition éditoriale, photographies généreuses, illustrations douces et appels à l’action sobres. Interface responsive, filtres d’animaux, pages de portrait, navigation mobile et prise en charge du mouvement réduit.

## Adapter à WordPress

Les sections peuvent devenir des groupes de blocs : en-tête, rencontre principale, animaux, présentation, soutien, contact. Les couleurs sont centralisées dans `style.css`. Remplacer les contenus fictifs, illustrations et photo générée par des données et photographies autorisées du refuge avant toute publication. Vérifier les horaires, les modalités d’adoption et les liens officiels. Aucun formulaire ni paiement ne fonctionne dans cette maquette ; les liens de contact renvoient au site officiel.

Cette création est une proposition indépendante, pas une copie ni un audit du site existant, qui n’était pas accessible depuis l’environnement. Les animaux sont fictifs. Les photographies des animaux sont générées et les illustrations SVG sont créées pour la maquette.

## Guide WordPress pas à pas

Consultez **[le guide Elementor gratuit, pas à pas](wordpress/GUIDE-ELEMENTOR.md)** : conteneurs, widgets, couleurs, dimensions et réglages mobile de chaque section. Les sections principales ne nécessitent ni CSS personnalisé ni Elementor Pro. Les réglages de l’en-tête dépendent du thème.

L’ancien [guide des blocs natifs](wordpress/GUIDE-BLOCS-WORDPRESS.md) et son [CSS dédié](wordpress/style-wordpress.css) restent disponibles ; ce CSS ne concerne pas Elementor.

## Catalogue et fiches d’animaux

Ouvrir `index.html`, puis cliquer sur **Adopter**, ou ouvrir directement `animaux.html`.

- **animaux.html** : catalogue de sept animaux fictifs, filtres combinables (espèce, âge, sexe), recherche par prénom ou caractère, tri et coups de cœur. Les critères figurent dans l’URL et restent appliqués après rechargement.
- **animal.html?id=oscar** : exemple de fiche individuelle, avec histoire, besoins, environnement souhaité, ententes à discuter et préparation d’une rencontre. Les autres fiches sont accessibles depuis le catalogue.
- **animals-data.js** : données de démonstration partagées par le catalogue et les fiches.
- Les coups de cœur sont enregistrés dans le navigateur quand son stockage local est disponible ; ils ne sont pas envoyés au refuge. Le comportement du stockage pour des fichiers ouverts directement peut varier selon le navigateur.
- Les images sont incluses dans `assets/`. Les portraits du catalogue sont générés, les animaux sont fictifs et les liens de contact conduisent au site officiel. Aucun formulaire d’adoption n’est transmis.

[Aperçu du catalogue](apercus/animaux.png) · [Aperçu d’une fiche](apercus/fiche-oscar.png)

### Vérification de développement

Le site n’a aucune dépendance à installer pour être utilisé. Pour les contrôles automatiques facultatifs, `tests/browser.cjs` utilise Playwright installé dans l’environnement et Chromium (`CHROMIUM_PATH` permet de choisir un autre exécutable). Exécuter `node tests/browser.cjs` : filtres combinés, recherche, tri, favoris, rechargement, fiches, navigation et largeurs 320 / 390 / 768 / 1440 px. Le script démarre et ferme son propre serveur HTTP local. Aucun contact avec le site du refuge n’est nécessaire.
