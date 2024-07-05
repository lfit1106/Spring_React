package com.lfit.exam.service;

import com.lfit.exam.entity.SampleEntity;
import com.lfit.exam.repository.SampleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SampleService {

    private final SampleRepository sampleRepository;

    public SampleService(SampleRepository sampleRepository) {
        this.sampleRepository = sampleRepository;
    }

    public List<SampleEntity> selectAll(){
        List<SampleEntity> list = sampleRepository.findAll();
        return list;
    }

    public SampleEntity selectById(Long id){
        return sampleRepository.findById(id).get();
    }
}
