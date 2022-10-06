package com.example.back_end.service;

import com.example.back_end.model.CarHome;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICarHomeService {
    Page<CarHome> findAll(Pageable pageable);
    void delete(Integer id);
    List<CarHome> findByName(String name);

}
