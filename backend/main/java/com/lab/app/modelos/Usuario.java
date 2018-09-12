package com.lab.app.modelos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.List;

public class Usuario {

    @Id
    private String id;
    private String rol;
    private String email;
    private String nombre;

    @JsonIgnore
    @DBRef
    private List<Idea> ideas;
    @DBRef
    private List<Comentario> comentarios;

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String name) {
        this.nombre = name;
    }

    public String getRol() {
        return this.rol;
    }

    public void setRol(String role) {
        this.rol = role;
    }

    public List<Comentario> getComentarios() {
        return this.comentarios;
    }

    public void setComentario(List<Comentario> comentarios) {
        this.comentarios = comentarios;
    }

    public List<Idea> getIdeas() {
        return ideas;
    }

    public void setIdeas(List<Idea> ideas) {
        this.ideas = ideas;
    }
}
