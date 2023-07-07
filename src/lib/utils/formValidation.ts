export const inputCheck = (value: string) => {
  if(!value) {
    return "必須項目は入力してください.";
  }

  return "";
}