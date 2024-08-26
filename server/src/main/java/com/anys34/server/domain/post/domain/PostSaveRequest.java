package com.anys34.server.domain.post.domain;

import com.anys34.server.domain.post.domain.type.Grade;
import com.anys34.server.domain.user.domain.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostSaveRequest {
    private String title;
    private String content;
    private String image;
    private String too;
    private int price;
    private Grade grade;

    public Post toEntity(User user) {
        return new Post(
                title,
                image,
                content,
                too,
                price,
                user,
                grade
        );
    }
}
