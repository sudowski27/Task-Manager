package com.example.demo.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

public class MonthCount{

    private int month;
    private int count;

    public int getMonth() { return month; }
    public void setMonth(int month) { this.month = month; }

    public int getCount() { return count; }
    public void setCount(int count) { this.count = count; }
}
