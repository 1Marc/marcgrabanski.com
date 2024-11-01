export function formatDate(
  date: string,
  format: "MMMM YYYY" | "MMMM DD, YYYY" = "MMMM DD, YYYY"
): string {
  const d = new Date(date);

  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    ...(format === "MMMM DD, YYYY" && { day: "numeric" }),
  });

  return formatter.format(d);
}

export function isBeforeDate(date: string, compareDate: string): boolean {
  return new Date(date) < new Date(compareDate);
}
