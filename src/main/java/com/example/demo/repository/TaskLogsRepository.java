package com.example.demo.repository;

import com.example.demo.model.TaskLogs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TaskLogsRepository extends JpaRepository<TaskLogs, Long> {
    @Query(value = "SELECT COUNT(*) FROM task_logs WHERE EXTRACT(MONTH FROM created_at) = :month", nativeQuery = true)
    int countByMonth(@Param("month") int month);

    @Query(value = "DELETE FROM task_logs WHERE task_id = :taskId", nativeQuery = true)
    void deleteByTaskId(@Param("taskId") Long taskId);

    @Query(value = "SELECT EXISTS(SELECT 1 FROM task_logs WHERE task_id = :task_id)", nativeQuery = true)
    boolean existsByTaskId(@Param("task_id") Long task_id);

    @Query(value = "SELECT id FROM task_logs WHERE task_id = :taskId", nativeQuery = true)
    Long getIdByTaskId(@Param("taskId") Long taskId);
}
