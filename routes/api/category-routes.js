const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const CategoryData = await Category.findAll();
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      // JOIN with travellers, using the Trip through table
      
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
router.post('/', async (req, res) => {
  try {
    const categoryData = await Location.create(req.body);
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
try{
  const categoryData = await Category.update (
    req.body,{
      where:{
        id: req.params.id,
      }
    }
    
    )
    res.json(categoryData)
}
catch (err) {
  res.status(400).json(err);
}

});

router.delete('/:id', async (req, res) => {
  try {
    const categoriesData = await Location.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!locationData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
