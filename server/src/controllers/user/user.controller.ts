// ---------------------Imports------------------------
import { userModel } from "../../models/user/user.model";
import { asyncErrorHandler, CustomError } from "../../utils/error";
// ----------------------------------------------------

// @desc - fetching the user data
// @method - GET
// @url - /user
export const getUsers = asyncErrorHandler(async (req, res, next) => {
  const { search } = req.query;
  let query = {};
  let userData = [];
  //   if search query
  if (search) {
    const searchNumber = Number(search);
    const isNumber = !isNaN(searchNumber);

    query = isNumber
      ? {
          $or: [{ latitude: search }, { longitude: search }],
        }
      : { $text: { $search: search.toString().trim() } };
    userData = isNumber
      ? await userModel.find(query)
      : await userModel
          .find(query, {
            score: { $meta: "textScore" },
          })
          .sort({ score: { $meta: "textScore" } });
  } else {
    userData = await userModel.find();
  }

  res.status(200).json({
    status: 200,
    success: true,
    data: userData,
  });
  return;
});
