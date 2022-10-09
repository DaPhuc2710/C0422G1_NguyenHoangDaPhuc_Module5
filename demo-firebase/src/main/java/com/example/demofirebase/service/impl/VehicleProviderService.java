package com.example.demofirebase.service.impl;

import com.example.demofirebase.model.VehicleProvider;
import com.example.demofirebase.repository.VehicleProviderRepository;
import com.example.demofirebase.service.IVehicleProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleProviderService implements IVehicleProviderService {
    @Autowired
    VehicleProviderRepository vehicleProviderRepository;

    @Override
    public List<VehicleProvider> findALL() {
        return vehicleProviderRepository.findAll();
    }

    @Override
    public void createVehicle(VehicleProvider vehicleProvider) {
        vehicleProviderRepository.save(vehicleProvider);
    }
}
