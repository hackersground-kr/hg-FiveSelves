package com.anys34.server.domain.auth.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@RedisHash(value = "refreshToken", timeToLive = 2592000L)
public class RefreshToken {
    @Id
    private String token;

    private String email;

    public RefreshToken(
        String token, String email
    ) {
        this.token = token;
        this.email = email;
    }
}
