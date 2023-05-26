/**
 * Password validator for login pages
 */
import palette from "@assets/themesMui-ui/palette.module.scss";

// has number
const hasNumber = (number) => new RegExp(/[0-9]/).test(number);

// has mix of small and capitals
const hasMixed = (number) =>
  new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);

// has special chars
const hasSpecial = (number) => new RegExp(/[!#@$%^&*)(+=._-]/).test(number);

// set color based on password strength
export const strengthColor = (count) => {
  if (count < 2) return { label: "Poor", color: palette.errorMain };
  if (count < 3) return { label: "Weak", color: palette.warningDark };
  if (count < 4) return { label: "Normal", color: palette.orangeMain };
  if (count < 5) return { label: "Good", color: palette.successMain };
  if (count < 6) return { label: "Strong", color: palette.successDark };
  return { label: "Poor", color: palette.errorMain };
};

// password strength indicator
export const strengthIndicator = (number) => {
  let strengths = 0;
  if (number.length > 5) strengths += 1;
  if (number.length > 7) strengths += 1;
  if (hasNumber(number)) strengths += 1;
  if (hasSpecial(number)) strengths += 1;
  if (hasMixed(number)) strengths += 1;
  return strengths;
};
