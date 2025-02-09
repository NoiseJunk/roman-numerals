const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
    console.error('Please provide a component name');
    process.exit(1);
}

const componentDir = path.join(__dirname, '..', 'src', 'components');

// Create components directory if it doesn't exist
if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir);
}

const componentContent = `import React from 'react';

function ${componentName}() {
    return (
        <div className="${componentName.toLowerCase()}">
            
        </div>
    );
}

export default ${componentName};
`;

const componentPath = path.join(componentDir, `${componentName}.js`);

fs.writeFileSync(componentPath, componentContent);

console.log(`Component ${componentName} created successfully!`); 