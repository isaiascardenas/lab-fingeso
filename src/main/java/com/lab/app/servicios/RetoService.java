package com.lab.app.servicios;

import java.util.List;
import com.lab.app.modelos.Reto;
import com.lab.app.repositorios.RetoRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping(value = "/retos")
public class RetoService {

    @Autowired
    private RetoRepository retoRepository;


    @RequestMapping(method = RequestMethod.GET)
    public List<Reto> getAllRetos() {
        return this.retoRepository.findAll();
    }

    @RequestMapping(value = "/create",method = RequestMethod.POST)
    @ResponseBody
    public Reto createReto(@RequestBody Reto reto) {
        return this.retoRepository.save(reto);
    }
}
