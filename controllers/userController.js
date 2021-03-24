const asyncMiddleware = require("../middleware/asyncMiddleware");
const { ErrorResponse } = require("../models/ErrorResponse");
const _ = require("lodash");
const { SuccessResponse } = require("../models/SuccessResponse");

exports.getCurrentUser = asyncMiddleware(async (req, res, next) => {
  const { user } = req;
  if (!user) return next(new ErrorResponse(401, "unauthorized"));
  const userInfo = _.omit(user._doc, "password", "_id", "__v");
  res.json(new SuccessResponse(200, { userInfo }));
});
