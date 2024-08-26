package com.anys34.server.domain.user.facade;

import com.anys34.server.domain.user.domain.User;
import com.anys34.server.domain.user.domain.repository.UserRepository;
import com.anys34.server.global.error.exception.ErrorCode;
import com.anys34.server.global.error.exception.IojException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserFacade {
    private final UserRepository userRepository;

    public User getCurrentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return getUserByEmail(email);
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
            .orElseThrow(() -> new IojException(ErrorCode.NOT_FOUND_USER));
    }
}
