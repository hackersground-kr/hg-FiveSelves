package com.anys34.server.domain.user.presentation.dto.res;

import com.anys34.server.domain.user.domain.User;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class InfoUserResponse {
    private String nickname;

    public InfoUserResponse(User user) {
        this.nickname = user.getNickname();
    }
}
