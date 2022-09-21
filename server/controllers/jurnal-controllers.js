const { uuid } = require("uuidv4");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const Page = require("../models/page");
const User = require("../models/user");

const getPageById = async (req, res, next) => {
  const pageId = req.params.pid;

  let page;

  try {
    page = await Page.findById(pageId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a page.",
      500
    );
    return next(error);
  }

  if (!page) {
    return next(
      new HttpError("Could not find a page for the provided id.", 404)
    );
  }
  res.json({ page: page.toObject({ getters: true }) });
};

const getPagesByUserId = async (req, res, next) => {
  const userId = req.params.uid;
  // let pages;
  let userWithPages;
  try {
    userWithPages = await User.findById(userId).populate("pages");
  } catch (error) {
    const err = new HttpError(
      "Fetching pages failed, please try again later.",
      500
    );
    return next(err);
  }
  // if (!pages || pages.length === 0) {
  if (!userWithPages || userWithPages.length === 0) {
    return next(
      new HttpError("Could not find pages for the provided user id.", 404)
    );
  }

  res.json({
    pages: userWithPages.map((page) => page.toObject({ getters: true })),
  });
};

const createPage = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { title, description, pageSymbol, creator } = req.body;

  const createdPage = new Page({
    title,
    description,
    pageSymbol,
    creator,
  });

  let user;

  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError("Creating page failed, please try again.", 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Could not find user for provided id.", 404);
    return next(error);
  }

  console.log(user);

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdPage.save({ session: sess });
    user.pages.push(createdPage);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError("Creating page failed, please try again.", 500);
    return next(error);
  }

  res.status(201).json({ page: createdPage });
};

const updatePage = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const { title, description, pageSymbol } = req.body;
  const pageId = req.params.pid;

  let page;
  try {
    page = await Page.findById(pageId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update page.",
      500
    );
    return next(error);
  }

  page.title = title;
  page.description = description;
  page.pageSymbol = pageSymbol;

  try {
    await page.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update page.",
      500
    );
    return next(error);
  }

  res.status(200).json({ page: page.toObject({ getters: true }) });
};

const deletePage = async (req, res, next) => {
  const pageId = req.params.pid;

  let page;

  try {
    page = await Page.findById(pageId).populate("creator");
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete page.",
      500
    );
    return next(error);
  }

  if (!page) {
    const error = new HttpError("Could not find page for this id.", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await page.remove({ session: sess });
    page.creator.pages.pull(page);
    await page.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete page.",
      500
    );
    return next(error);
  }
};

exports.getPageById = getPageById;
exports.getPagesByUserId = getPagesByUserId;
exports.createPage = createPage;
exports.updatePage = updatePage;
exports.deletePage = deletePage;
