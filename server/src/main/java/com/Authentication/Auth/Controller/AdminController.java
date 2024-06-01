package com.Authentication.Auth.Controller;

import com.Authentication.Auth.model.Event;
import com.Authentication.Auth.model.Feedback;
import com.Authentication.Auth.model.User;
import com.Authentication.Auth.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/admin")

public class AdminController {

    @Autowired
    AdminService aservice;

    @GetMapping("getUsers")
    public List<User> getUsers(){
        return aservice.getUsers();
    }

    @GetMapping("getEvents")
    public List<Event> getEvents(){
        return aservice.getEvents();
    }

    @PostMapping("usersearch/{id}")
    public Optional<User> getUser(@PathVariable String id){
        return aservice.getUser(id);
    }

    @PostMapping("eventsearch/{id}")
    public Optional<Event> getEvent(@PathVariable String id){
        return aservice.getEvent(id);
    }

    @PostMapping("feedback")
    public String submitfeedback(@RequestBody Feedback feedback){
        return aservice.submitfeedback(feedback);
    }

    @GetMapping("allfeedbacks")
    public List<Feedback> allfeedbacks(){
        return aservice.allfeedbacks();
    }

    @DeleteMapping("deleteUser/{id}")
    public String deleteuser(@PathVariable String id){
        return aservice.deleteuser(id);
    }

}
