title: 'CAP Theorem Explained with Real-World Examples'
date: 2025-04-20
disqusId: cap-theorem-with-example
categories:
- Notes
tags:
- system design
- ai edited
language: en
toc: true
cover: 'https://images.unsplash.com/photo-1722215365223-b912b6628ade?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
excerpt: 'CAP theorem explained in plain terms'
---

**CAP Theorem** states that in a distributed system (like databases or cloud services), you can only guarantee **two out of three** properties at once:

###  **Consistency (C)**
    
All nodes see the same (latest) data at the same time.
        
📌 **Example: Online banking system**

*   When you transfer money, your balance should update instantly across all devices and branches.
    
*   If consistency is enforced, you might experience a brief delay during network issues because the system won’t allow outdated or conflicting balances.
    

💡 **Trade-off:** If the system prioritizes **Consistency**, transactions may be temporarily blocked until all servers agree on the correct balance.

        
###  **Availability (A)**
    
Every request gets a response, even if some nodes fail.

📌 **Example: Google Search or Social Media Feeds**

*   When you Google something, it _always_ gives you results - even if some servers are slow or unavailable.
    
*   Similarly, on Instagram, you can browse your feed even if new posts take a few seconds to appear.
    

💡 **Trade-off:** Prioritizing **Availability** means sometimes you might see slightly outdated data. For example, if your Instagram likes count isn’t instantly accurate, but the app keeps working.
        
###  **Partition Tolerance (P)**
    
The system keeps working even if network links break between nodes.
        
📌 **Example: E-commerce website during a sale**

*   Suppose Amazon’s servers are spread across multiple locations, and during Black Friday, one data center loses connectivity.
    
*   If the system is partition tolerant, it will keep processing purchases from available servers instead of shutting down.
    

💡 **Trade-off:** If the system prioritizes **Partition Tolerance**, it might temporarily allow duplicate orders or inconsistent product availability (showing "in stock" when it's actually sold out).
        


### **Real-World Tradeoffs**

Most modern distributed systems choose **AP (Availability + Partition Tolerance)** because network failures are inevitable. However, financial systems like banks prefer **CP (Consistency + Partition Tolerance)** to ensure transaction accuracy.


#### **1\. CA (Consistency + Availability)**

*   Sacrifices Partition Tolerance
    
*   **Example**: A single-database e-commerce site (like a small online store).
    
    *   C✅: All users see the same product stock.
        
    *   A✅: Always available during normal operation.
        
    *   P❌: Site crashes if the database server fails.
        

#### **2\. CP (Consistency + Partition Tolerance)**

*   Sacrifices Availability
    
*   **Example**: A stock trading app.
    
    *   C✅: All traders see real-time, accurate prices (no stale data).
        
    *   P✅: Survives network issues (trades pause but don’t corrupt i.e., selling the same stock twice at different prices).
        
    *   A❌: Delays orders during outages.
        

#### **3\. AP (Availability + Partition Tolerance)**

*   Sacrifices Consistency
    
*   **Example**: Social media (Facebook/Instagram).
    
    *   A✅: Always lets you post, even during outages.
        
    *   P✅: Works globally across spotty networks.
        
    *   C❌: You might see outdated likes/comments temporarily.
