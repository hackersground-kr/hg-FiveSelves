package com.anys34.server.domain.auth.service;

import com.anys34.server.domain.auth.presentation.dto.res.TokenResponse;
import com.anys34.server.domain.user.domain.User;
import com.anys34.server.domain.user.domain.repository.UserRepository;
import com.anys34.server.domain.user.domain.type.Authority;
import com.anys34.server.global.feign.auth.GoogleInformationClient;
import com.anys34.server.global.feign.auth.res.GoogleInformationResponse;
import com.anys34.server.global.security.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class GoogleAuthService {
    private final GoogleInformationClient googleInformationClient;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;

    @Transactional
    public TokenResponse execute(String accessToken) {
        GoogleInformationResponse response = googleInformationClient
                .getUserInformation(accessToken);
        String email = response.getEmail();
        Optional<User> user = userRepository.findByEmail(email);

        if (user.isEmpty()) {
            userRepository.save(
                new User(email, response.getName(), Authority.USER));
        }

        return new TokenResponse(
            jwtTokenProvider.createAccessToken(email),
            jwtTokenProvider.createRefreshToken(email)
        );
    }
}
