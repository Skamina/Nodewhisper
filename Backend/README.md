# Nodewhisper Backend

This is the backend service for the Nodewhisper blockchain forensics platform.  
It provides API endpoints and business logic for token tracing, wallet clustering, activity monitoring, and report generation.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Available Commands](#available-commands)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

### Prerequisites

- Python 3.8+ (Python 3.10+ recommended)
- pip (Python package manager)
- (Optional) virtualenv for isolated environments

### Setup

1. **Clone the repository and navigate to the backend directory:**
    ```bash
    git clone https://github.com/Skamina/Nodewhisper.git
    cd Nodewhisper/Backend
    ```

2. **(Recommended) Create and activate a virtual environment:**
    ```bash
    python -m venv venv
    # On Linux/macOS:
    source venv/bin/activate
    # On Windows:
    venv\Scripts\activate
    ```

3. **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4. **Run the backend server:**
    ```bash
    python main.py
    ```
    By default, the Flask app should run at http://127.0.0.1:5000

---

## Available Commands

- `python main.py` — Start the backend server.
- To install new dependencies:  
  `pip install <package>`  
  `pip freeze > requirements.txt`
- For development mode (auto-reloads on code changes):
    ```bash
    export FLASK_ENV=development  # On Linux/macOS
    set FLASK_ENV=development     # On Windows
    python main.py
    ```

---

## Project Structure

```
Backend/
├── app/          # Core application logic and modules
├── routes/       # API routes and Flask Blueprints
├── main.py       # Entry point for the backend server
├── requirements.txt  # Python dependencies
```

---

## Contributing

- Please follow Python and Flask best practices.
- Add new features or routes in the appropriate directory (`app/` or `routes/`).
- Document your code and update this README as needed.
- Submit pull requests with a clear description of your changes.

---

## License

MIT License — open to use, improve, and repurpose with attribution.
