package com.lab.app.servicios;

import java.util.List;
import com.lab.app.modelos.Comentario;
import org.springframework.web.bind.annotation.*;
import com.lab.app.repositorios.ComentarioRepository;
import org.springframework.beans.factory.annotation.Autowired;


@RestController
@RequestMapping(value = "/comentarios")
public class ComentarioService {

    @Autowired
    private ComentarioRepository comentarioRepository;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Comentario> getAllComentarios() {
        return this.comentarioRepository.findAll();
    }


    @RequestMapping(value = "/create",method = RequestMethod.POST)
    @ResponseBody
    public Comentario createComentario(@RequestBody Comentario comentario) {
        return this.comentarioRepository.save(comentario);
    }
}
