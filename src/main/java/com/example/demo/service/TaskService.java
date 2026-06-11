package com.example.demo.service;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
import com.example.demo.repository.TaskLogsRepository;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    private final TaskRepository repository;
    private final TaskLogsRepository repositoryLogs;

    public TaskService(TaskRepository repository, TaskLogsRepository repositoryLogs) {
        this.repository = repository;
        this.repositoryLogs = repositoryLogs;
    }

    public List<Task> getAllTasks() {
        return repository.findAll();
    }

    public Optional<Task> getTask(Long id) {
        return repository.findById(id);
    }


    public Task createTask(Task task) {
        Task saved = repository.saveAndFlush(task);
        return saved;
    }

    public Task updateTask(Long id, Task updatedTask) {
        return repository.findById(id)
                .map(task -> {
                    task.setTitle(updatedTask.getTitle());
                    task.setDescription(updatedTask.getDescription());
                    task.setDate(updatedTask.getDate());
                    task.setPriority(updatedTask.getPriority());
                    return repository.save(task);
                })
                .orElseThrow(() -> new RuntimeException("Task not found"));
    }

    public void deleteTask(Long id) {
        if (!repository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found");
        }
        if (!repositoryLogs.existsByTaskId(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "TaskLogs: task_id not found");
        }
        Long taskLogId = repositoryLogs.getIdByTaskId(id);
        repositoryLogs.deleteById(taskLogId);
        repository.deleteById(id);
    }
}
