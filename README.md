# ABOUTME
## Building the app MERN to introduce myself

```
root
|---app.js              # App entry point
|---|---routes          # Express route controllers for all the endpoints of the app
|---|---models          # Database models
|---|---services        # All the business logic is here
|---|---persistency     # Work with database
|---|---config          # Environment variables and configuration related stuff
|---|---|---|---db      # Connect Database
|---|---|---|---env     # Config enviroment variable to hide sensitive data
|---|---|---|---logs    # Handle logs and the place to store logs
|---|---node_modules    # Middleware packages
```


```
body-parser: Để giải quyết những HTTP POST request trong express.js từ version 4 trở lên, chúng ta cần mudule middleware body-parser. Body parser trích xuất toàn bộ phần body của request gửi đến và hiển thị chúng trên req.body
mongoose: là một thư viện ODM (Object Data Modeling) cho MongDB và Node.js, được sẻ dụng để chuyển các object (đối tượng) trong code thành những biểu diễn của những object này trong MongoDB.
morgan: là mộtn công cụ logging tuyệt vời khi làm việc với HTTP server trong Node.js, là một middleware cho phép chúng ta dễ dàng log những request, error ra console.
```