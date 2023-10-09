import { describe, it, expect } from "vitest";
import { compareDates } from "./compareDates";

describe("Functionality of compareDate function", () => {
  it("Should calculate the number of days correctly", () => {
    const startDate = new Date("2023-07-20");
    const endDate = new Date("2023-07-25");
    const expectedDays = 6;

    const result = compareDates(startDate, endDate);

    expect(result).toBe(expectedDays);
  });

  it("Should return 1 when start and end dates are the same", () => {
    const startDate = new Date("2023-07-20");
    const endDate = new Date("2023-07-20");
    const expectedDays = 1;

    const result = compareDates(startDate, endDate);

    expect(result).toBe(expectedDays);
  });

  it("Should return 2 when end date is one day after start date", () => {
    const startDate = new Date("2023-07-20");
    const endDate = new Date("2023-07-21");
    const expectedDays = 2;

    const result = compareDates(startDate, endDate);

    expect(result).toBe(expectedDays);
  });

  it("Should calculate days correctly for large date ranges", () => {
    const startDate = new Date("2023-01-01");
    const endDate = new Date("2023-12-31");
    const expectedDays = 365;

    const result = compareDates(startDate, endDate);

    expect(result).toBe(expectedDays);
  });

  it("Should calculate days correctly for leap year", () => {
    const startDate = new Date("2024-02-28");
    const endDate = new Date("2024-03-01");
    const expectedDays = 3;

    const result = compareDates(startDate, endDate);

    expect(result).toBe(expectedDays);
  });

  it("Should calculate days correctly for different date formats", () => {
    const startDate = Date.now();
    const endDate = Date.now();
    const expectedDays = 1;

    const result = compareDates(startDate, endDate);

    expect(result).toBe(expectedDays);
  });
});
