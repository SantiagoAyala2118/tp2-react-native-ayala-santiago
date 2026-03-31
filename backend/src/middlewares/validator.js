import { validationResult } from "express-validator";

//* Validador
export const applyValidations = (req, res, next) => {
  //* Se almacenan los errores
  const errors = validationResult(req);

  //* Se le da formato a los errores
  const custom = errors.formatWith((err) => {
    return ` ${err.msg}`;
  });

  //* Se mapean con un formato especifico en caso de existir
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: custom.mapped() });
  }

  next();
};
