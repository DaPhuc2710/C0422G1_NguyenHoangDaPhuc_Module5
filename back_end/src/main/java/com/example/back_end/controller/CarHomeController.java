package com.example.back_end.controller;

import com.example.back_end.model.CarHome;
import com.example.back_end.model.EndDestination;
import com.example.back_end.model.StartDestination;
import com.example.back_end.service.ICarHomeService;
import com.example.back_end.service.IEndDestinationService;
import com.example.back_end.service.IStartDestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class CarHomeController {
    @Autowired
    private ICarHomeService iCarHomeService;
    @Autowired
    private IEndDestinationService iEndDestinationService;
    @Autowired
    private IStartDestinationService iStartDestinationService;

    @GetMapping("/goCarHomeList")
    public ResponseEntity<Page<CarHome>> showList(Pageable pageable) {
        Page<CarHome> carHomePage = iCarHomeService.findAll(pageable);
        if (carHomePage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(carHomePage, HttpStatus.OK);
    }

    @GetMapping("/goStartDestination")
    public ResponseEntity<List<StartDestination>> showList() {
        List<StartDestination> startDestinationList = this.iStartDestinationService.findAll();
        if ((startDestinationList.isEmpty())) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(startDestinationList, HttpStatus.OK);
    }


    @GetMapping("/goEndDestination")
    public ResponseEntity<List<EndDestination>> showListEnd() {
        List<EndDestination> endDestinationList = this.iEndDestinationService.findAll();
        if (endDestinationList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(endDestinationList, HttpStatus.OK);
    }

    @DeleteMapping("/goDelete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        this.iCarHomeService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/goFindByName/{name}")
    public ResponseEntity<List<CarHome>> findCarHome(@PathVariable String name) {
        List<CarHome> carHome = this.iCarHomeService.findByName(name);
        if (carHome.isEmpty()) {
            return new ResponseEntity<List<CarHome>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<CarHome>>(carHome, HttpStatus.OK);
    }

}
