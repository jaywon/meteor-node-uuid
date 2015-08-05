Package.describe({
  name: "jaywon:meteor-node-uuid",
  summary: "Generate RFC compliant UUIDs using node-uuid.",
  version: "1.0.1",
  git: "https://github.com/jaywon/meteor-node-uuid"
});

Npm.depends({
  'uuid': '2.0.1'
});


Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.use('cosmos:browserify@0.5.0', 'client');
    api.addFiles('client.browserify.js');
    api.export('uuid');
});
