"use strict";(self.webpackChunkjavabrains_bootcamp=self.webpackChunkjavabrains_bootcamp||[]).push([[5643],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=r,b=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return t?n.createElement(b,i(i({ref:a},c),{},{components:t})):n.createElement(b,i({ref:a},c))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4450:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const o={},i="Java Basic Data Types",s={unversionedId:"java-backend-bootcamp/java-basics/basic-data-types",id:"java-backend-bootcamp/java-basics/basic-data-types",title:"Java Basic Data Types",description:"Java has two types of data types: primitive and non-primitive.",source:"@site/docs/java-backend-bootcamp/java-basics/basic-data-types.md",sourceDirName:"java-backend-bootcamp/java-basics",slug:"/java-backend-bootcamp/java-basics/basic-data-types",permalink:"/java-backend-bootcamp/docs/java-backend-bootcamp/java-basics/basic-data-types",draft:!1,editUrl:"https://github.com/koushikkothagal/java-backend-bootcamp/tree/main/website/docs/java-backend-bootcamp/java-basics/basic-data-types.md",tags:[],version:"current",frontMatter:{},sidebar:"javaBackendBootcamp",previous:{title:"Java Basics",permalink:"/java-backend-bootcamp/docs/java-basics"},next:{title:"Java Operators",permalink:"/java-backend-bootcamp/docs/java-backend-bootcamp/java-basics/java-operators"}},p={},l=[{value:"Primitive Data Types",id:"primitive-data-types",level:2},{value:"Non-Primitive Data Types",id:"non-primitive-data-types",level:2},{value:"Example",id:"example",level:2},{value:"Wrapper classes",id:"wrapper-classes",level:2}],c={toc:l};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"java-basic-data-types"},"Java Basic Data Types"),(0,r.kt)("p",null,"Java has two types of data types: primitive and non-primitive."),(0,r.kt)("h2",{id:"primitive-data-types"},"Primitive Data Types"),(0,r.kt)("p",null,"Primitive data types are the most basic data types in Java. They include:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"int: The int data type is used to store whole numbers (integers). It occupies 4 bytes (32 bits) of memory and has a range of -2147483648 to 2147483647.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"double: The double data type is used to store decimal numbers (floating-point numbers). It occupies 8 bytes (64 bits) of memory and has a range of approximately +/- 5.0 x 10^-324 to +/- 1.8 x 10^308.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"float: The float data type is used to store decimal numbers (floating-point numbers). It occupies 4 bytes (32 bits) of memory and has a range of approximately +/- 1.4 x 10^-45 to +/- 3.4 x 10^38.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"long: The long data type is used to store whole numbers (integers). It occupies 8 bytes (64 bits) of memory and has a range of -9223372036854775808 to 9223372036854775807.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"short: The short data type is used to store whole numbers (integers). It occupies 2 bytes (16 bits) of memory and has a range of -32768 to 32767.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"byte: The byte data type is used to store whole numbers (integers). It occupies 1 byte (8 bits) of memory and has a range of -128 to 127.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"char: The char data type is used to store a single character. It occupies 2 bytes (16 bits) of memory and can store any Unicode character.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"boolean: The boolean data type can only store two values: true or false. It is used to represent true/false conditions."))),(0,r.kt)("h2",{id:"non-primitive-data-types"},"Non-Primitive Data Types"),(0,r.kt)("p",null,"Non-primitive data types are also known as reference data types. They include:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"String: A string is a sequence of characters. The String class is used to create and manipulate strings."),(0,r.kt)("li",{parentName:"ol"},"Array: An array is a collection of similar data types. Each element in an array is accessed by its index."),(0,r.kt)("li",{parentName:"ol"},"Class: A class is a blueprint for creating objects (a particular data structure), providing initial values for state (member variables or attributes), and implementations of behavior (member functions or methods)."),(0,r.kt)("li",{parentName:"ol"},"Interface: An interface is a collection of abstract methods. A class that implements an interface must implement all its methods."),(0,r.kt)("li",{parentName:"ol"},"Enum: An enum is a special data type that allows the programmer to define a set of named values.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class DataTypes {\n    public static void main(String[] args) {\n        int x = 5;\n        double y = 3.14;\n        float z = 2.718f;\n        long w = 1234567890L;\n        short v = 32767;\n        byte u = 127;\n        char c = \'A\';\n        boolean b = true;\n\n        String str = "Hello World";\n        int[] nums = {1, 2, 3, 4, 5};\n        String[] names = {"John", "Mary", "Bob"};\n    }\n}\n')),(0,r.kt)("p",null,"It's important to choose the appropriate data type for your variables, as this can affect the memory usage and performance of your program. For example, using a ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," data type instead of a ",(0,r.kt)("inlineCode",{parentName:"p"},"double")," can save memory if the precision of the decimal numbers is not a concern, but it may also introduce rounding errors."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"While non-primitive data types such as ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Class"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Interface"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Enum")," are not considered primitive data types, they are still considered core or fundamental data types in Java and are built-in to the language.")),(0,r.kt)("p",null,"In addition, when declaring variables of non-primitive data types, they are actually references to objects, not the objects themselves."),(0,r.kt)("p",null,"For example, when declaring a ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String myString = "Hello World";\n')),(0,r.kt)("p",null,'The variable "myString" is actually a reference to the String object "Hello World", not the object itself.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Understand the difference between a primitive and its corresponding non-primitive wrapper class. For example, the int data type has a corresponding non-primitive wrapper class called Integer. The wrapper class provides additional methods for working with the primitive data type.")),(0,r.kt)("h2",{id:"wrapper-classes"},"Wrapper classes"),(0,r.kt)("p",null,"Wrapper classes in Java are used to convert primitive data types into objects. All primitive types (e.g. int, float, boolean) have a corresponding wrapper class (e.g. Integer, Float, Boolean). The wrapper classes are found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"java.lang")," package and are used to perform operations that are not possible with primitive data types."),(0,r.kt)("p",null,"Each wrapper class has a constructor that takes a single argument, which is the primitive data type value. For example, to convert an ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," to an ",(0,r.kt)("inlineCode",{parentName:"p"},"Integer"),", you can use the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int i = 10;\nInteger intWrapper = new Integer(i);\n")),(0,r.kt)("p",null,"The wrapper classes also provide methods that can be used to perform operations on the wrapped value. For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Integer")," class provides methods such as ",(0,r.kt)("inlineCode",{parentName:"p"},"intValue()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"compareTo()"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"valueOf()")," to perform operations such as converting the wrapped value to a primitive ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),", comparing two ",(0,r.kt)("inlineCode",{parentName:"p"},"Integer")," objects, and converting a ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," to an ",(0,r.kt)("inlineCode",{parentName:"p"},"Integer"),"."),(0,r.kt)("p",null,"Wrapper classes are also useful when working with collections, because collections can only store objects and not primitive data types. Wrapper classes also provide additional functionality such as autoboxing and unboxing which allows to automatically convert between primitive and wrapper classes without the need of explicit conversion."))}m.isMDXComponent=!0}}]);