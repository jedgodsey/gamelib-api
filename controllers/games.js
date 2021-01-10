const db = require("../models");

// RETURN ALL GAMES
const index = (req, res) => {
  db.Game.find({})
    .then((foundGames) => {
      res.json({ games: foundGames });
    })
    .catch((err) => {
      console.log('Error in games.index:', err);
      res.json({ Error: 'Unable to get your data' });
    });

  // db.Game.find({}, (err, foundGames) => {
  //   if (err) console.log("Error in games#index:", err);

  //   res.json({ games: foundGames });
  // });
};

// RETURN A GAME BY ID
const show = (req, res) => {
  db.Game.findById(req.params.id)
    .then((foundGame) => {
      res.json({ game: foundGame });
    })
    .catch((err) => {
      console.log('Error in games.show:', err);
      res.json({ Error: 'Unable to get data' });
    });

  // db.Game.findById(req.params.id, (err, foundGame) => {
  //   if (err) console.log("Error in games#show:", err);

  //   if (!foundGame) {
  //     return res.json({ message: 'Requested game not found' });
  //   }

  //   res.json({ game: foundGame });
  // });
};

// CREATE A NEW GAME IN DB
const create = (req, res) => {
  db.Game.create(req.body)
    .then((savedGame) => {
      res.status(201).json({ game: savedGame });
    })
    .catch((err) => {
      console.log('Error in games.create:', err);
      res.json({ Error: 'Unable to get data' });
    });

  // db.Game.create(req.body, (err, savedGame) => {
  //   if (err) console.log("Error in games#create:", err);

  //   res.status(201).json({ game: savedGame });
  // });
};

// UPDATE GAME BY ITS ID
const update = (req, res) => {
  db.Game.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedGame) => {
      if (err) console.log("Error in games#update:", err);

      res.json({ game: updatedGame });
    }
  );
};

// REMOVE A GAME BY ITS ID
const destroy = (req, res) => {
  db.Game.findByIdAndDelete(req.params.id, (err, deletedGame) => {
    if (err) console.log("Error in games#destroy:", err);

    res.json({ game: deletedGame });
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
