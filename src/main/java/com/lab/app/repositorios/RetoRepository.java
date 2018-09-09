package com.lab.app.repositorios;

import com.lab.app.modelos.Reto;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

@Repository
public interface RetoRepository extends MongoRepository<Reto, Long> {

}
