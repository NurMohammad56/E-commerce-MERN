const {
  featuresListService,
  legalService,
} = require("../services/featuresServices");

exports.featuresList = async (req, res) => {
  let result = await featuresListService(req);
  return res.status(200).json(result);
};

exports.legalDetails = async (req, res) => {
  let result = await legalService(req);
  return res.status(200).json(result);
};
