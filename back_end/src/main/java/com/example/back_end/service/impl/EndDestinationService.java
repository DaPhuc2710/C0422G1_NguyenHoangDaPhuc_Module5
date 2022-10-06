package com.example.back_end.service.impl;

import com.example.back_end.model.EndDestination;
import com.example.back_end.repository.EndDestinationRepository;
import com.example.back_end.service.IEndDestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EndDestinationService implements IEndDestinationService {
    @Autowired
   private EndDestinationRepository endDestinationRepository;
    @Override
    public List<EndDestination> findAll() {
        return endDestinationRepository.showListOfEnd();
    }
}
