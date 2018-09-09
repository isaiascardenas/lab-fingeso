package com.lab.app.servicios;

import java.util.List;
import com.lab.app.modelos.Idea;
import org.springframework.web.bind.annotation.*;
import com.lab.app.repositorios.IdeaRepository;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping(value = "/ideas")
public class IdeaService {

    @Autowired
    private IdeaRepository ideaRepository;


    @RequestMapping(method = RequestMethod.GET)
    public List<Idea> getAllIdeas() {
        return this.ideaRepository.findAll();
    }

    @RequestMapping(value = "/create",method = RequestMethod.POST)
    @ResponseBody
    public Idea createIdea(@RequestBody Idea idea) {
        return this.ideaRepository.save(idea);
    }
}
