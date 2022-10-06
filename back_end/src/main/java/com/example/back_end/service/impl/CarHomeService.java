package com.example.back_end.service.impl;

import com.example.back_end.model.CarHome;
import com.example.back_end.repository.CarHomeRepository;
import com.example.back_end.service.ICarHomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarHomeService implements ICarHomeService {
    @Autowired
     private CarHomeRepository carHomeRepository;

    @Override
    public Page<CarHome> findAll(Pageable pageable) {
        return carHomeRepository.findAll(pageable);
    }

    @Override
    public void delete(Integer id) {
        carHomeRepository.deleteId(id);
    }

    @Override
    public List<CarHome> findByName(String name) {
        return carHomeRepository.getByName(name);
    }


}
