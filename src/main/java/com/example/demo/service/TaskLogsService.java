package com.example.demo.service;

import com.example.demo.model.TaskLogs;
import com.example.demo.model.MonthCount;
import com.example.demo.repository.TaskLogsRepository;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
import java.util.Optional;

@Service
public class TaskLogsService {
    private final TaskLogsRepository repository;

    public TaskLogsService(TaskLogsRepository repository) {
        this.repository = repository;
    }

    public List<TaskLogs> getAllTaskLogs() {
        return repository.findAll();
    }

    public Optional<TaskLogs> getTaskLog(Long id) {
        return repository.findById(id);
    }

    public TaskLogs createTasklog(TaskLogs tasklog) {
        TaskLogs saved = repository.saveAndFlush(tasklog);
        return saved;
    }

    public TaskLogs updateTasklog(Long id, TaskLogs updatedTasklog) {
        return repository.findById(id)
                .map(tasklog -> {
                    tasklog.setTaskId(updatedTasklog.getTaskId());
                    tasklog.setCreatedAt(updatedTasklog.getCreatedAt());
                    return repository.save(tasklog);
                })
                .orElseThrow(() -> new RuntimeException("TaskLog not found"));
    }

    public void deleteTasklog(Long id) {
        if (!repository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "TaskLog not found");
        }
        repository.deleteById(id);
    }

    public void deleteTasklogByTaskId(Long taskId) {
        if (!repository.existsByTaskId(taskId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "TaskLog not found");
        }
        repository.deleteByTaskId(taskId);
    }

    public MonthCount countTasksAddedInMonth(int month) {
        MonthCount tempMonthCount = new MonthCount();
        tempMonthCount.setMonth(month);
        tempMonthCount.setCount(repository.countByMonth(month));
        return tempMonthCount;
    }
}
