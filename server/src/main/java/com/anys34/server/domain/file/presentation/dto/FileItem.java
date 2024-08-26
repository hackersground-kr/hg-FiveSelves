package com.anys34.server.domain.file.presentation.dto;

import lombok.Getter;

@Getter
public class FileItem {
    private String fileName;

    public FileItem(String fileName) {
        this.fileName = fileName;
    }
}
