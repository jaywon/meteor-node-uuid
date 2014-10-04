Package.describe({
  name: "jaywon:meteor-node-uuid",
  summary: "node-uuid npm package wrapper for generating RFC compliant UUIDs.",
  version: "1.0.0",
  git: "https://github.com/jaywon/meteor-node-uuid"
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  
  var path = Npm.require('path');
  var asset_path = path.join('node-uuid');

  api.addFiles(path.join(asset_path, 'uuid.js'), 'client');
  api.addFiles(path.join(asset_path, 'uuid.js'), 'server');
});
