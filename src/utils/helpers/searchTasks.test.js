import { describe, it, expect } from "vitest";
import { searchTasks } from "./searchTasks";

describe("Functionality of searchTasks function", () => {
  const tasks = [
    { title: "Complete project", isTaskDone: true },
    { title: "Review documentation", isTaskDone: true },
    { title: "Test documentation", isTaskDone: false },
    { title: "Prepare presentation", isTaskDone: false },
  ];

  it("Should show all tasks, if no query is passed", () => {
    const query = "";
    const expectedTasks = tasks;
    const result = searchTasks(tasks, query);

    expect(result).toEqual(expectedTasks);
  });

  it("Should filter tasks based on query", () => {
    const query = "documentation";
    const expectedTasks = [
      { title: "Review documentation", isTaskDone: true },
      { title: "Test documentation", isTaskDone: false },
    ];
    const result = searchTasks(tasks, query);

    expect(result).toEqual(expectedTasks);
  });

  it("Should ignore letter cases of query", () => {
    const query = "DocUmentaTion";
    const expectedTasks = [
      { title: "Review documentation", isTaskDone: true },
      { title: "Test documentation", isTaskDone: false },
    ];
    const result = searchTasks(tasks, query);

    expect(result).toEqual(expectedTasks);
  });

  it("Should return an empty tasks array, if query doesn't match", () => {
    const query = "react";
    const expectedTasks = [];
    const result = searchTasks(tasks, query);

    expect(result).toEqual(expectedTasks);
  });
});
