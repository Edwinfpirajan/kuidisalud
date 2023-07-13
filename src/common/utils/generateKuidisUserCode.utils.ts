/* Function to generate the KUIDISALUD user code, 
   unique for each user registered   
*/
export function generateKuidisUserCode(callback: string): string {
  const currentYear = new Date().getFullYear();
  const possibleChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < 6; i++) {
    randomString += possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length),
    );
  }
  return `${currentYear}${callback}${randomString.toUpperCase()}`;
}
