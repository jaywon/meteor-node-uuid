if (Meteor.isServer) {
    uuid = Npm.require('uuid');
} else {
    uuid = require('uuid');
}
