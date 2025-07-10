# GDC311ZBQ1-V2 external converter

## Étapes d'installation

### 1. Modifier `configuration.yaml`

Ajoute les lignes suivantes dans le fichier `configuration.yaml` de Zigbee2MQTT (`/config/zigbee2mqtt/configuration.yaml`) :

```yaml
external_converters:
  - external_converters/GDC311ZBQ1-V2.js
```
### 2. Enregistrer le fichier GDC311ZBQ1-V2.js 

Enregistrer le fichier GDC311ZBQ1-V2.js dans le dossier /config/zigbee2mqtt/external_converters/

### 3. Redémarrer Zigbee2mqtt
Redémarrer Zigbee2mqtt, vérifier si l'appareil fonctionne avec le converter.
En cas d'erreur dans le converter, Z2M refusera de démarrer. Pour régler cette situation et revenir à la normale: retirer les 2 lignes ajoutés pécedemment au configuration.yaml à l'étape 2 et relancer z2m.
