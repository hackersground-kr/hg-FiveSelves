package com.anys34.server.domain.auth.presentation;

import com.anys34.server.domain.auth.presentation.dto.req.AccessTokenRequest;
import com.anys34.server.domain.auth.presentation.dto.req.RefreshTokenRequest;
import com.anys34.server.domain.auth.presentation.dto.res.AccessTokenResponse;
import com.anys34.server.domain.auth.presentation.dto.res.TokenResponse;
import com.anys34.server.domain.auth.service.CreateAccessTokenService;
import com.anys34.server.domain.auth.service.GoogleAuthLinkService;
import com.anys34.server.domain.auth.service.GoogleAuthService;
import com.anys34.server.domain.auth.service.LogoutService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RequestMapping("/auth")
@RestController
public class AuthController {
    private final GoogleAuthLinkService googleAuthLinkService;
    private final GoogleAuthService googleAuthService;
    private final CreateAccessTokenService createNewAccessToken;
    private final LogoutService logoutService;

    @GetMapping
    public String getGoogleAuthLink() {
        return googleAuthLinkService.execute();
    }

    @PostMapping
    public TokenResponse login(@RequestBody @Valid AccessTokenRequest accessTokenRequest) {
        return googleAuthService.execute(accessTokenRequest.getAccessToken());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/refresh")
    public AccessTokenResponse createNewAccessToken(@RequestBody @Valid RefreshTokenRequest request) {
        return createNewAccessToken.execute(request.getRefreshToken());
    }

    @DeleteMapping
    public void logout(@RequestBody @Valid RefreshTokenRequest request) {
        logoutService.execute(request);
    }
}
