export default {
  ASSET_PATH: process.env.ASSET_PATH || '/',
  //* use for dashboard page
  stripedHtml: /(<([^>]+)>)/gi,
  specialCharacters: /[!@#$%^&*(),.?":{}|<>]/gi,
  passwordRegex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
  //* use for frontend site
  defaultDateFormat: "YYYY-MM-DD",
  locale: {
    lang: "vi",
    code: "vi-VN",
    language_name: "Tiếng Việt",
    date_format: "DD-MM-YYYY",
    time_format: "HH:mm",
    currency: "VNĐ"
  },
  viewType: {
    LIST: "list",
    GRID: "grid",
    TREE: "tree",
  },
  pageSize: 50,
  GET: "get",
  INSERT: "insert",
  DELETE: "delete",
  UPDATE: "update",
  //* breakpoint
  breakpoint: {
    device: 768,
  },
};
