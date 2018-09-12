package com.lab.app.repositorios;

import com.lab.app.modelos.Usuario;
import com.lab.app.repositorios.UsuarioRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

@Repository
public interface UsuarioRepository extends MongoRepository<Usuario,Long> {

}
