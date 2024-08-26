package com.anys34.server.domain.file.service;

import com.azure.storage.blob.BlobAsyncClient;
import com.azure.storage.blob.BlobContainerAsyncClient;
import com.azure.storage.blob.models.ParallelTransferOptions;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.io.IOException;
import java.nio.ByteBuffer;

@RequiredArgsConstructor
@Service
public class BlobStorageService {
    private final BlobContainerAsyncClient blobContainerAsyncClient;
    int blockSize = 10 * 1024;
    int numBuffers = 5;

    public String upload(Resource resource) throws IOException {
        BlobAsyncClient blobAsyncClient = blobContainerAsyncClient.getBlobAsyncClient(resource.getFilename());
        Flux<ByteBuffer> data = Flux.just(ByteBuffer.wrap(resource.getInputStream().readAllBytes()));
        ParallelTransferOptions parallelTransferOptions = new ParallelTransferOptions(numBuffers, blockSize, null);
        blobAsyncClient.upload(data,parallelTransferOptions, true).block();
        return blobAsyncClient.getBlobUrl();
    }

    public byte[] download(String fileName) {
        BlobAsyncClient blobAsyncClient = blobContainerAsyncClient.getBlobAsyncClient(fileName);
        return blobAsyncClient.download().blockLast().array();
    }
}
