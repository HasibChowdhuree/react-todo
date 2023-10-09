import { describe, it, expect } from "vitest";
import { formatDate } from "./formatDate";

describe("Functionality of formatDate function", () => {
  it("Should format date correctly for a given date", () => {
    const date = new Date("2023-07-24");
    const result = formatDate(date);

    expect(result).toBe("24.07.23");
  });

  it("Should format date correctly for all format of date", () => {
    const date = new Date("December 17, 1995 03:24:00");
    const result = formatDate(date);

    expect(result).toBe("17.12.95");
  });
});
