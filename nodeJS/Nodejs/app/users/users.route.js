var userCtrl = require("./users.controller");
module.exports = function(app) {
    app.post("/api/users/createuser", userCtrl.create);
    app.get("/api/user/products", userCtrl.getUserPage);
    app.post("/api/user/products",userCtrl.getSearch);
};