package com.lfit.exam.controller;

import com.lfit.exam.entity.SampleEntity;
import com.lfit.exam.service.SampleService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SampleController {

    private final SampleService sampleService;

    public SampleController(SampleService sampleService) {
        this.sampleService = sampleService;
    }

    @GetMapping("/api/main")
    public String index() {
        return "Hello World";
    }

    @GetMapping("/api/list")
    public List<SampleEntity> list() {
        List<SampleEntity> list = sampleService.selectAll();
        return list;
    }

    @GetMapping("/api/content/{id}")
    public SampleEntity getById(@PathVariable("id") Long id) {
        SampleEntity entity = sampleService.selectById(id);
        return entity;
    }
}
