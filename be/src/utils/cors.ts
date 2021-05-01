export const allowedOrigins = (): string[] => {
  const frontEndPorts = process.env.FRONT_END_API_PORT || '3000';
  const defaultOrigin = `http://${process.env.FRONT_END_API_HOST}:${process.env.FRONT_END_API_PORT}`;
  // Below split.join is used to instead of replaceAll that is
  // not available in all browsers
  const originList = frontEndPorts
    .split(' ')
    .join('')
    .split(',')
    .map((port) => {
      if (!isNaN(+port)) return `http://${process.env.FRONT_END_API_HOST}:${port}`;
    })
    .filter((url) => url !== undefined);
  return originList && originList.length > 0 ? (originList as string[]) : [defaultOrigin];
};
