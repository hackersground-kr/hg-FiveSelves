package com.anys34.server.global.feign.auth.res;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class GoogleInformationResponse {
    private String email;
    private String name;
}
