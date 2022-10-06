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

    @Modifying // thực hiện nv nào đó thì k bị lỗi
    @Query(value = "delete from car_home where id= :id", nativeQuery = true)
    void deleteId(@Param("id") Integer id);

    @Query(value = "select * from car_home where `name`=:name", nativeQuery = true)
    List<CarHome> getByName(@Param("name") String name);

//    @Modifying
//    @Query(value = "update car_home as c set \n" +
//            "c.car_type= 'Giường nằm',\n" +
//            "c.email='Duyen2000@gmail.com',\n" +
//            "c.`name`='Mai Linh',\n" +
//            "c.phone='0905922225',\n" +
//            "c.plate=1236,\n" +
//            "c.time_end='10:30',\n" +
//            "c.time_go='12:30',\n" +
//            "c.id_end=2,\n" +
//            "c.id_start=3\n" +
//            "where c.id=2;", nativeQuery = true)
//    updateCarHome(@Param("id") Integer id);

}
