Meteor.methods({
  "createRoleIfUndefined": function (roleName) {
    /*
    Create a given role if it is undefined
    */

    // Placeholder variable for role check
    var roleIsUndefined;
    
    // Placeholder array for role names
    var roleNames = [];

    // Get all existing roles
    var roles = Meteor.roles.find().fetch();

    // Add each role name to the roleNames array
    var roles.forEach(function (role) {
      // Add role name to role names array
      roleNames.push(role.name);
    });

    // Check if role is already defined
    var roleIndex = roleNames.indexOf(roleName);
    
    // Convert the role index to a boolean value
    roleIsUndefined = (roleIndex >= 0) ? false : true;

    // Create the admin role if it is undefined
    if (roleIsUndefined) {
      console.log('Defining "' + roleName + '" role.');
      Roles.createRole(roleName);
    }
  }
});
