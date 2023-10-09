import { describe, it, expect } from "vitest";
import { sanitizeText } from "./sanitizeText";

describe("Functionality of sanitizeText function", () => {
  it("Should remove html tags from input", () => {
    const input = "<p>Hello <b>World!</b></p>";
    const expected = "Hello World!";
    const result = sanitizeText(input);

    expect(result).toBe(expected);
  });

  it("Should handle input with only HTML tags", () => {
    const input = "<div></div><span></span><br>";
    const expected = "";
    const result = sanitizeText(input);

    expect(result).toBe(expected);
  });
});