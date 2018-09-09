package com.lab.app.repositorios;

import com.lab.app.modelos.Voto;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

@Repository
public interface VotoRepository extends MongoRepository<Voto, Long> {

}
