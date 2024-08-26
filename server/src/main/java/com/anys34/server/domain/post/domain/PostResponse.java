package com.anys34.server.domain.post.domain;

import com.anys34.server.domain.post.domain.type.Grade;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostResponse {
    private Long id;
    private String title;
    private String content;
    private String image;
    private int price;
    private Grade grade;

    public PostResponse(Post post) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.price = post.getPrice();
        this.content = post.getContent();
        this.image = post.getImage();
        this.grade = post.getGrade();
    }
}
