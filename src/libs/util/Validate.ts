export function validateEmail(email: string): boolean {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

// 大小英数字記号をそれぞれ1文字以上含む8文字以上48文字以下の文字列
export function validatePassword(password: string): boolean {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-^$*.@]).{8,48}$/.test(password);
}

// 5文字以上30文字以内 英大文字（A-Z） 英小文字（a-z） 数字（0-9）
export function validateUserName(userName: string): boolean {
  return /^[A-Za-z0-9]{5,30}$/.test(userName);
}
