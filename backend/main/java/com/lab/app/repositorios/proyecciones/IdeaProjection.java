package com.lab.app.repositorios.proyecciones;

import com.lab.app.modelos.Idea;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "relationships", types = Idea.class)
public interface IdeaProjection {

    // @Value("#{RetoRepository.findById(target.retoId)}")
    // Customer getCustomer();

}
