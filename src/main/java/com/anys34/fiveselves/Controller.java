package com.anys34.fiveselves;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @GetMapping
    public String hello() {
        return "Hello World!11";
    }
    @GetMapping("/hello")
    public String hello2() {
        return "Hello World!2";
    }
}
