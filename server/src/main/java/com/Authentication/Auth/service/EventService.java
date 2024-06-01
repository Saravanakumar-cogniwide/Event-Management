package com.Authentication.Auth.service;

import com.Authentication.Auth.Repository.EventRepo;
import com.Authentication.Auth.model.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    EventRepo erepo;

    public String addEvent(Event event){
        erepo.save(event);
        return "event added";
    }

    public List<Optional <Event>> myEvent(String ownerid){
        return erepo.findByOwnerid(ownerid);
    }

    public Optional<Event> getEvent(String id){
        return erepo.findById(id);
    }

    @Transactional
    public String DeleteEvent(String id){
        erepo.deleteById(id);
        return "Event deleted";
    }


    public String updateEvent(Event event) {
       Optional<Event> updateEvent = erepo.findById(event.getId());
        if (updateEvent.isPresent()) {
            Event eventToUpdate = updateEvent.get();
            eventToUpdate.setTitle(event.getTitle());
            eventToUpdate.setDescription(event.getDescription());
            eventToUpdate.setDate(event.getDate());
            eventToUpdate.setLocation(event.getLocation());
            eventToUpdate.setCapacity(event.getCapacity());
            eventToUpdate.setTime(event.getTime());
            erepo.save(eventToUpdate);
            return "Event updated successfully";
        }else{
            return null;
        }
    }


//    private List<Optional<Event>> allEvent = new ArrayList<Optional<Event>>();

    public List<Event> allEvents() {
       return erepo.findAll();
    }

//    public Integer count=0;
//    public String NoofReg(String id) {
//        System.out.print("serive event layer");
//        System.out.print("id");
//        Event event = erepo.findById(id).get();
//        System.out.print(event);
//        System.out.print("event no of regs"+event.getNoofreg());
//        return "event register successfully";
//    }

}
