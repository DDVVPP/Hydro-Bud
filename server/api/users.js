const router = require('express').Router();
const { User } = require('../db/models');
module.exports = router;
const { isAdmin, isUser } = require('../security');

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', isUser, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const user = await User.findOne({
      where: {
        id: id,
      },
    });
    if (!user) {
      res.sendStatus(404);
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
});
