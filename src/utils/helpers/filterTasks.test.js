import { describe, it, expect } from "vitest";
import { filterTasks } from "./filterTasks";
import { COMPLETED_TASKS, INCOMPLETED_TASKS } from "@utils/constants/texts";

describe("Functionality of filterTasks function", () => {
  const tasks = [
    { title: "Complete project", isDone: true },
    { title: "Review documentation", isDone: true },
    { title: "Test documentation", isDone: false },
    { title: "Prepare presentation", isDone: false },
  ];

  it("Should only show tasks that are done, if the current filter state is COMPLETED_TASKS", () => {
    const filterState = COMPLETED_TASKS;
    const expectedTasks = [
      { title: "Complete project", isDone: true },
      { title: "Review documentation", isDone: true },
    ];
    const result = filterTasks(tasks, filterState);

    expect(result).toEqual(expectedTasks);
  });

  it("Should only show tasks that are not done yet, if the current filter state is INCOMPLETED_TASKS", () => {
    const filterState = INCOMPLETED_TASKS;
    const expectedTasks = [
      { title: "Test documentation", isDone: false },
      { title: "Prepare presentation", isDone: false },
    ];
    const result = filterTasks(tasks, filterState);

    expect(result).toEqual(expectedTasks);
  });
});