# Week 9, Day 1 Queries
1. *How do you make a circle in CSS?*
   - `border-radius: 50%;`
2. *What is Z-index?*
   - **the stack order of elements**: greater stack order element comes in front of element with lower stack order and only works for positioned items or flex items
   - when two elements overlap and no z-index is specified, last positioned element in HTML code shows on top
3. *What is a Vendor Prefix and What is it's Purpose?*
   - adding prefixes to experimental/nonstandard CSS properties and JS API's to prevent experiments from being relied upon and breaking developer's code
   - allows developers to change browser configurations "behind a flag" to test upcoming features
4. *What is the difference between CSS Grid and Flexbox?*
   - the flex layout works in one-dimension: either row or column while the grid layout works in two-dimensions: rows and coulumns at the same time
   - **content-out** (flex: content determines how much space each item takes)  vs **layout-in** (grid: content is placed into layout already created)
5. *How might you Speed Up a Slow App?*
   - **Lighthouse**: automated tool for improving quality of web pages by running audits for performance, accessibility, progressive web apps, SEO, etc.
      - asses various performance and usability metrics over a weak simulated 3G connection
      - performance is focused on the user's perception of speed (how quickly items show up on screen)
      - making sure app has no logged errors, deprecated APIs, accessibility over HTTPS, application cache is valid, if geo-location access is requested, or images are displayed with correct aspect ratio
6. *What is CRUD?*
   - **create, read, update, and delete**: basic functions of funtionality that a model must have to be complete
   - *REST Enviroments*: corresponds to POST, GET, PUT, and DELETE HTTP methods
   - Apps consist of 3 parts: an API, a database, and UI
7. *What is OOP?*
   - **Object-oriented Programming**: modeling a system as a collection of objects where each object represents a particular aspect of the system
   - Objects contain methods and data and  provides a public interface for other code to use but also maintains its own private, internal state
      - **Class**: create abstract definitions representing the types of objects wanted in the system; a template for creating concrete objects of that type
      - **Constructor**: special function creates instance of a class
      - **Inheritance**: represent shared properties between classes
      - **Encapsulation**: making a clear division between the object's public interface and private internal state; change internal implementation of object without affecting all code that uses it
 