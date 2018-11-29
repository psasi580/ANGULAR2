var userCtrl = {},
userSchema = require("mongoose").model("userDetail");
userCtrl.getUserPage = function(req, res) {
    console.log('hshjhjsddsj',req);
    var sample=req.dody;
    userSchema.find(sample, function(err, data) {
        console.log(data);
        if (err) {
            res.send("<h1>Error occured</h1>")
        } else {
            res.json(data);
            // res.render("products/products", { products: data });
        }
    });

}
userCtrl.create = function(req, res) {
    //fetch the data from the request.
    var requestData = req.body;
    //Create the new schema for the userDetail.
    var userDetail = new userSchema(requestData);

    userDetail.save(function(err, data) {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });

}
userCtrl.getSearch = function (req, res) {
    var searchCriteria = req.body.params.id;
    console.log(searchCriteria);
    userSchema.find(
      { "username": searchCriteria },
      function (err, data) {
        if (err) {
          res.send("Error Occured");
        }
        else {
        //   res.json(data);
        res.render("/api/user/products", { data: data ,method:GET});
        }
      }
    )
  };
module.exports = userCtrl;