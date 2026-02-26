export const formatDate = (date) => {
  if (!date) {
    return '';
  }

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  return new Date(date).toLocaleString("ru", options).slice(0, -2);
};
