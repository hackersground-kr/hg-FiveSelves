FROM openjdk:17-slim

ENV TZ=Asia/Seoul

ARG JAR_FILE=build/libs/*.jar

COPY ${JAR_FILE} app.jar

ENV URL=jdbc:mysql://59.28.151.212:3306/five

ENTRYPOINT ["java", "-jar", "app.jar"]
