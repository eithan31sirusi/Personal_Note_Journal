const express = require("express");
const { check } = require("express-validator");

const JurnalControllers = require("../controllers/jurnal-controllers");

const router = express.Router();

router.get("/:pid", JurnalControllers.getPageById);

router.get("/user/:uid", JurnalControllers.getPagesByUserId);

router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5, max: 1700 }),
  ],
  JurnalControllers.createPage
);

router.patch(
  "/:pid",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5, max: 1700 }),
  ],
  JurnalControllers.updatePage
);

router.delete("/:pid", JurnalControllers.deletePage);

module.exports = router;
