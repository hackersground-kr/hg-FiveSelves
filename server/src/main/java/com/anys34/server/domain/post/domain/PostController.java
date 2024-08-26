package com.anys34.server.domain.post.domain;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/post")
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;

    @GetMapping
    public List<PostResponse> list() {
        return postService.list();
    }

    @PostMapping
    public Long create(@RequestBody PostSaveRequest request) {
        return postService.create(request);
    }
}
