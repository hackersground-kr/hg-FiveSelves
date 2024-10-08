package com.anys34.server.global.error;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class ErrorResponse {
    private static final String errorLogsFormat = """
        {
            "status": "%s",
            "code": "%s",
            "message": "%s"
        }
        """;

    private int status;
    private String code;
    private String message;

    public String toString() {
        return errorLogsFormat.formatted(
            status,
            code,
            message
        );
    }
}
