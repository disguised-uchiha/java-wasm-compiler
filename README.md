# Java to WebAssembly Compiler

This project demonstrates how to compile Java code to WebAssembly using TeaVM. It provides a simple example of running Java code in the browser through WebAssembly.

## Prerequisites

- Java 11 or higher
- Maven 3.6 or higher
- A modern web browser that supports WebAssembly

## Project Structure

```
.
├── src/
│   └── main/
│       ├── java/        # Java source files
│       └── resources/
│           └── wasm/    # Web resources (HTML, JS)
├── pom.xml             # Maven configuration
└── README.md
```

## Building the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/harshboricha/java-wasm-compiler.git
   cd java-wasm-compiler
   ```

2. Build the project using Maven:
   ```bash
   mvn clean package
   ```

This will:
- Compile the Java code
- Generate WebAssembly output
- Copy web resources to the output directory

## Running the Project

After building, you can run the project in two ways:

### Option 1: Using a Local Web Server

1. Navigate to the generated output directory:
   ```bash
   cd target/generated/wasm
   ```

2. Start a local web server. You can use Python's built-in server:
   ```bash
   # Python 3
   python -m http.server 8080
   
   # Python 2
   python -m SimpleHTTPServer 8080
   ```

3. Open your web browser and navigate to:
   ```
   http://localhost:8080
   ```

### Option 2: Using an IDE

If you're using an IDE like IntelliJ IDEA:
1. Open the project
2. Right-click on `src/main/resources/wasm/index.html`
3. Select "Open in Browser"

## Development

- The main Java code is located in `src/main/java`
- Web resources (HTML, JavaScript) are in `src/main/resources/wasm`
- The project uses TeaVM version 0.11.0 for WebAssembly compilation

## Troubleshooting

If you encounter any issues:
1. Ensure you have Java 11 or higher installed
2. Verify Maven is properly installed and configured
3. Check that your browser supports WebAssembly
4. Clear your browser cache if you see outdated results

## License

MIT License

Copyright (c) 2024 Harsh Boricha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 