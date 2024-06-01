package com.Authentication.Auth.Repository;

import com.Authentication.Auth.model.Event;
import com.Authentication.Auth.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedRepo extends JpaRepository<Feedback,String> {

    List<Feedback> findAll();

}
