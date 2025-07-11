export const convertTimeToSeconds = time => {
  return Math.floor(time / 1000);
};

export const convertTimeToMilliSeconds = time => {
  return Math.floor(time % 1000);
};
