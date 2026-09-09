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