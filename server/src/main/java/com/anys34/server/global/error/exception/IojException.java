package com.anys34.server.global.error.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public class IojException extends RuntimeException {
    private final ErrorCode errorCode;
}
