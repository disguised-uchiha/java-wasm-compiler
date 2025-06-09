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
   git clone <repository-url>
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

[Add your license information here] 