# Muzen

Une expérience audiovisuelle interactive combinant des animations génératives WebGL et une intégration audio via l'API Jamendo.

![Aperçu Muzen](https://i.imgur.com/placeholder.jpg)

## 🎨 Présentation

Muzen est une expérience web immersive qui marie des visuels générés procéduralement avec de la musique. Le projet utilise des shaders GLSL pour créer un paysage abstrait qui réagit au défilement et évolue dans le temps, tandis que la bande sonore est fournie par l'API Jamendo.

## 🚀 Caractéristiques

- **Animation procédurale** utilisant des shaders GLSL personnalisés
- **Génération de formes organiques** avec du bruit de Perlin
- **Design réactif** qui s'adapte à la taille de l'écran
- **Interaction par défilement** pour explorer la scène
- **Intégration audio** via l'API Jamendo
- **Animation basée sur le temps** évoluant en continu

## 🛠️ Technologies utilisées

- **Three.js** - Bibliothèque WebGL pour le rendu 3D
- **GLSL** - Langage de shaders pour les effets visuels personnalisés
- **Jamendo API** - Pour l'intégration de contenu audio
- **JavaScript ES6** - Pour la logique d'application
- **HTML5/CSS3** - Structure et styles de base

## 🖥️ Comment l'utiliser

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/techmefr/muzen.git
   cd muzen
   ```

2. **Configurer l'API Jamendo**
   - Créez un compte sur [Jamendo Developer](https://devportal.jamendo.com/)
   - Obtenez votre clé API
   - Renommez `config.js.sample` en `config.js`
   - Ajoutez votre clé API et l'ID de l'album dans `config.js`

3. **Lancer le projet**
   - Ouvrir `index.html` dans un navigateur moderne
   - OU utiliser un serveur local comme Live Server pour VSCode

4. **Interagir avec l'expérience**
   - Cliquer sur "Lancer la lecture" pour démarrer l'audio
   - Faire défiler la page pour explorer l'environnement visuel

## 🧩 Structure du code

Les composants clés du projet sont :

- **script.js** - Contient la logique principale de rendu WebGL et les animations
- **audio.js** - Gère l'intégration de l'API Jamendo et la lecture audio
- **index.html** - Structure de base et inclusion des scripts
- **style.css** - Styles CSS pour le positionnement et l'apparence

### Shaders et génération visuelle

Le projet utilise plusieurs techniques avancées de shader GLSL :

```glsl
// Exemple d'un fragment de code générant les vagues dynamiques
float wavePos(float waveIndex, vec2 p, float numWaves) {
  float sixth = 1./numWaves;
  float reverse = 1.;
  if(mod(waveIndex, 2.) == 0.) reverse = -1.;
  return sixth * waveIndex + sin(time + waveIndex * 9.14516 + p.x * 8. * reverse) * .02;
}
```

Les "bushes" (formes organiques) sont générés procéduralement en combinant :
- Bruit de Perlin pour le mouvement organique
- Formes géométriques de base transformées
- Animation temporelle pour une évolution constante

## 🔧 Personnalisation

Vous pouvez personnaliser l'expérience en modifiant :

- **Les couleurs** dans les constantes du shader (`darkBlueBush`, `lightBlueBush`, etc.)
- **La densité des éléments** en ajoutant/supprimant des objets du tableau `bushes`
- **La vitesse d'animation** en ajustant le facteur temps dans `uniforms.time.value`
- **L'audio** en changeant l'ID de l'album Jamendo dans `config.js`

## 📚 Ressources d'apprentissage

Si vous souhaitez en apprendre davantage sur les technologies utilisées :

- [Introduction aux shaders GLSL](https://thebookofshaders.com/)
- [Documentation Three.js](https://threejs.org/docs/)
- [API Jamendo pour développeurs](https://devportal.jamendo.com/docs)

## 📝 Licence

Ce projet est sous licence GNU GPL v3.0 - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

✨ **Créé par [TechmeFR](https://github.com/techmefr)**

N'hésitez pas à ouvrir des issues ou à soumettre des pull requests !
