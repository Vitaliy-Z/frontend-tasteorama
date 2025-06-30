import Joi from "joi";

export const recipeValidationSchema = Joi.object({
  title: Joi.string().max(64).required(),
  decription: Joi.string().max(200).required(),
  time: Joi.number()
    .min(1)
    .max(360)
    .required()
    .messages({ "number.base": "time in minutes" }),
  cals: Joi.number().min(1).max(10000).allow(null, "").optional(),
  category: Joi.string()
    .required()
    .messages({ "any.required": "Ingredient required" }),
  ingredients: Joi.array()
    .items(
      Joi.object({
        id: Joi.string().required(),
        measure: Joi.string().required(),
      })
        .min(2)
        .max(16)
    )
    .required()
    .messages({ "one of ingredient collection": "required" }),
  ingredientAmount: Joi.number().min(2).max(16).required(),
  instructions: Joi.string().max(1200).required(),
  thumb: Joi.any()
    .custom((file, helpers) => {
      if (!file) return file;

      const maxSize = 2 * 1024 * 1024;
      const validTypes = ["image/jpeg", "image/png", "image/webp"];

      if (file.size > maxSize) {
        return helpers.message("Maximum image size — 2MB");
      }

      if (!validTypes.includes(file.type)) {
        return helpers.message("Unsupported image format");
      }

      return file;
    })
    .optional(),
});
