/* description of the function :
    * getKeyBoardClick : get the keyBoard click and blur the input
 */

export const getKeyBoardClick = (e: any, keyClick: string, inputId: string) => {
  console.log(e.key);
  const doc: any = document;

  if (e.key === keyClick) {
    e.preventDefault();

    // leave focus after user press key
    doc.getElementById(inputId).blur();
  

    console.log(`User pressed ${keyClick} ✅`);
  }
};
