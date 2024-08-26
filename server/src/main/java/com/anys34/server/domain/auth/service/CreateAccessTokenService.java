package com.anys34.server.domain.auth.service;

import com.anys34.server.domain.auth.domain.RefreshToken;
import com.anys34.server.domain.auth.domain.repository.RefreshTokenRepository;
import com.anys34.server.domain.auth.presentation.dto.res.AccessTokenResponse;
import com.anys34.server.global.error.exception.ErrorCode;
import com.anys34.server.global.error.exception.IojException;
import com.anys34.server.global.security.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class CreateAccessTokenService {
    private final RefreshTokenRepository refreshTokenRepository;
    private final JwtTokenProvider jwtTokenProvider;

    @Transactional(readOnly = true)
    public AccessTokenResponse execute(String token) {
        RefreshToken refreshToken = getRefreshToken(token);
        return new AccessTokenResponse(jwtTokenProvider
                .createAccessToken(refreshToken.getEmail()));
    }

    private RefreshToken getRefreshToken(String token) {
        return refreshTokenRepository.findById(token)
                .orElseThrow(() -> new IojException(ErrorCode.EXPIRED_PERIOD_TOKEN));
    }
}
