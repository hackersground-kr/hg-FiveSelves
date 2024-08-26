package com.anys34.server.domain.user.domain;

import com.anys34.server.domain.user.domain.type.Authority;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity(name = "tbl_user")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Email
    @Size(max = 32)
    @Column(unique = true, length = 32)
    private String email;

    @Size(max = 20)
    @Column(length = 20)
    private String nickname;

    @Enumerated(EnumType.STRING)
    private Authority authority;

    public User(
        String email, String nickname, Authority authority
    ) {
        this.email = email;
        this.nickname = nickname;
        this.authority = authority;
    }
}
