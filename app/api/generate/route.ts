import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { prompt, includeAnimations, responsiveDesign, typescript } = await request.json();

    // Simulate AI generation (replace with actual AI API call)
    const generatedCode = generateReactCode(prompt, {
      includeAnimations,
      responsiveDesign,
      typescript
    });

    return NextResponse.json({
      success: true,
      code: generatedCode,
      componentName: extractComponentName(prompt)
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to generate code' },
      { status: 500 }
    );
  }
}

function generateReactCode(
  prompt: string,
  options: { includeAnimations: boolean; responsiveDesign: boolean; typescript: boolean }
): Record<string, string> {
  const componentName = extractComponentName(prompt);
  
  const mainComponent = `${
    options.typescript ? "import React from 'react';\n\n" : ""
  }export default function ${componentName}() {
  return (
    <div className="${options.responsiveDesign ? 'container mx-auto px-4 sm:px-6 lg:px-8' : 'container'}">
      <div className="${options.includeAnimations ? 'animate-fade-in' : ''}">
        <h1 className="text-4xl font-bold mb-4">${prompt}</h1>
        <p className="text-gray-600">Generated component based on your prompt</p>
      </div>
    </div>
  );
}`;

  return {
    [`components/${componentName}.${options.typescript ? 'tsx' : 'jsx'}`]: mainComponent,
    'tailwind.config.js': getTailwindConfig(options.includeAnimations),
    'package.json': getPackageJson()
  };
}

function extractComponentName(prompt: string): string {
  // Extract component name from URL or description
  if (prompt.includes('http')) {
    const domain = new URL(prompt).hostname.split('.')[0];
    return domain.charAt(0).toUpperCase() + domain.slice(1) + 'Clone';
  }
  return 'CustomComponent';
}

function getTailwindConfig(includeAnimations: boolean): string {
  return `module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {${
      includeAnimations
        ? `\n      animation: {\n        'fade-in': 'fadeIn 0.5s ease-in-out',\n      },\n      keyframes: {\n        fadeIn: {\n          '0%': { opacity: '0', transform: 'translateY(10px)' },\n          '100%': { opacity: '1', transform: 'translateY(0)' },\n        },\n      },`
        : ''
    }
    },
  },
  plugins: [],
};`;
}

function getPackageJson(): string {
  return JSON.stringify(
    {
      name: 'quickclone-generated',
      version: '1.0.0',
      dependencies: {
        react: '^18.2.0',
        'react-dom': '^18.2.0',
        next: '^14.0.0',
        tailwindcss: '^3.3.0'
      }
    },
    null,
    2
  );
}
