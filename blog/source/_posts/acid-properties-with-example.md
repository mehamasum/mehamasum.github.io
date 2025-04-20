title: 'ACID Properties Explained with Real-World Examples'
date: 2025-04-20
disqusId: acid-properties-with-example
categories:
- Notes
tags:
- system design
- ai edited
language: en
toc: true
cover: 'https://images.unsplash.com/photo-1644952354935-0bc0d25a9996?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
excerpt: 'This note explains ACID properties in databases through practical examples'
---


This note explains ACID properties in databases through practical examples.

#### **1\. Atomicity (All or Nothing)**

**What it means**: A transaction must complete entirely or fail entirely – no partial updates.  
**Example**:

*   _Bank Transfer_: Moving $100 from Alice to Bob requires:
    
    1.  Deduct $100 from Alice’s account
        
    2.  Add $100 to Bob’s account
        
*   **If the system crashes after Step 1**, the transaction rolls back. Alice’s $100 is restored, and Bob gets nothing.
    

#### **2\. Consistency (Follow the Rules)**

**What it means**: Every transaction must leave the database in a valid state (enforcing rules).  
**Examples**:

*   _No Negative Balances_:
    
    *   If Alice has $50, a request to withdraw $50 is successful, but a request to withdraw $100 is **rejected** (violates the "balance ≥ 0" rule).
        
*   _Foreign Keys_:
    
    *   Can’t create an "Order" for a "Customer" who doesn’t exist.
        

#### **3\. Isolation (No Interference Between Transactions)**

**What it means**: Concurrent transactions must not affect each other.  
**Problem Examples**:

*   _Lost Update_:
    
    *   Two cashiers try to update a product’s stock (100 units left):
        
        *   Cashier A reads 100, sells 10 → writes 90.
            
        *   Cashier B reads 100 (before A finishes), sells 20 → writes 80.
            
        *   Final stock: 80 (Cashier A’s update is lost). But the correct stock should be 70.
            
    *   **Solution**: Isolation locks the stock during updates.
        
*   _Dirty Read_:
    
    *   Transaction A updates a price but hasn’t committed yet.
        
    *   Transaction B reads the uncommitted price (which might roll back).
        
    *   **Solution**: Isolation ensures only committed data is visible.
        

#### **4\. Durability (Survive Crashes)**

**What it means**: Once committed, data is permanent.  
**Examples**:

*   _Power Failure_:
    
    *   After you confirm an order (commit), the database:
        
        1.  Writes to a **transaction log** on disk.
            
        2.  Updates the main database.
            
    *   Even if power fails after Step 1, the log ensures your order isn’t lost.
        
*   _Distributed Systems_:
    
    *   Data is replicated across multiple servers. If one crashes, others retain the committed data.
        

* * *

### **Key Takeaways**

*   **Atomicity**: Bank transfers succeed or fail completely.
    
*   **Consistency**: No invalid data (negative balances, broken relationships).
    
*   **Isolation**: Prevents concurrency bugs (lost updates, dirty reads).
    
*   **Durability**: Your online order won’t vanish if the system crashes.

