package com.anys34.server.domain.post.domain;

import com.anys34.server.domain.post.domain.type.Grade;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostResponse {
    private Long id;
    private String title;
    private int price;
    private Grade grade;

    public PostResponse(Post post) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.price = post.getPrice();
        this.grade = post.getGrade();
    }
}
