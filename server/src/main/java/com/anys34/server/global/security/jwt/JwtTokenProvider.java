package com.anys34.server.global.security.jwt;

import com.anys34.server.domain.auth.domain.RefreshToken;
import com.anys34.server.domain.auth.domain.repository.RefreshTokenRepository;
import com.anys34.server.global.config.properties.JwtProperties;
import com.anys34.server.global.error.exception.ErrorCode;
import com.anys34.server.global.error.exception.IojException;
import com.anys34.server.global.security.principle.AuthDetailsService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@RequiredArgsConstructor
public class JwtTokenProvider {

    private final JwtProperties jwtProperties;
    private final AuthDetailsService authDetailsService;
    private final RefreshTokenRepository refreshTokenRepository;

    private static final String ACCESS_KEY = "access_token";
    private static final String REFRESH_KEY = "refresh_token";

    public String createAccessToken(String email) {
        return createToken(email, ACCESS_KEY, jwtProperties.getAccessTime());
    }

    @Transactional
    public String createRefreshToken(String email) {
        String token = createToken(email, REFRESH_KEY, jwtProperties.getRefreshTime());
        refreshTokenRepository.save(
                new RefreshToken(token, email)
        );
        return token;
    }

    private String createToken(String email, String type, Long time) {
        Date now = new Date();
        return Jwts.builder().signWith(SignatureAlgorithm.HS256, jwtProperties.getSecretKey())
                .setSubject(email)
                .setHeaderParam("typ", type)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + time))
                .compact();
    }

    public String resolveToken(HttpServletRequest request) {
        String bearer = request.getHeader("Authorization");
        return parseToken(bearer);
    }

    public String parseToken(String bearerToken) {
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.replace("Bearer ", "");
        }
        return null;
    }

    public UsernamePasswordAuthenticationToken authorization(String token) {
        UserDetails userDetails = authDetailsService.loadUserByUsername(getTokenSubject(token));
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    private String getTokenSubject(String subject) {
        return getTokenBody(subject).getSubject();
    }

    private Claims getTokenBody(String token) {
        try {
            return Jwts.parser().setSigningKey(jwtProperties.getSecretKey())
                    .parseClaimsJws(token).getBody();
        } catch (ExpiredJwtException e) {
            throw new IojException(ErrorCode.EXPIRED_PERIOD_TOKEN);
        } catch (Exception e) {
            throw new IojException(ErrorCode.INVALID_TOKEN);
        }
    }
}
