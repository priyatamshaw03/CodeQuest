import {db} from "@/config/db";
import { ExerciseTable , CourseChaptersTable} from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";

const DATA =
[
  {
    "courseId": 7,
    "exerciseId": "install-java-setup",
    "exerciseName": "Install Java Setup",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>Welcome to your Java adventure! Every great programmer begins by preparing their tools.</p>\n<p>Java is one of the most popular programming languages used for building applications, games, and enterprise systems.</p>\n<p>Before writing Java programs, developers must install the Java Development Kit (JDK).</p>\n<p>The JDK contains the tools needed to compile and run Java programs.</p>\n<p>One important tool inside the JDK is the Java compiler.</p>\n<p>The compiler converts Java source code into bytecode that computers understand.</p>\n<p>Another tool is the Java Runtime Environment which executes compiled programs.</p>\n<p>After installing Java, developers can write programs in files that end with <code>.java</code>.</p>\n<p>These files contain classes and methods that define program behavior.</p>\n<p>Java programs usually start with a class definition.</p>\n<p>The program execution begins from the <code>main</code> method.</p>\n<p>Understanding this structure helps you write your first Java program.</p>\n<p>Your first mission is to prepare the basic Java program structure.</p>\n</body>",
      "task": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>Create a Java class named <code>Main</code>.</p>\n<p>Inside the class, add the main method structure.</p>\n<p>The main method should follow the format <code>public static void main(String[] args)</code>.</p>\n</body>",
      "hint": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>A Java program always starts with a class.</p>\n<p>The main method is written like this:</p>\n<p><code>public static void main(String[] args) { }</code></p>\n</body>",
      "starterCode": {
        "/Main.java": "public class Main {\n\n\n\n}"
      },
      "regex": "public\\s+static\\s+void\\s+main",
      "output": "Java program structure created",
      "hintXp": 30
    }
  },
  {
    "courseId": 7,
    "exerciseId": "first-hello-world",
    "exerciseName": "First Hello World",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>Congratulations! Your Java environment is ready.</p>\n<p>Now it's time to write the classic first program every programmer creates.</p>\n<p>This program prints a simple message on the screen.</p>\n<p>In Java, text is displayed using the <code>System.out.println()</code> command.</p>\n<p>This command prints a line of text in the console.</p>\n<p>Developers often start with a Hello World program.</p>\n<p>This confirms the compiler and runtime are working correctly.</p>\n<p>The message is placed inside quotation marks.</p>\n<p>Java then displays the text exactly as written.</p>\n<p>This small program is the first milestone in learning Java.</p>\n<p>Once you understand this, you can create more complex programs.</p>\n<p>Your mission is to write the first Hello World program.</p>\n</body>",
      "task": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>Add Java code that prints <code>Hello World</code>.</p>\n<p>Use the command <code>System.out.println()</code> inside the main method.</p>\n</body>",
      "hint": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>The print command looks like this:</p>\n<p><code>System.out.println(\"Hello World\");</code></p>\n</body>",
      "starterCode": {
        "/Main.java": "public class Main {\n\n    public static void main(String[] args) {\n\n        \n\n    }\n\n}"
      },
      "regex": "System\\.out\\.println\\(\"Hello World\"\\)",
      "output": "Hello World",
      "hintXp": 35
    }
  },
  {
    "courseId": 7,
    "exerciseId": "java-compiler-run",
    "exerciseName": "Java Compiler Run",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>Now you will learn how Java programs are executed.</p>\n<p>Java code does not run directly like some scripting languages.</p>\n<p>Instead, it must first be compiled.</p>\n<p>The Java compiler translates source code into bytecode.</p>\n<p>This bytecode runs on the Java Virtual Machine.</p>\n<p>The compiler command is usually <code>javac</code>.</p>\n<p>For example: <code>javac Main.java</code>.</p>\n<p>This creates a compiled file called <code>Main.class</code>.</p>\n<p>After compilation, you run the program using the <code>java</code> command.</p>\n<p>The JVM executes the compiled bytecode.</p>\n<p>This system allows Java programs to run on many platforms.</p>\n<p>Your mission is to print a message to confirm the program runs.</p>\n</body>",
      "task": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>Add code that prints <code>Java Program Running</code>.</p>\n<p>Use the print command inside the main method.</p>\n</body>",
      "hint": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>Use the same print method used earlier.</p>\n<p><code>System.out.println(\"Java Program Running\");</code></p>\n</body>",
      "starterCode": {
        "/Main.java": "public class Main {\n\n    public static void main(String[] args) {\n\n        \n\n    }\n\n}"
      },
      "regex": "System\\.out\\.println\\(\"Java Program Running\"\\)",
      "output": "Java Program Running",
      "hintXp": 30
    }
  },
  {
    "courseId": 7,
    "exerciseId": "print-text",
    "exerciseName": "Print Text",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>Now that you know how Java programs run, let's practice printing text.</p>\n<p>Displaying information is one of the most common tasks in programming.</p>\n<p>Java uses the <code>System.out.println()</code> method for printing lines.</p>\n<p>The text you want to display is written inside quotation marks.</p>\n<p>Each time the method runs, the message appears in the console.</p>\n<p>The word <code>println</code> means print line.</p>\n<p>This means the cursor moves to the next line after printing.</p>\n<p>Developers use this to show program output clearly.</p>\n<p>You can print messages, numbers, or results.</p>\n<p>This command is one of the most used tools in Java.</p>\n<p>Your mission is to display a new message.</p>\n<p>Complete the program to show the correct text.</p>\n</body>",
      "task": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>Add a print command that displays <code>I am learning Java</code>.</p>\n<p>Use the <code>System.out.println()</code> method.</p>\n</body>",
      "hint": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>Example format:</p>\n<p><code>System.out.println(\"Text here\");</code></p>\n</body>",
      "starterCode": {
        "/Main.java": "public class Main {\n\n    public static void main(String[] args) {\n\n        \n\n    }\n\n}"
      },
      "regex": "System\\.out\\.println\\(\"I am learning Java\"\\)",
      "output": "I am learning Java",
      "hintXp": 30
    }
  },
  {
    "courseId": 7,
    "exerciseId": "multiple-print-lines",
    "exerciseName": "Multiple Print Lines",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>Level up! Now you will print multiple lines in Java.</p>\n<p>Programs often display several messages.</p>\n<p>Each message can be printed using a new print command.</p>\n<p>Because we use <code>println</code>, each message appears on a new line.</p>\n<p>This helps keep program output organized.</p>\n<p>Developers frequently print instructions or results.</p>\n<p>You can call the print method many times in a program.</p>\n<p>Each call prints one line.</p>\n<p>This technique is useful for creating structured output.</p>\n<p>Understanding this helps build larger programs.</p>\n<p>Your mission is to print two different lines.</p>\n<p>Use two separate print commands.</p>\n</body>",
      "task": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>Add two print commands.</p>\n<p>The first should print <code>Java is powerful</code>.</p>\n<p>The second should print <code>Java is everywhere</code>.</p>\n</body>",
      "hint": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>Example:</p>\n<p><code>System.out.println(\"First line\");</code></p>\n<p><code>System.out.println(\"Second line\");</code></p>\n</body>",
      "starterCode": {
        "/Main.java": "public class Main {\n\n    public static void main(String[] args) {\n\n        \n\n\n    }\n\n}"
      },
      "regex": "Java is powerful[\\s\\S]*Java is everywhere",
      "output": "Java is powerful\nJava is everywhere",
      "hintXp": 35
    }
  },
  {
    "courseId": 7,
    "exerciseId": "fix-hello-world",
    "exerciseName": "Fix Hello World",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>Final mission unlocked! It's time to become a Java code detective.</p>\n<p>Even experienced programmers make mistakes.</p>\n<p>Sometimes a semicolon is missing.</p>\n<p>Other times the syntax of a statement is incorrect.</p>\n<p>Java requires precise syntax to compile programs.</p>\n<p>If something is wrong, the compiler shows an error.</p>\n<p>Developers must carefully inspect the code.</p>\n<p>Fixing these errors is called debugging.</p>\n<p>Debugging helps programs run correctly.</p>\n<p>Every developer improves by practicing debugging.</p>\n<p>Your mission is to repair the broken Hello World program.</p>\n<p>Fix the error so the correct message appears.</p>\n</body>",
      "task": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>The Java program contains a syntax mistake.</p>\n<p>Fix the code so it correctly prints <code>Hello World</code>.</p>\n</body>",
      "hint": "<body style=\"font-family:Arial;line-height:1.6;\">\n<p>The correct command should look like:</p>\n<p><code>System.out.println(\"Hello World\");</code></p>\n</body>",
      "starterCode": {
        "/Main.java": "public class Main {\n\n    public static void main(String[] args) {\n\n        System.out.println(\"Hello World\")\n\n    }\n\n}"
      },
      "regex": "System\\.out\\.println\\(\"Hello World\"\\);",
      "output": "Hello World",
      "hintXp": 35
    }
  }
]

export async function GET(req: NextRequest) {
    for (const item of DATA) {
        await db.insert(ExerciseTable).values({
            courseId: item.courseId,
            chapterId: item.chapterId,
            exerciseId: item.exerciseId, 
            exercisesContent: item.exercisesContent,
            exerciseName: item.exerciseName,
            
        });
    }

    return NextResponse.json({ message: "Success" });
}
