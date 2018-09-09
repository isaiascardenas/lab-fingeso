package com.lab.app.repositorios;

import com.lab.app.modelos.Idea;
import com.lab.app.repositorios.IdeaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

@Repository
public interface IdeaRepository extends MongoRepository<Idea,Long> {

    public Idea findIdeaById(String id);

}
