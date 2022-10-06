package com.example.back_end.repository;

import com.example.back_end.model.StartDestination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StartDestinationRepository extends JpaRepository<StartDestination, Integer> {
    @Query(value = "SELECT * FROM start_destination", nativeQuery = true)
    List<StartDestination> showListOfStart();
}
