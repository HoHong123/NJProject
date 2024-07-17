# DuckDock - Rules
## Business logic
* 클라이언트와 서버가 통신 데이터는 컨트롤러에서 각 작업을 진행한다. (DTO 체크)
* 서버와 데이터베이스의 통신 데이터는 서비스에서 유효성을 체크한다. (DAO 체크)

## Request & Response
* Request를 하면 반드시 Response가 돌아온다.
* Response에는 반드시 status 코드와 상태 메시지가 있어야 한다.
* Response에 Body가 있는 경우, Body 내부 값은 반드시 디폴트 값이 들어가도록 한다.
* 서버에서 Body값이 Null일 경우에는 status에 오류임을 명시하며 디폴트 값으로 반환한다.


