package com.lfit.exam.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "sample")
public class SampleEntity {

    @Id
    private Long id;
    private String title;
    private String content;
    private String nickname;
    private LocalDateTime create_dt;
    private LocalDateTime update_dt;

}
