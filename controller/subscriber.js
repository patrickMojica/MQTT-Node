exports.getSubscriberPage = async function (req, res) {
    try {
      res.render("./subscriber");
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .json({ status: 400, message: "Error getting subscriber page" });
    }
  };
  