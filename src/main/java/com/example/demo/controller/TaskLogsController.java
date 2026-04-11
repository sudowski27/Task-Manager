package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.demo.model.TaskLogs;
import com.example.demo.service.TaskLogsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*") // allow all hosts
@RestController
@RequestMapping("/task_logs")
public class TaskLogsController {
    private final TaskLogsService service;

    public TaskLogsController(TaskLogsService service) {
        this.service = service;
    }

    @GetMapping
    public List<TaskLogs> getAllTaskLogs() {
        return service.getAllTaskLogs();
    }

    @GetMapping("/{id}")
    public TaskLogs getTaskLog(@PathVariable Long id) {
        return service.getTaskLog(id).orElseThrow(() -> new RuntimeException("TaskLog not found"));
    }

    @PostMapping
    public TaskLogs createTaskLog(@RequestBody TaskLogs tasklog) {
        return service.createTasklog(tasklog);
    }

    @PutMapping("/{id}")
    public TaskLogs updateTasklog(@PathVariable Long id, @RequestBody TaskLogs tasklog) {
        return service.updateTasklog(id, tasklog);
    }

    @DeleteMapping("/{id}")
    public void deleteTaskLog(@PathVariable Long id) {
        service.deleteTasklog(id);
    }

    @GetMapping("/month/{month}")
    public int countTasksAddedInMonth(@PathVariable int month) {
        return service.countTasksAddedInMonth(month);
    }
}
