let wasmInstance;

// Initialize the WebAssembly module
async function initWasm() {
    try {
        const teavm = await TeaVM.wasm.load('./classes.wasm');  // Using relative path with ./
        wasmInstance = teavm;  // Store the TeaVM instance instead of raw wasm instance
        console.log('WebAssembly module loaded successfully');
        console.log('Available exports:', Object.keys(wasmInstance.instance.exports));
    } catch (error) {
        console.error('Failed to load WebAssembly module:', error);
        throw error; // Re-throw the error so init() can catch it
    }
}

// Function to add two numbers using WebAssembly
function callWasmAdd(a, b) {
    if (!wasmInstance) {
        throw new Error('WebAssembly module not initialized');
    }
    
    // Look for the function in the exports with the exact export name
    const addFunction = wasmInstance.instance.exports.addNumbers;
    
    if (typeof addFunction !== 'function') {
        throw new Error('Failed to find addNumbers function. Available functions: ' + 
                       Object.keys(wasmInstance.instance.exports).join(', '));
    }
    return addFunction(a, b);
}

// Initialize the WebAssembly module when the page loads
initWasm(); 