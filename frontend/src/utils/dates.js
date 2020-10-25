import dayjs from 'dayjs';

export const formatDate = dateToFormat => {
  const formattedDate = dayjs(dateToFormat);
  const year = formattedDate.year();
  const month = formattedDate.month();
  const normalizedMonth = month + 1;
  const day = formattedDate.date();
  const hours = formattedDate.hour();
  const minutes = formattedDate.minute();
  return {
    year,
    month: normalizedMonth,
    day,
    hours,
    minutes,
  };
};

export const isToday = (today, date) => {
  const todaysDate = dayjs(today);
  const dateToBeCompared = dayjs(date);

  return (
    todaysDate.year() === dateToBeCompared.year() &&
    todaysDate.month() === dateToBeCompared.month() &&
    todaysDate.date() === dateToBeCompared.date()
  );
};

export const dateMatch = (today, date) => {
  if (isToday(today, date)) {
    return date;
  }
};
