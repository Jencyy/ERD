# 🍽️ Restaurant Management System ERD Project

## 📝 Project Description
Designed and implemented an **Entity Relationship Diagram (ERD)** for a comprehensive restaurant management system. This ERD defines relationships between key entities to streamline database design and enhance the efficiency of managing restaurant operations.

## 📊 Key Entities
- **👨‍🍳 Staff**: Represents the employees working in different roles at the restaurant.
- **📋 StaffRole**: Defines the roles and responsibilities of each staff member.
- **👥 Customer**: Represents customers who visit or make bookings at the restaurant.
- **🍽️ Table**: Defines the tables available for customer bookings.
- **📝 Booking**: Tracks reservations made by customers for dining.
- **🛒 Order**: Manages the orders placed by customers.
- **🍔 Menu**: Lists the available food and beverages.
- **📦 OrderMenuItem**: Represents the items included in an order.
- **🌿 Ingredient**: Tracks the ingredients used in menu items.
- **🥘 IngredientType**: Categorizes ingredients (e.g., vegetables, dairy).

## 🔗 Relationships
- **StaffRole** is related to **Staff** (One-to-Many)
- **Customer** makes **Booking** and places **Order** (One-to-Many)
- **Booking** is linked to **Table** (One-to-One)
- **Order** contains **OrderMenuItem** (One-to-Many)
- **Menu** includes various **OrderMenuItem** (One-to-Many)
- **MenuItem** uses **Ingredient** (Many-to-Many)

## 🛠️ Tools Used
- **ERD Design**: [ERDPlus](https://erdplus.com/) or [Draw.io](https://app.diagrams.net/)
- **Technologies**: Data Modeling, Database Design

## 📈 ERD Diagram
![ERD Diagram](path_to_your_image.png)

## 🚀 Outcome
By designing this ERD, the data flow between entities is clearly defined, improving database management and system functionality for the restaurant management project.
