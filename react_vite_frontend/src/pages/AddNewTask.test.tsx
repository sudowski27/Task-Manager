import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddNewTask from "./AddNewTask";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { vi } from "vitest";

describe("AddNewTask POST request High", () => {
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

describe("AddNewTask POST request Low", () => {
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

    fireEvent.click(screen.getByText("Low"));

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
          priority: "low",
        }),
      })
    );
  });
});

describe("AddNewTask POST request Low", () => {
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

    fireEvent.click(screen.getByText("Medium"));

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
          priority: "medium",
        }),
      })
    );
  });
});

describe("AddNewTask POST request error", () => {
  it("shows error notification when request fails", async () => {
    const mockFetch = vi.fn(() =>
      Promise.reject(new Error("Network error"))
    );

    global.fetch = mockFetch as any;

    render(
      <MemoryRouter>
        <AddNewTask isDark={false} setIsDark={() => {}} />
      </MemoryRouter>
    );

    // Fill form
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

    fireEvent.click(screen.getByText("Add Task"));

    const errorMessage = await screen.findByText(
  /error/i
  );

    expect(errorMessage).toBeInTheDocument();
  });
});

describe("AddNewTask POST request success", () => {
  it("shows success notification when request succeeds", async () => {
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

    // Fill form
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

    fireEvent.click(screen.getByText("Add Task"));

    // Wait for fetch to be called
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled();
    });

    // Assert success notification appears
    const successMessage = await screen.findByText(
      "Task added successfully!"
    );

    expect(successMessage).toBeInTheDocument();
  });
});

describe("AddNewTask navigation", () => {
  it("navigates to home page after clicking Back to Home", async () => {
    render(
      <MemoryRouter initialEntries={["/add"]}>
        <Routes>
          <Route
            path="/add"
            element={
              <AddNewTask isDark={false} setIsDark={() => {}} />
            }
          />
          <Route
            path="/"
            element={<div>Home Page</div>}
          />
        </Routes>
      </MemoryRouter>
    );

    // Click Back button
    fireEvent.click(screen.getByText("Back to Home"));

    // Assert Home page content appears
    expect(await screen.findByText("Home Page")).toBeInTheDocument();
  });
});
