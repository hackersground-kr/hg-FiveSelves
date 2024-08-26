package com.anys34.server.domain.auth.service;

import com.anys34.server.domain.auth.domain.repository.RefreshTokenRepository;
import com.anys34.server.domain.auth.presentation.dto.req.RefreshTokenRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class LogoutService {
    private final RefreshTokenRepository refreshTokenRepository;

    @Transactional
    public void execute(RefreshTokenRequest request) {
        refreshTokenRepository.deleteById(request.getRefreshToken());
    }
}
