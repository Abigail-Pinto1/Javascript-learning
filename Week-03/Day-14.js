/*
textContent, innerHTML, attributes, classList, styles
Content Manipulation:
Property	Description	             Example
textContent	Gets/sets text content (safe)	element.textContent = 'Hello'
innerHTML	Gets/sets HTML content (unsafe)	element.innerHTML = '<span>Hi</span>'
innerText	Gets visible text (slow)	element.innerText
outerHTML	Gets/sets element with HTML	element.outerHTML

Attribute Methods:
Method	        Description	                           Example
getAttribute()	Get attribute value	element.getAttribute('src')
setAttribute()	Set attribute value	element.setAttribute('src', 'img.jpg')
removeAttribute()	Remove attribute	element.removeAttribute('disabled')
hasAttribute()	Check attribute existence	element.hasAttribute('id')

ClassList Methods:
Method	    Description	                        Example
add()	    Add class(es)	element.classList.add('active')
remove()	Remove class(es)	element.classList.remove('hidden')
toggle()	Toggle class	element.classList.toggle('open')
contains()	Check class	element.classList.contains('active')
replace()	Replace class	element.classList.replace('old', 'new')

Style Manipulation:
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.style.display = 'none';
element.style.transform = 'rotate(45deg)';

*/

console.log("=".repeat(50));
console.log("DOM MANIPULATION - DAY 14");
console.log("=".repeat(50));

const contentDisplay = document.getElementById('content-display');
const contentOutput = document.getElementById('content-output');

function updateContentOutput(message) {
    contentOutput.innerHTML = `<strong>writing</strong> ${message}`;
}

// textContent - safe, no HTML parsing
document.getElementById('btn-textcontent').addEventListener('click', function() {
    contentDisplay.textContent = 'This is textContent. <strong>HTML tags</strong> are not rendered!';
    updateContentOutput('textContent set. HTML tags are treated as plain text.');
    console.log('textContent set:', contentDisplay.textContent);
});

// innerHTML - renders HTML
document.getElementById('btn-innerhtml').addEventListener('click', function() {
    contentDisplay.innerHTML = 'This is <strong>innerHTML</strong>. <em>HTML tags</em> are <span style="color: #48bb78;">rendered</span>!';
    updateContentOutput('innerHTML set. HTML tags are rendered!');
    console.log('innerHTML set:', contentDisplay.innerHTML);
});

// Append content
document.getElementById('btn-append').addEventListener('click', function() {
    contentDisplay.innerHTML += ' <span style="color: #9f7aea;">✨ Appended content!</span>';
    updateContentOutput('Content appended to existing content');
    console.log('Content appended');
});

// Reset content
document.getElementById('btn-reset-content').addEventListener('click', function() {
    contentDisplay.innerHTML = '<strong>Hello World!</strong> This is the <em>original</em> content. <span style="color: #4299e1;">Learn DOM manipulation.</span>';
    updateContentOutput('Content reset to original');
    console.log('Content reset');
});

// LIST MANIPULATION
console.log("\n--- CLASS LIST MANIPULATION ---");

const styleBox = document.getElementById('style-box');
const styleContent = document.getElementById('style-content');
const stylePreview = document.getElementById('style-preview');
const styleOutput = document.getElementById('style-output');

function updateStyleOutput(message) {
    styleOutput.innerHTML = `<strong>PAINT</strong> ${message}`;
}

// Add class
document.getElementById('btn-add-class').addEventListener('click', function() {
    styleBox.classList.add('highlight');
    styleBox.classList.add('purple');
    updateStyleOutput('Added "highlight" and "purple" classes');
    console.log('Classes added:', styleBox.classList);
});

// Remove class
document.getElementById('btn-remove-class').addEventListener('click', function() {
    styleBox.classList.remove('highlight');
    styleBox.classList.remove('purple');
    updateStyleOutput(' Removed "highlight" and "purple" classes');
    console.log('Classes removed:', styleBox.classList);
});

// Toggle class
document.getElementById('btn-toggle-class').addEventListener('click', function() {
    styleBox.classList.toggle('success');
    styleBox.classList.toggle('warning');
    const hasSuccess = styleBox.classList.contains('success');
    updateStyleOutput(`🔄 Toggled classes. Success: ${hasSuccess ? 'ON' : 'OFF'}`);
    console.log('Classes toggled:', styleBox.classList);
});

// Change color
document.getElementById('btn-change-color').addEventListener('click', function() {
    const colors = ['#4299e1', '#48bb78', '#fc8181', '#9f7aea', '#f687b3', '#ed8936'];
    const currentColor = stylePreview.style.backgroundColor;
    const currentIndex = colors.indexOf(currentColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    const newColor = colors[nextIndex];
    
    stylePreview.style.backgroundColor = newColor;
    stylePreview.textContent = newColor;
    updateStyleOutput(`Color changed to: ${newColor}`);
    console.log('Color changed to:', newColor);
});

// Change size
document.getElementById('btn-change-size').addEventListener('click', function() {
    const sizes = ['100px', '120px', '150px', '80px', '200px'];
    const currentSize = stylePreview.style.width || '100px';
    const currentIndex = sizes.indexOf(currentSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    const newSize = sizes[nextIndex];
    
    stylePreview.style.width = newSize;
    stylePreview.style.height = newSize;
    updateStyleOutput(`Size changed to: ${newSize}`);
    console.log('Size changed to:', newSize);
});

// Reset style
document.getElementById('btn-reset-style').addEventListener('click', function() {
    styleBox.className = 'demo-box';
    stylePreview.style.backgroundColor = '';
    stylePreview.style.width = '100px';
    stylePreview.style.height = '100px';
    stylePreview.textContent = 'Preview';
    updateStyleOutput('🔄 Styles reset to default');
    console.log('Styles reset');
});