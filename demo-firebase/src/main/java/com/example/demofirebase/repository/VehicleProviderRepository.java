package com.example.demofirebase.repository;

import com.example.demofirebase.model.VehicleProvider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleProviderRepository extends JpaRepository<VehicleProvider, Integer> {

}
