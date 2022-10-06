package com.example.back_end.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CarHome {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer plate;
    private String name;
    private String carType;
    private String phone;
    private String email;
    private String timeGo;
    private String timeEnd;
    private Boolean statuss;
    @ManyToOne()
    @JoinColumn(name = "idStart", referencedColumnName = "idStart")
    private StartDestination startDestination;
    @ManyToOne()
    @JoinColumn(name = "idEnd", referencedColumnName = "idEnd")
    private EndDestination endDestination;
}
