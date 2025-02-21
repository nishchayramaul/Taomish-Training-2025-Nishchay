package com.demo.demo.controller;

import com.demo.demo.dto.SaveMapRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

import static org.hibernate.internal.util.collections.CollectionHelper.listOf;

@RestController
public class TestController {
    HashMap<Integer, String> map = new HashMap<>();

    @GetMapping("/getrequest")
    public HashMap<Integer, String> getvalues() {
        int val = 8 ;
        StringBuilder value  = new StringBuilder("dodo can't fly , but i want to fly ");
        for(int  i  = 0 ; i < val ; i ++ ){
            SaveMapRequest saveMapRequest = new SaveMapRequest() ;
            saveMapRequest.setIndex(i);
            saveMapRequest.setName(value.substring(0 , i));
            map.put(saveMapRequest.getIndex() , saveMapRequest.getName()) ;
        }
        return map;
    }


    @PostMapping("/postrequest")
    public String createValues(@RequestParam(value = "index") Integer index, @RequestParam(value = "name") String name) {

        map.put(index, name);
        return "values saved to map successfully !";
    }


    @PostMapping("/save/requestbody")
    public String createValues(@RequestBody SaveMapRequest saveMapRequest) {

        map.put(saveMapRequest.getIndex(), saveMapRequest.getName());
        return "values saved to map successfully !";
    }

}
