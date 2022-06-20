const switchFn =
  (lookupObject, defaultCase = "_default") =>
  (expression) =>
    (lookupObject[expression.acf_fc_layout] || lookupObject[defaultCase])(
      expression
    );

export default switchFn;
