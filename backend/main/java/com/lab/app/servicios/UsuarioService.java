package com.lab.app.servicios;

import java.util.List;
import com.lab.app.modelos.Idea;
import com.lab.app.modelos.Usuario;
import com.lab.app.modelos.Comentario;
import com.lab.app.repositorios.IdeaRepository;
import org.springframework.web.bind.annotation.*;
import com.lab.app.repositorios.UsuarioRepository;
import com.lab.app.repositorios.ComentarioRepository;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping(value = "/users")
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private IdeaRepository ideaRepository;
    @Autowired
    private ComentarioRepository comentarioRepository;


    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Usuario> getUsuario() {
        return usuarioRepository.findAll();
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseBody
    public Usuario createUser(@RequestBody Usuario user) {
        List<Idea> ideas = user.getIdeas();
        List<Comentario> comentarios = user.getComentarios();
        Usuario usuario = this.usuarioRepository.save(user);

        if (ideas != null && !ideas.isEmpty()) {
            for (Idea idea: ideas) {
                idea.setUsuario(usuario);
                this.ideaRepository.save(idea);
            }
        }

        if (comentarios != null && !ideas.isEmpty()) {
            for (Comentario comentario : comentarios) {
                comentario.setUsuario(usuario);
                this.comentarioRepository.save(comentario);
            }
        }

        return usuario;
    }
}
