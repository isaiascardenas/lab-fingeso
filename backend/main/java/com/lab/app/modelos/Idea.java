package com.lab.app.modelos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

public class Idea {

    @Id
    private String id;
    private String name;
    private String description;
    private int votes;

    @DBRef
    private Usuario usuario;
    @DBRef
    private Reto reto;


    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Reto getReto() {
        return this.reto;
    }

    public void setReto(Reto reto) {
        this.reto = reto;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getVotes() {
        return this.votes;
    }

    public void setVotes(int votes) {
        this.votes = votes;
    }
}
