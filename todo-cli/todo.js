const todoList = require("../todo");
const { add, markAsComplete, overdue, dueToday, dueLater } = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};
var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

describe("Todolist Test Suite", () => {
  test("Should add new todo", () => {
    expect(all.length).toBe(0);
    add({
      title: "Eye Test",
      completed: false,
      dueDate: yesterday,
    });
    expect(all.length).toBe(1);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("checks retrieval of overdue items", () => {
    add({
      title: "AMM Assignment",
      completed: false,
      dueDate: yesterday,
    });
    expect(overdue().length).toBe(2);
  });

  test("checks retrieval of due today items", () => {
    expect(dueToday().length).toBe(0);
    add({
      title: "haircut",
      completed: false,
      dueDate: today,
    });
    expect(dueToday().length).toBe(1);
  });

  test("checks retrieval of duelater items", () => {
    expect(dueLater().length).toBe(0);
    add({
      title: "PupilFirst level 4",
      completed: false,
      dueDate: tomorrow,
    });
    expect(dueLater().length).toBe(1);
  });
});
