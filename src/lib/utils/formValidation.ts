export const inputCheck = (value: string) => {
  if(!value) {
    return "内容不能为空.";
  } 

  return "";
}

export const validateEmailFormat = (email: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
};