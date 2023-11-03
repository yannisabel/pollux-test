# Pollux Frontend Test

Pour démarrer le projet:

1. Installer les dépendances: `npm install`

2. Lancer le projet en mode dev: `npm run start`

Pour ce test qui se veut sans framework et principalement basé sur l'accessibilité et la cohérence du code par rapport au design mon choix s'est porté sur du full vanilla en HTML/CSS/JS.

**Raisons :**
- Moins de problèmes de compatibilité
- Les styles peuvent être intégré à n'importe quel framework web (même PHP).
- Utilisation de la puissance des navigateurs modernes pour avoir un design cohérent et accessible.
- évolutivité

Mot d'ordre et principe utilisé : **KISS** (Keep It Simple, Stupid).

## Choix techniques:

Ce projet est principalement basé sur les styles en CSS pour une cohérence design pouvant s'adapter et évoluer très facilement.

- **Architecture :** Un dossier `src` dans lequel se trouve tous les fichiers sources et des sous dossiers pour séparer les `assets`, les `scripts` et toutes les autres parties servant de base à la création de l'interface. Un fichier `index` est présent dans certaines parties de l'arborescence pour permettre d'importer facilement la globalité d'un dossier (convention utilisée généralement lorsque l'on déploie un projet en tant que package npm).
- **Design Token :** utilisation des variables CSS dans le selecteur `:root` pour permettre d'y accéder de n'importe où et seront simple à réutiliser en cas de theming voire d'utilisation via un preprocessor comme SASS.
  - **Naming :** Pour les couleurs il s'agit du même naming que dans la frame "Color" Figma, pour les autres tokens je me suis basé sur le nom donné au style créé pour la réutilisation dans Figma. Le but étant avant tout d'avoir une cohérence sur le naming Design/Code (aide à la review, permet une meilleur communication et les évolutions seront beaucoup plus simple et rapide à effectuer).
  - **fonts tokens:** seuls les tokens de fonts sont utilisés via des `class` car un token de font complet intègre une `font-family`, une `font-weight`, une `font-size`, un `line-height` ainsi qu'un `letter-spacing`. Dans les commentaires des fichiers de tokens on peut voir `variable as token` et `class as token` selon la nature du token.
- **Icons :** Il est souvent question de performence avec les images en général sur web même en SVG. Pour éviter au mieux les mutiples requêtes et pour pouvoir intégrer les icones facilement j'ai créé un sprite (un seul fichier avec tous les icones). J'ai aussi passé la couleur de tous les svg à `currentColor` ce qui permet de n'avoir à la changer via du CSS que lorsque nécessaire. Le reste du temps le SVG aura la même couleur que le texte.
- **Accessibilité :** Le but étant de rendre la page accessible j'ai mis en place un certain nombre de chose dès le développement mais aussi une fois en phase de review.
  - Des éléments focusable pour la navigation au clavier
  - Des éléments de contenu utilisés par les **screen readers**. Il fallait donc que la semantique des balises soit bonne.
  E.g :
    - Usage de l'élément main pour permettre une différenciation entre contenu principal et les autres éléments (la modal par example (la fonctionnelle, pas la présentation en composant) est à l'extérieur du contenu principal, n'étant pas visible avant que l'action soit voulu)
    - Bon usage des titres (pas de multiple H1, cohérence des niveaux)
    - Utilisation de Header lorsque c'est utile.
  - Usage des attributs d'accessibilité pour permettre une définition des rôles des éléments ainsi que leur statut, ce qu'il contrôle etc...

**Critère d'acceptances :**

- [X] Les composants et leurs variants correspondent à ceux proposés dans Figma et utilisent les mêmes tokens de couleur, de font, de spacing, et de radius.
- [X] Les composants sont fonctionnels, accessibles et adaptable au scénario proposé.
- [X] Le scénario de la modal doit intégrer les composants précédemment stylisés.
- [X] Avoir une expérience fonctionnelle correspondant au scénario décrit dans Figma.
- [X] Le scénario doit aussi pouvoir s'effectuer à l'aide du clavier.

**Notes et remarques :**

- **Erreur dans les couleurs dans Figma :** Duplication du nom de la variable **Border Default** et **Border Interacting**.
Si l'on suit la logique du naming on devrait avoir `$colorEditionBorderDefault` pour le **Edition / Border Default** .
Simple problème de typo car la couleur des éléments à reproduire était bien la bonne.

- Pour les inputs le outline sur l’input en erreur n’était pas compris dans le fichier Figma mais il me paraissait important de l'avoir pour une question d’accessibilité. Si il y a une erreur dans un formulaire et que la personne doit retourner sur un champ pour le corriger il vaut mieux que le focus puisse être visible.
