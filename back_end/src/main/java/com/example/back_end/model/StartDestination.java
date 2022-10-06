package com.example.back_end.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StartDestination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idStart;
    private String nameStart;
    @OneToMany(mappedBy = "startDestination")
    @JsonBackReference
    List<CarHome> carHomeList;
}
