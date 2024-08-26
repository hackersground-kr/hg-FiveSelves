package com.anys34.fiveselves;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @GetMapping
    public String hello() {
        return "Hello World!222222";
    }
    @GetMapping("/hello")
    public String hello2() {
        return "Hello World!222222";
    }
}
