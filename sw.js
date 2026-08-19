// Service worker minimal : sa seule raison d'être est de satisfaire le critère
// technique que Chrome exige pour proposer « Installer l'application » avec
// l'icône personnalisée, plutôt qu'un simple raccourci générique.
// Il ne met rien en cache et n'intercepte aucune requête.

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  // Laisse passer toutes les requêtes normalement.
});
