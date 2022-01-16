export const dateParser = (date: string) => {
  const newDate = new Date(date)
    .toLocaleTimeString("ru", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .slice(0, 10);
  return newDate;
};
