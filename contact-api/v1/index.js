console.log("Registering contacts-API........");
var path = "";
module.exports = function(app, BASE_PATH) {
    path = BASE_PATH + "/hello";
    console.log("Registering get /hello... " + path);
    app.get(path, (req, res) => {
        res.send("My helo world from submodule");
    });


    path = BASE_PATH + "/bye";
    console.log("Registering get /bye... " + path);
    app.get(path, (req, res) => {
        res.send("Good bye from submodule");
    });

};
