# Anonymous Confession API

Drop your loved ones a confession anonymously!!! Let them know they are loved!

1. **Add Confession**

   ```sh
   /api/postConfession


2. **Get Your Confession**

   ```sh
   /api/getConfession

### Request Body

- roll_no (string): The roll number of the person you want to send the confession.
- confession (string): The confession text submitted by the user.
    

### Response

Upon a successful execution, the server responds with a status code of 200 and a JSON object containing the following fields:

- roll_no: The roll number of the user.
- confession: The confession text submitted by the user.
- _id: The unique identifier for the confession entry.
    

The response will be in JSON format with the following schema:

```
 json
{
    "roll_no": "25bec069",
    "confession": "This is how you post data to the api",
    "_id": "664fa4ea2b940ca1bbcc147e",
    "__v": 0
}

 
