package com.example.back_end.repository;

import com.example.back_end.model.CarHome;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional //
public interface CarHomeRepository extends JpaRepository<CarHome, Integer> {
    @Query(value = "SELECT * FROM car_home where statuss=0", nativeQuery = true)
    Page<CarHome> findAll(Pageable pageable);

    @Modifying // thực hiện nv nào đó k trả về void
    @Query(value = "delete from car_home where id= :id", nativeQuery = true)
    void deleteId(@Param("id") Integer id);

    @Query(value = "select * from car_home where `name`=:name", nativeQuery = true)
    List<CarHome> getByName(@Param("name") String name);

    @Modifying
    @Query(value = "update car_home as c set \n" +
            "c.car_type= :car_type,\n" +
            "c.email=:email,\n" +
            "c.`name`=:name,\n" +
            "c.phone=:phone,\n" +
            "c.plate=:plate,\n" +
            "c.time_end=:time_end,\n" +
            "c.time_go=:time_go,\n" +
            "c.id_end=:id_end,\n" +
            "c.id_start=:id_start\n" +
            "where c.id=:id", nativeQuery = true)
     void updateCarHome(@Param("id") Integer id);

}
