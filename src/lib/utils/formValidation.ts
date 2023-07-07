export const inputCheck = (value: string) => {
  if(!value) {
    return "必須項目を入力してください.";
  } 

  return "";
}

export const validateEmailFormat = (email: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
};