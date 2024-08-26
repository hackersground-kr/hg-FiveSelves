package com.anys34.server.domain.post.domain;

import com.anys34.server.domain.post.domain.type.Grade;
import com.anys34.server.domain.user.domain.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
public class Post {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String image;
    private String content;
    private String too;
    private int price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    private Grade grade;

    public Post(String title, String image, String content, String too, int price, User user, Grade grade) {
        this.title = title;
        this.image = image;
        this.content = content;
        this.too = too;
        this.price = price;
        this.user = user;
        this.grade = grade;
    }
}
