package com.anys34.server.domain.file.presentation;

import com.anys34.server.domain.file.presentation.dto.SuccessfulOperation;
import com.anys34.server.domain.file.service.BlobStorageService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/file")
public class FileController {
    private final BlobStorageService blobStorageService;

    @PostMapping(value = "/upload", produces = MediaType.APPLICATION_JSON_VALUE)
    public Object handleFileUpload(@RequestParam("file") MultipartFile multipartFile) throws IOException {
        String url = blobStorageService.upload(multipartFile.getResource());
        return new ResponseEntity<>(url, HttpStatus.OK);
    }

    @GetMapping(value = "/download/{fileName}", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public @ResponseBody byte[] handleFileDownload(HttpServletResponse response, @PathVariable String fileName) throws IOException {
        response.addHeader("Content-Disposition", "attachment; filename="+fileName);
        return blobStorageService.download(fileName);
    }
}
