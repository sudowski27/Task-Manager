import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddNewTask from "./AddNewTask";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

describe("AddNewTask POST request", () => {
  it("sends correct POST request when clicking Add Task", async () => {
    const mockFetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ id: 1 }),
      })
    );

    global.fetch = mockFetch as any;

    render(
      <MemoryRouter>
        <AddNewTask isDark={false} setIsDark={() => {}} />
      </MemoryRouter>
    );

    // wpisujemy dane
    fireEvent.change(
      screen.getByPlaceholderText("Enter task name..."),
      { target: { value: "Test Task" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Enter task description..."),
      { target: { value: "Test Description" } }
    );

    fireEvent.change(
      screen.getByDisplayValue(""),
      { target: { value: "2026-02-18" } }
    );

    fireEvent.click(screen.getByText("High"));

    fireEvent.click(screen.getByText("Add Task"));

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });

    expect(mockFetch).toHaveBeenCalledWith(
      "http://localhost:8080/tasks",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "Test Task",
          description: "Test Description",
          date: "2026-02-18",
          priority: "high",
        }),
      })
    );
  });
});
