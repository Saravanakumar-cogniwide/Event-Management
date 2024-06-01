package com.Authentication.Auth.Repository;

import com.Authentication.Auth.model.Event;
import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EventRepo extends JpaRepository<Event,Integer> {

    List<Optional<Event>> findByOwnerid(String ownerid);

    String deleteById(String id);

//   Event findByOwnerid(String ownerid);

    Optional<Event> findById(String id);

//    List<Optional<Event>> findByid(String id);

    List<Event> findAll();


//    Event findByOwnerId(String ownerid);
}
