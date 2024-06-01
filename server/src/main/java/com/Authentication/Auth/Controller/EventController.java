package com.Authentication.Auth.Controller;

import com.Authentication.Auth.model.Event;

import com.Authentication.Auth.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class EventController {


    @Autowired
    EventService eservice;
    @PostMapping("addEvent")
    public String addEvent(@RequestBody Event event) {
        System.out.println("Controller"+event);
        return eservice.addEvent(event);
    }

    @GetMapping("allEvents")
    public List<Event> allEvents(){
        return eservice.allEvents();
    }

    @GetMapping("myEvent/{ownerid}")
    public List<Optional<Event>> myEvent(@PathVariable String ownerid){
        return eservice.myEvent(ownerid);
    }

    @GetMapping("getEvent/{id}")
    public Optional<Event> getEvent(@PathVariable String id){
        return eservice.getEvent(id);
    }

    @PutMapping("updateEvent")
    public String updateEvent(@RequestBody Event event){
        return eservice.updateEvent(event);
    }

    @DeleteMapping("DeleteEvent/{id}")
    public String DeleteEvent(@PathVariable String id){
        return  eservice.DeleteEvent(id);

    }

//    @PostMapping("noforeg")
//    public String NoofReg(@RequestBody String id){
//        return eservice.NoofReg(id);
//    }


}
