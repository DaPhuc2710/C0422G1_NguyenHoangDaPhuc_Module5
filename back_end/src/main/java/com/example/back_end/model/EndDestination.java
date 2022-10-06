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
public class EndDestination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEnd;
    private String nameEnd;
    @OneToMany(mappedBy = "endDestination")
    @JsonBackReference
    List<CarHome> carHomeList;

}
