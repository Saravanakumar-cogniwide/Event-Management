package com.Authentication.Auth.service;

import com.Authentication.Auth.Repository.EventRepo;
import com.Authentication.Auth.Repository.FeedRepo;
import com.Authentication.Auth.Repository.UserRepo;
import com.Authentication.Auth.model.Event;
import com.Authentication.Auth.model.Feedback;
import com.Authentication.Auth.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    UserRepo arepo;

    @Autowired
    EventRepo eventRepo;

    @Autowired
    FeedRepo frepo;

    public List<User> getUsers() {
        return arepo.findAll();
    }

    public List<Event> getEvents() {
        return eventRepo.findAll();
    }

    public Optional<User> getUser(String id) {

        return arepo.findById(id);
    }

    public Optional<Event> getEvent(String id) {
        return eventRepo.findById(id);
    }

    public String submitfeedback(Feedback feedback) {
         frepo.save(feedback);
        return "feedback submitted";
    }

    public List<Feedback> allfeedbacks() {
        return frepo.findAll();
    }

    public String deleteuser(String id) {
        arepo.deleteById(id);
        return "Delete User";
    }
}
