```mermaid
erDiagram
    USERS ||--o{ POSTS : "creates"
    USERS ||--o{ LIKES : "likes"
    POSTS ||--|| TOPICS : "belongs to"
    POSTS ||--o{ LIKES : "is liked by"
    USERS {
        int userId PK
        string name
        string email
        string password
        bool loginStatus
    }
    POSTS {
        int postID PK
        string title
        string body
        date date
        int userID FK
        int topicID FK
    }
    TOPICS {
        int topicID PK
        string name
    }
    LIKES {
        int likeID PK
        string userID FK
        string postID FK
    }
