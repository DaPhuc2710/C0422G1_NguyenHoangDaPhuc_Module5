package com.example.back_end.service.impl;

import com.example.back_end.model.StartDestination;
import com.example.back_end.repository.StartDestinationRepository;
import com.example.back_end.service.IStartDestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StartDestinationService implements IStartDestinationService {
    @Autowired
    private StartDestinationRepository startDestinationRepository;

    @Override
    public List<StartDestination> findAll() {
        return startDestinationRepository.showListOfStart();
    }
}
