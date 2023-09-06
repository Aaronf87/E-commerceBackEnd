const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const TagData = await Tag.findAll({
      include: [Product],
    });
    res.status(200).json(TagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// GET ONE TAG BY ID USING ROUTE API/TAGS/:ID
router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const TagData = await Tag.findByPk(req.params.id, {
      include: [Product],
    });
    if (!TagData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }
    res.status(200).json(TagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});
// CREATING A POST ROUTE FOR TAG
router.post('/', async (req, res) => {
  try {
    const categoryData = await ProductTag.create(req.body);
    res.status(200).json(ProductTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});
// CREATING A DELETE ROUTE FOR TAG
router.delete('/:id',async (req, res) => {
  // delete on tag by its `id` value
  try {
    const TagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!TagData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }
    res.status(200).json(TagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
