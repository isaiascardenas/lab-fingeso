package com.lab.app.modelos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.List;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

public class Reto {

    @Id
    private String id;
    private String name;
    private String description;
    private String color;

    @DBRef
    private Usuario usuario;
    @DBRef
    private List<Idea> ideas;

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public List<Idea> getIdeas() {
        return this.ideas;
    }

    public void setIdeas(List<Idea> ideas) {
        this.ideas = ideas;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getColor() {
        return this.color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
