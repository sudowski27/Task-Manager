package com.example.demo.repository;

import com.example.demo.model.TaskLogs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TaskLogsRepository extends JpaRepository<TaskLogs, Long> {
    @Query(value = "SELECT COUNT(*) FROM task_logs WHERE EXTRACT(MONTH FROM created_at) = :month", nativeQuery = true)
    int countByMonth(@Param("month") int month);
}
