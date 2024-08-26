package com.anys34.server.domain.post.domain;

import com.anys34.server.domain.user.domain.User;
import com.anys34.server.domain.user.facade.UserFacade;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PostService {
    private final UserFacade userFacade;
    private final PostRepository postRepository;

    @Transactional
    public Long create(PostSaveRequest request) {
        User currentUser = userFacade.getCurrentUser();
        return postRepository.save(request.toEntity(currentUser)).getId();
    }

    public List<PostResponse> list() {
        return postRepository.findAll().stream()
                .map(PostResponse::new)
                .toList();
    }
}
