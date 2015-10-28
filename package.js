Package.describe({
  summary: "Create a role, checking first if the role name is already defined.",
  version: "0.1.0",
  name: "brylie:create-role-if-undefined",
  git: "https://github.com/brylie/meteor-create-role-if-undefined.git"
});

Package.on_use(function (api, where) {
  // Meteor version
  api.versionsFrom("1.0.1");
  
  // Dependencies
  api.use("check", "server");
  api.use("alanning:roles@1.2.11", "server");

  // Files
  api.add_files("server/methods/roles.js", "server");
});