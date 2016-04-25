Package.describe({
  name: 'specik:orionjs-admin-materialize',
  summary: 'Load Materialize only in the OrionJS admin.',
  version: '1.0.1',
  git: 'https://github.com/specik/orionjs-admin-materialize'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['meteor-platform', 'orionjs:materialize@1.8.0']);
  api.addFiles(['init.js', 'materialize.min.js', 'templates.html'], 'client');
});
