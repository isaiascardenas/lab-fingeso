package com.lab.app.repositorios;

import com.lab.app.modelos.Comentario;
import org.springframework.stereotype.Repository;
import com.lab.app.repositorios.ComentarioRepository;
import org.springframework.data.mongodb.repository.MongoRepository;

@Repository
public interface ComentarioRepository extends MongoRepository<Comentario, Long> {

    public Comentario findComentarioById(String id);

}
