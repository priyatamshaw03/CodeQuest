import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/config/db';
import { CourseChaptersTable } from '@/config/schema';

export async function GET(req: NextRequest) {
 const DATA =
[
{
"id": 1,
"name": "Introduction to Java",
"desc": "Learn what Java is and why it is one of the most popular programming languages.",
"exercises": [
{"name": "Install Java Setup", "slug": "install-java-setup", "xp": 20, "difficulty": "easy"},
{"name": "First Hello World", "slug": "first-hello-world", "xp": 25, "difficulty": "easy"},
{"name": "Java Compiler Run", "slug": "java-compiler-run", "xp": 20, "difficulty": "easy"},
{"name": "Print Text", "slug": "print-text", "xp": 15, "difficulty": "easy"},
{"name": "Multiple Print Lines", "slug": "multiple-print-lines", "xp": 20, "difficulty": "easy"},
{"name": "Fix Hello World", "slug": "fix-hello-world", "xp": 25, "difficulty": "easy"}
]
},
{
"id": 2,
"name": "Java Syntax Basics",
"desc": "Understand Java syntax, statements, and basic structure.",
"exercises": [
{"name": "Java Statement Fix", "slug": "java-statement-fix", "xp": 20, "difficulty": "easy"},
{"name": "Semicolon Debug", "slug": "semicolon-debug", "xp": 20, "difficulty": "easy"},
{"name": "Code Block Builder", "slug": "code-block-builder", "xp": 25, "difficulty": "easy"},
{"name": "Java Comment Writer", "slug": "java-comment-writer", "xp": 15, "difficulty": "easy"},
{"name": "Syntax Error Finder", "slug": "syntax-error-finder", "xp": 25, "difficulty": "medium"},
{"name": "Structure Detective", "slug": "structure-detective", "xp": 30, "difficulty": "medium"}
]
},
{
"id": 3,
"name": "Variables",
"desc": "Learn how to store data using variables.",
"exercises": [
{"name": "Create Integer Variable", "slug": "create-integer-variable", "xp": 20, "difficulty": "easy"},
{"name": "String Variable Builder", "slug": "string-variable-builder", "xp": 20, "difficulty": "easy"},
{"name": "Multiple Variables", "slug": "multiple-variables", "xp": 25, "difficulty": "easy"},
{"name": "Variable Value Change", "slug": "variable-value-change", "xp": 20, "difficulty": "easy"},
{"name": "Variable Output", "slug": "variable-output", "xp": 25, "difficulty": "easy"},
{"name": "Variable Debugger", "slug": "variable-debugger", "xp": 30, "difficulty": "medium"}
]
},
{
"id": 4,
"name": "Data Types",
"desc": "Understand Java data types like int, double, char, and boolean.",
"exercises": [
{"name": "Integer Practice", "slug": "integer-practice", "xp": 20, "difficulty": "easy"},
{"name": "Double Value Builder", "slug": "double-value-builder", "xp": 20, "difficulty": "easy"},
{"name": "Boolean Checker", "slug": "boolean-checker", "xp": 20, "difficulty": "easy"},
{"name": "Char Creator", "slug": "char-creator", "xp": 20, "difficulty": "easy"},
{"name": "Data Type Fixer", "slug": "data-type-fixer", "xp": 25, "difficulty": "medium"},
{"name": "Type Detective", "slug": "type-detective", "xp": 25, "difficulty": "medium"}
]
},
{
"id": 5,
"name": "Operators",
"desc": "Learn arithmetic, comparison, and logical operators.",
"exercises": [
{"name": "Addition Program", "slug": "addition-program", "xp": 20, "difficulty": "easy"},
{"name": "Comparison Checker", "slug": "comparison-checker", "xp": 25, "difficulty": "easy"},
{"name": "Logical Operator Test", "slug": "logical-operator-test", "xp": 25, "difficulty": "medium"},
{"name": "Increment Practice", "slug": "increment-practice", "xp": 20, "difficulty": "easy"},
{"name": "Operator Puzzle", "slug": "operator-puzzle", "xp": 30, "difficulty": "medium"},
{"name": "Math Challenge", "slug": "math-challenge", "xp": 30, "difficulty": "medium"}
]
},
{
"id": 6,
"name": "Conditional Statements",
"desc": "Control program flow using if, else, and switch.",
"exercises": [
{"name": "If Condition Builder", "slug": "if-condition-builder", "xp": 25, "difficulty": "easy"},
{"name": "If Else Program", "slug": "if-else-program", "xp": 30, "difficulty": "medium"},
{"name": "Number Checker", "slug": "number-checker", "xp": 25, "difficulty": "easy"},
{"name": "Grade Calculator", "slug": "grade-calculator", "xp": 30, "difficulty": "medium"},
{"name": "Switch Statement", "slug": "switch-statement", "xp": 25, "difficulty": "medium"},
{"name": "Condition Debugger", "slug": "condition-debugger", "xp": 30, "difficulty": "medium"}
]
},
{
"id": 7,
"name": "Loops",
"desc": "Repeat tasks using for, while, and do-while loops.",
"exercises": [
{"name": "For Loop Counter", "slug": "for-loop-counter", "xp": 25, "difficulty": "easy"},
{"name": "While Loop Printer", "slug": "while-loop-printer", "xp": 25, "difficulty": "easy"},
{"name": "Number Pattern", "slug": "number-pattern", "xp": 30, "difficulty": "medium"},
{"name": "Even Number Finder", "slug": "even-number-finder", "xp": 30, "difficulty": "medium"},
{"name": "Loop Break Fix", "slug": "loop-break-fix", "xp": 25, "difficulty": "medium"},
{"name": "Loop Challenge", "slug": "loop-challenge", "xp": 35, "difficulty": "medium"}
]
},
{
"id": 8,
"name": "Arrays",
"desc": "Store multiple values in arrays.",
"exercises": [
{"name": "Create Array", "slug": "create-array", "xp": 20, "difficulty": "easy"},
{"name": "Array Access", "slug": "array-access", "xp": 20, "difficulty": "easy"},
{"name": "Array Loop Print", "slug": "array-loop-print", "xp": 25, "difficulty": "easy"},
{"name": "Array Sum", "slug": "array-sum", "xp": 30, "difficulty": "medium"},
{"name": "Max Value Finder", "slug": "max-value-finder", "xp": 30, "difficulty": "medium"},
{"name": "Array Debugger", "slug": "array-debugger", "xp": 30, "difficulty": "medium"}
]
},
{
"id": 9,
"name": "Methods",
"desc": "Create reusable blocks of code using methods.",
"exercises": [
{"name": "Create Method", "slug": "create-method", "xp": 20, "difficulty": "easy"},
{"name": "Method With Parameter", "slug": "method-with-parameter", "xp": 25, "difficulty": "medium"},
{"name": "Return Value Method", "slug": "return-value-method", "xp": 30, "difficulty": "medium"},
{"name": "Calculator Method", "slug": "calculator-method", "xp": 30, "difficulty": "medium"},
{"name": "Method Caller", "slug": "method-caller", "xp": 25, "difficulty": "easy"},
{"name": "Method Debugger", "slug": "method-debugger", "xp": 30, "difficulty": "medium"}
]
},
{
"id": 10,
"name": "Object Oriented Programming",
"desc": "Understand classes and objects in Java.",
"exercises": [
{"name": "Create Class", "slug": "create-class", "xp": 25, "difficulty": "easy"},
{"name": "Create Object", "slug": "create-object", "xp": 25, "difficulty": "easy"},
{"name": "Class Property", "slug": "class-property", "xp": 25, "difficulty": "easy"},
{"name": "Method Inside Class", "slug": "method-inside-class", "xp": 30, "difficulty": "medium"},
{"name": "Object Interaction", "slug": "object-interaction", "xp": 30, "difficulty": "medium"},
{"name": "OOP Debugger", "slug": "oop-debugger", "xp": 30, "difficulty": "medium"}
]
},
{
"id": 11,
"name": "Inheritance",
"desc": "Reuse code using inheritance and extend classes.",
"exercises": [
{"name": "Create Parent Class", "slug": "create-parent-class", "xp": 25, "difficulty": "easy"},
{"name": "Child Class Builder", "slug": "child-class-builder", "xp": 30, "difficulty": "medium"},
{"name": "Method Override", "slug": "method-override", "xp": 30, "difficulty": "medium"},
{"name": "Super Keyword", "slug": "super-keyword", "xp": 25, "difficulty": "medium"},
{"name": "Inheritance Fix", "slug": "inheritance-fix", "xp": 30, "difficulty": "medium"},
{"name": "Inheritance Challenge", "slug": "inheritance-challenge", "xp": 35, "difficulty": "medium"}
]
},
{
"id": 12,
"name": "Exception Handling",
"desc": "Handle runtime errors using try, catch, and finally.",
"exercises": [
{"name": "Try Catch Builder", "slug": "try-catch-builder", "xp": 25, "difficulty": "easy"},
{"name": "Divide Error Fix", "slug": "divide-error-fix", "xp": 25, "difficulty": "easy"},
{"name": "Custom Exception", "slug": "custom-exception", "xp": 30, "difficulty": "medium"},
{"name": "Finally Block", "slug": "finally-block", "xp": 20, "difficulty": "easy"},
{"name": "Exception Debugger", "slug": "exception-debugger", "xp": 30, "difficulty": "medium"},
{"name": "Error Handling Challenge", "slug": "error-handling-challenge", "xp": 40, "difficulty": "medium"}
]
}
]


const promises = DATA.map(item =>
  db.insert(CourseChaptersTable).values({
    courseId: 7,
    desc: item?.desc,
    exercises: JSON.stringify(item.exercises),
    name: item.name,
    chapterId: item.id,
  })
);
try {
  await Promise.all(promises);
  return NextResponse.json("Success");
} catch (err) {
  console.error(err);
  return NextResponse.json({ error: String(err) }, { status: 500 });
}}
