package com.anys34.server.domain.user.service;

import com.anys34.server.domain.user.domain.User;
import com.anys34.server.domain.user.facade.UserFacade;
import com.anys34.server.domain.user.presentation.dto.res.InfoUserResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class ProfileService {
    private final UserFacade userFacade;

    @Transactional(readOnly = true)
    public InfoUserResponse execute() {
        User user = userFacade.getCurrentUser();
        return new InfoUserResponse(user);
    }
}
