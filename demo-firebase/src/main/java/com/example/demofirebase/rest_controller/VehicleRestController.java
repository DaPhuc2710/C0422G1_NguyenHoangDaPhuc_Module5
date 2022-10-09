package com.example.demofirebase.rest_controller;

import com.example.demofirebase.model.VehicleProvider;
import com.example.demofirebase.service.IVehicleProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class VehicleRestController {
    @Autowired
    IVehicleProviderService iVehicleProviderService;

    @GetMapping("/list")
    public ResponseEntity<List<VehicleProvider>> showList() {
        List<VehicleProvider> vehicleProviders = iVehicleProviderService.findALL();
        if (vehicleProviders.isEmpty()) {
            return new ResponseEntity<List<VehicleProvider>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<VehicleProvider>>(vehicleProviders, HttpStatus.OK);
    }
    @PostMapping ("/create")
    public ResponseEntity<Void> create (VehicleProvider vehicleProvider) {
        iVehicleProviderService.createVehicle(vehicleProvider);
        return new ResponseEntity<Void>( HttpStatus.OK);
    }
}
