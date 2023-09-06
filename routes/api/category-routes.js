// USE EXPRESS ROUTER
const router = require('express').Router();
// IMPORT MODELS
const { Category, Product } = require('../../models');

// GET ALL CATEGORIES INCLUDING ITS ASSOCIATED PRODUCT DATA
router.get('/', async (req, res) => {
  try {
    const CategoryData = await Category.findAll(
      {
      include:[Product],
    });
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// FIND ONE CATEGORY BY ITS ID USING ROUTE API/CATEGORIES/:ID
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// CREATING A POST ROUTE FOR CATEGORY
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE/PUT A CATEGORY BY ITS ID VALUE
router.put('/:id', async (req, res) => {
try{
  const categoryData = await Category.update (
    req.body,{
      where:{
        id: req.params.id,
      },
    });
      if (!categoryData[0]) {
        res.status(404).json({ message: 'No location found with this id!' });
        return; 
      }
    res.status(200).json(categoryData);
}
catch (err) {
  res.status(500).json(err);
}

});
// DELETE ROUTE FOR CATEGORY
router.delete('/:id', async (req, res) => {
  try {
    const categoriesData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoriesData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
