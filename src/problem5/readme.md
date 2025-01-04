# API Service Documentation

## Overview

This module provides an API service for a score board application that displays the top 10 user scores and allows authorized users to update their scores.

## Features

1. **Display Scores**: Shows the top 10 user scores.
2. **Update Scores**: Allows users to submit scores.
3. **Security**: Prevents unauthorized users from submitting scores.

## API Endpoints

### 1. Get Top Scores

- **Endpoint**: `/api/scores`
- **Method**: `GET`
- **Description**: Retrieves the top 10 scores from the score board.
- **Response**:
  - `200 OK`: Returns an array of scores.
  - `500 Internal Server Error`: If the server encounters an issue.

### 2. Submit Score

- **Endpoint**: `/api/scores`
- **Method**: `POST`
- **Description**: Allows authorized users to submit a new score.
- **Request Body**:
  ```json
  {
    "userId": "string",
    "score": "number"
  }