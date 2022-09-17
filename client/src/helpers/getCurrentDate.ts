// function to output current date in format YYYY-MM-DD
export const getCurrentDate = () => {
  const date = new Date();
  // show the last tow digits of the year
  const year = date.getFullYear().toString().slice(-2);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${day}-${month}-${year}`;
};
