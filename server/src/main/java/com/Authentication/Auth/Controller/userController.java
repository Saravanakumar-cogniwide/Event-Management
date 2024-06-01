package com.Authentication.Auth.Controller;

import com.Authentication.Auth.model.Event;
import com.Authentication.Auth.model.User;
import com.Authentication.Auth.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")

public class userController {

    @Autowired
    private userService service;

    @Autowired
    AuthenticationManager authenticationManager;

    @PostMapping("register")
    public String register(@RequestBody User user) {
        System.out.print(user);
        return service.register(user);
    }

    @GetMapping("hello")
    public String hello(){
        return "hello";
    }

    @PostMapping("login")
    public String login(@RequestBody User user){

        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword()));
         System.out.println(authentication.isAuthenticated());
        if(authentication.isAuthenticated())
            return service.login(user);
        return null;

     }

     @PostMapping("registerEvent/{id}/{eventid}")
    public String registerEvent(@PathVariable("id") String id,@PathVariable("eventid") String eventid){
        System.out.print(id);
        return service.registerEvent(id,eventid);
     }

    @PostMapping("cancelEvent/{id}/{eventid}")
    public String cancelEvent(@PathVariable("id") String id,@PathVariable("eventid") String eventid){
        System.out.print(id);
        return service.cancelEvent(id,eventid);
    }


     @GetMapping("getallregisterEvent/{id}")
    public List<Optional<Event>> getallregisterEvent(@PathVariable("id") String id){
        return service.getallregisterEvent(id);
     }
}
