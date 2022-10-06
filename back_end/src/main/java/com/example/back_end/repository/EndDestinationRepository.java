package com.example.back_end.repository;

import com.example.back_end.model.EndDestination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EndDestinationRepository extends JpaRepository<EndDestination, Integer> {
    @Query(value = "SELECT * FROM end_destination", nativeQuery = true)
    List<EndDestination>showListOfEnd();
}
