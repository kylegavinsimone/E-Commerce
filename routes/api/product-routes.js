const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

router.get("/", (req, res) => {
  Product.findAll({
    include: [
      { model: Category },
      {
        model: Tag,
        through: ProductTag,
      },
    ],
  }).then((productData) => {
    res.json(productData);
  });
});
router.get("/:id", (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      { model: Category },
      {
        model: Tag,
        through: ProductTag,
      },
    ],
  }).then((productData) => {
    res.json(productData);
  });
});
router.post("/", (req, res) => {
  Product.create(req.body).then((productData) => {
    res.json(productData);
  });
});
router.put("/:id", (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((productData) => {
    res.json(productData);
  });
});
router.delete("/:id", (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  }).then((productData) => {
    res.json(productData);
  });
});
module.exports = router;
