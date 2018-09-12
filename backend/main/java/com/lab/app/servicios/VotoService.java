package com.lab.app.servicios;

import java.util.List;
import com.lab.app.modelos.Voto;
import com.lab.app.repositorios.VotoRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping(value = "/votos")
public class VotoService {

    @Autowired
    private VotoRepository votoRepository;


    @RequestMapping(method = RequestMethod.GET)
    public List<Voto> getAllVotos() {
        return this.votoRepository.findAll();
    }

    @RequestMapping(value = "/create",method = RequestMethod.POST)
    @ResponseBody
    public Voto createVoto(@RequestBody Voto voto) {
        return this.votoRepository.save(voto);
    }
}
