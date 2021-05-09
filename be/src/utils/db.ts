import { RowDataPacket, OkPacket, ResultSetHeader } from 'mysql2';

export const db_rows = (
  data: RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader,
): RowDataPacket[] => {
  if (!data) return [];
  const dimension: any[] = data as any[];
  if (dimension.length < 1) return [];
  return dimension[0] as RowDataPacket[];
};
