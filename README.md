# Gyanu Notes

Educational platform for students in Nepal.

## How to Update Notes

All notes content is stored in `content.js`. To add or update notes:

1. Open `content.js` in VS Code
2. Find the class and subject you want to edit
3. Add or modify content in HTML format
4. Save the file
5. Refresh the website

### Example:

```javascript
"Class 10": {
    "Mathematics": {
        title: "Class 10 Mathematics",
        description: "Complete mathematics notes",
        topics: [
            {
                title: "Chapter 1: Real Numbers",
                content: `
                    <h2>Real Numbers</h2>
                    <p>Your content here...</p>
                `
            }
        ]
    }
}