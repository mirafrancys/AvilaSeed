# 💳 Projet Avila-Seed : Migration Monorepo (Angular SSR + Express)

Ce document sert de guide de configuration pour la fusion des projets existants dans une structure Monorepo unifiée.

---

## 🏗️ Structure du Monorepo (PNPM + Nx)

* **`/apps/avila-seed`** : Frontend Angular (migré depuis l'ancien projet Avila-Seed).
    * Styles : **SCSS**.
    * Moteur : **SSR activé** avec **i18n** (multi-langue).
* **`/apps/seed-server`** : Backend **Express** (migré depuis Seed-Server).
* **`/prisma`** : Configuration ORM migrée vers **PostgreSQL**.
* **`/libs/shared`** : Contrats de données et types partagés entre le Front et le Back.

---

## 🛠️ Stack de Migration & Qualité

| Composant | Technologie | État de Migration |
| :--- | :--- | :--- |
| **Gestionnaire** | **PNPM** | Centralisation des node_modules. |
| **Base de Données** | **PostgreSQL** | Migration depuis **MsSQL**. |
| **ORM** | **Prisma 7.x** | Mise à jour du provider et régénération des types. |
| **Tests Unitaires** | **Vitest** | Remplacement de Jest/Karma par Vitest. |
| **Tests E2E** | **Playwright** | Validation des flux critiques. |

---

## 🔄 Étapes de Migration du Code

1.  **Schéma Prisma** : Modifier `provider = "sqlserver"` en `provider = "postgresql"`.
2.  **Transfert Logique** : Déplacer la logique métier de `Seed-Server` vers `apps/seed-server` sans les fichiers de config obsolètes.
3.  **Transfert UI** : Déplacer les composants d' `Avila-Seed` vers `apps/avila-seed`.
4.  **Unification** : Utiliser `pnpm install` à la racine pour lier les projets.

---

## 🚀 Commande de Lancement Unifiée

Le fichier `package.json` racine doit permettre de lancer les deux entités :

```json
"scripts": {
  "dev": "concurrently \"nx serve avila-seed\" \"nx serve seed-server\"",
  "test": "nx run-many -t test",
  "db:migrate": "prisma migrate dev"
}