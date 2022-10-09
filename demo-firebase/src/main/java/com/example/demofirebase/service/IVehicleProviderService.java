package com.example.demofirebase.service;

import com.example.demofirebase.model.VehicleProvider;

import java.util.List;

public interface IVehicleProviderService {
   List<VehicleProvider> findALL();
   void createVehicle(VehicleProvider vehicleProvider);
}
