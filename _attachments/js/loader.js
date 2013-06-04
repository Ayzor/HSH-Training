
function couchapp_load(scripts) {
  for (var i=0; i < scripts.length; i++) {
    document.write('<script src="'+scripts[i]+'"><\/script>')
  };
};

couchapp_load([
  "js/sha1.js",
  "js/json2.js",
  "js/jquery.min.js",
  "js/jquery.couch.js",
  "js/jquery.couch.app.js",
  "js/jquery.couch.app.util.js",
  "js/jquery.mustache.js",
  "js/jquery.evently.js",
  "js/jquery.pathbinder.js",
  "js/bootstrap.min.js"
]);
