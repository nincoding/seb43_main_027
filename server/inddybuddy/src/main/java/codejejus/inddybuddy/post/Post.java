package codejejus.inddybuddy.post;

import codejejus.inddybuddy.file.File;
import codejejus.inddybuddy.game.Game;
import codejejus.inddybuddy.global.audit.Timestamped;
import codejejus.inddybuddy.member.entity.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Post extends Timestamped {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postId;
    @Column(nullable = false, length = 100)
    private String title;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;
    @Column(nullable = false)
    private Long views = 0L;
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game game;

    // TODO : 일대다 매핑을 위해 수정 필요
//    @ManyToOne
//    @JoinColumn(name = "file_id")
//    private File file;
//    @OneToMany(mappedBy = "post")
//    private List<File> fileList;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private PostTag postTag = PostTag.RECRUITMENT;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private PostStatus postStatus = PostStatus.POST_REGISTRATION;

    // Todo : 글 제목, 글 내용, 멤버, 첨부 파일(들), 게임 이름?
    @Builder
    public Post(String title, String content, Member member) {
        this.title = title;
        this.content = content;
        this.member = member;

    }

    public enum PostTag {

        RECRUITMENT("모집"),
        BUG("버그"),
        WALKTHROUGH("공략"),
        CHIT_CHAT("수다"),
        INFORMATION("정보"),
        FAN_ART("팬아트"),
        QUESTION("질문"),
        SHOWING_OFF("자랑하기"),
        REVIEW("리뷰"),
        ETC("기타");

        @Getter
        private final String status;

        PostTag(String status) {
            this.status = status;
        }
    }

    public void updatePostStatus(PostStatus postStatus) {
        this.postStatus = postStatus;
    }

    public enum PostStatus {
        POST_REGISTRATION("게시글 등록"),
        POST_DELETED("게시글 삭제");

        @Getter
        private final String status;
        PostStatus(String status) {this.status = status;}
    }

    // for 캡슐화, 응집도, 재사용성. 서비스 계층과 컨트롤러 계층에서 사용 가능
    // Todo : file과 imgURl 추가 필요
    public void updatePost(String title, String content, PostTag postTag) {
        if(title != null) {
            this.title = title;
        }
        if(content != null) {
            this.content = content;
        }
        if(postTag != null) {
            this.postTag = postTag;
        }
    }
}
