export const today = () => {
  return new Date();
};

export const tomorrow = () => {
  const date = today();
  date.setDate(date.getDate() + 1);

  return date;
};

export default {
  today,
  tomorrow
};
