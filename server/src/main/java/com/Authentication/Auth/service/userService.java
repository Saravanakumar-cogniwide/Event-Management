package com.Authentication.Auth.service;

import com.Authentication.Auth.Repository.EventRepo;
import com.Authentication.Auth.Repository.UserRepo;
import com.Authentication.Auth.model.Event;
import com.Authentication.Auth.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class userService {

    @Autowired
    private UserRepo repo;
    private  BCryptPasswordEncoder encoder=new BCryptPasswordEncoder(12);

    public String register(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        User data = repo.findByUsername(user.getUsername());
        if (data == null) {
            repo.save(user);
            return "user added";
        }
        return "Try another username";
    }

    public String login(User user){
        User data = repo.findByUsername(user.getUsername());
        if(data!=null)
            return data.getDetails();
        return null;
    }

    public String noUser(){
        return "no user";
    }

    @Autowired
    EventRepo erepo;

    public Integer count=0;
    public String registerEvent(String id, String eventid) {
        User data = repo.findById(id).get();
        Event event = erepo.findById(eventid).get();
        if(data.getReg().contains(eventid)){
             return "Already register";
         }
        if(event.getNoofreg()>=event.getCapacity()) {
            return "event full";
        }
            System.out.println("no of reg"+event.getNoofreg());
            System.out.println("no of capacity"+event.getCapacity());
            data.getReg().add(eventid);
            count = event.getNoofreg();
            count++;
            event.setNoofreg(count);
            repo.save(data);
            erepo.save(event);
            return "Register Successfully";


    }

    private List<Optional<Event>> regEvent = new ArrayList<Optional<Event>>();

    public List<Optional<Event>> getallregisterEvent(String id) {
        regEvent.clear();
        User data = repo.findById(id).get();
        System.out.println("data"+data.getReg());
        String[] arr = data.getReg().toArray(new String[0]);
        System.out.println(arr.length);
        for(int i=0;i< arr.length;i++){
            Optional<Event> event=erepo.findById(arr[i]);
            if(event!=null) {
                System.out.println("event matched"+event);
                regEvent.add(event);
            }
        }
      return regEvent;
    }


    public String cancelEvent(String id, String eventid) {
        User data = repo.findById(id).get();
        Event event=erepo.findById(eventid).get();
        count = event.getNoofreg();
        if(data.getReg().contains(eventid)){
            count--;
            event.setNoofreg(count);
            data.getReg().remove(eventid);
            repo.save(data);
            erepo.save(event);
            return "Event Cancelled";
        }
        return null;
    }
}
